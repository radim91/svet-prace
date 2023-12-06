import Image from "next/image";

const Quote = ({ quote, author }) => {
    return (
        <div className="relative">
            <div className="absolute mt-12">
                <Image
                    src="/images/components/quote.svg"
                    width={65}
                    height={65}
                    alt="Citát"
                />
            </div>
            <div className="pt-12 pb-6 ps-32">
                <p className="italic text-gray-700">
                    „{quote}“
                </p>
                <p className="pt-8 text-gray-700 text-end">
                    {author}
                </p>
            </div>
        </div>
    );
};

export default Quote;
