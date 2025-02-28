import Image from "next/image";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import { useContext } from "react";
import Mode from "@/enum/mode";

const CollapseButton = ({ id, shown, setShown }) => {
    const { toggleMode } = useContext(ToggleModeContext);
    const toggleShown = (e) => {
        if (shown === id) {
            setShown(null);
        } else {
            setShown(id);
        }
    };

    return (
        <>
            <div onClick={toggleShown} className="arrow">
                {shown.includes(id) 
                    ? <Image src={toggleMode === Mode.FUN ? "/images/components/arrow-up-green.svg" : "/images/components/arrow-up.svg"} width={27} height={27} alt="arrow" />
                    : <Image src={toggleMode === Mode.FUN ? "/images/components/arrow-down-green.svg" : "/images/components/arrow-down.svg"} width={27} height={27} alt="arrow" />}
            </div>
        </>
    );
};

export default CollapseButton;
