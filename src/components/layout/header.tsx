import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const links = [
        { to: "#home", label: "Home" },
        { to: "#classes", label: "Classes" },
        { to: "#instructors", label: "Instructors" },
        { to: "#membership", label: "Mensalidades" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-60 p-4 flex items-center bg-dark-background-primary/50 backdrop-blur-sm border-b">

                {/* Logo (left) */}
                <div className="flex items-center gap-4">
                    <img src="/logo.jpg" alt="Fight Club BJJ Logo" className="h-10 w-auto " />
                    <div className="text-dark-title-primary font-bold text-xl">FIGHT CLUB BJJ</div>
                </div>

                {/* Right side: nav + mobile toggle */}
                <div className="ml-auto flex items-center gap-4">
                    <nav className="hidden md:flex flex-row gap-8 font-medium text-xl items-center">
                        {links.map((link) => (
                            <a key={link.to} href={link.to} className="text-dark-text-primary hover:text-dark-title-secondary">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile burger */}
                    <button
                        className="block md:hidden p-2 rounded-md focus:outline-none z-50"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-dark-title-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-dark-title-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile menu (shows under header) */}
            {open && (
                <div className="md:hidden fixed inset-0 pt-[var(--header-height)] bg-dark-background-primary/95 backdrop-blur-sm z-50">
                    <nav className="flex flex-col gap-2 py-4 px-4 max-h-[calc(100vh- var(--header-height))] overflow-auto">
                        {links.map((l) => (
                            <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="py-2 text-dark-text-primary hover:text-dark-title-secondary">
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}