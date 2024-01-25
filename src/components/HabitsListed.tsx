import { useEffect, useState} from "react";
import { api } from "../lib/axios";

interface Response {
  id_habit: number;
  title: string;
}

export function HabitsListed() {
  const [data, setData] = useState<Response[]>([]);

  useEffect(() => {
    getHabits();
  }, []);

  async function getHabits() {
    try {
      const response = await api.get("/list-habits");
      console.log(response.data);

      setData(response.data as Response[]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-10">
      {data.map((item, index) => {
        return(
        <text
          key={`${item.id_habit} ${index}`}
          className="pl-2 mt-3 text-white font-semibold text-base flex"
        >
          {item.title}
        </text>
        );
      })}
    </div>
  )
}
