import { ToggleModeContext } from "@/context/ToggleModeContext";
import { useContext } from "react";
import Mode from "@/enum/mode";
import Image from "next/image";

const ScrolltopButton = () => {
    const { toggleMode } = useContext(ToggleModeContext);

    return (
        <Image src={toggleMode === Mode.FUN ? "/images/components/scrolltop-green.svg" : "images/components/scrolltop.svg"} width={30} height={30} alt="scrolltop" />
    );
};

export default ScrolltopButton;
