"use client";

import Link from "next/link";
import Image from "next/image";

const Info = () => {
    return (
        <>
            <title>Info o projektu - Svět práce</title>
            <div className="flex">
                <div className="basis-1/3 flex">
                    <div className="mt-2">
                        <Link
                            href="#"
                            onClick={() => history.back()}
                            className="text-2xl fellix-semibold"
                        >
                            <Image
                                src="images/components/left-arrow.svg"
                                width={18}
                                height={18}
                                alt="zpět"
                            />
                        </Link>
                    </div>

                    <div className="ms-4">
                        <Link
                            href="#"
                            onClick={() => history.back()}
                            className="text-2xl fellix-semibold"
                        >
                            zpět
                        </Link>
                    </div>
                </div>
                <div className="basis-1/3 text-center">
                    <h1 className="text-3xl fellix-semibold">Info o projektu</h1>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-24 md:flex md:justify-around">
                <div>
                    <Image
                        src="images/components/logo-eu.svg"
                        width={300}
                        height={78}
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        src="images/components/cmkos.svg"
                        width={68}
                        height={68}
                        alt="logo"
                        className="mx-auto mt-2 md:mx-0 md:mt-0"
                    />
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-24 text-center">
                <p>
                    Tato webová platforma vznikla v rámci projektu ESF „Sociální dialog
                    pro sociální smír a hospodářský růst“, č. projektu: CZ.03.01.03/
                    <wbr />
                    00/
                    <wbr />
                    22_001/
                    <wbr />
                    0000084.
                </p>
            </div>
            <div className="w-1/2 mx-auto mt-12 text-center">                
                    Projekt je financován z Evropského sociálního fondu prostřednictvím
                    Operačního programu Zaměstnanost plus a státního rozpočtu České
                    republiky.                
            </div>
            <div className="w-1/2 mx-auto mt-12 text-center">                
                    Podrobnější informace a další výstupy najdete <Link href="https://www.cmkos.cz/projekty/evropske-projekty/socialni-dialog-pro-socialni-smir-a-hospodarsky-rust/" target="_blank">
                    <strong ms-2 text-gray-900>zde.</strong>
                    </Link>
            </div>




            <div className="flex items-center justify-center mt-24 text-lg">
                <div>
                    <p>
                        Obsah: <strong className="ms-2">Jan Smutný</strong>
                        <br />
                        Texty: <strong className="ms-2">Jakub Raška</strong>
                        <br />
                        Design:{" "}
                        <Link href="https://julieditetova.cz/" target="_blank">
                            <strong className="ms-2 text-gray-900">Julie Dítětová</strong>
                        </Link>
                        <br />
                        Webdev:{" "}
                        <Link href="https://radimhejduk.cz/" target="_blank">
                            <strong className="ms-2 text-gray-900">Radim Hejduk</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Info;
