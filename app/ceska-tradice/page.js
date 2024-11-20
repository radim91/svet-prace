"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";

const TraditionPage = () => {
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
                    3. <span className="ms-2">Česká tradice</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    od kováře Jecha po zaplněný Václavák
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/tradition/tradition.svg"
                    width={300}
                    height={300}
                    alt="Tradice"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/tradition/01.png"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/tradition/02.webp"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mt-8 mb-4">
                    Stejně jako zbytek světa se během první poloviny 19.století{" "}
                    <span className="green">území dnešní České republiky</span>{" "}
                    rapidně změnilo. Průmyslová revoluce nás neminula – naopak, v rámci střední Evropy jsme
                    patřili k těm nejvíce zasaženým industrializací. Malé řemeslné dílny a koňské povozy
                    nahradily velké výrobní haly a železnice. Lidé z venkova se hrnuli za prací do měst. 
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Česká republika ani Česko se nám tehdy neříkalo. Byli jsme České země a patřili jsme
                        k habsburské říší (a.k.a. Rakousku-Uhersku). Na tomto území táhnoucím se od severní
                        Itálie až po západní Ukrajinu vládli skoro 4 století vousatí Rakušané (s čestnou výjimkou
                        Marie-Terezie), kteří sídlili ve Vídni. Říše se rozpadla po první světové válce v roce
                        1918, kdy mimo jiné vzniklo Československo v čele se slavným Tomášem Garriguem Masarykem.
                    </p>
                    <Image
                        src="/images/chapters/tradition/03.jpg"
                        width={400}
                        height={600}
                        alt="obr 3"
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-4">
                    Podobně jako <span className="green">v pubertě</span>, kdy se lidem strašně rychle změní
                    tělo, ale mozek nestíhá držet tempo, doslova brutální změny společnosti a ekonomiky
                    nedoprovázely odpovídající změny v oblasti politické. Stát se nestíhal změnit.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <Image
                        src="/images/chapters/tradition/04.gif"
                        width={400}
                        height={250}
                        alt="obr 4"
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-4">
                    Panovník měl pořád neomezenou moc, parlament ani volby neexistovaly, šlechta mohla své
                    poddané nutit k neplacené práci na svých pozemcích a slova jako svoboda, demokracie nebo
                    lidská práva se teprve dostávala do slovníku, ale mluvit o nich veřejně bylo úplně zakázáno,
                    na což dohlížela i <span className="green">tajná policie</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Většina operací tajné služby nevypadala jako ve světě Jamese Bonda. Kníže Metternich,
                        který měl v Rakousku pod palcem kdeco, trval především na tom, aby si mohl přečíst veškerou
                        poštu, která říší projde – což bylo opravdu hodně, vzhledem k tomu, že zde byl poštovní uzel
                        Evropy. Kolik nebezpečných anarchistických či jiných mailů si v reálu před spaním přečetl,
                        se nás neptejte, ale držet “nebezpečné živly” zkrátka se mu celkem dařilo.
                    </p>
                    <Image
                        src="/images/chapters/tradition/05.jpg"
                        width={400}
                        height={600}
                        alt="obr 5"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4 text-center">
                        Naštvanost lidí se ale nedala držet na úzdě navždy.
                    </p>
                    <p className="mb-4">
                        Podnikatele štvalo, že měli často větší majetky šlechta, ale nemohli ovlivňovat chod státu a
                        sedět ve vysokých úřadech. Dělníci byli frustrovaní z podmínek, ve kterých žili. A nikdo si
                        nemohl stěžovat, hlavně ne veřejně (v novinách), protože všude vládla tvrdá cenzura.
                    </p>
                </div>
                <p className="mb-8">
                    A tak logicky vypukla revoluce. Shodou okolností nejen u nás, ale prakticky v celé Evropě, kterou
                    v letech 1848–1849 proletěla doslova vlna různých povstání.
                </p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/5P_bnP_yn_E?si=vr78kN4x6SKtqRSv" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    className="mb-8 rounded mx-auto"
                ></iframe>
                <p className="mb-4">
                    Bylo to období politických bouří a pouličních protestů. Na našem území šlo ale úplně o první
                    moderní revoluci!
                </p>
                <p className="mb-4">
                    A úplně poprvé se tu taky řešily dnes už samozřejmé věci: že všichni jsou si před zákony rovni,
                    že vůle občanů je víc než vůle panovníka a že jeho moc má být omezena ústavou a dalšími zákony,
                    nebo že si občané mají volit své zástupce, kteří se pak budou věnovat přijímání zákonů a chodu státu. 
                </p>
                <p className="mb-8">
                    Speciálně u nás, protože jsme neměli vlastní národní stát, se řešil taky problém nezávislosti a
                    svrchovanosti vlastního národa (rozuměj: aby to za nás neřídil nikdo jiný odněkud z Vídně).
                </p>
                <Image
                    src="/images/chapters/tradition/06.png"
                    width={560}
                    height={600}
                    alt="obr 6"
                    className="rounded mx-auto mb-8"
                />
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/FJt7gNi3Nr4?si=4BR1Y9LBHyVG1zrd" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    className="mb-8 rounded mx-auto"
                ></iframe>
                <p className="mb-4 text-center">
                    V rámci této revoluce se z poddaných se stali občané.
                </p>
                <p className="mb-4">
                    Na našem území bylo definitivně zrušeno poddanství i povinnost roboty (nucené a neplacené práce pro
                    vrchnost) a taky byla třeba poprvé založena ministerstva.
                </p>
                <p className="mb-8">
                    Šlechtě to vzalo spoustu práv, ale také povinností (už se nemusela starat o většinu občanů nebo fungování
                    věcí veřejných – to byla starost státu). Staré časy (tedy feudalismus) skončily. Roztočila se ruleta{" "}
                    <Link href="https://cs.wikipedia.org/wiki/Moderna" target="_blank">moderny</Link> a hlavními výherci
                    byli protentokrát rolníci, státní úředníci a také podnikatelé.
                </p>
                <Image
                    src="/images/chapters/tradition/07.png"
                    width={600}
                    height={600}
                    alt="obr 7"
                    className="rounded mx-auto mb-8"
                />
                <p className="mb-4">
                    V době revoluce se taky poprvé na našem území formuloval moderní odborový program. Do té doby veřejnost o
                    dělníky příliš nestála. Teď mohli vystoupit na veřejnost se svými požadavky. Ale když říkáme dělníci,
                    myslím tím bohužel opravdu jen dělníky. Dělnice měly <span className="green">pořád smůlu</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/6-Hc0nqJUi4?si=nNLTVRODAKWwebQ9" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                        className="mb-8 mt-4 rounded mx-auto"
                    ></iframe>
                    <p className="mb-4">
                        To nejlepší, na co to mohly ženy v 19.století dotáhnout, byly “dcery národa”. O opravdu samostatné a
                        rovnocenné pozice musely ještě nějaký ten pátek bojovat...
                    </p>
                </div>
                <Image
                    src="/images/chapters/tradition/08.svg"
                    width={600}
                    height={600}
                    alt="obr 8"
                    className="rounded mx-auto mb-8"
                />
            </div>
        </>
    );
};

export default TraditionPage;
