const SubchapterHeading = ({ id, chapterNumber, chapterTitle, shown, setShown }) => {
    const toggleShown = (e) => {
        if (shown === id) {
            setShown(null);
        } else {
            setShown(id);
        }
    };

    return (
        <h3 className="text-left text-3xl blue mb-4 flex cursor-pointer" onClick={toggleShown}>
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
