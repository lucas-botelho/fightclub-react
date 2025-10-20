import { auth } from '../../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("token", await userCredential.user.getIdToken());
    }

    return (
        <div className=" flex flex-col h-screen w-screen items-center justify-center">
            <div className="border rounded-lg p-8 border-[#333333] w-2/4 h-fit ">
                <h1 className="text-4xl font-bold mb-4 text-dark-title-primary">Login</h1>
                <form className="flex flex-col">
                    <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded" />
                    <input type="password" placeholder="Password" className="mb-2 p-2 border border-gray-300 rounded" />
                    <button type="submit" className="btn-hero">Login</button>
                </form>
            </div>
        </div>
    );
}