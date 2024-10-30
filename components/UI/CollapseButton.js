import Image from "next/image";

const CollapseButton = ({ id, shown, setShown }) => {
    const toggleShown = (e) => {
        if (shown === id) {
            setShown(null);
        } else {
            setShown(id);
        }
    };

    return (
        <>
            <div onClick={toggleShown} className="arrow">
                {shown.includes(id) 
                    ? <Image src="/images/components/arrow-up.svg" width={27} height={27} alt="arrow" />
                    : <Image src="/images/components/arrow-down.svg" width={27} height={27} alt="arrow" />}
            </div>
        </>
    );
};

export default CollapseButton;
