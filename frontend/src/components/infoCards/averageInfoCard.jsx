import PieWithNeedle from "./needleChart";
import { getAllReadingsAverage } from "../../utils/dashHelper";
import { useUser } from "../../utils/contexts/UserContext";

export default function AverageInfoCard({ info }) {
  const { userData } = useUser();

  // ⬇️ Atualizado para usar readings no lugar de sensors
  const average = getAllReadingsAverage(userData.sensorList, info);

  return (
    <div className="relative w-full h-[210px] flex flex-col items-center justify-center text-black rounded-md">
      <div className='w-full flex items-center justify-center text-xl font-bold'>
        Média de {info === "lum"
          ? "Luminosidade"
          : info === "temp"
          ? "Temperatura"
          : info === "batery"
          ? "Bateria"
          : info === "ph"
          ? "pH"
          : ""}
      </div>

      <PieWithNeedle average={average} info={info} />

      <div className="mr-3 flex items-end justify-center font-bold text-2xl w-full absolute bottom-5 ml-2">
        {average}
        {info === "lum" || info === "batery"
          ? "%"
          : info === "temp"
          ? "°C"
          : ""}
      </div>
    </div>
  );
}
