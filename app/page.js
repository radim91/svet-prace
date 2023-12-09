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
                <h2 className="pt-6 text-2xl text-center trans-semibold lg:text-3xl">
                    Podpora sociální spravedlnosti a důstojné práce
                </h2>
            </div>
            <div className="relative w-full mt-8 2xl:mt-32">
                <div className="flex items-center justify-center">
                    <div className="mx-auto">
                        <Image
                            src="images/planeta.svg"
                            width={400}
                            height={400}
                            alt="Planeta"
                        ></Image>
                        <button
                            className="px-3 intro-btn lg:px-5"
                            onClick={sendToIntro}
                        >
                            Začít objevovat
                        </button>
                    </div>
                </div>
            </div>
            <Image
                src="images/krumpac.svg"
                width={325}
                height={325}
                alt="Krumpáč"
                className="absolute left-0 hidden h-72 2xl:h-auto top-16 2xl:top-24 lg:block"
            ></Image>
            <Image
                src="images/packy.svg"
                width={325}
                height={325}
                alt="Krumpáč"
                className="absolute bottom-0 left-0 hidden h-48 2xl:h-auto lg:block"
            ></Image>
            <Image
                src="images/klavesnice.svg"
                width={300}
                height={300}
                alt="Krumpáč"
                className="absolute right-0 hidden h-48 top-32 2xl:top-48 lg:block 2xl:h-auto"
            ></Image>
            <Image
                src="images/pipeta.svg"
                width={250}
                height={300}
                alt="Krumpáč"
                className="absolute bottom-0 right-0 hidden h-60 lg:block 2xl:h-auto"
            ></Image>
        </>
    );
};

export default HomePage;
