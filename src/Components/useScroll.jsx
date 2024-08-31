import { useState, useEffect } from "react";

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrollY(currentScrollTop);
            if (currentScrollTop > lastScrollTop) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            setLastScrollTop(currentScrollTop);
            setHasScrolled(true);
        };

        // Debounce the scroll event to reduce the number of executions
        let timeoutId;
        const debouncedHandleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(handleScroll, 1); // Adjust debounce time as needed
        };

        window.addEventListener("scroll", debouncedHandleScroll);
        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [lastScrollTop]);

    return {
        scrollY,
        scrollDirection,
        hasScrolled
    };
}
