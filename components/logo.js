import Mode from "@/enum/mode";
import Path from "@/enum/path";
import { useContext, useEffect } from "react";
import { ToggleModeContext } from "../context/ToggleModeContext";
import { WindowSizeContext } from "@/context/WindowSizeContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Logo = () => {
    const pathname = usePathname();
    const { toggleMode } = useContext(ToggleModeContext);
    const { isMobile } = useContext(WindowSizeContext);

    useEffect(() => {
        console.log(isMobile);
    });

    return (
        <>
            {pathname === Path.HOME && isMobile && (
                <div className="text-black fellix-semibold text-4xl" id="logo">Svět práce</div>   
            )}

            {pathname === Path.HOME && !isMobile && (
                <Image src="/images/components/logo-eu.svg" width={175} height={100} alt="logo" className="absolute" />
            )}

            {pathname !== Path.HOME && (
                <div>
                    {toggleMode === Mode.NORMAL 
                        ? <Image src="/images/components/logo-circle.svg" width={150} height={50} alt="logo" className="absolute logo-circle" />
                        : <Image src="/images/components/logo-circle-fun.svg" width={150} height={50} alt="logo" className="absolute logo-circle" /> 
                    }

                    <div className="text-black fellix-semibold text-2xl" id="logo">Svět práce</div>   
                </div>
            )}
        </>
    );
};

export default Logo;
