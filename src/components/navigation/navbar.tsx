import { useNavigate } from "react-router-dom"


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="flex flex-row gap-8 font-medium text-xl items-center">
            <div>Aulas</div>
            <div>Hórarios</div>
            <div>Mensalidades</div>
            <div>Professores</div>
            <button className="btn-header" onClick={() => navigate("/signup")}>Login</button>
        </nav>
    )

}