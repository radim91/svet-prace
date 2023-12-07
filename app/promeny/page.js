"use client";

import Image from "next/image";
import { useState } from "react";
import HoverBox from "../components/UI/HoverBox";
import HoverLink from "../components/UI/HoverLink";
import ImageBox from "../components/UI/ImageBox";
import InfoBox from "../components/UI/InfoBox";
import Quote from "../components/UI/Quote";
import Link from "next/link";

const ChangesPage = () => {
    const [hoverShown, setHoverShown] = useState(null);

    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center trans-semibold lg:text-7xl">
                    Svět práce a jeho proměny
                    <br /> v posledních 250 letech
                </h1>
            </div>
            <div className="heading-image pike">
                <Image
                    src="/images/krumpac.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
            <div className="mx-auto mt-12 content lg:w-1/2">
                <p className="mb-12 font-semibold" id="perex-1">
                    Časový souběh průmyslové revoluce v Anglii (konec 18. století) a politické revoluce ve Francii,
                    která vypukla roku 1789, dal vzniknout modernímu světu. Tedy světu, kterému rozumíme a ve kterém žijeme.
                    Od té doby řeší evropská i globální společnost stále stejná dilemata: spravedlivý poměr mezi mírou
                    svobody a mírou bezpečí, změnou a stálostí, pokrokem a udržitelností nebo bohatstvím a rovností.
                </p>
                <div className="flex mt-4" id="1.1">
                    <div>
                        <div className="absolute mt-2 -ml-20 boxed-number">
                            1.1
                        </div>
                        <h2 className="text-3xl font-semibold">Svět práce před modernizací</h2>
                        <sub className="text-lg font-semibold text-gray-600">(do poslední třetiny 18. století)</sub>
                    </div>
                </div>
                <div className="mt-4 mb-24">
                    <p>
                        Zemědělství po většinu dějin bylo hlavním sektorem zaměstnanosti a vlastnictví půdy
                        hlavním zdrojem bohatství i politické moci. Z toho důvodu vztah k půdě představoval
                        základní ukazatel společenského uspořádání předmoderní společnosti.
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
                    <p className="mt-2 mb-24">
                        Podmínky práce byly na venkově i ve městech z velké části určovány jinými než ekonomickými vztahy.
                        Na venkově ekonomiku a s ní i svět práce ovládala <HoverLink handler={setHoverShown}>šlechtická privilegia</HoverLink>.
                        Ve městech pak byla řemeslná výroba řízená <HoverLink handler={setHoverShown}>cechy</HoverLink>.
                        Tyto překážky rozvoji obchodu a výroby se ale začaly postupně rušit od konce 18. století.
                    </p>
                    <div className="relative">
                        <ImageBox
                            background="/images/chapters/changes/01-background.svg"
                            foreground="/images/chapters/changes/01-foreground.png" 
                        />
                        <InfoBox>
                            zdroj:&nbsp;
                            <Link href="https://en.wikipedia.org/wiki/Corv%C3%A9e#/media/File:Reeve_and_Serfs.jpg" target="_blank">
                                https://en.wikipedia.org/wiki/Corv%C3%A9e#/media/File:Reeve_and_Serfs.jpg
                            </Link>
                        </InfoBox>
                    </div>
                    <p className="text-end">
                        <small className="text-gray-500">
                            Nevolníci sklízejí obilí pod dohledem šlechtického
                            úředníka, 14. století
                        </small>
                    </p>
                </div>
                <div className="flex mt-12" id="second-heading">
                    <div>
                        <div className="absolute mt-2 -ml-20 boxed-number">
                            1.2
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Nástup modernizace: průmyslová revoluce a zrod kapitalismu
                        </h2>
                        <sub className="text-lg font-semibold text-gray-600">
                            (poslední třetina 18. století – první dvě třetiny
                            19. století)
                        </sub>
                    </div>
                </div>
                <div className="mt-4 mb-24">
                    {hoverShown === "Průmyslová revoluce" &&
                        <HoverBox>
                            Podle některých byla průmyslová revoluce nejdůležitější společenskou změnou od epochy
                            neolitu, kdy lidstvo přešlo od lovu a sběru plodin k obdělávání půdy. Na počátku průmyslové
                            revoluce stál vynález vylepšeného parního stroje Jamese Watta z roku 1769, jenž se nejdříve
                            uplatnil právě v textilním průmyslu.
                        </HoverBox>
                    }
                    <div className="absolute left-0 mt-24 blue-svg -rotate-12">
                        <Image
                            src="/images/krumpac.svg"
                            width={220}
                            height={220}
                            alt="Krumpáč"
                        />
                    </div>
                    <p>
                        <HoverLink handler={setHoverShown}>Průmyslová revoluce</HoverLink> začala v Anglii.
                        Zde bylo během poslední třetiny 18. století patentováno několik textilních strojů.
                        Tyto stroje už neobsluhovali kvalifikovaní řemeslníci, ale nekvalifikovaní dělníci,
                        často dělnice a děti. Logickým dalším krokem bylo postavení velkých hal, kde mohlo
                        souběžně pracovat více takových strojů. Z dílen a manufaktur se tak postupně stávaly
                        továrny. Se změnou způsobu výroby se začala měnit i celá společnost. 
                    </p>
                    <Quote
                        quote="Počty lidí pracujících v odvětvích typických pro 19. století, například při těžbě uhlí, výrobě
                        železa a oceli nebo v textilním průmyslu, neustále klesaly a stále více míst nabízela terciální sféra."
                        author="Tony Judt, historik (2005)"
                    />
                    <div className="relative">
                        <ImageBox background="/images/chapters/changes/02-background.svg" foreground="/images/chapters/changes/02-foreground.png" />
                        <InfoBox>
                            zdroj:&nbsp;
                            <Link href="https://commons.wikimedia.org/wiki/File:Spinning-room-in-Shadwell-Rope-Works.jpg" target="_blank">
                               https://commons.wikimedia.org/wiki/File:Spinning-room-in-Shadwell-Rope-Works.jpg 
                            </Link>
                        </InfoBox>
                    </div>
                    <p className="text-end">
                        <small className="text-gray-500">
                            Raně industriální přádelna, polovina 19. století
                        </small>
                    </p>
                    {hoverShown === "sociální otázky" &&
                        <HoverBox className="mt-12">
                            Obětí rychlých společenských a ekonomických změn byli řemeslní mistři svádějící marný boj s levnější
                            konkurencí, muži a ženy přicházející z venkova za prací a novým životem do rodících se průmyslových
                            center či malé děti pracující 15 hodin denně.
                        </HoverBox>
                    }
                    <p className="mt-12">
                        Každá společenská změna má ale své náklady a své oběti. Období průmyslové revoluce byla pravděpodobně
                        první trvalou společenskou změnou, jež byla pociťována v rámci jednoho lidského života. Sociální dopady
                        změny byly však rychlejší, než se s nimi společnost stihla vypořádat.  Masy lidí byly postupně vytrhávány
                        z tradičních vazeb předmoderní společnosti a to rychleji, než stačila rodící se moderní společnost
                        vyprodukovat vazby nové. Počátky tržního hospodářství byly tak doprovázeny i zrodem 
                        moderní <HoverLink handler={setHoverShown}>sociální otázky</HoverLink>.
                    </p>
                    <p className="mt-4">
                        Prostupnost sociálních skupin se začala zvyšovat. Stejně jako se otevírala cesta nahoru, byl snadnější
                        i pád dolů. Období rané modernizace dalo základ našemu dnešnímu blahobytu. Jeho soudobá společenská
                        daň byla ale vysoká.
                    </p>
                </div>
                <div className="flex mt-4" id="third-heading">
                    <div>
                        <div className="absolute mt-2 -ml-20 boxed-number">
                            1.3
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Práce v moderní společnosti
                        </h2>
                        <sub className="text-lg font-semibold text-gray-600">
                            (zhruba poslední třetina 19. století – první dvě
                            třetiny 20. století)
                        </sub>
                    </div>
                </div>
                <div className="mt-4 mb-24">
                    {hoverShown === "sociální zákonodárství" &&
                        <HoverBox>
                            Jednalo se například o zákonnou bezpečnost práce, zrušení či regulaci práce dětí a mladistvých 
                            nebo maximální pracovní dobu, dále státem garantované sociální a zdravotní pojištění v případě
                            nemoci, invalidity a stáří. Po roce 1918 se v legislativách evropských států začalo objevovat
                            i pojištění v nezaměstnanosti, zákon o maximálně osmihodinové pracovní době či zavedení práva
                            na placenou dovolenou.
                        </HoverBox>
                    }
                    <p>
                        Od konce 19. století začaly evropské státy řešit sociální problémy vzniklé rychlou společenskou změnou.
                        Ještě před rokem 1900 a více v období mezi světovými válkami bylo zaváděno základní&nbsp; 
                        <HoverLink handler={setHoverShown}>sociální zákonodárství</HoverLink>. Rozšiřovala se také občanská práva.
                        Okolo roku 1900 (na našem území konkrétně roku 1907) bylo v Evropě zaváděno všeobecné a rovné volební
                        právo pro muže, nyní i včetně dělníků či rolníků nevlastnících půdu.
                        Po první světové válce se volebního práva ve více státech dočkaly rovněž ženy.
                    </p>
                    <p className="mt-4">
                        Po druhé světové válce se na východě ustanovil blok komunistických autoritativních států podřízených
                        Sovětskému svazu a v západní Evropě nastalo zlaté období sociálního státu. Zatímco ve východním bloku
                        byla přijata politika absolutní a nucené zaměstnanosti, na západě se zformovalo sociálně tržní hospodářství,
                        které dalo rozvinout relativně spokojené a hrdé pracující třídě, jež si mohla dovolit utrácet za konzumní
                        zboží a volnočasové aktivity a tím tak nepřímo podporovat další ekonomický vývoj. Kupní síla širokých
                        pracujících vrstev začala být v tomto období nahlížena jako základ státního hospodářství i
                        společenské stability.
                    </p>
                    <Quote
                        quote="Počty lidí pracujících v odvětvích typických pro 19. století, například pří těžbě uhlí, výrobě železa
                        a oceli nebo v textilním průmyslu, neustále klesaly a stále více míst nabízela terciální sféra."
                        author="Tony Judt, historik (2005)"
                    />
                </div>
                <div className="absolute right-0 blue-svg -rotate-12 pike">
                    <Image
                        src="/images/krumpac.svg"
                        width={220}
                        height={220}
                        alt="Krumpáč"
                    />
                </div>
                <div className="flex mt-4" id="fourth-heading">
                    <div>
                        <div className="absolute mt-2 -ml-20 boxed-number">
                            1.4
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Práce v post-průmyslové společnosti
                        </h2>
                        <sub className="text-lg font-semibold text-gray-600">
                            (poslední třetina 20. století – naše současnost)
                        </sub>
                    </div>
                </div>
                <div className="mt-4 mb-24">
                    <p>
                        Společensko-ekonomická situace, ve které žijeme dnes, se začala formovat od počátku 70. let 20. století.
                        Podniky v demokratických a průmyslových státech začaly přesouvat své závody do zemí s nevyspělou demokratickou
                        kulturou, jelikož zde výroba nebyla regulována ochrannou pracovní legislativou a odbory. Evropský svět práce
                        se tak začal pomalu deindustrializovat, následkem čehož vznikla masová nezaměstnanost, jež kulminovala
                        v 70. a 80. letech.
                    </p>
                    {hoverShown === 'rozpouštění sociálního státu' && (
                        <HoverBox>
                            Úpadek sociálního státu podporoval i individualizaci společnosti. Není proto náhodou, že zrovna v době
                            80. let se ve světě práce začaly skloňovat termíny jako autonomie, kreativita, dynamičnost, flexibilita,
                            ale také prekarizace.
                        </HoverBox>
                    )}
                    <p className="mt-4">
                        Do čela států se v této době dostávaly politické strany, jejichž recept na vzniklou krizi spočíval v útocích
                        na odborové organizace a postupném <HoverLink handler={setHoverShown}>rozpouštění sociálního státu</HoverLink> garantujícího
                        sociální smír a určité životní i pracovní standardy. Tyto politiky převzaly rovněž strany,
                        jež po roce 1989 dominovaly politické scéně v postkomunistických zemích. 
                    </p>
                    {hoverShown === "řidiči a kurýři digitálních platforem" && (
                        <HoverBox>
                            Globální technologičtí giganti si najímají jejich služby, aniž by jim garantovali práva plynoucí z běžného
                            zaměstnaneckého poměru. Mezi tyto pracovníky je také rozprostřena nejvyšší část podnikatelského rizika.
                            Tento trend rovněž přejímá stále více oborů.
                        </HoverBox>
                    )}
                    <p className="mt-4">
                        Od počátku 21. století se nejvíce rozvíjejícím oborem stává digitální průmysl. Typickým obrazem nejistého
                        a neustále se měnícího současného světa práce jsou <HoverLink handler={setHoverShown}>řidiči a kurýři digitálních platforem</HoverLink>. 
                    </p>
                    <p className="mt-4">
                        V jistém smyslu se dá říct, že jsme v podobné situaci jako společnost v rané fázi modernizačního procesu
                        na přelomu 18. a 19. století. Procházíme obdobím neuvěřitelně rychlých změn, aniž bychom je uměli pojmenovat
                        či se s nimi jako společnost vyrovnat. Budoucnost je ale stále otevřená.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
