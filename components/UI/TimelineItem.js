import Image from "next/image";

const TimelineItem = ({ year, flag, name, end, additional }) => {
    return (
        <div className={`text-center w-16 ${end === true ? '' : 'me-4'}`}>
            <div className="mb-3">
                <span className="blue text-2xl fellix-semibold">{year}</span>
            </div>
            <div className="mb-3 h-10">
                <Image
                    src={`/images/chapters/fearless/flags/${flag}.svg`}
                    width={40}
                    height={40}
                    alt={`${flag}`}
                    className="mx-auto"
                />
            </div>
            <div>
                <span className="blue fellix-regular">{name}</span>
            </div>
            {additional && 
                <div className="hidden md:block absolute -ms-10">
                    <div>
                        <Image
                            src="/images/components/line.svg"
                            width={5}
                            height={10}
                            alt="line"
                            className="mx-auto"
                        />
                    </div>
                    <div className="fellix-regular text-sm blue">
                        {additional}
                    </div>
                </div>
            }
        </div>
    );
}

export default TimelineItem;
