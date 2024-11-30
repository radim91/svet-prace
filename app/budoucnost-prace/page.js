"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";

const FuturePage = () => {
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
                    5. <span className="ms-2">Budoucnost práce</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Chytrá, nebo vychytralá?
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/future/future.svg"
                    width={300}
                    height={300}
                    alt="Budoucnost"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center mb-8">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/future/01.jpg"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/future/02.jpg"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mb-4">
                    Historii světa práce jsme už probrali zleva i zprava. Je načase se podívat do budoucnosti. 
                    Bude připomínat spíše <span className="green">utopii, nebo dystopii</span>?
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Utopie je obraz světa či společnosti, ve které všechno funguje dokonale, obzvláště 
                        soužití všech lidí. Pojem je převzatý ze stejnojmenné knihy anglického filozofa 
                        Thomase Morea. Principem utopie je to, že je nenaplnitelná – jde jen o ideál, o 
                        který má ale smysl usilovat.
                    </p>
                    <Image 
                        src="/images/chapters/future/03.jpg"
                        alt="obr 3" 
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        Dystopie je opakem Utopie, obrazem světa či společnosti, který se vyvinul špatně 
                        (narozdíl od utopie v něm ale nemusí být špatně úplně všechno). Dystopie je velmi 
                        často využívaná v uměleckých dílech (hlavně sci-fi a “spekulativní fikce”jako knihy 
                        1984 nebo Příběh služebnice, případně filmy Brazil, Elysium, nebo třeba Demolition 
                        Man). Dystopie často slouží jako zveličení už existující špatné tendence a jejím 
                        principem, narozdíl od Utopie je bohužel i to, že je zcela jistě naplnitelná.
                    </p>
                    <Image 
                        src="/images/chapters/future/04.jpg"
                        alt="obr 4" 
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-4">
                    V nejpravděpodobnějším případě ani jediné – nebo obojí tak trochu. Bez křišťálové koule 
                    si nemůžeme být jistí ničím, ale můžeme se řídit tím, co nám dějiny zatím ukázaly i 
                    důkladným zkoumaním toho, co se nám už v přítomnosti děje.
                </p>
                <p className="mb-8">
                    Jedna věc je naopak jistá určitě – budoucnost není nikdy plně daná, což platí i pro 
                    budoucnost práce. A to, jak se k ní my sami postavíme, bude hrát možná tu nejzásadnější roli.
                </p>
                <Image
                    src="/images/chapters/future/05.jpg"
                    alt="obr 5" 
                    width={600}
                    height={600}
                    className="rounded mx-auto mb-8"
                />
                <p className="mb-12 text-center">
                    Je možné, že se někdy v budoucnosti bude někdo chtít vrátit do dnešního dne a zabránit 
                    vám, abyste si přečetli tato slova?
                </p>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">5.1</span>Future Shock
                        <br/>aneb Čtvrtá průmyslová revoluce
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/future/future.svg"
                            width={200}
                            height={200}
                            alt="Budoucnost"
                        />
                    </div>
                    <p className="mb-8">
                        Během moderních dějin a především posledních dekád se zásadně proměňoval vztah člověka 
                        a strojů při výrobě a poskytování služeb, ale i třeba ve sféře dopravy, komunikace, 
                        údržby domácnosti nebo trávení volného času.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FuturePage;
