import Image from "next/image";

const TraditionPage = () => {
    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center blue">
                    3. <span className="ms-2">Česká tradice</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    od kováře Jecha po zaplněný Václavák
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/tradition/tradition.svg"
                    width={300}
                    height={300}
                    alt="Tradice"
                />
            </div>
        </>
    );
};

export default TraditionPage;
