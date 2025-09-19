import { useEffect, useState } from "react";
import Image from "next/image";

const SideImage = ({ side, mainImageId }) => {
    const [alt, setAlt] = useState('obr');
    const [randomId, setRandomId] = useState(0);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setRandomId(Math.floor(Math.random() * 7) + 1);

        if (randomId === mainImageId) {
            if (randomId === 7) {
                setRandomId(1);
            } else {
                setRandomId(randomId + 1);
            }
        }

        if (side === 'left') {
            setFlip(true);
        }

        if (side === 'right') {
            setFlip(false);
        }
    }, [mainImageId, side, randomId]);

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
