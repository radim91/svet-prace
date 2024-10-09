import Image from "next/image";

const AIButton = (props) => {
    const setImageOverlay = () => {
        props.setImageOverlay(!props.imageOverlay);  
    };

    return (
        <div className="ai">
            <div className={`ai-btn ${props.imageOverlay === true ? "active" : ""}`} onClick={setImageOverlay}>
                <div className="p-1">
                    <Image src="/images/components/ai-btn.svg" width={26} height={30} alt="AI" />
                </div>
            </div>
            <small className="text-gray-700">
                Zjistěte, jak AI vidí situaci.
            </small>
        </div>
    );
};

export default AIButton;
