import { Info } from "@/components/info";
import { Programs } from "@/components/programs";
import { ProgramType } from "@/types";
import axios from "axios";

export default async function Home() {
  let programs: ProgramType[] = [];

  try {
    const response = await axios.get("https://api.moscow.mba/products");
    const allData = response.data;

    if (Array.isArray(allData)) {
      programs = allData
        .filter((program: ProgramType) => program.specializedSubjects.length === 1)
        .slice(0, 5);
    }
  } catch (error) {
    console.log("Ошибка при загрузке данных:", error);
  }

  return (
    <div className="container">
      <h3 className="title">Специализированные дисциплины</h3>

      {programs.length && <Programs programs={programs} />}

      <Info />
    </div>
  );
}
