// import { Outlet } from "react-router-dom";
import Hero from "./components/content/heroes/landingHero";
import ClassesCard from "./components/content/cards/classesCard";
import Header from "./components/layout/header";
import { LandingSection } from "./components/layout/landingSection";

export default function App() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <LandingSection>
          <h2 className="font-semibold text-center text-6xl mb-4 text-dark-tile-secondary">Aulas</h2>
          <p className="text-xl md:text-2xl text-dark-text-primary mb-8 max-w-2xl mx-auto text-center">
            De iniciantes completos a competidores experientes, temos o programa perfeito para a tua jornada.
          </p>
          <div className="mx-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xl ">
            <ClassesCard
              title={"Gi"}
              description={"Perfect for beginners. Learn basic positions, escapes, and submissions in a supportive environment."}
              duration={"60 minutos"}
              schedule={"Mon, Wed, Fri - 6:00 PM"}
              svg={[
                <circle cx="12" cy="12" r="10"></circle>,
                <circle cx="12" cy="12" r="6"></circle>,
                <circle cx="12" cy="12" r="2"></circle>
              ]}
              whatYouWillLearn={["Fundamentos do Jiu-Jitsu",
                "Técnicas de defesa pessoal",
                "Posições básicas e avançadas",
                "Estratégias de competição",
                "Condicionamento físico",]}
            />

            <ClassesCard
              title={"No-Gi"}
              description={"High-intensity training for experienced practitioners. Complex techniques and live rolling."}
              duration={"60 minutos"}
              schedule={"Tue, Thu - 7:00 PM"}
              svg={[
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>,
                <circle cx="9" cy="7" r="4"></circle>,
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>,
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              ]}
              whatYouWillLearn={["Fundamentos do Jiu-Jitsu",
                "Técnicas de defesa pessoal",
                "Posições básicas e avançadas",
                "Estratégias de competição",
                "Condicionamento físico",]}
            />

            <ClassesCard
              title={"Kids"}
              description={"Fun and engaging classes for children ages 6-15. Focus on discipline, respect, and fitness."}
              duration={"60 minutos"}
              schedule={"Sat - 10:00 AM"}
              svg={[
                <circle cx="12" cy="12" r="10"></circle>,
                <circle cx="12" cy="12" r="6"></circle>,
                <circle cx="12" cy="12" r="2"></circle>
              ]}
              whatYouWillLearn={["Fundamentos do Jiu-Jitsu",
                "Técnicas de defesa pessoal",
                "Posições básicas e avançadas",
                "Estratégias de competição",
                "Condicionamento físico",]}
            />
          </div>

        </LandingSection>
      </main >
    </>
  );
}
