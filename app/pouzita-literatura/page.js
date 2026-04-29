"use client";

import Link from "next/link";
import Image from "next/image";

const LiteraturePage = () => {
  return (
    <>
      <title>Použitá literatura - Svět práce</title>
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
          <h1 className="text-3xl fellix-semibold">Použitá literatura</h1>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-12 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">1. Proměny světa práce</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>HOBSBAWM, Eric. Věk revolucí: 1789–1848. Praha: Argo, 2010. ISBN 978-80-257-0357-5.</li>
            <li>POLANYI, Karl. Velká transformace. Brno: Centrum pro studium demokracie a kultury, 2006. ISBN 80-7325-098-5.</li>
            <li>WEBER, Max. Metodologie, sociologie a politika. Praha: OIKOYMENH, 1998. ISBN 80-86005-48-8.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">2. Pracovat a nebát se (Working class heroes)</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>CASTEL, Robert. From Manual Workers to Wage Laborers: Transformation of the Social Question. New Brunswick: Transaction Publishers, 2003. ISBN 978-0765801499.</li>
            <li>ORGANIZACE SPOJENÝCH NÁRODŮ. Všeobecná deklarace lidských práv. Paříž, 1948.</li>
            <li>THOMPSON, Edward Palmer. The Making of the English Working Class. London: Penguin Classics, 2013. ISBN 978-0141393655.</li>
            <li>WEBB, Sidney a WEBB, Beatrice. The History of Trade Unionism. London: Longmans, Green and Co., 1920.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">3. Česká tradice</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>ČESKÁ TELEVIZE. Události: Rozhovor s Petrem Millerem [televizní vysílání]. Praha: ČT, 4. 12. 1990. Archiv ČT. </li>
            <li>ČESKÁ TELEVIZE. Zpravodajství: Jednání o generální dohodě [televizní vysílání]. Praha: ČT, 28. 8. 1990. Archiv ČT. </li>
            <li>FASORA, Lukáš. Dělník a měšťan: vývoj jejich vzájemných vztahů na příkladu šesti moravských měst 1870–1914. Brno: Matice moravská, 2010. ISBN 978-80-86488-69-6.</li>
            <li>KŘEN, Jan. Dvě století střední Evropy. Praha: Argo, 2005. ISBN 80-7203-779-2.</li>
            <li>ODBOROVÉ SDRUŽENÍ ČESKOSLOVANSKÉ. Stanovy Odborového sdružení českoslovanského. Praha: Odborové sdružení českoslovanské, 1897.</li>
            <li>PRŮCHA, Václav a kol. Hospodářské a sociální dějiny Československa 1918–1992. 1. díl, Období 1918–1945. Brno: Doplněk, 2004. ISBN 80-7239-147-X.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">4. Odbory po Sametu (Za koncem dějin zahněte doprava)</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>ČESKOMORAVSKÁ KONFEDERACE ODBOROVÝCH SVAZŮ. Vize 2012: Alternativa odborů k vládním reformám. Praha: ČMKOS, 2011.</li>
            <li>FUKUYAMA, Francis. The End of History and the Last Man. New York: Free Press, 1992. ISBN 0-02-910975-2. </li>
            <li>MYANT, Martin. The Rise and Fall of Czech Capitalism: Economic Development in the Czech Republic Since 1989. Cheltenham: Edward Elgar, 2003. ISBN 978-1843762270.</li>
            <li>VEČERNÍK, Jiří. Czech Society in the 2000s: A Report on Socio-Economic Trends. Praha: Academia, 2009. ISBN 978-80-200-1750-1.</li>
            <li>Zákon č. 118/2000 Sb., o ochraně zaměstnanců při platební neschopnosti zaměstnavatele a o změně některých zákonů. In: Sbírka zákonů České republiky. 2000, částka 35.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">5. Budoucnost práce</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>ATWOOD, Margaret. Příběh služebnice. Praha: BB/art, 2008. ISBN 978-80-7381-420-9.</li>
            <li>ČAPEK, Karel. R.U.R.: Rossum's Universal Robots. Praha: Aventinum, 1920.</li>
            <li>MORE, Thomas. Utopie. Praha: Mladá fronta, 1978.</li>
            <li>ORWELL, George. 1984. Praha: Naše vojsko, 1991. ISBN 80-206-0256-9.</li>
            <li>RIFKIN, Jeremy. The End of Work. New York: Putnam, 1995. ISBN 0-87477-779-8.</li>
            <li>SCHWAB, Klaus. Čtvrtá průmyslová revoluce. Praha: Prostor, 2017. ISBN 978-80-7260-353-8.</li>
            <li>STANDING, Guy. The Precariat: The New Dangerous Class. London: Bloomsbury Academic, 2011. ISBN 978-1849663526.</li>
            <li>TOFFLER, Alvin. Future Shock. New York: Random House, 1970. ISBN 0-394-42532-0.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">6. Spravedlivá transformace (Zachránit planetu i lidi na ní)</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>EVROPSKÁ KOMISE. Zelená dohoda pro Evropu: Sdělení Komise Evropskému parlamentu, Evropské radě, Radě, Hospodářskému a sociálnímu výboru a Výboru regionů (COM/2019/640 final). Brusel, 2019.</li>
            <li>INTERNATIONAL LABOUR ORGANIZATION. Greening with jobs: World Employment and Social Outlook 2018. Geneva: ILO, 2018. ISBN 978-92-2-131647-3.</li>
            <li>KLEIN, Naomi. This Changes Everything: Capitalism vs. The Climate. New York: Simon & Schuster, 2014. ISBN 978-1451697384.</li>
            <li>MIR ROCA, Montserrat. Speech at the ETUC Congress [projev]. Vienna, 2019.</li>
            <li>Sondy Revue. 2022, č. 5, téma Zelená ekonomika. ISSN 1210-6763.</li>
            <li>TEUTEBURG, Salomé. Trade Unions Going Green. Brussels: European Trade Union Confederation, 2021.</li>
            <li>Zelená dohoda pro Evropu [podcast]. 4 epizody. 2022.</li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mb-48 mx-auto mt-2 content w-full lg:w-1/2">
        <h2 className="text-xl mb-2">7. Vyhlídky demokracie (Impérium vrací úder?)</h2>
        <div className="ps-12">
          <ul className="list-disc">
            <li>PIKETTY, Thomas. Kapitál v 21. století. Praha: Knižní klub, 2015. ISBN 978-80-242-4870-1.</li>
            <li>PUTNAM, Robert D. Bowling Alone: The Collapse and Revival of American Community. New York: Simon & Schuster, 2000. ISBN 0-684-83283-6.</li>
            <li>STIGLITZ, Joseph E. Globalization and Its Discontents. New York: W.W. Norton, 2002. ISBN 0-393-05124-2.</li>
            <li>UHLOVÁ, Saša. Hrdinové kapitalistické práce. Praha: Grada, 2018. ISBN 978-80-271-0723-4.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LiteraturePage;