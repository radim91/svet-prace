import Image from "next/image";

const Quote = ({ quote, author }) => {
    return (
        <div className="relative">
            <div className="absolute -ml-20 mt-16">
                <Image
                    src="/images/components/quote.svg"
                    width={75}
                    height={75}
                    alt="Citát"
                />
            </div>
            <div className="px-24 pt-12 pb-6">
                <p className="font-semibold">
                    „{quote}“
                </p>
                <p className="text-end pt-8">
                    {author}
                </p>
            </div>
        </div>
    );
};

export default Quote;
