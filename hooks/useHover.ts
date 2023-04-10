import { useRef, useState, useEffect } from "react";

const useHover = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<any>(false);

    const handleMouseEnter = () => setValue(true);
    const handleMouseLeave = () => setValue(false);

    useEffect(() => {
        const node = ref.current;
        if(node) {
            node.addEventListener("mouseenter", handleMouseEnter);
            node.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                node.removeEventListener("mouseenter", handleMouseEnter);
                node.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [ref]);

    return [ref, value];
};

export default useHover;