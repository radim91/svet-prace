"use client";

import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import Mode from "@/enum/mode";
import { useContext, useState } from "react";
import CollapseButton from '@/components/UI/CollapseButton';
import TimelineItem from "@/components/UI/TimelineItem";

const FearlessPage = () => {
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
                    2. <span className="ms-2">Pracovat a nebát se</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Working class heroes
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/fearless/paper.svg"
                    width={300}
                    height={300}
                    alt="Papír"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/fearless/01.jpg"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/fearless/02.jpg"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mt-8 mb-4">
                    Bez průmyslové revoluce – o které jsme toho namluvili dost v minulé
                    kapitole – bychom v Evropě neměli takové materiální podmínky, jaké máme.
                    To se ale nestalo samo. Na začátku byl obrovský hospodářský růst založený
                    na nekvalifikované a nebezpečné práci a otřesných životních podmínkách.
                </p>
                <p className="mb-4">
                    Takže, kdo byli ti Avengers, kteří tuhle situaci změnili? Budete se divit,
                    ale tahle parta se jmenovala <span className="green">“dělnické hnutí”</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <Image
                        src="/images/chapters/fearless/03.png"
                        width={400}
                        height={600}
                        alt="obr 3"
                        className="rounded mx-auto"
                    />
                    <p className="mt-8 mb-4 text-center">
                        Oops, cože? Tady vlaje rudá vlajka?
                    </p>
                    <p className="mb-4">
                        Takzvané dělnické hnutí má v celém bývalém východním bloku (to jsme třeba
                        my, Polsko, Bulharsko, Německo, Kazachstán, Maďarsko, Slovinsko a tak
                        dále) nelichotivý zvuk. Tato slova si přivlastnila jedna strana a jemně
                        řečeno, k vytváření lepší budoucnosti jí nesloužila. Ve skutečnosti má ale
                        dělnické hnutí kořeny mnohem dříve než v dobách sovětského komunismu – a
                        bez tohoto hnutí bychom neměli dovolenou, nemocenskou, volné víkendy a podobně.
                    </p>
                </div>
                <p className="mb-12">
                    Nevěříte? Pojďte prozkoumat fascinující historii boje za to, co dnes vnímáme
                    jako normální a trochu nudné – jako třeba osmihodinový pracovní den – ale dřív to
                    byl naprostý sen.
                </p>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">2.1</span>Počátky odborových organizací
                        <br/>aneb Long time ago, in a galaxy far away
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/fearless/paper.svg"
                            width={200}
                            height={200}
                            alt="Papír"
                        />
                    </div>
                    <p className="mt-8 mb-4">
                        Na začátku byla bída. Tedy, ne všech. Bohatství společnosti v devatenáctém
                        století raketově rostlo, jenže stálo na levné, nekvalifikované a nebezpečné práci. 
                    </p>
                    <p className="mb-8">
                        Pracovní doba dosahovala běžně i 15 hodin denně, dělnické rodiny obývaly jednu
                        místnost bez pitné vody a čerstvého vzduchu a děti místo učení a hraní trávily
                        své dětství jako pomocníci u strojů, protože bez jejich příjmů by rodina nepřežila.
                    </p>
                    <Image
                        src="/images/chapters/fearless/04.png"
                        width={600}
                        height={600}
                        alt="obr 4"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4">
                        Tento systém neregulované námezdní práce vytvářel logicky mnoho sociálních problémů
                        a nebyl jakkoliv zákonně regulován. Státy nechtěly vstupovat do vztahů zaměstnavatelů
                        a zaměstnanců, jelikož <span className="green">továrny byly vnímány jako soukromý
                        prostor majitele</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Takové přemýšlení vychází z liberalismu – což je ale široký pojem, který dnes v běžné
                            mluvě znamená trochu něco jiného než dříve – liberál je ten, kdo není konzervativní.
                            (A obvykle žije v Praze a má hodně času na kavárny.)
                        </p>
                        <Image
                            src="/images/chapters/fearless/05.jpg"
                            width={400}
                            height={600}
                            alt="obr 5"
                            className="mb-8 rounded mx-auto"
                        />
                        <p className="mb-4">
                            Přesnější je tudíž pojem “laissez faire” – doslova “nechat být”, který se vztahuje přímo
                            k ekonomickému pojetí státu, který nezasahuje do byznysu svých obyvatel. Pokud mají všichni
                            “hráči” podobnou moc, kupní sílu, výkon a podobně, může to fungovat skvěle. V praxi se ale
                            nezasahování často mění v ochranu obrů před trpaslíky – a to není zrovna moc fér.
                        </p>
                    </div>
                    <p className="mb-4">
                        Pro ty, co z různých důvodů nemohli pracovat, navíc neexistoval žádný systém veřejné sociální
                        podpory. Není tak náhodou, že se průměrný věk dožití v dělnickém prostředí 19. století pohyboval
                        mezi 40 až 50 lety.
                    </p>
                    <Image
                        src="/images/chapters/fearless/06.png"
                        width={600}
                        height={600}
                        alt="obr 6"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4 text-center">
                        Dovedete si představit, že ve dvaceti byste za sebou měli půlku života?
                    </p>
                    <p className="mb-8">
                        Lidé si však tyto podmínky nechtěli nechat líbit. Dělníci a dělnice nacházeli kolektivní strategie
                        a nástroje na zmírnění bezvýchodnosti svých životů. Ty nazýváme souhrnným názvem dělnické hnutí.
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="w-1/4">
                            <Image 
                                src="/images/chapters/fearless/07.jpg"
                                alt="obr 1" 
                                width={400}
                                height={400}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/3 mt-8">
                            <Image 
                                src="/images/chapters/fearless/08.png"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <p className="mb-4">
                        Dělnickému hnutí se během 19. a 20. století podařilo dosáhnout <span className="green">zásadního zlepšení pracovních podmínek</span>,
                        kvality i důstojnosti života. Dělníci dosáhli zvýšení mezd a zavedení minimální mzdy, zkrácení
                        pracovních hodin a garance maximální pracovní doby, nároku na dovolenou, příspěvků při nemoci,
                        úrazu či nezaměstnanosti a v neposlední řadě také práva chodit k volbám.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        Takže ještě jednou: bez aktivity dělnického hnutí bychom pracovali za minumum, navíc bez záruky, že peníze opravdu dostaneme,
                        a klidně i dvacet hodin denně – nebo kolik by šéf chtěl, pokud by se nám něco stalo, nedostali bychom nikdy nic, a to i
                        kdyby se nám to stalo v práci. A navíc bychom nemohli k volbám, abychom náhodou nezatoužili “vyměnit” toho našeho šéfa
                        tak nějak shora. To zní docela jako... Peklo.
                    </p>
                    <p className="mb-8 text-center">
                        Jak se jim to podařilo? Hnutí mělo v jádru tři pilíře.
                    </p>
                    <Image
                        src="/images/chapters/fearless/09.svg"
                        width={600}
                        height={600}
                        alt="obr 3"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-8">
                        Veřejnost se ale snažili dělníci ovlivnit i prostřednictvím svých novin a časopisů. V každém větším městě vycházelo před
                        sto a více lety několik listů určených speciálně dělnictvu.
                    </p>
                    <Image
                        src="/images/chapters/fearless/10.png"
                        width={400}
                        height={600}
                        alt="obr 4"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4 text-center">
                        Trochu jako youtube channel 19.století.
                    </p>
                    <p className="mb-4">
                        Podnikatelé nejdřív odmítali existenci odborových organizací a státy, jak jsme si říkali, se do toho moc nechtěli míchat.
                        Naopak – existovaly i zákony proti odborům a jakékoliv kolektivní akci dělnictva. Pokud chtěli dělníci proti své bezvýchodné
                        situaci jakkoliv protestovat, riskovali vězení, nebo ztrátu zaměstnání – nikdo nechtěl zaměstnávat dělníky co své kolegy verbují k odborům.
                    </p>
                    <p className="mb-4">
                        To první, za co museli dělníci bojovat, bylo tudíž vůbec právo na existenci odborů. Dnes už je jejich
                        existence chráněná zákonem – nikdo vám to <span className="green">nemůže zakazovat</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Alespoň teoreticky. V praxi se o to mnoho firem snaží, kupříkladu Amazon, který nám domů vozí
                            všechny ty krásné knížky, je tím proslulý. 
                        </p>
                        <p className="mb-8">
                            Firmy ale bojují proti odborům a kolektivní síle pracujících i pomocí prekarizace práce, kterou jsme zmiňovali v minulé kapitole.
                            Pokud všichni v daném podniku pracují na živnostenský list a nikdy se nepotkají – a navíc podepíší takzvané NDAčko (mlčenlivost)
                            o výši svého platu, což mimochodem není legální – pak je šance, že se zaměstnanci spojí, aby bojovali společně, a ne proti sobě,
                            celkem minimální.
                        </p>
                        <Image
                            src="/images/chapters/fearless/11.png"
                            width={400}
                            height={400}
                            alt="obr 5"
                            className="mb-8 rounded mx-auto"
                        />
                        <p className="mb-4">
                            Nízký plat a vysoký nájem je strategie, která fungovala v Americe 19.století a funguje i teď – hlavně držet pracující ve stresu! 
                        </p>
                    </div>
                    <p className="mb-12">
                        Odkdy jsou vlastně odbory legální? 
                    </p>
                    <div className="flex mb-12">
                        <TimelineItem year="1824" flag="en" name="Anglie" />
                        <TimelineItem year="1866" flag="be" name="Belgie" />
                        <TimelineItem year="1868" flag="fr" name="Francie" />
                        <TimelineItem year="1869" flag="de" name="Německo" />
                        <TimelineItem year="1870" flag="at" name="Rakousko" additional="(včetně území dnešní ČR)" />
                        <TimelineItem year="1905" flag="ru" name="Rusko" />
                        <TimelineItem year="1908" flag="nz" name="Nový Zéland" />
                        <TimelineItem year="1917" flag="mx" name="Mexiko" />
                        <TimelineItem year="1926" flag="in" name="Indie" />
                        <TimelineItem year="1935" flag="us" name="USA" additional="(na federální úrovni)" />
                        <TimelineItem year="1947" flag="jp" name="Japonsko" end="true" />
                    </div>
                    <p className="mb-8">
                        Můžeme být na sebe pyšní – třeba takovou Ameriku jsme předběhli o dobrých pětašedesát let.
                    </p>
                    <div className="blue mb-8">
                        zde bude anketa
                    </div>
                    <p className="mb-8">
                        Po legalizaci postupně odborové organizace vypracovaly a systematizovaly různé nástroje na zlepšení podmínek práce: na jedné straně se
                        stále více prosazovalo kolektivní vyjednávání o podobě kolektivní smlouvy, kdy zástupci dělníků
                        {" "}<span className="green">jednají s vedením podniku</span> o svých pracovních poměrech.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/fearless/12.jpg"
                            width={400}
                            height={400}
                            alt="obr 12"
                            className="mb-8 rounded mx-auto"
                        />
                        <p className="mb-4">
                            Takové smírné jednání je v zájmu obou stran: zaměstnavatel se sice vzdá části svých zisků a například zvýší mzdy, výměnou za to ale
                            získává spokojenost a loajalitu zaměstnanců, kteří budou pracovat líp a zůstanou u něj delší dobu, takže v součtu zvýší i on svůj
                            zisk. Dnešní řečí by se tomu dalo říct “win-win situation”.
                        </p>
                    </div>
                    <p className="mb-4">
                        V případě, kdy nebylo dosaženo dohody, odbory rozvíjely protestní činnost, která mohla vyústit i 
                        do <span className="green">stávky</span>. Legalizace stávky se také běžně
                        stávala součástí zákonů legalizující odborovou činnost.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        Stávka, tedy situace, kdy zaměstnanci prostě “nejdou do práce”, je u nás ještě stále vnímána často negativně. Její účastníci jsou
                        “nemakačenka”, kteří jen chamtivě chtějí víc. Ve skutečnosti jde o geniální strategii, jak bez násilí bojovat s někým mnohem silnějším.
                    </p>
                    <Image
                        src="/images/chapters/fearless/13.jpg"
                        width={600}
                        height={400}
                        alt="obr 7"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4 text-center">
                        Stávkovat není žádná ostuda – dělají to i milionáři.
                    </p>
                    <p className="mb-4">
                        V prvních dekádách dvacátého století dosáhly odbory mnoha dříve nepředstavitelných vymožeností. Dětství bez práce, starobní důchody,
                        bezpečnost a důstojnost práce, nárok na dovolenou či zákonnou garanci minimální mzdy a maximální pracovní doby se pomalu stávaly realitou.
                        Ty nejhorší nešvary z doby formování kapitalismu se podařilo se zlepšením podmínek práce a životů pracujících výrazně zkrotit.
                    </p>
                    <p className="mb-8">
                        Původně vykořenění a strádající dělníci a dělnice na přelomu 19. a 20. století vstupovali do spolků, sportovních klubů, v tisku se
                        vyjadřovali k veřejným záležitostem nebo mohli volit své zástupce do parlamentu.
                    </p>
                    <Image
                        src="/images/chapters/fearless/14.jpg"
                        width={400}
                        height={400}
                        alt="obr 14"
                        className="mb-12 rounded mx-auto"
                    />
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">2.2</span>Give peace a chance
                        <br/>aneb Odbory jako strůjce sociálního smíru (1918–1939)
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <div className="absolute right-0 -mt-24">
                        <Image
                            src="/images/chapters/fearless/paper.svg"
                            width={200}
                            height={200}
                            alt="Papír"
                        />
                    </div>
                    <p className="mt-8 mb-4">
                        První světová válka otřásla základy společnosti, jejího přemýšlení i fungování. Kromě <span className="green">všeho strašného</span>{" "}
                        ale přinesla i vlnu optimismu a naladění ke změnám.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/qFqgmaO15x4?si=xJpnSvnbBPJRYFgn"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mt-4 mb-8 rounded mx-auto"
                        ></iframe>
                        <p className="mb-4">
                            S podobně rozsáhlou katastrofou se lidstvo do té doby nepotýkalo. První světová válka přinesla ponorky, tanky, automatické zbraně jako
                            kulomety a dalekonosná děla, chemické zbraně, smrtící plyny, nekonečně utrpení v zákopech,rozšíření chorob jako byla pandemická španělská
                            chřipka... Zemřelo v ní asi 10 milionů vojáků a další miliony civilistů, ovlivnila porodnost, přinesla stovky tisíc sirotků a mrzáků,
                            rozvrátila hospodářskou stabilitu, způsobila miliony traumat a ukázala lidskou schopnost sebezničení v úplně novém, globálním světle.
                        </p>
                    </div>
                    <Image
                        src="/images/chapters/fearless/15.png"
                        width={1200}
                        height={400}
                        alt="obr 15"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4">
                        Konec první světové války přinesl taky surrealismus, dadaismus, průmyslově vyráběné vložky nebo rozšíření jazzu.
                    </p>
                    <p className="mb-4">
                        S pádem stoletých impérií přišel i nový demokratický optimismus. Svět po roce 1918 měl být zcela jiný než svět
                        před rokem 1914. Důležitým tématem se staly potřeby obyčejných lidí, což s sebou přineslo i změnu přístupu k odborovým organizacím.
                    </p>
                    <p className="mb-4">
                        Stále více států uznávalo, že sociální rovnost a spravedlnost na pracovišti jsou důležitými součástmi fungující demokratické společnosti.
                        Možná, že spokojenost dělníků a obyčejných lidí zabrání další podobné katastrofě! A tak zatímco dříve byly odbory brány jako nátlakový
                        nástroj a zdroj konfliktů, teď se věřilo, že můžou sloužit míru.
                    </p>
                    <p className="mb-8">
                        Meziválečné období je tak možno označit jako počátek moderního sociálního dialogu.
                    </p>
                    <Image
                        src="/images/chapters/fearless/16.jpg"
                        width={600}
                        height={400}
                        alt="obr 16"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4">
                        Všechno ale nebylo růžové.
                    </p>
                    <p className="mb-4">
                        Míra pracovních práv se stala jedním z důležitých ukazatelů vyspělosti politické kultury. Ta ale ne všude směřovala k demokracii. 
                    </p>
                    <p className="mb-4">
                        Není náhodou, že jeden z prvních kroků fašistické Itálie, nacistického Německa, frankistického Španělska i komunistických režimů
                        v Sovětském svazu a později ve východní Evropě byl zákaz svobodné odborové činnosti. Podle nacistů a fašistů neexistovalo nic jako
                        specifické zájmy dělnictva, ale pouze zájmy národa. Komunistické režimy pak o sobě tvrdily, že jejich nejvyšší zájem je zlepšení
                        situace pracujících a existence svobodných odborů prý už neměla smysl. Ve skutečnosti ale všechny tyto režimy chtěly
                        {" "}<span className="green">vše podřídit státní kontrole</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/fearless/17.svg"
                            width={600}
                            height={400}
                            alt="obr 17"
                            className="mt-2 mb-6 rounded mx-auto"
                        />
                        <p className="mb-4">
                            Totalitaristické ideologie se nestavěly do opozice k zájmu pracujících v tom smyslu, že by se chtěly vrátit o sto let nazpět.
                            Naopak, určité jistoty, bezpečí nebo pohodlí svým stoupencům nabízely, ale rozhodně s nimi nevedly dialog – spíše monolog.
                            Navíc šlo vždy o zajištění bezpečí “jen pro ty naše”. Žádná univerzální práva a spojenectví. Naopak, totalitaristické ideologie
                            dojily chaos poválečné doby budováním imaginárních nepřátel, kteří mohou za všechno. Až po jejich poražení bude možné dosáhnout
                            spravedlivé a spokojené společnosti.
                        </p>
                    </div>
                    <p className="mb-4">
                        I proto byla mírová a spojující role odborových organizací stále více rozeznávána. Není náhodou, že první Mezinárodní organizace
                        práce (MOP), jež byla založená roku 1919, vznikla pod záštitou <span className="green">Společnosti národů</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Společnost národů (SN), předchůdce dnešní OSN, vznikla jako přímá reakce na hrůzy první světové války s cílem udržet celosvětový
                            mír. Kromě úkolů jako řešit mezinárodní konflikty nebo omezit zbrojení měla na starost i lidskoprávní a sociální otázky. Se svým
                            mírovým cílem SN selhala – jak víme, došlo i na druhou světovou válku. Agendu lidských a sociálních práv se ale dařilo zapisovat
                            hlouběji a hlouběji do kolektivního vědomí.
                        </p>
                        <Image
                            src="/images/chapters/fearless/18.jpg"
                            width={400}
                            height={400}
                            alt="obr 18"
                            className="mb-8 rounded mx-auto"
                        />
                    </div>
                    <p className="mb-4">
                        MOP v období mezi světovými válkami dosáhla značných úspěchů: prosadila osmihodinovou pracovní dobu do legislativ mnoha evropských států
                        i další sociální zákony. Postupně se stala respektovanou mezinárodní institucí, jež garantuje svobodu odborového sdružování, definuje
                        minimální míru sociální spravedlnosti uvnitř států, které se chtějí nazývat demokratické, nebo pravidelně iniciuje jednání
                        zástupců vlád, zaměstnavatelů a zaměstnanců.
                    </p>
                    <Image
                        src="/images/chapters/fearless/19.png"
                        width={400}
                        height={400}
                        alt="obr 19"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4">
                        V roce 1969 získala MOP u příležitosti své 50leté činnosti dokonce Nobelovu cenu míru.
                    </p>
                    <p className="mb-8">
                        Když si to shrneme – jaké byly výsledky sociálního dialogu do konce druhé světové války?
                    </p>
                    <Image
                        src="/images/chapters/fearless/20.svg"
                        width={600}
                        height={400}
                        alt="obr 20"
                        className="mb-8 rounded mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default FearlessPage;
