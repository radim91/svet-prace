import Mode from "@/enum/mode";
import { useContext } from "react";
import { ToggleModeContext } from "../context/ToggleModeContext";
import Image from "next/image";

const Logo = () => {
    const { toggleMode } = useContext(ToggleModeContext);

    return (
        <div>
            {toggleMode === Mode.NORMAL 
                ? <Image src="/images/components/logo-circle.svg" width={150} height={50} alt="logo" className="absolute logo-circle" />
                : <Image src="/images/components/logo-circle-fun.svg" width={150} height={50} alt="logo" className="absolute logo-circle" /> 
            }
            <div className="text-black fellix-semibold text-2xl" id="logo">Svět práce</div>
        </div>
    );
};

export default Logo;
