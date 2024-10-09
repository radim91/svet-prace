import Mode from "@/enum/mode";
import { useContext } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";

const Fade = (additionalClasses) => {
    const { toggleMode } = useContext(ToggleModeContext);
    let classes = "transition-all duration-500 ease-in-out overflow-hidden ";

    if (toggleMode === Mode.FUN) {
        classes += "max-h-96 opacity-100 ";

        if (additionalClasses) {
            classes += additionalClasses;
        }
    } else {
        classes += "h-0 opacity-0";
    }

    return classes;
};

export default Fade;
