import { createContext, useEffect, useState } from "react";
import Mode from "@/enum/mode";

export const ToggleModeContext = createContext();

export function ToggleModeProvider({ children }) {
    const [toggleMode, setToggleMode] = useState(Mode.NORMAL);

    const toggleModeHandler = () => {
        let newMode;
        if (toggleMode === Mode.NORMAL) {
            newMode = Mode.FUN;
            const favicon = document.getElementById("favicon");
            if (favicon) favicon.href = "favicon-green.png";
        } else {
            newMode = Mode.NORMAL;
            const favicon = document.getElementById("favicon");
            if (favicon) favicon.href = "favicon.png";
        }
        setToggleMode(newMode);

        if (typeof window !== "undefined") {
            window.localStorage.setItem("toggle-mode", newMode);
            window.localStorage.setItem("show-hint", "false");
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hasHint = window.localStorage.getItem("show-hint");
            if (hasHint === null) {
                window.localStorage.setItem("show-hint", "true");
            }

            const savedMode = window.localStorage.getItem("toggle-mode");
            if (savedMode && (savedMode === Mode.NORMAL || savedMode === Mode.FUN)) {
                setToggleMode(savedMode);
                const favicon = document.getElementById("favicon");
                if (favicon) {
                    favicon.href = savedMode === Mode.FUN ? "favicon-green.png" : "favicon.png";
                }
            }
        }
    }, []);

    return (
        <ToggleModeContext.Provider value={{ toggleMode, toggleModeHandler }}>
            {children}
        </ToggleModeContext.Provider>
    );
}
