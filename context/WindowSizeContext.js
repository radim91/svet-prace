import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const WindowSizeContext = createContext();

export function WindowSizeProvider({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isMobile === undefined) {
        return null;
    }

    return (
        <WindowSizeContext.Provider value={{ isMobile }}>
            {children}
        </WindowSizeContext.Provider>
    );
};
