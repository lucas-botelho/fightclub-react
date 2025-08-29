type MainTitleProps = {
    text: string;
};

export default function MainTitle({ text }: MainTitleProps) {
    return (
        <h2 className="font-semibold text-center text-6xl mb-4 text-dark-title-secondary">
            {text}
        </h2>
    );
}