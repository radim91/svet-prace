import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const WindowSizeContext = createContext();

export function WindowSizeProvider({ children }) {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
        isMobile: false,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 768,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowSizeContext.Provider value={{ windowSize }}>
            {children}
        </WindowSizeContext.Provider>
    );
};
