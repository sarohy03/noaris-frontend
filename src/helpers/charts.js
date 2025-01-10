const processEmissionsData = (data, sellingPressurePercentage) => {
    // Convert data to a more usable structure (array of objects)
    const df = [...data];
  
    // Convert selling pressure percentage to a decimal
    const sellingPressureFactor = sellingPressurePercentage / 100;
  
    // Apply selling pressure to each column (except 'Months')
    const processedData = df.map(row => {
      const newRow = { ...row };
      Object.keys(row).forEach(key => {
        if (key !== 'Month') {
          newRow[key] = parseFloat(row[key]) * sellingPressureFactor;
        }
      });
      return newRow;
    });
  
    // Group by month and sum the emissions for each month
    const monthlySum = processedData.reduce((acc, row) => {
      const { Month, ...pools } = row;
      if (!acc[Month]) acc[Month] = { Month };
      Object.entries(pools).forEach(([pool, value]) => {
        acc[Month][pool] = (acc[Month][pool] || 0) + value;
      });
      return acc;
    }, {});
  
    // Convert the result into an array
    return Object.values(monthlySum);
  };
  const createEmissionsChart = (emissionsData, databaseData, sellingPressureSource, sellingPressure) => {
    // Get the list of pool names based on the selling pressure source
    let selectedPools = [];
    if (sellingPressureSource === "Circulation") {
      selectedPools = databaseData
        .filter(item => item.circulation === 'TRUE')
        .map(item => item.data_input);
    } else if (sellingPressureSource === "Investors") {
      selectedPools = databaseData
        .filter(item => item.is_investor === 'TRUE')
        .map(item => item.data_input);
    } else {
      // Default case: select all columns except 'Month'
      selectedPools = Object.keys(emissionsData[0]).filter(key => key !== 'Month');
    }
  
    // Filter emissions data to include only the selected pools
    const filteredEmissionsData = emissionsData.map(item => {
      const filteredItem = { Month: item.Month };
      selectedPools.forEach(pool => {
        if (item.hasOwnProperty(pool)) {
          filteredItem[pool] = item[pool];
        }
      });
      return filteredItem;
    });
  
    // Process emissions data with selling pressure
    const monthlySum = processEmissionsData(filteredEmissionsData, sellingPressure);
  
    return monthlySum;
  };
    