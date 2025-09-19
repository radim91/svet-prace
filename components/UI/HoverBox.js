const HoverBox = (props) => {
    return (
        <div className={`flex hover-box ${props.className}`}>
            <div className="basis-1/5">                
                <div className="w-12 h-12 py-1 text-2xl text-center border-2 border-blue-600 rounded-sm blue">?</div>
            </div>
            <div className="basis-4/5">{props.children}</div>
        </div>
    );
};

export default HoverBox;
