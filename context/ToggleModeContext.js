import { createContext, useState } from "react";
import Mode from "@/enum/mode";

export const ToggleModeContext = createContext();

export function ToggleModeProvider({ children }) {
    const [toggleMode, setToggleMode] = useState(Mode.NORMAL);

    const toggleModeHandler = () => {
        if (toggleMode === Mode.NORMAL) {
            setToggleMode(Mode.FUN);
        } else {
            setToggleMode(Mode.NORMAL);
        }
    };

    return (
        <ToggleModeContext.Provider value={{ toggleMode, toggleModeHandler }}>
            {children}
        </ToggleModeContext.Provider>
    );
}
