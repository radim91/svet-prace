import { useState } from "react";
import Image from "next/image";

const InfoBox = ({ children }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="info-box-icon" onMouseOver={() => setShow(true)}>
               <Image src="/images/components/globe.svg" width={28} height={28} alt="info" className="mx-auto mt-1 ml-1" /> 
            </div>
            {show && (
                <div className="info-box" onMouseLeave={() => setShow(false)}>
                    {children}
                </div>
            )}
        </div>
    );  
};

export default InfoBox;
