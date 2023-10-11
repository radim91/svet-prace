"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ChangesPage = () => {
    const [activeAccordions, setActiveAccordions] = useState([]);

    const unwrapAccordion = (e) => {
        const paragraph = e.target.dataset.paragraph;
        const accArr = [...activeAccordions];

        if (accArr.includes(paragraph)) {
            const index = accArr.indexOf(paragraph);

            if (index > -1) {
                accArr.splice(index, 1);
            }
        } else {
            accArr.push(paragraph);
        }

        setActiveAccordions(accArr);
    };

    return (
        <>
            <div className="headings mx-auto">
                <h1 className="trans-semibold text-5xl lg:text-7xl text-center mt-6">
                    Svět práce a jeho proměny
                    <br /> v posledních 250 letech
                </h1>
            </div>
            <div className="content lg:w-1/2 mx-auto mt-12">
                <p>
                    Tato kapitola bude rámována pojmem modernizace, procesem
                    zahrnujícím složitý komplex společenských, ekonomických,
                    politických i kulturních změn, které se v Evropě začaly
                    poprvé objevovat v poslední třetině 18. století. Dá se říct,
                    že časový souběh průmyslové revoluce v Anglii a politické
                    revoluce ve Francii na konci 18. století dal vzniknout
                    světu, kterému rozumíme a ve kterém žijeme, jelikož od té
                    doby evropská i globální společnost řeší stále stejná
                    dilemata: míra svobody versus míra bezpečí, změna versus
                    stálost, pokrok versus udržitelnost, bohatství versus
                    spravedlnost a podobně.
                </p>
                <div className="flex mt-4" id="first-heading">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.1
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Svět práce před modernizací
                        </h2>
                        <sub className="font-semibold">
                            (do poslední třetiny 18. století)
                        </sub>
                    </div>
                    <div className="basis-1/3 text-end">
                        <button
                            onClick={unwrapAccordion}
                            data-paragraph="first"
                            className="mt-4"
                        >
                            ▼
                        </button>
                    </div>
                </div>
                <div
                    className={`accordion-content mt-4 ${
                        activeAccordions.includes("first")
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <p>
                        Vzhledem k tomu, že se Evropa musela živit sama,
                        představovalo zemědělství jádro hospodářství i hlavní
                        sektor zaměstnanosti, vlastnictví půdy hlavní zdroj
                        bohatství a moci a obecně vztah k půdě základní ukazatel
                        společenského uspořádání předmoderní společnosti.
                        V západní a střední Evropě žily zhruba tři čtvrtiny
                        populace na venkově. Venkovské obyvatelstvo pracující v
                        zemědělství se potýkalo   s chudobou, pracovalo většinu
                        dne a za špatných podmínek. Zemědělská práce byla také
                        zcela závislá na přírodních zdrojích energie a střídání
                        přírodního cyklu teplých a studených let, ročních období
                        a dne a noci. Z toho důvodu zde byla hranice mezi prací
                        a „ne-prací“ značně rozostřená.
                    </p>
                    <Image
                        src="/images/chapters/changes/01.png"
                        width={400}
                        height={400}
                        alt="Nevolníci"
                        className="mt-4 mb-2 min-w-full"
                    ></Image>
                    <p className="text-end">
                        <small className="text-gray-500">
                            Nevolníci sklízejí obilí pod dohledem šlechtického
                            úředníka, 14. století
                        </small>
                    </p>
                    <p className="mt-4">
                        Podmínky práce byly na venkově i ve městech z velké
                        části určovány jinými než ekonomickými vztahy. Na
                        venkově ekonomiku a s ní i svět práce ovládala
                        šlechtická privilegia. Od konce raného středověku se
                        sice obyvatel západní a střední Evropy (na rozdíl od
                        většiny ostatního světa) netýkalo otroctví, k obdělávání
                        půdy bez odměny bylo ale nuceno okolnostmi vyplývajících
                        ze starých práv pozemkové šlechty. Tento systém se
                        nazýval nevolnictví, jeho mírnější varianta pak
                        poddanství. Ve městech byla řemeslná výroba řízená
                        monopoly cechovních organizací. Cechy kontrolovaly ceny
                        výrobků, ale například i podmínky práce a počet
                        pracovníků v oboru. Z toho důvodu byly počátky
                        koncentrované výroby v manufakturách situovány spíše na
                        venkově a zakladatelé prvních manufaktur v 17. a 18.
                        byli místní šlechtici vlastnící přírodní zdroje a také
                        nevolníky, jejichž náplň pracovní činnost mohli
                        libovolně určovat.
                    </p>
                </div>
                <div className="flex mt-4" id="second-heading">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.2
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Počátky modernizace: průmyslová revoluce a zrod
                            kapitalismu
                        </h2>
                        <sub className="font-semibold">
                            (poslední třetina 18. století – první dvě třetiny
                            19. století)
                        </sub>
                    </div>
                    <div className="basis-1/3 text-end">
                        <button
                            onClick={unwrapAccordion}
                            data-paragraph="second"
                            className="mt-4"
                        >
                            ▼
                        </button>
                    </div>
                </div>
                <div
                    className={`accordion-content mt-4 ${
                        activeAccordions.includes("second")
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <p>
                        Přechod od tradiční zemědělské společnosti ke
                        společnosti moderní založené na průmyslové výrobě a
                        tržním hospodářství začal v posledních desetiletích 18.
                        století takzvanou průmyslovou revolucí. Nejprve bylo
                        třeba uvolnit pracovní sílu od tradičních pout. Postupně
                        se tak v Evropě rušilo nevolnictví, poddanství i
                        cechovní organizace.
                    </p>
                    <p className="mt-4">
                        Na začátku průmyslové revoluce stál vynález vylepšeného
                        parního stroje Jamese Watta z roku 1769, jenž se
                        nejdříve uplatnil v textilním průmyslu. V 60. až 80.
                        letech 18. století bylo v Anglii patentováno několik
                        textilních strojů, jež již neobsluhovali kvalifikovaní
                        řemeslníci, kteří kromě svého umu disponovali i jistým
                        stupněm kolektivního sebevědomí a hrdosti a byli tak
                        hůře tvarovatelní pro nový režim industriální
                        disciplíny. Namísto nich s těmito stroji manipulovali
                        nekvalifikovaní pracovníci, často spíše pracovnice a
                        děti. Logickým dalším krokem bylo postavení velkých hal,
                        kde mohlo souběžně pracovat více takových strojů.
                        Prostřednictvím mechanizace a koncentrace výroby se tak
                        z dílen a manufaktur postupně stávaly továrny a
                        hospodářský rozmach Evropy byl založen na levné a
                        nekvalifikované práci.
                    </p>
                    <Image
                        src="/images/chapters/changes/02.png"
                        width={400}
                        height={400}
                        alt="Raně industriální přádelna"
                        className="mt-4 mb-2 min-w-full"
                    ></Image>
                    <p className="text-end">
                        <small className="text-gray-500">
                            Raně industriální přádelna, polovina 19. století
                        </small>
                    </p>
                    <p className="mt-4">
                        Podle některých byla průmyslová revoluce nejdůležitější
                        společenskou změnou od epochy neolitu, kdy lidstvo
                        přešlo od lovu a sběru plodin k obdělávání půdy. Každá
                        společenská změna má ale své náklady a své oběti. Období
                        průmyslové revoluce bylo pravděpodobně první trvalou
                        společenskou změnou pociťovanou v rámci jednoho lidského
                        života. Sociální dopady změny byly však rychlejší, než
                        se s nimi společnost stihla vypořádat. Její oběti byli
                        řemeslní mistři svádějící marný boj s levnější
                        konkurencí, muži a ženy přicházející z venkova za prací
                        a novým životem do rodících se průmyslových center či
                        malé děti pracující 15 hodin denně za minimální mzdu
                        v domácích dílnách, dolech nebo továrnách. Šlo o masy
                        lidí, které byly postupně vytrhávány z tradičních vazeb
                        předmoderní společnosti a to rychleji, než stačila
                        rodící se moderní společnost vyprodukovat vazby nové.
                    </p>
                    <p className="mt-4">
                        To je stručná a obecná definice takzvané sociální
                        otázky, která se od té doby stala trvalou součástí
                        neustále se modernizující společnosti. Zatímco pro
                        předmoderní společnost byl důležitý stav nebo původ, do
                        kterého se jedinec narodil a který se během jeho života
                        neměl měnit, nyní se začal zvyšovat význam individuální
                        píle a ekonomického úspěchu. Prostupnost sociálních
                        skupin se zvětšovala. Stejně jako se otevírala cesta
                        nahoru, byl snadnější i pád dolů. Období rané
                        modernizace dalo základ našemu dnešnímu blahobytu. Jeho
                        soudobá společenská daň byla ale vysoká.
                    </p>
                </div>
                <div className="flex mt-4" id="third-heading">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.3
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Práce v moderní společnosti
                        </h2>
                        <sub className="font-semibold">
                            (zhruba poslední třetina 19. století – první dvě
                            třetiny 20. století)
                        </sub>
                    </div>
                    <div className="basis-1/3 text-end">
                        <button
                            onClick={unwrapAccordion}
                            data-paragraph="third"
                            className="mt-4"
                        >
                            ▼
                        </button>
                    </div>
                </div>
                <div className="flex mt-4" id="fourth-heading">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.4
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Práce v post-průmyslové společnosti
                        </h2>
                        <sub className="font-semibold">
                            (poslední třetina 20. století – naše současnost)
                        </sub>
                    </div>
                    <div className="basis-1/3 text-end">
                        <button
                            onClick={unwrapAccordion}
                            data-paragraph="fourth"
                            className="mt-4"
                        >
                            ▼
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
