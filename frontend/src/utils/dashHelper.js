export const processChartData = (sensorList, readingList, info) => {
  const dateMap = {};

  sensorList.forEach(sensor => {
    const readings = readingList[sensor._id] || [];

    readings.forEach(reading => {
      const dateStr = new Date(reading.timestamp).toISOString().split('T')[0];

      if (!dateMap[dateStr]) {
        dateMap[dateStr] = {
          date: reading.timestamp,
          ...Object.fromEntries(sensorList.map(s => [`sensor_${s._id}`, null]))
        };
      }

      const key = `sensor_${sensor._id}`;
      switch (info) {
        case 'lum':
          dateMap[dateStr][key] = reading.luminosity;
          break;
        case 'ph':
          dateMap[dateStr][key] = reading.ph;
          break;
        case 'temp':
          dateMap[dateStr][key] = reading.temperature;
          break;
        case 'batery':
          dateMap[dateStr][key] = reading.battery;
          break;
        default:
          dateMap[dateStr][key] = reading.luminosity;
      }
    });
  });

  return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
};


export const processListData = (sensorList, readingList, info) => {
  const processedData = processChartData(sensorList, readingList, info);

  const allReadings = processedData.flatMap(dailyData => {
    const date = new Date(dailyData.date);

    return Object.entries(dailyData)
      .filter(([key]) => key.startsWith('sensor_'))
      .map(([sensorKey, value]) => ({
        date: date,
        sensorId: sensorKey.replace('sensor_', ''),
        value: value,
      }));
  });

  return allReadings;
};


export const getAllReadingsAverage = (sensorList, readingList, info) => {
  const allReadings = processListData(sensorList, readingList, info);

  if (!allReadings || allReadings.length === 0) return 0;

  const sum = allReadings.reduce((total, reading) => total + reading.value, 0);

  return (sum / allReadings.length).toFixed(2);
};


export const getDiferenceReadingVsAverage = (sensorList, readingList, info, value) => {
  const average = getAllReadingsAverage(sensorList, readingList, info);

  if (average === 0) return '0.00';

  return (((value - average) / average) * 100).toFixed(2);
};
