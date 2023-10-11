"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Path from "../../enum/path";

const IntroPage = () => {
    const router = useRouter();
    const sendToIntro = () => {
        router.replace(Path.INTRO);
    };

    return (
        <>
            <div className="headings">
                <h1 className="trans-semibold text-5xl lg:text-7xl text-center mt-6">
                    Svět práce a odborů
                </h1>
            </div>
            <div>
                <Image
                    src="/images/chapters/intro/uvod.svg"
                    width={400}
                    height={600}
                    alt="Úvod"
                    className="absolute left-0 top-48"
                ></Image>
            </div>
            <div className="content lg:w-1/2 mx-auto mt-12">
                <h2 className="font-semibold text-4xl">Nadpis</h2>
                <p className="mt-4">
                    Práce je součástí lidstva od jeho počátku. Její nejobecnější
                    definice zní „záměrná lidská činnost vykonávaná za účelem
                    naplnění potřeb či přání“. Dá se říct, že veškerá lidská
                    produkce zboží a služeb je založena pouze na dvou zdrojích:
                    přírodě a lidské práci. Práce je zdrojem obživy a bohatství
                    i sebevědomí a hrdosti. Její nedostatek nebo naopak přebytek
                    může být ale také příčinou individuálního i kolektivního
                    utrpení.
                </p>
                <p className="mt-4">
                    V minulosti i dnes práce nabývá mnoho podob: může být
                    dobrovolná či nedobrovolná, svobodná a nesvobodná, placená a
                    neplacená, produktivní a pečující, kvalifikovaná a
                    nekvalifikovaná, fyzická i duševní, a tak dále. Z toho
                    důvodu pohled do světa práce, který zahrnuje mnoho ukazatelů
                    od struktury pracovního trhu až například po právní ochranu
                    pracujících, poskytuje základní sadu informací o
                    společnosti.
                </p>
                <Image
                    src="/images/chapters/intro/01.png"
                    width={400}
                    height={400}
                    alt="Práce"
                    className="mt-4 mb-2 min-w-full"
                ></Image>
                <p className="text-end">
                    <small className="text-gray-500">
                        Pohled do závodu T. &amp; A. Baťa, 1919
                    </small>
                </p>
                <p className="mt-4">
                    Svět práce zaznamenal v posledních zhruba 250 letech
                    základní změnu. Pracující se stali svobodnější, ale zároveň
                    bezbrannější. Z toho důvodu začaly během 19. století vznikat
                    odborové organizace chránící jejich zájmy. I odbory
                    v průběhu času podléhaly dobovým náladám a myšlenkovým
                    proudům, jejich základní hodnoty a cíle však zůstaly vždy
                    stejné: zlepšovat standardy práce a tím i celkovou kvalitu
                    života a prostřednictvím sociálního dialogu s organizacemi
                    zastupující zaměstnavatele přispívat k udržování rovnosti a
                    společenské soudružnosti. Dnes tváří v tvář nastupujícím
                    procesům digitalizace a automatizace práce, jejichž další
                    průběh a dopady si zatím jen stěží umíme představit, stojíme
                    před podobnou výzvou jako lidstvo na začátku průmyslové
                    revoluce a formování kapitalismu. I nyní se odbory stávají
                    zásadním aktérem změny.
                </p>
                <p className="mt-4">
                    Účelem následující webové platformy je upozornit na proměny
                    práce v posledních zhruba 250 letech a také vyzdvihnout
                    civilizační a demokratizační přínos odborů společnosti.
                </p>
                <div className="text-center mt-24">
                    <Link
                        className="btn-primary px-3 lg:px-5"
                        href={Path.CHANGES}
                    >
                        <span className="text-white">Začít objevovat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default IntroPage;
