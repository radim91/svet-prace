"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import CollapseButton from "@/components/UI/CollapseButton";
import AudioPlayer from "@/components/UI/AudioPlayer";
import Path from "@/enum/path";
import SideImage from "@/components/UI/SideImage";
import ImageDesc from "@/components/UI/ImageDesc";
import SubchapterHeading from "@/components/UI/SubchapterHeading";

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
            <title>Spravedlivá transformace - Svět práce</title>
            <div className="mx-auto headings">
                <h1 className={`mt-6 text-5xl text-center ${toggleMode === Mode.FUN ? "green" : "blue"}`}>
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
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/transformation/01.webp"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/transformation/02.png"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <ImageDesc
                    description="Zachrání planetu superhrdina z Kryptonu, nebo miliardář ze Sillicon Valley?
                    Nebo se ji pokusíme zachránit radši všichni dohromady?"
                />
                <p className="mt-4 mb-4">
                    Člověk by doufal, že si po všem tom shonu devatenáctého i dvacátého století konečně 
                    oddechne. Práva jsou vybojována, velké dikatury padly, technologie by nám snad mohly 
                    umožnit méně pracovat a více odpočívat, jenže není tomu tak.
                </p>
                <p className="mb-4">
                    Tak co je to <span className="green">tentokrát</span>?
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Filmům jako jsou ty o Jamesu Bondovi nebo série Mission:Impossible máme tendenci 
                        se smát – co si scenáristé vymyslí příště? Jaké další ohrožení lidstva a kterého 
                        velkého padoucha budou muset hrdinové porazit? Bohužel, realita není filmům vzdálená 
                        tak, jak bychom si přáli. Obzvláště od té doby, co žijeme v globální společnosti, 
                        máme i globální problémy – a globální hrozby. Od nukleaární apokalypsy, přes pandemie
                        , po klimatickou krizi a války, zdá se, že je trochu v povaze velké společnosti 
                        přinášet s sebou velké problémy. Naštěstí – podobně jako ve filmech – kde jsou 
                        pomyslní padouši a katastrofy, tam jsou i hrdinové a hrdinky.
                    </p>
                    <Image
                        src="/images/chapters/transformation/03.png"
                        alt="obr 3" 
                        width={300}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-4">
                    Bohužel, výzvy jednadvacátého století nabraly doslova planetární rozměr.
                    Možná si říkáte, jak to ale souvisí se světem práce?
                </p>
                <p className="mb-4">
                    Lidská činnost (a tudíž i práce) je primárním zdrojem samotné klimatické změny, která 
                    planetu a lidi na ní ohrožuje. To za prvé.
                </p>
                <p className="mb-12">
                    A za druhé? Změny, které budeme muset nejspíše udělat, abychom se vyhnuli poněkud 
                    “nepříjemným” problémům, jako je potenciální zánik veškerého života, s prací souvisí taky.
                    A s bojem za její spravedlivou podobu, který tady společně studujeme, úplně nejvíc.
                </p>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <SubchapterHeading
                        id="1"
                        chapterNumber="6.1"
                        chapterTitle="Calling Planet Earth aneb Čtvrtá průmyslová revoluce"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={6} />
                    <div className="flex justify-center mt-8">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/04.jpg"
                                alt="obr 4" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/05.jpg"
                                width={1125}
                                height={633}
                                alt="obr 5" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Proměny jihomoravské vesnice – extrémní meteorologické jevy jako tornádo si s malebností 
                        domů starosti moc nedělají"
                    />
                    <p className="mt-4 mb-4">
                        Lidé svou prací vždy utvářeli podobu krajiny a měnili přírodu. To, že se naše planeta 
                        mění, není opravdu žádná novinka.
                    </p>
                    <p className="mb-4">
                        Během několika posledních generací se ale využívání přírody člověkem zintenzivnilo až do 
                        té míry, že znamená nebezpečí pro život. A to už novinka je.
                    </p>
                    <p className="mb-4">
                        Od dob průmyslové revoluce se průměrná teplota planety zvýšila o cca 1,2 °C. Zní to jako 
                        nic, že? A přesto už i tady u nás, v mírném pásu střední Evropy, <span className="green">kvůli tomu</span> pozorujeme 
                        každoroční teplotní rekordy, neúrodu, extrémní výkyvy počasí, záplavy, bouře, tornáda nebo požáry.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Kdybyste třeba nevěřili nám, možná vás <Link href="https://science.nasa.gov/climate-change/evidence/" target="_blank" className="underline">přesvědčí NASA</Link>{" "}
                            – to jsou ti lidi, co dostali pár Američanů na Měsíc – a ti to říkají jasně. Klimatická 
                            změna je dnes už holt prokázaná věc a kdo o ní pochybuje, pochybuje o milionech popsaných stránek vědeckých textů.
                        </p>
                    </div>
                    <p className="mb-8">
                        Hlavní příčinou celého procesu je skutečnost, že lidé spalováním uhlí, ropy a plynu do ovzduší 
                        přidávají uhlík, který byl po miliony let uložen pod zemí. A víte jak to je, když se vytáhne 
                        něco, co mělo zůstat schované…
                    </p>
                    <Image
                        src="/images/chapters/transformation/06.jpg"
                        alt="obr 6"
                        width={400}
                        height={633}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Oteplování vědci poprvé pozorovali v roce 1938 a od poloviny století přibývá varování, že spalování fosilních paliv 
                        ho dále urychluje. Začalo se mluvit <span className="green">o globálním oteplování</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Je ale pravda, že změna teploty není tím jediným, co se na planetě děje. Právě proto se teď už tolik nepoužívá 
                            pojem “globální oteplování” a sérii složitých a vnitřně provázaných změn planetárního rozsahu se říká spíš “klimatická změna”.
                        </p>
                    </div>
                    <p className="mb-4">
                        Změny klimatu s sebou kromě extrémních výkyvů počasí a sucha nesou třeba i šíření tropických chorob, tání ledovců 
                        a stoupání hladiny moří, vymírání živočišných a rostlinných druhů 
                        následované <Link href="https://www.spolecenskaodpovednost.cz/bez-vcel-bychom-prisli-o-60-potravin/" target="_blank" className="underline">rozpadem celých ekosystémů</Link>, 
                        a <span className="green">zvýšenou hrozbu konfliktů</span>, způsobených bojem o zdroje pitné vody a půdu. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Pokud by se vám to zdálo přehnané, pak vězte, že i za slavnou vlnu revolucí v arabských zemích v letech 2010 
                            až 2012, která dala světu krátkodobou naději na demokratický obrat v jinak autoritářském regionu, stála z 
                            velké části… klimatická změna. Ta totiž přinesla neobvyklé sucho a velkou neúrodu, ta zase nezaměstnanost a 
                            bídu a od té byl jen krůček k tomu, aby pomyslný sud s dynamitem vybuchl. Klimatická změna může dokonce i 
                            za <Link href="https://blogs.worldbank.org/en/arabvoices/climate-change-conflict-mena " target="_blank" className="underline">vzestup několika teroristických organizací</Link> – a 
                            pak že “počasí” je to nejméně důležité téma…
                        </p>
                        <Image
                            src="/images/chapters/transformation/07.jpg"
                            alt="obr 7"
                            width={500}
                            height={633}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-8">
                        A co české luhy a háje? Že by se naší přívětivé a mírně zvlněné krajině podařilo držet stranou světových problémů?
                    </p>
                    <Image
                        src="/images/chapters/transformation/08.png"
                        alt="obr 8"
                        width={600}
                        height={633}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Bohužel, právě naopak. Oteplení na našem území probíhá skoro dvakrát rychleji než ve světovém měřítku. Za posledních 
                        šedesát let zhruba o 2 °C. Mezi důsledky, které už teď (za uplynulé desetiletí) můžeme pozorovat patří extrémní 
                        sucho pustošící krajinu i zemědělství a s ním spojené odumírání smrkových lesů, záplavy (u nás i v přilehlých zemích), 
                        bouře o neobvyklé síle, popřípadě doprovázené extrémními jevy jako bylo tornádo na Jižní Moravě.
                    </p>
                    <div className="flex justify-center mt-8">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/09.jpg"
                                alt="obr 9" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/10.jpg"
                                width={1125}
                                height={633}
                                alt="obr 10" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Následky tornáda v Moravské Nové Vsi"
                    />
                    <p className="mt-4 mb-4">
                        A takových jevů bude s dalším oteplováním ještě přibývat.
                    </p>
                    <p className="mb-8">
                        A co to udělá s námi, lidmi? Dalo by se na to přece (sobecky, ale přirozeně) nahlížet tak, že se to většiny z nás 
                        netýká – ti, který mají na zahrádce moc sucho, nebo naopak za domem věčné povodně, ať se odstěhují jinam. Ve městech 
                        si pořídíme klimatizace, začnem se trochu jinak oblékat a prostě budeme žít a pracovat jako předtím. 
                    </p>
                    <Image
                        src="/images/chapters/transformation/11.jpg"
                        alt="obr 11"
                        width={500}
                        height={633}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        Jenže tak to nepůjde.
                    </p>
                    <Image
                        src="/images/chapters/transformation/12.png"
                        alt="obr 12"
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Citace: Mezinárodní organizace práce (2018)"
                    />
                    <p className="mt-4 mb-4">
                        Jde o to, že moderní společnost je neuvěřitelně logisticky složitá a provázaná. Problémy “jednoho zemědělce”, “jednoho 
                        lesa” nebo “jedné země” se chtě nechtě dotknou všech. Ale nejspíš <span className="green">ne všech stejně…</span>
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Zatím se zdá, že nejužší vrstva bohatých a mocných spíše, než aby vymýšlela pro nás všechny geniální technologická 
                            řešení možné krize, staví si v pouštích a bývalých jaderných 
                            silech luxusní bunkry <Link href="https://edition.cnn.com/2024/08/07/style/underground-bunkers-super-rich/index.html" target="_blank" className="underline">pro sebe</Link>, 
                            <Link href="https://www.vice.com/en/article/billionaires-are-building-luxury-bunkers-to-escape-doomsday/" target="_blank" className="underline">svou rodinu a pár kamarádů</Link>, 
                            nebo najímá firmy, které mají <Link href="https://www.theguardian.com/business/2024/nov/20/mckinsey-fossil-fuels " target="_blank" className="underline">celou situaci s klimatickou krizí zahladit</Link>.
                        </p>
                    </div>
                    <p className="mb-4">
                        Dobrá zpráva je, že dnes už máme k dispozici technologické nástroje k tomu, abychom klimatickou změnu zastavili.{" "}
                        <span className="green">“Skoro” nic nám nebrání</span>, abychom přešli na zelenou ekonomiku a předešli tak černým scénářům, na které veřejnost 
                        již několik desetiletí upozorňují vědci i klimatičtí aktivisté.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Skoro nic, kromě nás samotných a naší neochoty uvěřit nepříjemným zprávám. 
                        </p>
                        <Image
                            src="/images/chapters/transformation/13.jpg"
                            alt="obr 13"
                            width={400}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-8">
                        Na prvních opatřeních ke zmírnění klimatické změny se OSN usnesla již v roce 1992. Aktuálně nejvýraznější opatření proti 
                        klimatické změně v našem prostoru je „Zelená dohoda pro Evropu“, známá také pod originálním názvem „Green Deal“, ke které 
                        se státy Evropské unie zavázaly roku 2019. Hlavním cílem této iniciativy je dosáhnout toho, aby se emise skleníkových plynů 
                        do roku 2030 snížily o 55 % ve srovnání s rokem 1990 a do roku 2050 dosáhnout uhlíkové neutrality, což jinými slovy znamená 
                        úplný konec spalování fosilních paliv včetně ukončení činnosti uhelných elektráren.
                    </p>
                    <Image
                        src="/images/chapters/transformation/14.gif"
                        alt="obr 14"
                        width={500}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        „Zelená dohoda pro Evropu obsahuje opatření ke snížení emisí, investice do špičkového výzkumu a inovací a ochranu přírodního 
                        prostředí evropského kontinentu. Druhým cílem dohody je transformace evropské ekonomiky na dlouhodobě udržitelnou, tedy aby 
                        byl možný její růst bez navyšování využití přírodních zdrojů. Třetím významným principem je, aby během této transformace byl 
                        brán ohled na potřeby všech lidí, a mají být podporovány regiony, jichž se změny dotýkají, proto se mluví o spravedlivé transformaci.“
                    </p>
                    <p className="mb-8 text-end">
                        Sondy Revue, č. Zelená ekonomika (2022)
                    </p>
                    <p className="mb-8">
                        Proti Green Dealu se ale také ozývají různé kritiky:
                    </p>
                    <Image
                        src="/images/chapters/transformation/15.png"
                        alt="obr 15"
                        width={800}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        Na všech těchto obavách něco je. 
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/38cfssG_NSY?si=biD4lmQOPeiNPdPo" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto mb-8 rounded"
                    />
                    <p className="mb-4">
                        A obzvláště nás zajímají ty, co se týkají světa práce.
                    </p>
                    <p className="mb-8">
                        Než se do toho pustíme konkrétně, máme tu ještě podcast pro ty z vás, co by se celým Green Dealem chtěli zabývat hodně do hloubky.
                    </p>
                    <div className="mb-8">
                        <AudioPlayer
                            blueHeading={"Podcast"}
                            blackHeading={"Zelená dohoda pro Evropu"}
                            legend={"4 audiostopy na téma adaptace na klimatickou změnu, dekarbonizaci a témata spjatá se zelenou ekonomikou."}
                            audioSrc={"/audio/gd_01.mp3"}
                            duration={"18:21"}
                        />
                    </div>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <SubchapterHeading
                        id="2"
                        chapterNumber="6.2"
                        chapterTitle="All I want for Christmas Is… Spravedlivá transformace!"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={6} />
                    <div className="flex justify-center mt-8">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/16.jpg"
                                alt="obr 16" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/transformation/17.jpg"
                                width={1125}
                                height={633}
                                alt="obr 17" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Zelená ekonomika nejsou jen “soláry”, ale kupříkladu i vegetariánské potraviny..."
                    />
                    <p className="mt-4 mb-8">
                        Když se kácí les, lítají třísky – není ale možné, aby na “obyčejné lidi” lítaly víc, než na ostatní.
                    </p>
                    <Image
                        src="/images/chapters/transformation/18.jpg"
                        alt="obr 18"
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Je na místě říct, že by zelená agenda <span className="green">bez kompenzačního aspektu byla nespravedlivá</span> a vedla k prohlubování 
                        stávajících rozdílů životní úrovně. A to jak mezi jednotlivými regiony, tak i mezi jednotlivými společenskými skupinami.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                             Proč? Nejenom z důvodů již uvedených výše, že by případné zavírání fosilního průmyslu, nebo masivní 
                            přechod na elektroauta a podobné průmyslové změny připravily nemálo lidí o práci. Obecne se bude muset 
                            nejen průmysl, ale i zemědělství, urbanistika, design, cestování, stravování – v podstatě každá sféra 
                            lidské činnosti – proměnit a adaptovat. Něco zvládneme jako jedinci, rodiny a komunity sami, ale 
                            většinou to budou velké změny –  a budou hodně stát. 
                        </p>
                        <div className="flex justify-center mb-8">
                            <div className="w-1/2">
                                <Image 
                                    src="/images/chapters/transformation/19.gif"
                                    alt="obr 9" 
                                    width={1125}
                                    height={633}
                                    className="rounded-l w-full"
                                />
                            </div>
                            <div className="w-1/2">
                                <Image 
                                    src="/images/chapters/transformation/20.gif"
                                    width={1125}
                                    height={633}
                                    alt="obr 10" 
                                    className="rounded-r w-full"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            A to není možné pouze přenést na, jak se dnes říká, koncového uživatele. Ať už v podobě daní, či ořezání 
                            sociální sféry, ztráty pracovních míst, či inflace, nárůstu cen energií, či stravování – tyhle věci 
                            nemůžeme řešit jen jako jedinci. Bio veganská strava a dálkové cestování vlakem jsou dnes, navzdory tomu, 
                            že jsou zdravé a správné pro planetu, spíše pro ty movitější – mají tudíž ostatní trpět hlady a sedět doma? To asi ne. 
                        </p>
                        <p className="mb-4">
                            Do procesu musí vstoupit samosprávy, stát i nadnárodní institutuce a je jen spravedlivé, aby více přispívali 
                            ti, kdo doteď z celé situace více profitovali (zkuste se někdy podívat, jaká je finanční situace v oboru fosilního průmyslu).
                        </p>
                    </div>
                    <Image
                        src="/images/chapters/transformation/21.png"
                        alt="obr 21"
                        width={800}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Foto z pochodu Evropské odborové konfederace za spravedlivou transformaci
                        Citace z brožury Trade Unions Going Green (2021, autorka Salomé Teuteburg)"
                    />
                    <p className="mt-4 mb-4">
                        Zkušenosti a pozitivní vzory posledních dekád naštěstí ukazují, že starost o životní prostředí a sociální 
                        spravedlnost nemusí být v rozporu, ale naopak, že se oba principy vzájemně podporují.
                    </p>
                    <p className="mb-4">
                        Již v 80. letech minulého století nad těmito otázkami začali uvažovat <span className="green">odboráři v USA</span>. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Je zajímavý paradox – anebo je to možná naopak zákonité – že v USA, kolébce globálního kapitalismu, 
                            jak ho známe, mají odbory silnou, tradiční a často i respektovnaou pozici. Kupříkladu v Hollywoodu 
                            si bez nich moc neškrtnete – musíte přinejmenším odjet natáčet film do Kanady a taky se můžete 
                            rozloučit se známými herci, kameramany a podobně, kteří všichni svědomitě s odboráři drží partu!
                        </p>
                    </div>
                    <p className="mb-8">
                        Jeden z amerických odborových lídrů Tony Mazzocchi (1926–2002) roku 1993 poprvé použil termín spravedlivá 
                        transformace („just transition“). V jeho základu stála myšlenka, že přechod na zelenou ekonomiku má proběhnout 
                        s přispěním hlasu těch, které tento přechod bezprostředně ohrožuje a za významných veřejných investicí, které 
                        budou tlumit dopady změn. 
                    </p>
                    <Image
                        src="/images/chapters/transformation/22.png"
                        alt="obr 22"
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Bez odborů by v USA neměli nejen spravedlivou transformaci, ale ani... pivo?"
                    />
                    <p className="mt-4 mb-4">
                        Spravedlivá transformace byla původně jen odborářským postojem ke klimatické 
                        změně, <span className="green">postupně se však stala i součástí státních a mezinárodních politik</span> na
                        cestě k uhlíkové neutralitě. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            A nebylo to poprvé, co odbory podnítily pozitivní změnu na širší úrovni, jak už my, čtenáři Světa práce, dobře víme.
                        </p>
                        <Image
                            src="/images/chapters/transformation/22.gif"
                            alt="obr 22"
                            width={400}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-8">
                        Ostatně i jeden z operačních programů Zelené dohody pro Evropu nese název Fond spravedlivé transformace.
                    </p>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <SubchapterHeading
                        id="3"
                        chapterNumber="6.3"
                        chapterTitle="We Shall Overcome aneb Nikdo nesmí zůstat opomenut"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={6} />
                    <p className="mt-8 mb-8">
                        Boj s klimatickou změnou bude znamenat významnou restrukturalizaci hospodářství a zánik mnoha pracovních míst. 
                        A to nikdy není příjemné. 
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/pPRTSaXnwew?si=0886pBFuqAlsNzeU" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="Filmy nám ukazují, že se jako lidstvo dokážeme zotavit i z “událostí” jako je Zombie apokalypsa, 
                        tak snad tu zelenou transformaci nějak zvládneme! (Závěrečná scéna z filmu World War Z)"
                    />
                    <p className="mt-4 mb-4">
                        Bude proto nutné, aby veřejné instituce (obce, státy, EU) a také největší znečišťovatelé <span className="green">podporovaly 
                        to nejvíce zranitelné obyvatelstvo</span>. Toho je možné docílit například zavedením zvláštní sociální podpory 
                        pro ohrožené pracující a jejich rodiny či předčasnými důchody pro vybrané kategorie pracujících, financováním 
                        rekvalifikačních kurzů, cíleným vytvářením zelených míst a významnými investicemi do regionů, jejichž 
                        ekonomický základ doposud tkvěl ve fosilním průmyslu.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Jako všechny složité procesy – když “to” necháme, aby to proběhlo samo, na ty nejzranitelnější nebude brán 
                            ohled. Jako když jdete na výlet do hor v nesourodé partě, pokud ti nejsilnější a nejrychlejší zálesáci nebudou 
                            brát ohledy na “městské krysy” a “snowflakes”, dopadne to přinejlepším tak, že do horské chaty přijdou všichni 
                            asi s týdenním rozestupem. A přinejhorším? Inu, hororů z hor už vzniklo dost, tak se nechte ve 
                            svých představách <Link href="https://www.imdb.com/list/ls056814871/" target="_blank" className="underline">inspirovat</Link>.
                        </p>
                    </div>
                    <p className="mb-4">
                        Co nám může pomoci, aby celý přechod na zelenou ekonomiku proběhl spravedlivě?
                        Jednoznačně, když půjde o participativní proces – tudíž se na něm budeme <span className="green">podílet (participovat) všichni</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/transformation/23.gif"
                            width={500}
                            height={300}
                            alt="obr 23"
                            className="mx-auto mt-4 rounded"
                        />
                        <ImageDesc
                            description="Jednostranné rozhodování není demokratické ani dlouhodobě 
                            udržitelné – a taky není zdravé na srdíčko."
                        />
                    </div>
                    <p className="mb-8">
                        Z toho důvodu je důležité, aby se do diskuze o formě zeleného přechodu zapojily všechny zúčastněné strany: zaměstnanci, 
                        zaměstnavatelé, obyvatelstvo nejvíce dotčených měst a míst, odborná veřejnost a veřejné instituce. Všichni musí dostat 
                        prostor – každý musí hájit své zájmy a zároveň naslouchat těm ostatním. U pomyslného kulatého stolu je třeba diskutovat, 
                        navrhovat řešení, vzájemně se konfrontovat, a nakonec dojít ke konsenzu.
                    </p>
                    <Image
                        src="/images/chapters/transformation/24.png"
                        width={500}
                        height={300}
                        alt="obr 24"
                        className="mx-auto rounded"
                    />
                    <ImageDesc
                        description="Jako rytíři kulatého stolu, srocení kolem Svatého grálu, i my musíme 
                        spojit síly pro dobro spravedlivé transformace."
                    />
                    <p className="mt-4 mb-4">
                        Jelikož jednou ze zásadních sfér potenciálního konfliktu je práce, je logické, že zásadní roli mohou sehrát právě odborové 
                        organizace. Díky svým už tradičním nástrojům kolektivního vyjednávání a sociálního dialogu jsou schopné vést tuto složitou 
                        debatu se zaměstnavateli a institucemi. Oslabení sociálního dialogu (a nezapojení odborů nebo zaměstnanců do green dealu) 
                        by znamenalo hrozbu pro spravedlivou transformaci. 
                    </p>
                    <p className="mb-8">
                        Naopak posilování dialogu sociálních partnerů na všech úrovních (podnikové, regionální, státní, evropské) jsou předpokladem 
                        spravedlivé transformace, která zmírní negativní důsledky nadcházejících změn pro zaměstnanost a může zaručit důstojnou práci 
                        během zelené transformace hospodářství.
                    </p>
                    <Image
                        src="/images/chapters/transformation/25.gif"
                        width={500}
                        height={300}
                        alt="obr 25"
                        className="mx-auto mb-8 rounded"
                    />
                    <p className="mb-4">
                        Odbory už teď začleňují ekologická témata do kolektivního vyjednávání. Je ale třeba, aby od počátku figurovaly v zeleném 
                        přechodu jako aktivní tvůrci politických strategií, a ne pouze pasivní objekt nástrojů, které vymyslel někdo jiný. 
                    </p>
                    <p className="mb-4">
                        Na národní a mezinárodní úrovni pak už jde o dekarbonizaci celých regionů. Odborový tlak na zelená témata může vést 
                        také k aktivnímu utváření zelených míst.
                    </p>
                    <Image
                        src="/images/chapters/transformation/26.png"
                        width={500}
                        height={300}
                        alt="obr 26"
                        className="mx-auto rounded"
                    />
                    <ImageDesc
                        description="Citace: Montserrat Mir Roca, generální tajemnice EOK/ETUC (2019)"
                    />
                    <p className="mt-4 mb-8">
                        Sečteno podtrženo, přechod na zelenou ekonomiku nesmí znamenat sociální ohrožení, ale příležitost. Každá změna může 
                        prohlubovat rouzdíly, ale dopustíme-li to u něčeho tak velkého, jako je potenciální změna celoplanetárního hospodářského 
                        systému, koledujeme si o velký problém.
                    </p>
                    <Image
                        src="/images/chapters/transformation/27.gif"
                        width={500}
                        height={300}
                        alt="obr 27"
                        className="mx-auto mb-8 rounded"
                    />
                    <p className="mb-4">
                        Změna se nestane ze dne na den, jistě ne v rámci jednoho volebního období – i proto má mnoho politiků pocit, že “tohle” 
                        není jejich problém. Přechod na novou energetiku a ekonomiku zahrnuje si žádá strategické myšlení a systematickou práci – 
                        na plánování nových udržitelných ekonomických aktivit se zaměřením na obnovitelné technologie, výzkumu a inovacích, nebo 
                        posunu k ekologické zemědělské produkci. 
                    </p>
                    <p className="mb-4">
                        Ve všech těchto oborech bude možné vytvořit mnoho pracovních míst. Ale nevytvoří se sami od sebe. Je třeba zachovat 
                        princip participace všech zúčastněných stran. 
                    </p>
                    <p className="mb-4">
                        Jako inspirace může sloužit ukončený přechod na zelenou ekonomiku z německého Porúří, nebo současná úspěšná vyjednávání 
                        o spravedlivé transformaci ve Španělsku a Řecku.
                    </p>
                    <Image
                        src="/images/chapters/transformation/28.png"
                        width={500}
                        height={300}
                        alt="obr 28"
                        className="mx-auto mb-8 rounded"
                    />
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className={`${toggleMode === Mode.FUN ? "btn-primary-large-green" : "btn-primary-large"}`}
                        href={Path.DEMOCRACY}
                    >
                        <span className="text-white">Pokračovat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TransformationPage;
