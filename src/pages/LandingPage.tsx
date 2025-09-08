import ClassesCard from "../components/content/cards/classesCard";
import InstructorCard from "../components/content/cards/instructorCard";
import Hero from "../components/content/heroes/landingHero";
import MainTitle from "../components/content/text/mainTitle";
import SubTitle from "../components/content/text/subTitle";
import LandingSection from "../components/layout/landingSection";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <LandingSection>
                <MainTitle text="Aulas" />
                <SubTitle text="Descobre as nossas aulas de projetadas para todos os níveis e idades." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl ">
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
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
                    <InstructorCard
                        name="Fabio Dorea"
                        belt="Faixa Preta"
                        specialties={["Auto-defesa", "Fundamentos", "Competição"]}
                        description="Mais de 30 anos de experiência. Campeão nacional, vice-campeão europeu e professor de natação. Fábio é o exemplo vivo da força do desporto na construção de comunidades mais fortes."
                        titles={["Portugal Open"]}
                        image="instructor.jpg"
                    />
                    <InstructorCard
                        name="Maria Silva"
                        belt="Faixa Roxa"
                        specialties={["Técnicas Avançadas", "Estratégias de Luta"]}
                        description="Com uma abordagem única ao ensino, Maria combina técnica e filosofia para ajudar os alunos a alcançarem o seu potencial máximo."
                        titles={["Campeonato Nacional"]}
                    />
                    <InstructorCard
                        name="Gonçalo Pinto"
                        belt="Faixa Castanha"
                        specialties={["Defesa Pessoal", "Técnicas de Chão"]}
                        description="Gonçalo é conhecido pela sua abordagem prática e eficaz ao ensino, ajudando os alunos a aplicarem técnicas em situações reais."
                        titles={["Campeonato Regional"]}
                        image="instructor1.jpg"

                    />

                </div>

            </LandingSection>
            <LandingSection>
                <MainTitle text="Junta-te a nós" />
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-xl my-8">
                    <div className="rounded-lg border border-solid border-[#333333] p-6 flex flex-col items-center hover-lift">
                        <h4 className="text-dark-title-primary font-bold mb-2">1 Treino por Semana</h4>
                        <div className="flex flex-row gap-1 items-baseline">
                            <h1 className="text-4xl font-bold text-dark-title-secondary">35</h1>
                            <h1 className="text-2xl font-bold text-dark-title-secondary">€</h1>
                            <h2 className="text-dark-text-primary mb-4">/mês</h2>
                        </div>
                        <h2 className=" text-center">Adequado para iniciantes de todas as idades e níveis de condicionamento físico</h2>
                        <ul className="list-none text-dark-text-primary space-y-2 text-lg my-4 ">
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Bom para iniciantes
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Todos os programas incluídos
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Sessões Open Mat
                            </li>
                        </ul>
                    </div>

                    <div className="relative rounded-lg border border-solid p-6 flex flex-col items-center hover-lift border-dark-title-secondary scale-105 ">
                        <div className="absolute -top-3 flex flex-row gap-2 items-center border rounded-full px-3 py-1 text-sm border-dark-title-secondary bg-dark-title-secondary text-dark-title-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star w-3.5 h-3.5"
                            >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            Mais Popular
                        </div>

                        <h4 className="text-dark-title-primary font-bold mb-2">Livre Trânsito</h4>
                        <div className="flex flex-row gap-1 items-baseline">
                            <h1 className="text-4xl font-bold text-dark-title-secondary">50</h1>
                            <h1 className="text-2xl font-bold text-dark-title-secondary">€</h1>
                            <h2 className="text-dark-text-primary mb-4">/mês</h2>
                        </div>
                        <h2 className="text-center">Melhor valor para atletas dedicados e de competição</h2>
                        <ul className="list-none text-dark-text-primary space-y-2 text-lg my-4 ">
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Aulas ilimitadas
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Treino de competição
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Descontos em equipamento
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Sessões Open Mat
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Oferta T-Shirt Fight Club BJJ
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border border-solid border-[#333333] p-6 flex flex-col items-center hover-lift relative">
                        <h4 className="text-dark-title-primary font-bold mb-2">2 Treinos por Semana</h4>
                        <div className="flex flex-row gap-1 items-baseline">
                            <h1 className="text-4xl font-bold text-dark-title-secondary">45</h1>
                            <h1 className="text-2xl font-bold text-dark-title-secondary">€</h1>

                            <h2 className="text-dark-text-primary mb-4">/mês</h2>

                        </div>
                        <h2 className="text-center">Plano para ficares em forma fisica e desenvolveres a tua técnica.</h2>
                        <ul className="list-none text-dark-ext-primary space-y-2 text-lg my-4 ">

                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Bom para todos os níveis
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Descontos em equipamento
                            </li>
                            <li className="before:content-['✔'] before:text-dark-title-secondary before:mr-2">
                                Sessões Open Mat
                            </li>
                        </ul>
                    </div>
                </div>

            </LandingSection>
        </>
    );
}
