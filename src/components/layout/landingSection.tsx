interface LandingSectionProps {
    children: React.ReactNode | React.ReactNode[];
    id: string;
}

export default function LandingSection({ children, id }: LandingSectionProps) {
    return (
        <section className="min-h-screen flex mt-4 overflow-hidden flex-col px-4 md:px-16" id={id}>
            {children}
        </section>
    );
};
