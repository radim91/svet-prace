const HoverLink = ({ children, handler }) => {
    const showHoverBox = (e) => {
        const keyword = e.target.innerText;
        handler(keyword);
    };

    const hideHoverBox = (e) => {
        handler(null);
    };

    return (
        <span className="link" onMouseEnter={showHoverBox} onMouseLeave={hideHoverBox}>
            {children}
        </span>
    );
};

export default HoverLink;
