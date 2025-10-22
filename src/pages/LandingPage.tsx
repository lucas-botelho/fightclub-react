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
            <LandingSection id="classes">
                <MainTitle text="Aulas" />
                <SubTitle text="Descobre as nossas aulas de projetadas para todos os níveis e idades." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl ">
                    <ClassesCard
                        title={"Gi"}
                        description={"Treino técnico e estratégico com o quimono tradicional, focado no controlo e nas finalizações."}
                        schedule={[
                            "Terças e Quintas: 12:15 - 13:30",
                            "Sextas: 19:15 - 20:30",
                            "Segundas, Terças, Quintas: 21:15 - 22:30",
                        ]}
                        svg={[
                        ]}
                        whatYouWillLearn={[
                            "Controlo e pegadas com o quimono",
                            "Transições entre posições com uso do Gi",
                            "Técnicas de submissão e defesa clássicas",
                            "Estratégias específicas de competição Gi",
                            "Gestão de energia e postura durante o combate",
                        ]}
                    />

                    <ClassesCard
                        title={"No-Gi"}
                        description={"Treino dinâmico sem quimono, com foco na agilidade, aderência e transições rápidas."}
                        schedule={[
                            "Terças e Quintas: 12:15 - 13:30",
                            "Sextas: 19:15 - 20:30",
                            "Segundas, Terças, Quintas: 21:15 - 22:30",
                        ]}
                        svg={[]}
                        whatYouWillLearn={[
                            "Controlo corporal e aderência sem quimono",
                            "Técnicas de finalização com foco em velocidade",
                            "Defesas e raspagens adaptadas ao No-Gi",
                            "Estratégias de luta baseadas em movimento e timing",
                            "Melhoria da força funcional e resistência",
                        ]}

                    />

                    <ClassesCard
                        title={"Kids"}
                        description={"Aulas divertidas e educativas que desenvolvem disciplina, coordenação e confiança nas crianças."}
                        schedule={[
                            "Terças: 18:30 - 19:30 e 19:30 - 20:30",
                            "Sextas: 18:30 - 19:30",
                        ]}
                        svg={[

                        ]}
                        whatYouWillLearn={[
                            "Fundamentos do Jiu-Jitsu de forma divertida",
                            "Técnicas simples de defesa pessoal",
                            "Coordenação motora e equilíbrio",
                            "Trabalho em equipa e respeito pelos colegas",
                            "Disciplina, autoconfiança e espírito desportivo",
                        ]}

                    />
                </div>
            </LandingSection>
            <LandingSection id="instructors">
                <MainTitle text="Conhece os teus instrutores" />
                <SubTitle text="Aprende com instrutores de classe mundial, apaixonados por ensinar e dedicados ao teu crescimento." />
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
                    <InstructorCard
                        name="Fabio Dorea"
                        belt="Faixa Preta"
                        specialties={["Auto-defesa", "Fundamentos", "Competição"]}
                        description="Com mais de 30 anos de experiência. Campeão nacional, vice-campeão europeu e professor de natação. Fábio é o exemplo vivo da força do desporto."
                        titles={["ibjjf", "fpjjb", "sjjif "]}
                        image="instructor0.jpg"
                    />
                    <InstructorCard
                        name="Max Fersan"
                        belt="Faixa Preta"
                        specialties={["Técnicas Avançadas", "Estratégias de Luta"]}
                        description="Com uma abordagem única ao ensino, Max combina técnica e filosofia para ajudar os alunos a alcançarem o seu potencial máximo."
                        titles={["ibjjf", "fpjjb", "sjjif "]}
                        image="instructor2.jpg"
                    />
                    <InstructorCard
                        name="Gonçalo Pinto"
                        belt="Faixa Castanha"
                        specialties={["Defesa Pessoal", "Técnicas de Chão"]}
                        description="Gonçalo é conhecido pela sua abordagem prática e eficaz ao ensino, ajudando os alunos a aplicarem técnicas em situações reais."
                        titles={["ibjjf", "fpjjb", "sjjif "]}
                        image="instructor1.jpg"
                    />

                </div>

            </LandingSection>
            <LandingSection id="membership">
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
