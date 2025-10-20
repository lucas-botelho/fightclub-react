import { useNavigate } from "react-router-dom"


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="flex flex-row gap-8 font-medium text-xl items-center">
            <a href="#classes">Aulas </a>
            <a href="#membership">Mensalidades</a>
            <a href="#instructors">Professores</a>
            <button className="btn-header" onClick={() => navigate("/signup")}>Login</button>
        </nav>
    )

}