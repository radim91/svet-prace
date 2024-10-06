"use client";

import Link from "next/link";
import Image from "next/image";

const Info = () => {
    return (
        <>
            <div className="flex">
                <div className="basis-1/3 flex">
                    <div className="mt-2">
                        <Link href='#' onClick={() => history.back()} className="text-3xl fellix-semibold">
                            <Image src="images/components/left-arrow.svg" width={20} height={20} alt="zpět" />
                        </Link>
                    </div>

                    <div className="ms-4">
                        <Link href='#' onClick={() => history.back()} className="text-3xl fellix-semibold">zpět</Link>
                    </div>
                </div>
                <div className="basis-1/3 text-center">
                    <h1 className="text-3xl fellix-semibold">Info o projektu</h1>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-24 flex justify-around">
                <div>
                    <Image src="images/components/logo-eu.svg" width={300} height={78} alt="logo"></Image>
                </div>
                <div>
                    <Image src="images/components/cmkos.svg" width={78} height={78} alt="logo"></Image>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-24 text-center">
                <p>
                    Tato webová platforma je financované z projektu ESF „Sociální dialog pro sociální smír
                    a hospodářský růst“, č. projektu: CZ.03.01.03/00/22_001/0000084. 
                </p>
            </div>
        </>
    );
};

export default Info;
