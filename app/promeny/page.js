"use client";

import Image from "next/image";
import { useState } from "react";
import HoverBox from "../components/UI/HoverBox";
import HoverLink from "../components/UI/HoverLink";
import ImageBox from "../components/UI/ImageBox";
import Quote from "../components/UI/Quote";

const ChangesPage = () => {
    const [activeAccordions, setActiveAccordions] = useState([]);
    const [hoverShown, setHoverShown] = useState(null);

    const unwrapAccordion = (e) => {
        const paragraph = e.target.dataset.paragraph;
        const accArr = [...activeAccordions];

        if (accArr.includes(paragraph)) {
            const index = accArr.indexOf(paragraph);

            if (index > -1) {
                accArr.splice(index, 1);
            }

            e.target.style.transform = 'rotate(0)';
        } else {
            accArr.push(paragraph);
            e.target.style.transform = 'rotate(180deg)';
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
            <div className="heading-image">
                <Image
                    src="/images/krumpac.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
            <div className="content lg:w-1/2 mx-auto mt-12">
                <p className="font-semibold mb-12" id="perex-1">
                    Časový souběh průmyslové revoluce v Anglii (konec 18. století) a politické revoluce ve Francii,
                    která vypukla roku 1789, dal vzniknout modernímu světu. Tedy světu, kterému rozumíme a ve kterém žijeme.
                    Od té doby řeší evropská i globální společnost stále stejná dilemata: spravedlivý poměr mezi mírou
                    svobody a mírou bezpečí, změnou a stálostí, pokrokem a udržitelností nebo bohatstvím a rovností.
                </p>
                <div className="flex mt-4" id="1.1">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.1
                        </div>
                        <h2 className="text-3xl font-semibold">Svět práce před <HoverLink handler={setHoverShown}>modernizací</HoverLink></h2>
                        <sub className="font-semibold text-lg blue">(do poslední třetiny 18. století)</sub>
                        {hoverShown === "modernizací" &&
                            <HoverBox>
                                Modernizace je proces zahrnující komplex společenských, ekonomických,
                                politických i kulturních změn, které se v Evropě začaly poprvé objevovat
                                v poslední třetině 18. století.
                            </HoverBox>
                        }
                    </div>
                    <div className="basis-1/3 text-end">
                        <button     
                            className="mt-4"
                        >
                            <Image 
                                onClick={unwrapAccordion}
                                data-paragraph="text-1_1"
                                src="/images/components/down-arrow.svg" 
                                width={15} 
                                height={15} 
                                alt="Down arrow"
                            />
                        </button>    
                    </div>
                </div>
                <div
                    className={`accordion-content mt-4 mb-24 ${
                        activeAccordions.includes("text-1_1")
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <p className="mt-12">
                        Zemědělství po většinu dějin bylo hlavním sektorem zaměstnanosti a vlastnictví půdy
                        hlavním zdrojem bohatství i politické moci. Z toho důvodu vztah k půdě představoval
                        základní ukazatel společenského uspořádání předmoderní společnosti.
                    </p>
                    <p className="mt-2">
                        Podmínky práce byly na venkově i ve městech z velké části určovány jinými než ekonomickými vztahy.
                        Na venkově ekonomiku a s ní i svět práce ovládala <HoverLink handler={setHoverShown}>šlechtická privilegia</HoverLink>.
                        Ve městech pak byla řemeslná výroba řízená <HoverLink handler={setHoverShown}>cechy</HoverLink>.
                        Tyto překážky rozvoji obchodu a výroby se ale začaly postupně rušit od konce 18. století.
                    </p>
                    {hoverShown === "šlechtická privilegia" &&
                        <HoverBox>
                            Od konce raného středověku se sice obyvatel západní a střední Evropy (na rozdíl od většiny
                            ostatního světa) netýkalo otroctví, k obdělávání půdy bez odměny bylo ale nuceno okolnostmi
                            vyplývajících ze starých práv pozemkové šlechty. Tento systém se nazýval jako nevolnictví,
                            jeho mírnější varianta pak poddanství.
                        </HoverBox>
                    }
                    {hoverShown === "cechy" &&
                        <HoverBox>
                            Řemeslnické cechy kontrolovaly ceny výrobků, ale například i podmínky práce a počet pracovníků v oboru.
                        </HoverBox>
                    }
                    <ImageBox background="/images/chapters/changes/01-background.svg" foreground="/images/chapters/changes/01-foreground.png" />
                    <p className="text-end">
                        <small className="text-gray-500">
                            Nevolníci sklízejí obilí pod dohledem šlechtického
                            úředníka, 14. století
                        </small>
                    </p>
                </div>
                <div className="flex mt-12" id="second-heading">
                    <div className="basis-2/3">
                        <div className="absolute -ml-20 mt-2 boxed-number">
                            1.2
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Nástup modernizace: průmyslová revoluce a zrod kapitalismu
                        </h2>
                        <sub className="font-semibold text-lg blue">
                            (poslední třetina 18. století – první dvě třetiny
                            19. století)
                        </sub>
                    </div>
                    <div className="basis-1/3 text-end">
                        <button     
                            className="mt-4"
                        >
                            <Image 
                                onClick={unwrapAccordion}
                                data-paragraph="text-1_2"
                                src="/images/components/down-arrow.svg" 
                                width={15} 
                                height={15} 
                                alt="Down arrow"
                            />
                        </button>    
                    </div>
                </div>
                <div
                    className={`accordion-content mt-4 mb-24 ${
                        activeAccordions.includes("text-1_2")
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <p className="mt-12">
                        <HoverLink handler={setHoverShown}>Průmyslová revoluce</HoverLink> začala v Anglii.
                        Zde bylo během poslední třetiny 18. století patentováno několik textilních strojů.
                        Tyto stroje už neobsluhovali kvalifikovaní řemeslníci, ale nekvalifikovaní dělníci,
                        často dělnice a děti. Logickým dalším krokem bylo postavení velkých hal, kde mohlo
                        souběžně pracovat více takových strojů. Z dílen a manufaktur se tak postupně stávaly
                        továrny. Se změnou způsobu výroby se začala měnit i celá společnost. 
                    </p>
                    {hoverShown === "Průmyslová revoluce" &&
                        <HoverBox>
                            Podle některých byla průmyslová revoluce nejdůležitější společenskou změnou od epochy
                            neolitu, kdy lidstvo přešlo od lovu a sběru plodin k obdělávání půdy. Na počátku průmyslové
                            revoluce stál vynález vylepšeného parního stroje Jamese Watta z roku 1769, jenž se nejdříve
                            uplatnil právě v textilním průmyslu.
                        </HoverBox>
                    }
                    <Quote
                        quote="Počty lidí pracujících v odvětvích typických pro 19. století, například při těžbě uhlí, výrobě
                        železa a oceli nebo v textilním průmyslu, neustále klesaly a stále více míst nabízela terciální sféra."
                        author="Tony Judt, historik (2005)"
                    />
                    <ImageBox background="/images/chapters/changes/02-background.svg" foreground="/images/chapters/changes/02-foreground.png" />
                    <p className="text-end">
                        <small className="text-gray-500">
                            Raně industriální přádelna, polovina 19. století
                        </small>
                    </p>
                    <p className="mt-12">
                        Každá společenská změna má ale své náklady a své oběti. Období průmyslové revoluce byla pravděpodobně
                        první trvalou společenskou změnou, jež byla pociťována v rámci jednoho lidského života. Sociální dopady
                        změny byly však rychlejší, než se s nimi společnost stihla vypořádat.  Masy lidí byly postupně vytrhávány
                        z tradičních vazeb předmoderní společnosti a to rychleji, než stačila rodící se moderní společnost
                        vyprodukovat vazby nové. Počátky tržního hospodářství byly tak doprovázeny i zrodem 
                        moderní <HoverLink handler={setHoverShown}>sociální otázky</HoverLink>.
                    </p>
                    {hoverShown === "sociální otázky" &&
                        <HoverBox>
                            Obětí rychlých společenských a ekonomických změn byli řemeslní mistři svádějící marný boj s levnější
                            konkurencí, muži a ženy přicházející z venkova za prací a novým životem do rodících se průmyslových
                            center či malé děti pracující 15 hodin denně.
                        </HoverBox>
                    }
                    <p className="mt-4">
                        Prostupnost sociálních skupin se začala zvyšovat. Stejně jako se otevírala cesta nahoru, byl snadnější
                        i pád dolů. Období rané modernizace dalo základ našemu dnešnímu blahobytu. Jeho soudobá společenská
                        daň byla ale vysoká.
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
