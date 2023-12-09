import Image from "next/image";
import { useState } from "react";

const ImageOverlayBox = (props) => {
    const [activeImage, setActiveImage] = useState(0);
    const imagesLen = Object.keys(props.images).length;

    const nextImage = () => {
        if (activeImage === imagesLen - 1) {
            setActiveImage(0);
        } else {
            setActiveImage(activeImage + 1);
        }
    };

    const prevImage = () => {
        if (activeImage === 0) {
            setActiveImage(imagesLen - 1);
        } else {
            setActiveImage(activeImage - 1);
        }
    }

    return (
        <>
            {props.imageOverlay === true && (
                <div className="image-overlay-box">
                    <div className="flex items-center w-24">
                        <div className="mx-auto cursor-pointer" onClick={prevImage}>
                            <Image src="/images/components/left-arrow.svg" width={25} height={25} alt="<-" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-row pt-8 h-5/6">
                            <div className="basis-1/2">
                                <Image 
                                    src={Object.values(props.images)[activeImage].src} 
                                    width={400} height={400} 
                                    alt="ai" 
                                    className="image-overlay-box-image" 
                                    priority={true}
                                />
                            </div>
                            <div className="relative basis-1/2">
                                <p className="text-sm italic">
                                    {Object.values(props.images)[activeImage].description}
                                </p>
                                <span className="absolute bottom-0 right-0 italic">DALL.E 4</span>
                            </div>
                        </div>
                        <div className="flex h-1/6">
                            <div className="flex pt-4 mx-auto">
                                {Array(imagesLen).fill(0).map((_, index) => (
                                    <div key={index} className="cursor-pointer" onClick={() => setActiveImage(index)}>
                                        <Image 
                                            src={`/images/components/${index === activeImage ? "active-li.svg" : "inactive-li.svg"}`} 
                                            width={index === activeImage ? 13 : 15} 
                                            height={15} 
                                            alt="li" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-24">
                        <div className="mx-auto cursor-pointer" onClick={nextImage}>
                            <Image src="/images/components/right-arrow.svg" width={25} height={25} alt="<-" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageOverlayBox;
