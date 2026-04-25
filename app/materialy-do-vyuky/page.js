"use client";

import Link from "next/link";
import Image from "next/image";

const EducationMaterialsPage = () => {
  return (
    <>
      <title>Materiály do výuky - Svět práce</title>
      <div className="flex">
        <div className="basis-1/3 flex">
          <div className="mt-2">
            <Link href="#" onClick={() => history.back()} className="text-2xl fellix-semibold">
              <Image src="images/components/left-arrow.svg" width={18} height={18} alt="zpět" />
            </Link>
          </div>

          <div className="ms-4">
            <Link href="#" onClick={() => history.back()} className="text-2xl fellix-semibold">
              zpět
            </Link>
          </div>
        </div>
        <div className="basis-1/3 text-center">
          <h1 className="text-3xl fellix-semibold">Materiály do výuky</h1>
        </div>
      </div>
      <div className="pb-6 md:pb-12 mx-auto mt-12 content lg:w-1/2">
        <h2 className="text-xl mb-2">Metodika a hodinové plány</h2>
        <div className="flex">
          <div className="w-4/5">
            <p>Metodika slouží jako rozcestník k webové platformě Svět práce. Jednotlivé lekce vzniklé
            ze série pilotních hodin pak naleznete na konci metodiky. Vycházejí z reálných zkušeností
            učitelů a učitelek a opírají se o konkrétní témata, otázky a výukové situace, které během pilotáže
            rezonovaly.</p>
          </div>
          <div className="w-1/5 flex justify-center">
            <Link href={`/files/metodika_a_hodinove_plany.pdf`} target="_blank">
              <Image src={`/images/components/download.svg`} width={50} height={50} alt="Stáhnout"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-4 md:pb-8 mx-auto mt-12 content lg:w-1/2 flex">
        <div className="w-1/2">
          <h2 className="text-xl mb-2">Lekce I</h2>
          <div className="flex">
            <div className="w-2/3">
              <p>Úvod do problematiky práv a povinností zaměstnanců.</p>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href={`/files/lekce_I.pdf`} target="_blank">
                <Image src={`/images/components/download.svg`} width={30} height={30} alt="Stáhnout"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl mb-2">Lekce II</h2>
          <div className="flex">
            <div className="w-2/3">
              <p>Simulace dražby pracovního místa aneb jak funguje konkurence na trhu práce.</p>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href={`/files/lekce_II.pdf`} target="_blank">
                <Image src={`/images/components/download.svg`} width={30} height={30} alt="Stáhnout"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 md:pb-8 mx-auto mt-4 content lg:w-1/2 flex">
        <div className="w-1/2">
          <h2 className="text-xl mb-2">Lekce III</h2>
          <div className="flex">
            <div className="w-2/3">
              <p>Přínosy, rizika a společenské výzvy spojené s konceptem Společnosti 4.0.</p>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href={`/files/lekce_III.pdf`} target="_blank">
                <Image src={`/images/components/download.svg`} width={30} height={30} alt="Stáhnout"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl mb-2">Lekce IV</h2>
          <div className="flex">
            <div className="w-2/3">
              <p>Historický exkurz do podob a vnímání práce.</p>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href={`/files/lekce_IV.pdf`} target="_blank">
                <Image src={`/images/components/download.svg`} width={30} height={30} alt="Stáhnout"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 md:pb-8 mx-auto mt-4 content lg:w-1/2 flex">
        <div className="w-1/2">
          <h2 className="text-xl mb-2">Lekce V</h2>
          <div className="flex">
            <div className="w-2/3">
              <p>Práce, nové nároky, znalosti a dominance informačních technologií.</p>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href={`/files/lekce_V.pdf`} target="_blank">
                <Image src={`/images/components/download.svg`} width={30} height={30} alt="Stáhnout"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationMaterialsPage;