type SubTitleProps = {
    text: string;
};

export default function SubTitle({ text }: SubTitleProps) {
    return (
        <p className="text-xl md:text-2xl text-dark-text-primary mb-8 max-w-2xl mx-auto text-center">
            {text}
        </p>
    );
}