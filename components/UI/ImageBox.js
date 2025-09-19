import Image from "next/image";

const ImageBox = ({ background, foreground, additionalClass }) => {
    return (
        <div className="image-box mx-auto">
            <div className="image-box-foreground">
                <Image
                    src={foreground}
                    width={400}
                    height={400}
                    alt={foreground}
                    className={`w-full rounded-sm`}
                />
            </div>
            <div className={`${additionalClass}`}>
                <Image
                    src={background}
                    width={400}
                    height={400}
                    alt={background}
                    className="min-w-full"
                />
            </div>
        </div>
    );
};

export default ImageBox;
