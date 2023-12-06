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
                <h1 className="text-center trans-bold text-7xl lg:text-9xl">
                    Svět práce
                </h1>
                <h2 className="text-2xl text-center trans-semibold lg:text-3xl pt-7">
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
                        className="px-3 intro-btn lg:px-5"
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
                className="absolute left-0 hidden top-32 lg:block"
            ></Image>
            <Image
                src="images/packy.svg"
                width={325}
                height={325}
                alt="Krumpáč"
                className="absolute left-0 hidden bottom-32 lg:block"
            ></Image>
            <Image
                src="images/klavesnice.svg"
                width={300}
                height={300}
                alt="Krumpáč"
                className="absolute right-0 hidden top-48 lg:block"
            ></Image>
            <Image
                src="images/pipeta.svg"
                width={250}
                height={300}
                alt="Krumpáč"
                className="absolute right-0 hidden bottom-32 lg:block"
            ></Image>
        </>
    );
};

export default HomePage;
