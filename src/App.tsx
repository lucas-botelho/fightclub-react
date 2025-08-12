// import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-4 flex flex-row justify-between items-center bg-dark-background/50 backdrop-blur-sm border-b">
        <div className="flex flex-row items-center gap-4">
          <img src="public/logo.jpg" alt="Fight Club BJJ Logo" className="h-10 w-auto " />
          <div className="text-dark-title-primary font-bold text-xl">FIGHT CLUB BJJ</div>
        </div>
        <nav className="flex flex-row gap-8 font-medium text-xl items-center">
          <div>Aulas</div>
          <div>Hórarios</div>
          <div>Mensalidades</div>
          <div>Professores</div>
          <button className="btn-header">Login</button>
        </nav>
      </header>

      <main >
        <Hero />
        <section className="mx-auto pt-32 pb-32 max-w-4xl">
          <h2 className="font-semibold text-center text-6xl mb-4 text-dark-tile-secondary">Aulas</h2>
          <p className="text-xl md:text-2xl text-dark-text-primary mb-8 max-w-2xl mx-auto text-center">
            De iniciantes completos a competidores experientes, temos o programa perfeito para a tua jornada.
          </p>
          <div className="grid grid-cols-3 gap-8 text-xl">
            <div className="p-8 rounded-lg bg-dark-tile-primary border border-solid border-[#333333] shadow-sm hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-tile-secondary/10 rounded-lg mb-4 group-hover:bg-dark-tile-secondary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-8 h-8 text-dark-tile-secondary">
                  <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-title-primary">Gi</h3>
              <p className="text-dark-text-primary">Perfect for beginners. Learn basic positions, escapes, and submissions in a supportive environment.</p>
              <div className="space-y-4 mb-4 mt-4">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-4 h-4 mr-2 text-dark-tile-secondary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  60 minutos
                </div>
                <div className="text-sm">
                  <strong className="text-dark-title-primary" >Horário:</strong> Mon, Wed, Fri - 6:00 PM
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-dark-tile-primary border border-solid border-[#333333] shadow-sm hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-tile-secondary/10 rounded-lg mb-4 group-hover:bg-dark-tile-secondary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-8 h-8 text-dark-tile-secondary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-title-primary">No-Gi</h3>
              <p className="text-dark-text-primary">High-intensity training for experienced practitioners. Complex techniques and live rolling.</p>

              <div className="space-y-4 mb-4 mt-4">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-4 h-4 mr-2 text-dark-tile-secondary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  60 minutos
                </div>
                <div className="text-sm">
                  <strong className="text-dark-title-primary" >Horário:</strong> Mon, Wed, Fri - 6:00 PM
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-dark-tile-primary border border-solid border-[#333333] shadow-sm hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-tile-secondary/10 rounded-lg mb-4 group-hover:bg-dark-tile-secondary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-8 h-8 text-dark-tile-secondary">
                  <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-title-primary">Kids</h3>
              <p className="text-dark-text-primary">Fun and engaging classes for children ages 6-15. Focus on discipline, respect, and fitness.</p>
              <div className="space-y-4 mb-4 mt-4">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-4 h-4 mr-2 text-dark-tile-secondary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  60 minutos
                </div>
                <div className="text-sm">
                  <strong className="text-dark-title-primary" >Horário:</strong> Mon, Wed, Fri - 6:00 PM
                </div>
              </div>
            </div>



          </div>

        </section>
        {/* <section
          className="relative flex items-center justify-center h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/public/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Fight Club BJJ</h1>
            <p className="text-lg">Treine com os melhores. Supere seus limites.</p>
          </div>
        </section> */}

        {/* <Outlet /> */}
      </main >

      {/* <footer>
        <div>
          © {new Date().getFullYear()} GrappleForge. All rights reserved.
        </div>
      </footer> */}
    </>
  );
}
