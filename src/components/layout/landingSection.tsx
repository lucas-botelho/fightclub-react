interface LandingSectionProps {
    children: React.ReactNode | React.ReactNode[];
    id: string;
}

export default function LandingSection({ children, id }: LandingSectionProps) {
    return (
        <section className="min-h-screen flex mt-4 overflow-hidden flex-col  px-18" id={id}>
            {children}
        </section>
    );
};
