import {ClassType} from "./ClassType.tsx";
import InstructorType from "./InstructorType.tsx";

type ClassItem = {
  time: string;
  type: ClassType;
  instructor: InstructorType;
};

type Schedule = {
  [day: string]: ClassItem[];
};

const schedule: Schedule = {
  Segunda: [
    { time: "21:15 - 22:30", instructor: InstructorType.MAX_SENSEI, type: ClassType.BJJ },
  ],
  Terça: [
    { time: "12:00 - 13:00", instructor: InstructorType.FABIO_SENSEI, type: ClassType.BJJ },
    { time: "17:30 - 18:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INFANTIS },
    { time: "18:30 - 19:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INFANTIS },
    { time: "21:15 - 22:30", instructor: InstructorType.FABIO_SENSEI, type: ClassType.BJJ },
  ],
  Quarta: [
    { time: "18:30 - 19:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INICIADOS },
  ],
  Quinta: [
    { time: "06:15 - 07:15", instructor: InstructorType.FABIO_SENSEI, type: ClassType.BJJ },
    { time: "12:00 - 13:00", instructor: InstructorType.FABIO_SENSEI, type: ClassType.BJJ },
    { time: "18:30 - 19:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INFANTIS },
    { time: "21:30 - 22:30", instructor: InstructorType.FABIO_SENSEI, type: ClassType.BJJ },
  ],
  Sexta: [
    { time: "18:30 - 19:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INFANTIS },
    { time: "19:30 - 20:30", instructor: InstructorType.GONCALO_SENSEI, type: ClassType.BJJ_KIDS_INICIADOS_AND_ADULTS },
  ],
  Sábado: [],
  Domingo: [],
};

export default function WeeklySchedule() {
  const days = Object.keys(schedule);

  return (
    <div className="p-8 rounded-lg border border-solid border-[#333333] text-white">
      <div className="grid grid-cols-7 gap-4 text-sm">
        {days.map((day) => (
          <div key={day} className="rounded-lg border border-solid border-[#333333] p-3 shadow">
            <h3 className="text-lg font-semibold mb-2 text-center">{day}</h3>
            {schedule[day].length > 0 ? (
              schedule[day].map((cls, idx) => (
                <div key={idx} className="mb-3 border-b border-white-700 pb-1">
                  <p className="font-bold">{cls.time}</p>
                  <p>{cls.type}</p>
                  <span className="text-xs ">Mestre: {cls.instructor}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Sem Aulas</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
