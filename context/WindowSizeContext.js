import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const WindowSizeContext = createContext();

export function WindowSizeProvider({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useLayoutEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

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
