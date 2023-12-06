"use client";

import Image from "next/image";

const GreenDeal = () => {
    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center trans-semibold lg:text-7xl">
                    Zelená ekonomika 
                    <br /> a spravedlivá transformace
                </h1>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/pipeta.svg"
                    width={300}
                    height={300}
                    alt="pipeta"
                />
            </div>
        </>
    );
};

export default GreenDeal;
