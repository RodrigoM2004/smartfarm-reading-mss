
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUser } from "../../../../utils/contexts/UserContext";

export default function CustomLineChart() {

const { userData } = useUser()

const processChartData = (sensors) => {
  const dateMap = {};

  // Para cada sensor
  sensors.forEach(sensor => {
    // Para cada leitura do sensor
    sensor.readings.forEach(reading => {
      const dateStr = new Date(reading.data).toISOString().split('T')[0];
      
      if (!dateMap[dateStr]) {
        dateMap[dateStr] = {
          date: reading.data,
          // Inicializa todos os sensores como null (serão preenchidos se tiverem dados)
          ...Object.fromEntries(sensors.map(s => [`sensor_${s.id}`, null]))
        };
      }
      
      // Adiciona o valor deste sensor para esta data
      dateMap[dateStr][`sensor_${sensor.id}`] = reading.luminosity;
    });
  });

  return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
};

const chartData = processChartData(userData.sensors);

    return (
        <div className='h-full w-full bg-white rounded-md' style={{ paddingLeft: 0 }}>
        <ResponsiveContainer width="99%" height="100%" className={"   pt-2 rounded-md"}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right:20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
          tickFormatter={(date) => {
            // Ajusta para o fuso horário local antes de formatar
            const localDate = new Date(date);
            localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
            return localDate.toLocaleDateString('pt-BR');
          }}
        />
              <YAxis tick={{ fontSize: 12 }} domain={['dataMin - 1', 'dataMax']} />
              <Tooltip 
                contentStyle={{
                  fontSize: '14px',
                  padding: '5px 10px'
                }}
                labelFormatter={(date) => {
            const localDate = new Date(date);
            localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
            return localDate.toLocaleDateString('pt-BR');
          }}
              />
              
              {userData.sensors.map((sensor, index) => {
                const colors = ['#162456', '#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
                const color = colors[index % colors.length];
                
                return (
                  <Line
                    key={sensor.id}
                    type="monotone"
                    dataKey={`sensor_${sensor.id}`}
                    name={`Sensor #${sensor.id}`}
                    stroke={color}
                    activeDot={{ r: 6 }}
                    dot={{ r: 2 }}
                    isAnimationActive={false}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
          </div>
    )
}