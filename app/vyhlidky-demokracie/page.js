"use client";

import Image from "next/image";
import SideImage from "@/components/UI/SideImage";

const DemocracyPage = () => {
    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center blue">
                    7. <span className="ms-2">Vyhlídky demokracie</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    ...
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/democracy/democracy.svg"
                    width={300}
                    height={300}
                    alt="Demokracie"
                />
            </div>
        </>
    );
};

export default DemocracyPage;
