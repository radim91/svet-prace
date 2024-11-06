"use client";

import '../assets/styles/changes/style.css';
import ImageBox from "@/components/UI/ImageBox";
import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import { useContext, useState } from "react";
import Mode from "@/enum/mode";
import CollapseButton from '@/components/UI/CollapseButton';
import Link from 'next/link';
import Path from '@/enum/path';

const ChangesPage = () => {
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
                    1. <span className="ms-2">Proměny světa práce</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Od Age of Empires po age of Uber
                </h2>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/chapters/changes/pike.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mb-12" id="perex-1">
                    Několik tisíc let byl svět víceméně stejný. Aspoň z pohledu práce.
                    Lidé se rodili, žili a umírali na stejném místě – nebo nepříliš
                    daleko od něj.
                </p>
                <div className="mt-4 mb-4">
                    <ImageBox
                        foreground="/images/chapters/changes/01.webp"
                        background="/images/chapters/changes/01-line.svg"
                        additionalClass="bg-01"
                    />
                </div>
                <p className="mb-4">
                    Základem bylo zemědělství – všechno se pěstovalo{' '}
                    <span className="green">lokálně</span> pro
                    potřeby místní komunity.
                </p>
                <p className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                    Za podobná privilegia si my dnes musíme připlatit. Ale zase se můžeme podívat,
                    kam chceme (když na to budeme mít).
                </p>
                <p className="mb-4">
                    Hrstka bohatých, urozených a mocných půdu dědičně vlastnila, ostatní populace na ní
                    “dědičně” pracovala. Semtam se někdo vzepřel pravidlům, podle kterých se “odjakživa”
                    žilo, ale pohyb mezi různými vrstvami společnosti nebyl příliš častý.
                </p>
                <p className="mb-4">
                    Proč to tak bylo? Má to spoustu důvodů. Feudalismus, například. Tyto drobné životy
                    žili lidé v rámci obřích říší, kterým vládli panovníci, kteří vládli dalším panovníkům
                    a tak dále – a úplně nejníž byli skoro všichni ostatní. Bylo jich nejvíc, ale měli nejmenší moc.
                </p>
                <p className="mb-4">
                    Nebo taky náboženství a myšlenkové prostředí – ať už za tím byl Bůh či tradice komunity,
                    vesměs se mělo za to, že život je tak nějak daný, cyklicky se opakující proces a v něm
                    má každý svůj daný osud.
                </p>
                <div className="mt-12 mb-12">
                    <ImageBox
                        foreground="/images/chapters/changes/02.jpg"
                        background="/images/chapters/changes/02-line.svg"
                        additionalClass="bg-02"
                    />
                </div>
                <p className="mb-4">
                    Pak přišel velký zlom. Dokonce několik zlomů zároveň. Vynálezy, které umožnily lidem líp
                    komunikovat i cestovat, společenské změny a revoluce, které dávaly obyčejným lidem větší
                    moc a vlastní hlas. A spolu s tím vyrostl i průmysl. Tisíce let tradic, zemědělství a
                    náboženství – pojmů, které definovaly většinu lidstva po většinu času – se začalo hroutit.
                </p>
                <p className="mb-8">
                    To bylo <span className="green">zhruba před 250 lety</span>.
                    A o těch 250 letech se budeme bavit především.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden w-2/3 mx-auto ${toggleMode === Mode.FUN ? "opacity-100 mb-12" : "max-h-0 opacity-0"}`}>
                    <Image 
                        src="/images/chapters/changes/03.jpg"
                        width={400}
                        height={400}
                        alt="obr 3" 
                        className="rounded w-full"
                    />
                    <Image 
                        src="/images/chapters/changes/03-arrow.svg"
                        width={70}
                        height={400}
                        alt="obr 3" 
                        className="arrow-03"
                    />
                    <p className="mt-2 text-center green">
                        Mluvíme o době, kdy lidé vypadali nějak takhle.
                    </p>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.1</span>Good Ol&apos; Times
                        <br/>aneb Jak se pracovalo ve starých dobách
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-48 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/changes/pike.svg"
                            width={200}
                            height={200}
                            alt="Krumpáč"
                        />
                    </div>
                    <div className="flex mb-8 mt-8 justify-center">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/changes/04.webp"
                                alt="obr 1" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/changes/05.png"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <p className="mb-4">
                        Běžný člověk v době knížete Václava (10. století), Karla IV.
                        (14. století) i Marie Terezie (18. století) byl chudý rolník
                        žijící na venkově ve vícegenerační chalupě.
                    </p>
                    <p className="mb-4">
                        Zpravidla byl (nebo byla) <span className="green">nevolníkem místní vrchnosti</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        V rámci svého panství měla vrchnost téměř neomezenou moc.
                        Nevolníci jí museli poslouchat, bez jejího svolení se nemohli
                        vdávat nebo ženit, dokonce ani stěhovat. Navíc byli bez nároku
                        na odměnu nuceni pracovat na vrchnostenských pozemcích (tomu
                        se říkalo robota, ale taky by se tomu mohlo říkat part-time otroctví).
                    </p>
                    <p className="mb-4">
                        Vrchnost zásadně <span className="green">omezovala svobodu nevolníků, ale
                        garantovala jejich bezpečí</span>, soudila jejich spory a zaopatřovala ty, kteří
                        se o sebe nedokázali postarat sami. Brala tak na sebe úkoly,
                        které mají dnes na starosti města nebo státy.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="green mb-8">
                            Představa, že někdy existovalo široké společenství absolutně
                            svobodných jedinců, kteří se pohybovali volnou krajinou a
                            směňovali mezi sebou zboží nebo zkušenosti, popřípadě se občas
                            navzájem zavraždili nebo potěšili – divoký západ, totální pravěk,
                            nebo absolutně volný trh – je mylná. Lidi odjakživa řešili otázku
                            bezpečí, které mi poskytne někdo silnější, a svobody, kdy mi
                            nikdo nestojí v cestě – a vždycky to byl kompromis.
                        </p>
                        <div className="absolute right-1/4 -mt-8">
                            <Image 
                                src={'/images/chapters/changes/07-arrow.svg'}
                                width={30}
                                height={80}
                                alt="obr 7" 
                            />
                        </div>
                        <Image
                            src="/images/chapters/changes/06.jpg"
                            width={600}
                            height={400}
                            alt="obr 6"
                            className="rounded w-4/5 mx-auto mb-4"
                        />
                    </div>
                    <p className="mb-4">
                        Továrny také neexistovaly, veškeré pracovní nástroje, oblečení
                        a další výrobky se vyráběly v malých řemeslných dílnách ve
                        městech. Řemeslníci byli svobodní lidé hrdí na svůj skill.
                    </p>
                    <p className="mb-4">
                        Ani oni ale nemohli prodávat své výrobky, jak se jim zachtělo.
                        Veškerý obchod řídily řemeslnické organizace nazývané cechy.
                    </p>
                    <p className="mb-4">
                        Cechy měly monopol na výrobu, řídily odborné vzdělávání, garantovaly
                        kvalitu výrobků a určovaly jejich ceny, ale také například
                        zakazovaly ženám vyučit se řemeslu.
                    </p>
                    <p className="mb-4">
                        Jak nevolnictví na venkově, tak cechy ve městech stály v
                        cestě pokroku, který se především ve formě obchodu a hospodářské
                        soutěže dral dopředu. A to byl jejich konec.
                    </p>
                    <p className="mb-4">
                        A to byl jejich <span className="green">konec</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        Nebylo to samozřejmě ani rychlé, ani jednoduché. Jaktože se jednou
                        “pokrok” prosadí a jindy ne? V naší historii práce se pořád opakují
                        dva vzorce – situace se změní buď proto, že to někdo chce a má sílu
                        to prosadit (jako když rodič „přinutí“ dítě chodit do školky, i když
                        by bylo rádo doma), nebo proto, že to naopak někdo hodně nechce a má
                        dost síly vzdorovat (jako když se dítě vzbouří proti brokolici a
                        prosadí si konečně pizzu). Samo se neděje nic.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/changes/09-left-arrow.svg"
                            width={80}
                            height={300}
                            alt="obr 9"
                            className="absolute left-1/3"
                        />
                        <Image
                            src="/images/chapters/changes/10-right-arrow.svg"
                            width={70}
                            height={300}
                            alt="obr 10"
                            className="absolute right-1/3"
                        />
                        <Image
                            src="/images/chapters/changes/08.png"
                            width={300}
                            height={300}
                            alt="obr 8"
                            className="rounded mx-auto"
                        />
                    </div>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.2</span>Bring the Noise
                        <br/>aneb Průmyslová revoluce a počátky kapitalismu
                    </h3>
                </div>
                <div className={`${shown.includes('2') ? "block" : "hidden"}`}>
                    <div className="absolute right-0 -mt-48">
                        <Image
                            src="/images/chapters/changes/pike.svg"
                            width={170}
                            height={170}
                            alt="Krumpáč"
                        />
                    </div>
                    <p className="text-center mb-8">
                        Přelom 18. a 19.století. Ledy po staletí daného řádu pukají.<br/>Co jim zasazuje poslední ránu? Pára.
                    </p>
                    <Image
                        src="/images/chapters/changes/11.jpg"
                        width={600}
                        height={600}
                        alt="obr 11"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Na konci 18. století bylo v Anglii patentováno několik textilních strojů poháněných párou, které již
                        nemuseli obsluhovat vyučení řemeslníci. Takové stroje dokázaly obsluhovat i malé&nbsp;
                        <Link href="https://cs.wikipedia.org/wiki/D%C4%9Btsk%C3%A1_pr%C3%A1ce" className="text-blue-500" target="_blank">děti</Link>,
                        což se také ve velkém dělo. 
                    </p>
                    <p className="mb-4">
                        Dalším krokem bylo logicky postavení velkých hal, kde mohlo souběžně pracovat více takových strojů.
                        Z malých dílen se postupně ve všech oborech stávaly továrny, které využívaly levnou práci, na kterou
                        už nebyl potřeba řemeslný skill. 
                    </p>
                    <p className="mb-4">
                        Se zlepšením zemědělské techniky a dopravy – hurá, vlak! – už nemuselo tolik lidí žít na venkově a
                        pracovat v zemědělství. Stále více se jich přesouvalo do měst a pracovalo v průmyslu. Bez vrchnosti
                        a cechů začali lidé pracovat v novém modelu – prodávat svou práci na trhu za mzdu. 
                    </p>
                    <p className="mb-8">
                        Na scéně se objevil kapitalismus.
                    </p>
                    <Image
                        src="/images/chapters/changes/12.svg"
                        width={600}
                        height={600}
                        alt="obr 12"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Všechny tyto změny daly vzniknout světu, jak ho (víceméně) dnes známe. Od té doby řešíme v jádru stále
                        tytéž otázky nebo dilemata – svoboda vs. bezpečí, změna vs. stálost, pokrok vs. udržitelnost – a
                        taky bohatství a rovnost.
                    </p>
                    <p className="mb-8">
                        Jednou z nejzásadnějších změn byla vyšší prostupnost sociálních skupin. Doteď bylo všechno dané – člověk
                        většinou zemřel na stejném místě i ve stejném postavení, kde se narodil. Náhle se ale otvírala cesta
                        vzhůru (k bohatství a lepšímu postavení), ale taky <span className="green">prudce dolů</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/changes/13.jpg"
                            width={600}
                            height={600}
                            alt="obr 13"
                            className="rounded mx-auto mb-8"
                        />
                        <div className="flex mb-4">
                            <div className="w-1/5 fellix-semibold"><span className="text-3xl">1810</span></div>
                            <div className="w-4/5 fellix-regular">
                                Byla jednou jedna Velká Lhota, kde se ve stejný den narodili dva chlapci, Jan Bidlo a Emil Šídlo.
                                Jejich otcové i dědové byli tkalci, proto se oba vyučili tkalcovskému řemeslu a začali pracovat
                                v dílnách svých otců. Nikdo ve Velké Lhotě nevěřil, že by stroje dokázaly vyrábět stejné tkaniny
                                jako mistři tkalci a strojům se tu smáli. Jen Emilův otec bedlivě sledoval novinky ze světa vynálezů a obchodu.
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/5 fellix-semibold"><span className="text-3xl">1835</span></div>
                            <div className="w-4/5 fellix-regular">
                                Jan se osamostatnil a zřídil si malou dílnu. Emil se stal společníkem svého otce a do podniku zakoupil stroj
                                poháněný parou – za den dokázal vyrobit tolik, co osm tkalců. Tkanina sice nebyla tak kvalitní, ale zakázky
                                byly dřív a za míň. Jan zjišťoval, že jeho ruce nedokážou soupeřit s neúnavným parním strojem. Stejně jako
                                ostatní tkalci ve Velké Lhotě přicházel i on o zakázky...
                                <div className="flex mt-2 mb-4">
                                    <Image
                                        src="/images/chapters/changes/14.png"
                                        width={300}
                                        height={300}
                                        alt="obr 14"
                                        className="rounded"
                                    />
                                    <Image
                                        src="/images/chapters/changes/15.png"
                                        width={300}
                                        height={300}
                                        alt="obr 14"
                                        className="rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/5 fellix-semibold"><span className="text-3xl">1860</span></div>
                            <div className="w-4/5 fellix-regular">
                                Emil Šídlo nesmírně zbohatl. Jeho život už nijak nepřipomínal podmínky, ve kterých vyrostl. Zaměstnával 300 lidí,
                                investoval do výroby železnice a ve velkém skupoval pozemky. Jak se slušelo na vyšší třídu, jeho žena nepracovala,
                                starala se o domácnost, služebnictvo a výchovu dětí: Nejstarší syn zdědil podnik, dcera se naučila hrát na klavír
                                a mluvit francouzsky a dobře se provdala. Nejmladší syn procestoval svět, vystudoval univerzitu a stal se významným
                                právníkem. Ani život Jana Bídla nepřipomínal, do čeho se narodil – byl mnohem horší. Jan už dávno zavřel svou dílnu
                                a s celou rodinou pracoval v Emilově podniku – 16 hodin denně, 6 dní v týdnu, včetně malých dětí. K večeři mívali
                                plesnivé brambory a kvůli špatné stravě trpěli častými nemocemi a přepracováním. Moc radosti v životě neměli. V létě
                                1860 si Jan v továrně zlomil ruku a 5 týdnů nemohl pracovat. Neexistovalo žádné úrazové pojištění, rodina proto živořila.
                                Na konci roku dostal Jan Bidlo kašel a zemřel na dlouhodobé vyčerpání organismu.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.3</span>Práce v průmyslové společnosti
                        <br/>aneb Fight for Your Right
                    </h3>
                </div>
                <div className={`${shown.includes('3') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-48 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/changes/pike.svg"
                            width={190}
                            height={190}
                            alt="Krumpáč"
                        />
                    </div>
                    <p className="mt-8 mb-4">
                        Během 19. století už jsou změny společnosti v plném proudu – a průmysl už je hlavním sektorem
                        zaměstnanosti. Odteď až do 70.let 20 století jsou nejtypičtějšími zástupci pracujících a největší
                        částí populace dělníci, dělnice a jejich děti v továrnách, na železnici, nebo třeba v dolech.
                        Města, předměstí i okolní krajina jsou plné kouřících komínů a továrních budov.
                    </p>
                    <p className="mb-4">
                        Obzvláště zpočátku to pro většinu lidí nebyla změna k lepšímu. Nevolníci 18.století sice neměli
                        moc možností, jak ovlivnit svůj život, tvrdá práce je však čekala hlavně na jaře a v létě – na
                        podzim a v zimě byl čas odpočívat. A většina z nich měla zajištěný přístup k potravě, čisté vodě
                        i čerstvému vzduchu. Zato městský dělník okolo roku 1850 mohl žít, kde chtěl, s kým chtěl a pracovat,
                        pro koho chtěl, jeho život byl ale k nevydržení. Od šesti ráno do osmi večer stál u strojů. V továrně
                        i v místě, kde přespával (těžko tomu říkat domov) dýchal špatný vzduch a pokud chvíli nepracoval,
                        jen těžko přežil. Žádná nemocenská nebo podpůrný systém, který by ho udržel nad vodou. Čas na
                        odpočinek nebyl žádný, jelikož rytmus práce neudávalo počasí, ale klapání parního stroje a nic jako
                        dovolená neexistovalo.
                    </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/eBShN8qT4lk?si=65NBMi76gqzdbJVR"
                        title="YouTube video player"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="rounded mx-auto mb-8 mt-8"
                    ></iframe>
                    <p className="mb-4">
                        Narozdíl od nevolníků ale pracující v 19. století odmítali pokorně snášet svůj osud dalších několik
                        století. Požadovali – a to hodně nahlas – zlepšení své situace a pomalu se stávali opravdu
                        velkou <span className="green">politickou silou</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Pod politickou silou taky můžeme rozumět “sakra velkou hrozbu”. Díky francouzské revoluci bylo
                            zřejmé, že vztek velkého množství lidí se může stát reálnou zbraní. Ale nejenom to – francouzská
                            revoluce především přinesla všudypřítomný pocit, že člověk má právo na ovlivnění svého života – že
                            nejen “musí”, ale i “může”. Do té doby tato myšlenka nebyla vůbec normální.
                        </p>
                        <Image
                            src="/images/chapters/changes/16.jpg"
                            width={600}
                            height={600}
                            alt="obr 16"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-4">
                        Od konce 19. století tak evropské státy začaly řešit problémy vzniklé rychlou společenskou změnou,
                        aby předešly další radikalizaci dělnictva. Nikdo nechtěl další revoluci. Dělníkům začaly státy
                        garantovat například pojištění v nemoci, ve stáří nebo při úrazu a stanovovaly maximální pracovní
                        dobu nebo minimální mzdu. K tomu napomohlo i zakládání <span className="green">odborových organizací</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        O odborech se budeme bavit ještě hodně; pro začátek stačí říct, že jde o formu sdružení, které
                        kolektivně hájí pracovní i jiné zájmy zaměstnanců (a v dnešním světě i freelancerů). Znáte
                        to – jeden za všechny, všichni za jednoho!
                    </p>
                    <p className="mb-8">
                        Rozšiřovala se také občanská práva. Během 19. století sice padla dřívější představa, že politiku
                        může dělat pouze šlechta, ale v parlamentech dlouho seděli i tak pouze muži, a to z lepších vrstev.
                    </p>
                    <Image
                        src="/images/chapters/changes/17.jpg"
                        width={600}
                        height={600}
                        alt="obr 17"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Okolo roku 1900 (na našem území konkrétně 1907) bylo v Evropě zaváděno volební právo pro všechny
                        muže, včetně dělníků či rolníků nevlastnících půdu. Po první světové válce se volebního práva ve
                        více státech dočkaly rovněž ženy. Nutno dodat – bylo za tím hodně boje, včetně fyzického, a taky
                        hladovek, věznění a protestů.
                    </p>
                    <p className="mb-4">
                        Jaktože tady naše historie nekončí? Dělníci a dělnice si vybojovali práva a jistoty, následovala
                        občanská práva a...? 
                    </p>
                    <p className="mb-4">
                        A pohádky byl konec. Přišla <span className="green">krize</span>. Po krizi válka. A po válce rozdělěný svět.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            V tržním hospodářství (a.k.a. kapitalismu) je krize periodicky se opakujícím jevem, stejně jako
                            růst. Jako taková nemusí být nutně katastrofická – byť zrovna krize ve dvacátých letech 20. století
                            patřila k těm nejhorším. Důležitější však je, že stejně jako má každá krize politické příčiny
                            (u téhle krize to byla například celá první světová válka, v USA pak protekcionistická politika,
                            ale i chybějící regule na burze...), má i politické důsledky. Z hlediska práce nás zajímá hlavně
                            to, že se každé krize někdo pokusí využít k tomu, aby omezil míru “benefitů” pracujících – stojí
                            to přece příliš moc a my jsme zrovna v krizi!
                        </p>
                        <Image
                            src="/images/chapters/changes/18.png"
                            width={400}
                            height={400}
                            alt="obr 18"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-4">
                        Druhá světová válka rozdělila svět skutečně na pomyslné dvě půlky. Na východě se ustanovil blok
                        komunistických autoritativních států podřízených <span className="green">Sovětskému svazu</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/changes/19.webp"
                            width={400}
                            height={400}
                            alt="obr 19"
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-4 text-center">
                            Šéfovali tomu tihle dva strejdové a stálo to životy pár desítek milionů lidí...
                        </p>
                    </div>
                    <p className="mb-4">
                        Tyto státy tvrdily, že stvoří pro dělnictvo ráj na zemi, zatím ale své obyvatele připravili o mnoho
                        občanských práv jako například právo svobodně si zvolit politickou stranu nebo právo cestovat. Skoro
                        by se dalo říct, že zaváděly novodobé nevolnictví.
                    </p>
                    <p className="mb-8">
                        V západních zemích se mezitím restauroval kapitalismus. Aby nedošlo k opakování hrůz hospodářské krize
                        nebo války, státy dbaly mnohem více na spokojenost obyvatel. Mimo jiné se tím bránily i tomu, aby se
                        dělnické vrstvy uchýlily ke komunismu. Tlačilo se na zvyšování mezd, stavělo se dostupné veřejné bydlení,
                        začaly se poskytovat příspěvky v nezaměstnanosti, aby rodiny nepadly na dno, vznikla i podpora školství
                        pro děti z nízkopříjmových vrstev. Tomu všemu se ve zkratce říká sociální stát.
                    </p>
                    <Image
                        src="/images/chapters/changes/20.webp"
                        width={400}
                        height={400}
                        alt="obr 20"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="text-center mb-4 text-sm">
                        Kromě sociálního státu bránil nástupu komunismu na Západě taky například Captain America.
                    </p>
                    <p className="mb-4">
                        Vůbec poprvé v dějinách dělnické rodiny kupovaly auta, jezdily na dovolenou a dělnické děti
                        poznaly dětství bez práce. V pubertě nechodily do fabriky, ale na střední školy, sportovní
                        a umělecké kroužky, poslouchaly rock’n’roll nebo rovnou <span className="green">zakládaly kapely</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/9Nz2bD2owDM?si=JHtk2QWlZ6T7ScH8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="rounded mx-auto mb-8 mt-4"
                        ></iframe>
                        <p className="mb-4">
                            John, Paul, George a Ringo. Dnes legendy dějin hudby, všichni čtyři ale původem chlapci z
                            liverpoolských dělnických rodin. Na konci padesátých let jako teenageři založili skupinu
                            The Beatles a během několika let dobyli celý svět. Jaktože se v šedesátých letech s takovými
                            kapelami roztrhl pytel a okolo roku 1930 žádné neexistovaly?

                        </p>
                        <p className="mb-4">
                            Protože nebyl rock and roll? Lidé mohli přece zakládat swingové bandy. Ne – odpověď je, že
                            neměli čas na jinou zábavu než občasné pitky a tancovačky, protože chodili do práce, která
                            byla tak náročná, že si to dnes neumíme představit. Není to žádná nadsázka, Beatles a vůbec
                            celé “šedesátky” jsou prostě kulturním přínosem sociálního státu.
                        </p>
                    </div>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="4" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.4</span>Práce v post-průmyslové společnosti
                        <br/>aneb Here we go again
                    </h3>
                </div>
                <div className={`${shown.includes('4') ? "block" : "hidden"}`}>
                    <div className="absolute right-0 -mt-48">
                        <Image
                            src="/images/chapters/changes/pike.svg"
                            width={170}
                            height={170}
                            alt="Krumpáč"
                        />
                    </div>
                    <Image
                        src="/images/chapters/changes/21.jpg"
                        width={600}
                        height={600}
                        alt="obr 21"
                        className="rounded mx-auto mb-8 mt-8"
                    />
                    <p className="mb-4">
                        V dnešní době zažíváme zvláštní paradox – procházíme obdobím gigantických změn a vývoje nových
                        technologií, naše pracovní jistoty se ale v něčem vracejí do minulosti. Jsme snad v období
                        další, tentokrát post-průmyslové revoluce?
                    </p>
                    <p className="mb-4">
                        Situace, ve které žijeme, se začala formovat od 70. let 20. století. Z Evropy začaly pomalu mizet
                        továrny a další výrobní haly, které tvořily dominanty měst i krajiny po více jak 100 let. Evropské
                        podniky <span className="green">začaly přesouvat</span> své závody do zemí s nevyspělou demokratickou
                        kulturou, ve kterých nebyla výroba tolik regulována zákony nebo odbory. Nebezpečná práce, neomezený
                        počet pracovní hodin a žádná garance minimální mzdy byla a je typická pro tyto podniky podobně jako dříve v Evropě.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/changes/22.svg"
                            width={300}
                            height={300}
                            alt="obr 22"
                            className="rounded mx-auto mb-8 mt-8"
                        />
                        <p className="mb-4 text-center">
                            Proč? No...
                        </p>
                    </div>
                    <p className="mb-4">
                        Problémy to nepřineslo jen zemím “třetího světa”, jejichž dělníci si doted odžívají svoje devatenácté
                        století v takzvaných sweatshopech. Následkem zavírání evropských továren a dolů byla i masová
                        nezaměstnanost, která kulminovala v 70. a 80. letech. Sice se rozvíjel sektor služeb a přibývalo
                        úředníků, ze všech dělníků se ale během několika let <span className="green">nemohli stát úředníci, bankéři nebo pilotky letadel</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/changes/23.jpg"
                            width={600}
                            height={600}
                            alt="obr 23"
                            className="rounded mx-auto mb-8 mt-8"
                        />
                        <p className="mb-4">
                            Podobná situace se dnes opakuje s umělou inteligencí či robotizací – častá odpověď na pochybnosti
                            ohledně jejich zavádění je, že nás zbaví prací, které stejně nikdo nechce dělat. To určitě platilo
                            a platí i pro mnohé profese – málokdo rád pracuje na veřejných záchodcích nebo dře v kamenolomu.
                            Ne vždycky je to ale “nepopulární vs. populární práce”, někdy totiž otázka stojí spíš takhle:
                            “nepopulární – anebo žádná práce!” Oops.
                        </p>
                    </div>
                    <p className="mb-4">
                        Vznikla další krize. A my už víme, že krize rozdmýchává politiku, která se ji snaží vytěžit.
                        I v 70. a 80.letech se k moci dostávaly politické strany, jejichž recept na vzniklou krizi
                        spočíval v útocích na odborové organizace a sociální stát. Základní argument se totiž tváří
                        jako odvěká moudrost – když není dost peněz, nemůžeme je utrácet.
                    </p>
                    <p className="mb-4">
                        Sociální výdaje státu navíc nelze udržet bez adekvátní daňové politiky a z toho tyto strany
                        těží nejvíc – podle nich platíme příliš velké daně a silné odbory ještě ke všemu brzdí
                        dynamické změny na pracovním trhu.
                    </p>
                    <Image
                        src="/images/chapters/changes/24.png"
                        width={600}
                        height={600}
                        alt="obr 24"
                        className="rounded mx-auto mb-8 mt-8"
                    />
                    <p className="mb-4">
                        I na Východě došlo ke stejné situaci a nástupu stran s podobnou politikou. Po roce 1989 už
                        plně dominovaly politické scéně v postkomunistických zemích.
                    </p>
                    <p className="mb-4">
                        Klíčovými slovíčky se od 80. let ve světě práce staly termíny jako autonomie,
                        kreativita, dynamičnost, flexibilita, ale
                        také <Link href="https://cs.wikipedia.org/wiki/Prekarizace" className="blue" target="_blank">prekarizace</Link>
                        &nbsp; a <span className="green">zhoršování poměrů</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Fsbvo5GVK10?si=DiM-YErrErh7UEZM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className="rounded mx-auto mb-8 mt-8"
                        ></iframe>
                        <p className="mb-4">
                            Zatímco v “šedesátkách” bujeli hipíci a sladké hity Beatles, “osmdesátky” logicky přinesly
                            něco jiného. Punk. Tento žánr vznikl jako jednoznačná reakce na rozpad sociálních jistot a
                            svůj boom měl právě v 80. a 90. letech 20. století. Energie punku byla mnohdy vzteklá a
                            agresivní – cílem nebylo hladit po srsti, ale využít vztek jako odrazový můstek k formám
                            společenského a kulturního odporu – “Rise above, we're gonna rise above”, jak zpívá Henry
                            Rollins v hitu kapely Black Flag z roku 1981.
                        </p>
                    </div>
                    <p className="mb-4">
                        Digitální technologie, které včele s internetem od devadesátých let intenzivně mění svět, přinášejí
                        řešení mnohých problémů, jiné však zároveň prohlubují.
                    </p>
                    <p className="mb-4">
                        Digitální průmysl se stává nejvíce se rozvíjejícím sektorem. Přináší často skutečnou flexibilitu,
                        zároveň přispívá ke zmíněné prekarizaci práce. Ze zaměstnanců se stávají (někdy nedobrovolní)
                        podnikatelé, kteří se pohybují na trzích někdy podobným způsobem&nbsp;
                        <Link href="https://denikalarm.cz/2022/01/unava-bouracky-a-staly-dohled-podle-cupra-je-ale-99-procent-kuryru-rohliku-spokojenych/" className="blue" target="_blank">nechráněných</Link>
                        , jako na počátku průmyslové revoluce.
                    </p>
                    <p className="mb-4">
                        Typická je taková situace pro řidiče a kurýry digitálních platforem. Globální technologičtí
                        giganti si najímají jejich služby, aniž by jim garantovali práva plynoucí z běžného zaměstnaneckého
                        poměru a na nich zůstává největší riziko.
                    </p>
                    <Image
                        src="/images/chapters/changes/25.jpg"
                        width={600}
                        height={600}
                        alt="obr 25"
                        className="rounded mx-auto mb-8 mt-8"
                    />
                    <p className="mb-4">
                        Nicméně flexibilní typ pracovního poměru už není jen okrajová záležitost práce pro moderní
                        “platformy” – v České republice je zcela běžný třeba v gastronomii a v kreativním sektoru
                        jiný typ práce defakto ani neexistuje. Ne každá flexibilita je špatná, takzvaný&nbsp;
                        <span className="green">švarcsystém</span> ale skutečně žádné benefity nepřináší.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Chodíte do práce každý den? Máte výpovědní lhůtu, pokuty a různé druhy povinností vůči
                            zaměstnavateli? Pak jste nejspíš zaměstnanec. Nemáte dovolenou, placené zdravotní a sociální,
                            ani nemocenskou, když si zlomíte nohu? Pak jste nejspíš brigádník nebo živnostník. Máte
                            oboje – a z obou jen to horší? Pak nejspíš pracujete ve švarcsystému, jak dnes úplně
                            běžně už stovky tisíc dalších.
                        </p>
                        <Image
                            src="/images/chapters/changes/26.jpg"
                            width={600}
                            height={600}
                            alt="obr 26"
                            className="rounded mx-auto mb-8 mt-8"
                        />
                    </div>
                    <p className="mb-4">
                        V jistém smyslu se dá opravdu říct, že jsme v podobné situaci jako společnost během průmyslové
                        revoluce v 18. a 19. století. Procházíme obdobím neuvěřitelně rychlých změn, které mají a dále
                        budou mít velký vliv na podobu naší práce a našich životů. Budoucnost je ale stále otevřená.
                    </p>
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className="btn-primary-large"
                        href={Path.CHANGES}
                    >
                        <span className="text-white">Další kapitola</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
