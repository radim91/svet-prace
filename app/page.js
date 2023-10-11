"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Path from "../enum/path";

const HomePage = () => {
    const router = useRouter();
    const sendToIntro = () => {
        router.replace(Path.INTRO);
    };

    return (
        <>
            <div className="headings">
                <h1 className="trans-bold text-7xl lg:text-9xl text-center">
                    Svět práce
                </h1>
                <h2 className="trans-semibold text-center text-2xl lg:text-3xl pt-7">
                    Podpora sociální spravedlnosti a důstojné práce
                </h2>
            </div>
            <div className="mt-16 lg:mt-24">
                <div className="container text-center">
                    <Image
                        src="images/planeta.svg"
                        width={400}
                        height={400}
                        alt="Planeta"
                        className="mx-auto"
                    ></Image>
                    <button
                        className="intro-btn px-3 lg:px-5"
                        onClick={sendToIntro}
                    >
                        Začít objevovat
                    </button>
                </div>
            </div>
            <Image
                src="images/krumpac.svg"
                width={325}
                height={325}
                alt="Krumpáč"
                className="absolute left-10 top-32 hidden lg:block"
            ></Image>
            <Image
                src="images/packy.svg"
                width={325}
                height={325}
                alt="Krumpáč"
                className="absolute left-10 bottom-32 hidden lg:block"
            ></Image>
            <Image
                src="images/klavesnice.svg"
                width={300}
                height={300}
                alt="Krumpáč"
                className="absolute left-3/4 top-48 hidden lg:block"
            ></Image>
            <Image
                src="images/pipeta.svg"
                width={250}
                height={300}
                alt="Krumpáč"
                className="absolute left-3/4 bottom-32 hidden lg:block"
            ></Image>
        </>
    );
};

export default HomePage;
