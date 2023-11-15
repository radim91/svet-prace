import Image from "next/image";

const ImageBox = ({ background, foreground }) => {
    return (
        <div className="image-box">
            <div className="image-box-background">
                <Image
                    src={background}
                    width={400}
                    height={400}
                    alt={background}
                    className="min-w-full"
                />
            </div>
            <div className="image-box-foreground">
                <Image
                    src={foreground}
                    width={400}
                    height={400}
                    alt={foreground}
                    className="mt-12 mb-2 min-w-full"
                />
            </div>
        </div>
    );
};

export default ImageBox;
