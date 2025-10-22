import React, { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode;
    ariaLabel?: string;
};

export default function CardsSlider({ children, ariaLabel = 'Cards carousel' }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const items = React.Children.toArray(children);
    const n = items.length;
    // tripled items to allow infinite scroll
    const loopItems = [...items, ...items, ...items];

    const midOffset = n; // start in middle copy
    const initial = midOffset + Math.floor(n / 2);

    const [active, setActive] = useState<number>(initial);

    const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
        const el = containerRef.current;
        if (!el) return;
        const child = el.children[index] as HTMLElement | undefined;
        if (!child) return;
        const left = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
        el.scrollTo({ left, behavior });
    };

    // initialize position to middle copy without animation
    useEffect(() => {
        const t = setTimeout(() => scrollToIndex(initial, 'auto'), 0);
        return () => clearTimeout(t);
    }, []);

    const prev = () => {
        const nextIndex = active - 1;
        setActive(nextIndex);
        scrollToIndex(nextIndex);
    };

    const next = () => {
        const nextIndex = active + 1;
        setActive(nextIndex);
        scrollToIndex(nextIndex);
    };

    // when user scrolls, update active and handle jumping when in cloned regions
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const center = el.scrollLeft + el.clientWidth / 2;
                let closest = 0;
                let minDist = Infinity;
                for (let i = 0; i < el.children.length; i++) {
                    const child = el.children[i] as HTMLElement;
                    const childCenter = child.offsetLeft + child.clientWidth / 2;
                    const dist = Math.abs(center - childCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = i;
                    }
                }

                // if we're in the first copy, jump to middle copy equivalent
                if (closest < n) {
                    const mapped = closest + n;
                    setActive(mapped);
                    // jump without animation
                    scrollToIndex(mapped, 'auto');
                    return;
                }

                // if we're in the last copy, jump to middle copy equivalent
                if (closest >= n * 2) {
                    const mapped = closest - n;
                    setActive(mapped);
                    scrollToIndex(mapped, 'auto');
                    return;
                }

                if (closest !== active) setActive(closest);
            });
        };

        el.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            el.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, [active, n]);

    // keyboard navigation when focused
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        el.addEventListener('keydown', handleKey as any);
        return () => el.removeEventListener('keydown', handleKey as any);
    }, [active]);

    // logical active index for dots (0..n-1)
    const logicalActive = ((active % n) + n) % n;

    return (
        <div className="relative">
            <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 hidden md:block"
            >
                ‹
            </button>

            <div
                ref={containerRef}
                role="region"
                tabIndex={0}
                aria-label={ariaLabel}
                className="overflow-x-auto no-scrollbar scroll-snap-x snap-mandatory flex gap-6 py-4 px-2 outline-none"
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                {loopItems.map((child, i) => (
                    <div key={i} className="snap-center min-w-[85%] md:min-w-[30%] lg:min-w-[28%]">
                        {child}
                    </div>
                ))}
            </div>

            <button
                aria-label="Next"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 hidden md:block"
            >
                ›
            </button>

            {/* pagination dots (logical index) */}
            <div className="flex items-center justify-center gap-2 mt-4">
                {items.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => {
                            const target = midOffset + i;
                            setActive(target);
                            scrollToIndex(target);
                        }}
                        className={`w-2 h-2 rounded-full ${i === logicalActive ? 'bg-dark-title-secondary' : 'bg-gray-400/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}
