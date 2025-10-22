import React, { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode;
    ariaLabel?: string;
};

export default function CardsSlider({ children, ariaLabel = 'Cards carousel' }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const items = React.Children.toArray(children);
    const n = items.length;
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(max-width: 767.98px)').matches;
    });

    // carousel state/hooks (declare unconditionally to keep hooks order stable)
    const loopItems = [...items, ...items, ...items];
    const midOffset = n;
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

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(min-width: 768px)');
        const onChange = () => setIsMobile(!mq.matches);
        onChange();
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    // initialize position to middle copy without animation when mobile
    useEffect(() => {
        if (!isMobile) return;
        const t = setTimeout(() => scrollToIndex(initial, 'auto'), 0);
        return () => clearTimeout(t);
    }, [isMobile]);

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

    useEffect(() => {
        if (!isMobile) return;
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

                if (closest < n) {
                    const mapped = closest + n;
                    setActive(mapped);
                    scrollToIndex(mapped, 'auto');
                    return;
                }

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
    }, [active, n, isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        const el = containerRef.current;
        if (!el) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        el.addEventListener('keydown', handleKey as any);
        return () => el.removeEventListener('keydown', handleKey as any);
    }, [active, isMobile]);

    const logicalActive = ((active % n) + n) % n;

    // Desktop: render regular grid
    if (!isMobile) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((child, i) => (
                    <div key={i}>{child}</div>
                ))}
            </div>
        );
    }

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
