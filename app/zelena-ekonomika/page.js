"use client";

import Image from "next/image";
import ImageBox from "../components/UI/ImageBox";
import InfoBox from "../components/UI/InfoBox";
import Link from "next/link";
import Quote from "../components/UI/Quote";

const GreenDeal = () => {
    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center trans-semibold lg:text-7xl">
                    Zelená ekonomika 
                    <br /> a spravedlivá transformace
                </h1>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/pipeta.svg"
                    width={300}
                    height={300}
                    alt="pipeta"
                />
            </div>
            <div className="mt-6 text-center">
                <h4 className="text-xl trans-semibold">„Na mrtvé planetě nejsou žádná pracovní místa“</h4>
            </div>
            <div className="mx-auto mt-12 content lg:w-1/2">
                <p className="mb-4">
                    Lidé vždy svou prací utvářeli podobu krajiny a měnili přírodu. Během několika posledních generací
                    se využívání přírody člověkem zintenzivnilo až do míry, jež znamená nebezpečí pro život. Od dob
                    průmyslové revoluce se průměrná teplota planety zvýšila až o 1,2 °C. Hlavní příčinou je skutečnost,
                    že lidé spalováním uhlí, ropy a plynu do ovzduší přidávají uhlík, který byl po miliony let uložen
                    pod zemí. Oteplování vědci poprvé pozorovali v roce 1938 a od poloviny století přibývá varování,
                    že spalování fosilních paliv jej dále urychluje.
                </p>
                <p className="mb-24">
                    Pokračující klimatická změna a globální oteplování ohrožuje každého z nás. Již dnes pozorujeme i
                    zde v mírném pásu střední Evropy každoroční teplotní rekordy, neúrodu, extrémní výkyvy počasí, záplavy,
                    bouře, tornáda nebo požáry. Změny klimatu s sebou také nesou šíření tropických chorob, tání ledovců
                    a stoupání hladiny moří, vymírání živočišných a rostlinných druhů následované rozpadem celých ekosystémů,
                    budoucí konflikty způsobené bojem o zdroje pitné vody a půdu či nestabilitu způsobenou masovou migrací
                    obyvatel regionů, kde již pro člověka nebudou podmínky k životu.
                </p>
                <div className="relative">
                    <ImageBox 
                        background="/images/chapters/green-deal/01-background.svg"
                        foreground="/images/chapters/green-deal/01-foreground.png"
                        higher={true}
                    />
                    <InfoBox>
                        zdroj: Infolisty ČMKOS ke klimatické změně:&nbsp;
                        <Link href="https://klimatickakoalice.cz/images/CMKOS_infolisty.pdf" target="_blank">
                           https://klimatickakoalice.cz/images/CMKOS_infolisty.pdf 
                        </Link>
                    </InfoBox>
                </div>
                <p className="mt-4 mb-4">
                    <small className="text-gray-500">
                        Naše země se otepluje zhruba dvakrát rychleji než svět jako Za posledních šedesát let se ohřála zhruba
                        o 2 °C. Mezi důsledky, které již pozorujeme, patřilo v minulém desetiletí mnohaleté sucho pustošící krajinu
                        i zemědělství a následné odumírání smrkových lesů. V blízkém Německu zase nedávno řádily extrémní záplavy,
                        častější jsou bouře, jež mohou doprovázet extrémní jevy jako bylo tornádo na Jižní Moravě. Takových jevů
                        bude s dalším oteplováním dále přibývat.
                    </small>
                </p>
                <Quote
                    quote="Změna klimatu prohloubí nerovnost a chudobu, protože omezí přístup k potravinám, vodě, energii a bydlení.
                    Proto je nezbytné, aby boj za sociální spravedlnost zahrnoval i boj proti změně klimatu."
                    author="Mezinárodní organizace práce (2018)"
                />
                <p className="mt-8 mb-4">
                    Dnes již však máme k dispozici technologické nástroje k tomu, abychom klimatickou změnu zastavili, přešli na
                    zelenou ekonomiku a předešli tak černým scénářům, na které veřejnost již několik desetiletí upozorňují vědci
                    i klimatičtí aktivisté.
                </p>
                <p>
                    Na prvních opatřeních ke zmírnění klimatické změny se OSN usnesla již v roce 1992. Aktuálně nejvýraznější opatření
                    proti klimatické změně v našem prostoru je „Zelená dohoda pro Evropu“, známá také pod originálním názvem „Green Deal“,
                    ke které se státy Evropské unie zavázaly roku 2019. Hlavním cílem této iniciativy je dosáhnout toho, aby se emise
                    skleníkových plynů do roku 2030 snížily o 55 % ve srovnání s rokem 1990 a do roku 2050 dosáhnout uhlíkové neutrality,
                    což jinými slovy znamená úplný konec spalování fosilních paliv včetně ukončení činnosti uhelných elektráren.
                </p>
                <Quote
                    quote="Zelená dohoda pro Evropu obsahuje opatření ke snížení emisí, investice do špičkového výzkumu a inovací a ochranu
                    přírodního prostředí evropského kontinentu. Druhým cílem dohody je transformace evropské ekonomiky na dlouhodobě
                    udržitelnou, tedy aby byl možný její růst bez navyšování využití přírodních zdrojů. Třetím významným principem je, aby
                    během této transformace byl brán ohled na potřeby všech lidí, a mají být podporovány regiony, jichž se změny dotýkají,
                    proto se mluví o spravedlivé transformaci."
                    author="Sondy Revue (2023)"
                />
                <div className="absolute left-0 blue-svg pike">
                    <Image
                        src="/images/pipeta.svg"
                        width={220}
                        height={220}
                        alt="pipeta"
                    />
                </div>
                <p className="mt-8 mb-12">
                    Proti Green Dealu se ale také ozývají různé kritiky. Z jedné strany je kritizován, že je příliš pomalý a nedostatečně
                    ambiciózní v boji s klimatickou změnou, z opačné strany se ozývají hlasy, že pokud k ekologickým opatřením přistoupí
                    pouze Evropa, tak ztratí konkurenceschopnost vůči jiným ekonomikám a globálním hráčům. Zaměstnanci působící ve fosilním
                    průmyslu a příbuzných oborech zase vyjadřují obavy o svou budoucnost po uzavření podniků, kde pracují. Ostatní zaměstnanci
                    zase mohou mít strach, že zelené uvědomění bude znamenat snížení zájmu o práva a životní úroveň pracujících.
                </p>
                <div className="flex mt-4" id="first-heading">
                    <div>
                        <div className="absolute mt-2 -ml-20 boxed-number">
                            1.1
                        </div>
                        <h2 className="mt-1 text-3xl font-semibold">
                            Spravedlivá transformace
                        </h2>
                    </div>
                </div>
                <p className="mt-4 mb-8">
                    Je na místě říct, že by zelená agenda bez kompenzačního aspektu byla nespravedlivá a vedla k prohlubování stávajících rozdílů
                    životní úrovně, a to jak mezi jednotlivými regiony, tak i mezi jednotlivými společenskými skupinami zde žijícími.
                </p>
                <div className="relative">
                    <ImageBox 
                        background="/images/chapters/green-deal/02-background.svg"
                        foreground="/images/chapters/green-deal/02-foreground.png"
                    />
                    <InfoBox>
                        zdroj:&nbsp;
                        <Link href="https://www.brusselstimes.com/197925/no-jobs-on-a-dead-planet-trade-unions-call-for-urgent-climate-action" target="_blank">
                           https://www.brusselstimes.com/197925/no-jobs-on-a-dead-planet-trade-unions-call-for-urgent-climate-action 
                        </Link>
                    </InfoBox>
                </div>
                <p className="mt-2 mb-4 text-end">
                    <small className="text-gray-500">
                        Z pochodu Evropské odborové konfederace (EOK / ETUC) za spravedlivou transformaci
                    </small>
                </p>
                <Quote
                    quote="Pokud bychom zelený přechod nechali proběhnout bez hlasu pracujících, tak by mohl vést ke ztrátě pracovních míst, zhoršení pracovních
                    podmínek a také k pokračujícímu vykořisťování pracujících s nízkou kvalifikací. Naslouchání hlasu pracujících však přispěje k udržení
                    důstojné práce pro všechny."
                    author="Salomé Teuteberg (2021)"
                />
                <p className="mt-8">
                    Zkušenosti a pozitivní vzory posledních dekád však ukazují, že starost o životní prostředí a sociální spravedlnost nejsou v rozporu,
                    ale naopak, že se oba principy mohou vzájemně podporovat.
                </p>
            </div>
        </>
    );
};

export default GreenDeal;
