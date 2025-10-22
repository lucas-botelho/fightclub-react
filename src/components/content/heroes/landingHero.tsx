
const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center" id="home">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left: text content (55% on md+) */}
                    <div className="w-full md:w-[55%] py-12 md:py-24 text-center md:text-left ">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark-title-primary mb-4">
                                FIGHT CLUB BJJ
                                <span className="block text-dark-title-secondary">Póvoa de Santa Iria</span>
                            </h1>
                            <p className="text-lg md:text-xl text-dark-text-primary mb-6 max-w-2xl">
                                Domina a arte do Jiu-Jitsu brasileiro com instrutores de alto nível.
                                <br />
                                Desenvolve força, disciplina e confiança nos tatames.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                                <button className="btn-hero">
                                    Torna-te Membro
                                </button>
                                <button className="btn-hero">
                                    Aula Experimental
                                </button>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs text-center md:text-left">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-dark-title-secondary">500+</div>
                                    <p className="text-dark-text-primarytext-sm">Alunos</p>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-dark-title-secondary">10+</div>
                                    <p className="text-dark-text-primarytext-sm">Anos</p>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-dark-title-secondary">50+</div>
                                    <p className="text-dark-text-primarytext-sm">Campeões</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: image (45% on md+) */}
                    <div className="w-full md:w-[45%] mt-8 md:mt-0">
                        <div
                            className="h-64 md:h-[70vh] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(/hero-bg.jpg)` }}
                        >
                            {/* subtle overlay for contrast */}
                            <div className="h-full w-full bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;