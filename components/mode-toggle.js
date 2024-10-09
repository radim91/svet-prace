import Mode from "@/enum/mode";
import { useContext } from "react";
import { ToggleModeContext } from "../context/ToggleModeContext";
import Image from "next/image";

const ToggleModeButton = () => {
    const { toggleMode, toggleModeHandler } = useContext(ToggleModeContext);

    return (
        <div className="mt-1 me-12">
            <button onClick={toggleModeHandler}>
                {toggleMode === Mode.NORMAL 
                    ? <Image src="/images/components/normal-mode.svg" width={50} height={25} alt="normal" />
                    : <Image src="/images/components/fun-mode.svg" width={50} height={25} alt="fun" />
                }
            </button>
        </div>
    );
};

export default ToggleModeButton;
