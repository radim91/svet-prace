"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";

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
                    width={800}
                    height={600}
                    alt="obr 8"
                    className="rounded mx-auto mb-12"
                />
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">3.1</span>Intermezzo:
                        <br/>NeoAbsolutismus Strikes Back
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/tradition/tradition.svg"
                            width={200}
                            height={200}
                            alt="Tradice"
                        />
                    </div>
                    <Image
                        src="/images/chapters/tradition/09.jpg"
                        width={800}
                        height={600}
                        alt="obr 9"
                        className="rounded mx-auto mb-8 mt-8"
                    />
                    <p className="mb-4 text-center">
                        Vítězství revoluce netrvalo dlouho.
                    </p>
                    <p className="mb-4">
                        V padesátých letech 19.století u nás nastal takzvaný neoabsolutismus.
                    </p>
                    <p className="mb-4">
                        Ústava garantující omezení moci i parlament byly opět zrušeny a lidem
                        bylo znovu zakázáno “kecat do politiky” nebo protestovat.
                    </p>
                    <p className="mb-4">
                        Na druhou stranu, “true feudalismus” se úplně nevrátil. Státní správá už byla modernizovaná
                        a poddanství zůstalo zrušeno. A především – naplno se rozjel <span className="green">kapitalismus</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Každý den se pokládaly metry železnic, zakládály banky a akciové společnosti. Elity státu
                            (nejmocnější šlechtické rody a nejvyšší úředníci) vysílaly jasný signál: můžete zbohatnout,
                            ale do politiky nám nemluvte.
                        </p>
                        <Image
                            src="/images/chapters/tradition/10.jpg"
                            width={400}
                            height={600}
                            alt="obr 10"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-12">
                        V představě, že nové ekonomické elity nebudou kromě peněz chtít i moc, se ale neoabsolutismus
                        přepočítal. Po deseti letech padnul a vrátil se parlament. Vláda jednoho muže definitvně
                        zamířila do historie.
                    </p>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">3.2</span>Power to The People:
                        <br/>Postupná demokratizace
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <div className="absolute right-0 -mt-24">
                        <Image
                            src="/images/chapters/tradition/tradition.svg"
                            width={200}
                            height={200}
                            alt="Tradice"
                        />
                    </div>
                    <p className="mt-8 mb-4">
                        Po roce 1860 mohla demokracii a občanská práva nejdřív užívat jen úzká elita movitých mužů. V
                        prvních přímých volbách do vídeňského parlamentu roku 1873 mohlo například volit pouze 6 % 
                        dospělého obyvatelstva.
                    </p>
                    <p className="mb-4">
                        V následujících desetiletích se ale společnost stále rychleji demokratizovala a čím dál
                        tím víc lidí bylo integrováno.
                    </p>
                    <p className="mb-4">
                        Jedni z prvních na řadě byli dělníci a dělnice: ještě při revoluci 1848 se na ně nahlíželo 
                        jako na nebezpečnou lůzu, co nemá co ztratit. Konečně ale začalo všem docházet, že dělnictva
                        bude přibývat – stojí na něm totiž úspěch průmyslu. A tudíž bohatství všech. Rozšíření práv 
                        i na ně bylo <span className="green">nevyhnutelné</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/11.jpg"
                            width={600}
                            height={600}
                            alt="obr 11"
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-4">
                            Pro začátek bylo dělníkům a dělnicím dovoleno zakládat spolky a vydávat noviny.
                            Zní to jako málo? Po letech cenzury to byla skutečná výhra.
                        </p>
                    </div>
                    <p className="mb-4">
                        Pohled společnosti na dělníky se <span className="green">otočil o 180 stupňů</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/12.png"
                            width={400}
                            height={600}
                            alt="obr 12"
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-4 text-center">
                            Slavný obraz podobizna kováře Jecha od Karla Purkyněho
                        </p>
                        <p className="mb-4">
                            Znáte pojem zeitgeist? Ne, nemyslíme ten konspirační dokument, ale německé slovo,
                            které znamená “duch doby”. Jde o přesvědčení, že myšlenky a představy, které jsou
                            v dané době nejsilnější, se promítají do všeho, nebo (pop)kultury. Tak by se dalo
                            nahlížet na obraz Karla Purkyněho “Podobizna kováře Jecha” z roku 1860. Říkáte si,
                            co je sakra zajímavého na obrázku dělníka? No hlavně to, že vidíme dělníka při četbě,
                            neboli intelektuální činnosti – a to poprvé v dějinách českého výtvarného umění.
                            Je to vlastně doklad proměny myšlení lidí – a jejich názoru na manuálně pracující.
                        </p>
                    </div>
                    <p className="mb-4">
                        Stále ale ještě nevznikl zákon, který by umožnil existenci odborů, legalizoval
                        kolektivní smlouvy, nebo dovolil legálně stávkovat.
                    </p>
                    <p className="mb-8">
                        Což neznamená, že by se dělnictvo drželo zkrátka…
                    </p>
                </div>
            </div>
        </>
    );
};

export default TraditionPage;
