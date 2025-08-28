export default function Header() {
    return <>
        <header className="fixed top-0 left-0 w-full z-50 p-4 flex flex-row justify-between items-center bg-dark-background/50 backdrop-blur-sm border-b">
            <div className="flex flex-row items-center gap-4">
                <img src="/logo.jpg" alt="Fight Club BJJ Logo" className="h-10 w-auto " />
                <div className="text-dark-title-primary font-bold text-xl">FIGHT CLUB BJJ</div>
            </div>
            <nav className="flex flex-row gap-8 font-medium text-xl items-center">
                <div>Aulas</div>
                <div>Hórarios</div>
                <div>Mensalidades</div>
                <div>Professores</div>
                <button className="btn-header">Login</button>
            </nav>
        </header></>
}