import { createContext, useEffect, useState } from "react";
import Mode from "@/enum/mode";

export const ToggleModeContext = createContext();

export function ToggleModeProvider({ children }) {
    const [toggleMode, setToggleMode] = useState(Mode.NORMAL);

    const toggleModeHandler = () => {
        if (toggleMode === Mode.NORMAL) {
            setToggleMode(Mode.FUN);
            document.getElementById("favicon").href = "favicon-green.png";
        } else {
            setToggleMode(Mode.NORMAL);
            document.getElementById("favicon").href = "favicon.png";
        }

        document.cookie = "show-hint=false;path=/";
    };

    useEffect(() => {
        if (typeof document.cookie !== "undefined" && document.cookie.length <= 0) {
            document.cookie = "show-hint=true;path=/";
        }
    });

    return (
        <ToggleModeContext.Provider value={{ toggleMode, toggleModeHandler }}>
            {children}
        </ToggleModeContext.Provider>
    );
}
