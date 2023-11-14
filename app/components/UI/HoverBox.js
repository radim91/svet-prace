const HoverBox = ({ children }) => {
    return (
        <div className="hover-box flex">
            <div className="basis-1/5">                
                <div className="text-2xl text-center blue border-2 border-blue-600 rounded py-1 w-10">?</div>
            </div>
            <div className="basis-4/5">{children}</div>
        </div>
    );
};

export default HoverBox;
