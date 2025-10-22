import { useEffect, useRef, useState } from "react";

type MainTitleProps = {
    text: string;
};

export default function MainTitle({ text }: MainTitleProps) {
    const ref = useRef<HTMLHeadingElement | null>(null);
    const [wrapped, setWrapped] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;
        // measure single-line height by temporarily forcing no-wrap
        const originalWhiteSpace = el.style.whiteSpace;
        el.style.whiteSpace = "nowrap";
        const singleLineHeight = el.getBoundingClientRect().height;
        el.style.whiteSpace = originalWhiteSpace;

        const checkWrap = () => {
            if (!ref.current) return;
            const currentHeight = ref.current.getBoundingClientRect().height;
            setWrapped(currentHeight > singleLineHeight + 1); // small tolerance
        };

        // initial check
        checkWrap();

        // observe resize for responsive changes
        const ro = new ResizeObserver(checkWrap);
        ro.observe(el);

        // also listen for window font-size / layout changes
        window.addEventListener("resize", checkWrap);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", checkWrap);
        };
    }, [text]);

    return (
        <h2
            ref={ref}
            className={
                `font-semibold text-center mb-4 text-dark-title-secondary ` +
                (wrapped ? "text-4xl md:text-6xl" : "text-6xl")
            }
        >
            {text}
        </h2>
    );
}