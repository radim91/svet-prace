import { useEffect, useState } from "react";
import Image from "next/image";

const SideImage = ({ side, mainImageId }) => {
    const [alt, setAlt] = useState('obr');
    const [randomId, setRandomId] = useState(0);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        let newRandomId = Math.floor(Math.random() * 7) + 1;

        if (newRandomId === mainImageId) {
            newRandomId = newRandomId === 7 ? 1 : newRandomId + 1;
        }

        setRandomId(newRandomId);

        if (side === 'left') {
            setFlip(true);
        } else if (side === 'right') {
            setFlip(false);
        }
    }, [mainImageId, side]);

    return (
        <div className={`hidden md:block absolute ${side}-0 -mt-24 ${flip === true ? 'transform scale-x-[-1]' : ''}`}>
            <Image
                src={`/images/components/side-images/${randomId}.svg`}
                width={200}
                height={200}
                alt={alt}
            />
        </div>
    );
};

export default SideImage;
