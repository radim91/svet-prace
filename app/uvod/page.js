"use client";

import Image from "next/image";
import Link from "next/link";
import Path from "../../enum/path";
import { useContext } from "react";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import Mode from "@/enum/mode";
import Fade from "../../utils/transitions";

const IntroPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);

    return (
        <>
            <div className="headings">
                <h1 className="mt-6 text-5xl text-center fellix-semibold blue lg:text-7xl">
                    Svět práce a odborů
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Práce je součástí lidstva od jeho počátku.<br/>
                    Ale proč? <span className="blue">A co je to vlastně práce?</span>
                </h2>
            </div>
            <div>
                <Image
                    src="/images/chapters/intro/uvod.svg"
                    width={400}
                    height={600}
                    alt="Úvod"
                    className="absolute left-0 w-1/4 top-48 2xl:1/3"
                ></Image>
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mt-4 mb-4">
                    Možná nejširší definice by byla, že je to činnost, která nepodléhá
                    naší úplné libovůli. Aspoň něco si na ní <span className={`${toggleMode === Mode.FUN ? "green" : ""}`}>nemůžeme vybrat</span>. 
                </p>
                {/* <div className={Fade("mb-4 green")}> */}
                {/* <p> */}
                {/*     Proto si můžeme stěžovat „sakra, to je zas práce,“ když jdeme */}
                {/*     vynést přetékající koš, i když za to nedostáváme plat a neexistuje */}
                {/*     šéf, co nám to nařídil. */}
                {/* </p> */}
                {/* </div> */}
                <p className="mb-4">
                    Práce může mít milion podob. Může být dobrovolná,
                    nedobrovolná, dobře i špatně placená nebo neplacená. Může to být
                    péče. Může to být tvorba. A může to být příšerná dřina nebo
                    třeba bullshit. 
                </p>
                <p className="mb-4">
                    Přináší nám obživu, bohatství, sebevědomí, hrdost – anebo taky nic z toho.
                </p>
                <p className="mb-4">
                    Potíž s prací je, že každý pod tím slovem rozumí něco jiného.
                </p>
                {/* <div className="flex justify-center"> */}
                {/*     <div className="w-1/4"> */}
                {/*         obr 1 */}
                {/*     </div> */}
                {/*     <div className="w-1/4"> */}
                {/*         obr 2 */}
                {/*     </div> */}
                {/* </div> */}
                {/* <p className={Fade('green')}> */}
                {/*     Když vstane rapová superstar po noci plné šampaňského seběhne šest */}
                {/*     pater dolů ve svém sídle v Beverly Hills, aby natočila nejnovější */}
                {/*     banger, je to něco jiného, než když se v pět ráno chystá */}
                {/*     dvanáctiletý bangladéšský chlapec na celodenní šichtu v továrně na */}
                {/*     cool tenisky. Ale oba můžou tvrdit, že jdou „do práce“. */}
                {/* </p> */}
                <div className="mt-24 text-center">
                    <Link
                        className="btn-primary px-8"
                        href={Path.CHANGES}
                    >
                        <span className="text-3xl text-white">Kapitola 1</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default IntroPage;
