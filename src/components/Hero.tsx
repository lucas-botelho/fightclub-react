
const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/public/hero-bg.jpg)` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                        FIGHT CLUB BJJ
                        <span className="block text-dark-tile-secondary">ACADEMY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dark-text-primary mb-8 max-w-2xl mx-auto">
                        Domina a arte do Jiu-Jitsu brasileiro com instrutores de alto nível.<br />
                        Desenvolve força, disciplina e confiança nos tatames.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="btn-hero">
                            Torna-te Membro
                        </button>
                        <button className="btn-hero">
                            Aula Experimental
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
                        <div>
                            <div className="text-3xl font-bold text-dark-tile-secondary">500+</div>
                            <p className="text-gray-300">Alunos</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-dark-tile-secondary">10+</div>
                            <p className="text-gray-300">Anos</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-dark-tile-secondary">50+</div>
                            <p className="text-gray-300">Campeões</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-dark-tile-secondary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-dark-tile-secondary rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;