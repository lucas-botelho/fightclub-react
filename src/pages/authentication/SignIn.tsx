import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("Email state updated:", email);
    }, [email]);


    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError("Erro ao criar conta");
        }
    };

    return <>
        <div className=" flex flex-col h-screen w-screen items-center justify-center">
            <div className="border rounded-lg p-8 border-[#333333] w-2/4 h-fit ">
                <h1 className="text-4xl font-bold mb-4 text-dark-title-primary">Registo</h1>
                <form className="flex flex-col" onSubmit={handleSignUp}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="mb-2 p-2 border border-gray-300 rounded" />
                    <button type="submit" className="btn-hero">Registar</button>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    </>;
}   
