import Image from "next/image";

const ImageBox = ({ background, foreground, higher }) => {
    return (
        <div className="image-box">
            {higher && (
                <div className="image-box-background-higher">
                    <Image
                        src={background}
                        width={400}
                        height={400}
                        alt={background}
                        className="min-w-full"
                    />
                </div>
            )}
            {!higher && (
                <div className="image-box-background">
                    <Image
                        src={background}
                        width={400}
                        height={400}
                        alt={background}
                        className="min-w-full"
                    />
                </div>
            )}
            <div className="image-box-foreground">
                <Image
                    src={foreground}
                    width={400}
                    height={400}
                    alt={foreground}
                    className={`min-w-full mt-12 mb-2`}
                />
            </div>
        </div>
    );
};

export default ImageBox;
