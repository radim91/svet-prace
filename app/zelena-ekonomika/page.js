"use client";

import Image from "next/image";

const GreenDeal = () => {
    return (
        <>
            <div className="headings mx-auto">
                <h1 className="trans-semibold text-5xl lg:text-7xl text-center mt-6">
                    Svět práce a jeho proměny
                    <br /> v posledních 250 letech
                </h1>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/krumpac.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
        </>
    );
};

export default GreenDeal;
