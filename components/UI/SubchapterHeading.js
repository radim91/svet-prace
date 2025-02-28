import { ToggleModeContext } from "@/context/ToggleModeContext";
import { useContext } from "react";
import Mode from "@/enum/mode";

const SubchapterHeading = ({ id, chapterNumber, chapterTitle, shown, setShown }) => {
    const { toggleMode } = useContext(ToggleModeContext);
    const toggleShown = () => {
        if (shown === id) {
            setShown(null);
        } else {
            setShown(id);
        }
    };

    return (
        <h3 className={`text-left text-3xl mb-4 flex cursor-pointer ${toggleMode === Mode.FUN ? "green" : "blue"}`} onClick={toggleShown}>
            <div className="subchapter-nr-width">
                <span className="me-8">{ chapterNumber }</span>
            </div>
            <div>
                { chapterTitle }
            </div>
        </h3>
    );
};

export default SubchapterHeading;
