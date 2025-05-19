
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUser } from "../../../../utils/contexts/UserContext";

export default function CustomLineChart({info}) {

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
      
      switch (info) {
        case 'lum':
          dateMap[dateStr][`sensor_${sensor.id}`] = reading.luminosity;
          break;
        case 'ph':
          dateMap[dateStr][`sensor_${sensor.id}`] = reading.ph;
          break;
        case 'temp':
          dateMap[dateStr][`sensor_${sensor.id}`] = reading.temperature;
          break;
        case 'batery':
          dateMap[dateStr][`sensor_${sensor.id}`] = reading.batery;
          break;
        default:
          dateMap[dateStr][`sensor_${sensor.id}`] = reading.luminosity; // Default case
      }
      // dateMap[dateStr][`sensor_${sensor.id}`] = reading.temperature;
    });
  });

  return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
};

const chartData = processChartData(userData.sensors);

    return (
        <div className='h-full w-full bg-white rounded-md' style={{ paddingLeft: 0 }}>
        <ResponsiveContainer width="99%" height="100%" className={"pt-2 rounded-md"} >
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
              <YAxis tick={{ fontSize: 12 }} domain={['dataMin', 'dataMax']} />
              <Tooltip 
                content={<CustomTooltip info={info} />}
              />
              
              {userData.sensors.map((sensor, index) => {
                const colors = ['#e64c6a', '#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
                const color = colors[index % colors.length];
                
                return (
                  <Line
                    key={sensor.id}
                    type="monotone"
                    dataKey={`sensor_${sensor.id}`}
                    name={`Sensor #${sensor.id}`}
                    stroke={color}
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                    dot={{ r: 3 }}
                    isAnimationActive={false}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
          </div>
    )
}

const CustomTooltip = ({ active, payload, label, info }) => {
  if (!active || !payload || !payload.length) return null;

  // Ajusta a data para o fuso horário local
  const localDate = new Date(label);
  localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());

  // Define o título baseado no tipo de informação
  const getInfoTitle = () => {
    switch(info) {
      case 'lum': return 'Luminosidade';
      case 'ph': return 'pH';
      case 'temp': return 'Temperatura';
      case 'batery': return 'Bateria';
      default: return 'Valor';
    }
  };

  return (
    <div className="bg-gray-950 p-4 border border-gray-200 rounded-lg shadow-lg">
      <p className="font-bold text-white">
        {localDate.toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center bg-gray-900 p-1">
            <div 
              className="w-1 h-6 mr-2 rounded-full " 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium text-white">
              {entry.name}:
            </span>
            <span className="text-sm font-semibold ml-1 text-white">
              {entry.value} {info === 'temp' ? '°C' : info === 'batery' || 'lum' ? '%'  : ''}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-500">
        {getInfoTitle()} dos sensores
      </p>
    </div>
  );
};