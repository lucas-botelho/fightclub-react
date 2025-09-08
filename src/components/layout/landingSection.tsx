interface LandingSectionProps {
    children: React.ReactNode | React.ReactNode[];
}

export default function LandingSection({ children }: LandingSectionProps) {
    return (
        <section className="min-h-screen flex mt-4 overflow-hidden flex-col  px-18">
            {children}
        </section>
    );
};
