// import { Outlet } from "react-router-dom";
import Hero from "./components/content/heroes/landingHero";
import ClassesCard from "./components/content/cards/classesCard";
import Header from "./components/layout/header";
import { LandingSection } from "./components/layout/landingSection";
import MainTitle from "./components/content/text/mainTitle";
import SubTitle from "./components/content/text/subTitle";
import InstructorCard from "./components/content/cards/instructorCard";

export default function App() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <LandingSection>
          <MainTitle text="Aulas" />
          <SubTitle text="Descobre as nossas aulas de projetadas para todos os níveis e idades." />
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
        <LandingSection>
          <MainTitle text="Conhece os teus instrutores" />
          <SubTitle text="Aprende com instrutores de classe mundial, apaixonados por ensinar e dedicados ao teu crescimento." />
          <div className="mx-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
            <InstructorCard
              name="Fabio Dorea"
              belt="Faixa Preta"
              specialties={["Auto-defesa", "Fundamentos", "Competição"]}
              description="Mais de 30 anos de experiência. Campeão nacional, vice-campeão europeu e professor de natação. Fábio é o exemplo vivo da força do desporto na construção de comunidades mais fortes."
              titles={["Portugal Open"]}
            />
            <InstructorCard
              name="Maria Silva"
              belt="Faixa Roxa"
              specialties={["Técnicas Avançadas", "Estratégias de Luta"]}
              description="Com uma abordagem única ao ensino, Maria combina técnica e filosofia para ajudar os alunos a alcançarem o seu potencial máximo."
              titles={["Campeonato Nacional"]}
            />
            <InstructorCard
              name="Carlos Mendes"
              belt="Faixa Azul"
              specialties={["Defesa Pessoal", "Técnicas de Chão"]}
              description="Carlos é conhecido pela sua abordagem prática e eficaz ao ensino, ajudando os alunos a aplicarem técnicas em situações reais."
              titles={["Campeonato Regional"]}
            />

          </div>

        </LandingSection>
      </main >
    </>
  );
}
