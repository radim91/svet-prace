import Image from "next/image";
import { useState } from "react";

const ImageOverlayBox = (props) => {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <>
            {props.imageOverlay === true && (
                <div className="image-overlay-box">
                    <div className="flex items-center w-24">
                        <div className="mx-auto">
                            <Image src="/images/components/right-arrow.svg" width={25} height={25} alt="<-" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-row pt-8 h-5/6">
                            <div className="basis-1/2">
                                image
                            </div>
                            <div className="basis-1/2">
                                desc
                            </div>
                        </div>
                        <div className="h-1/6">
                            controls
                        </div>
                    </div>
                    <div className="flex items-center w-24">
                        <div className="mx-auto">
                            <Image src="/images/components/left-arrow.svg" width={25} height={25} alt="<-" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageOverlayBox;
