"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";

const TransformationPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);
    const [shown, setShown] = useState([]);

    const shownHandler = (e) => {
        if (shown.includes(e)) {
            setShown(shown.filter((id) => id !== e));
        } else {
            setShown([...shown, e]);
        }
    };

    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center blue">
                    6. <span className="ms-2">Spravedlivá transformace</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Zachránit planetu i lidi na ní
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/transformation/transformation.svg"
                    width={300}
                    height={300}
                    alt="Budoucnost"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">

            </div>
        </>
    );
};

export default TransformationPage;
