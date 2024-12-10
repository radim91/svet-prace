"use client";

import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Menu = ({onMenuOpen}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showArrow, setShowArrow] = useState(null);

    const showMenuHandler = () => {
        const menuTextPosition = document.querySelector("#menu-link").getBoundingClientRect();
        const menuBox = document.querySelector(".menu-box");
        menuBox.style.left = (menuTextPosition.x - 420) + "px";

        setShowMenu(!showMenu);
        onMenuOpen(!showMenu);
    };

    const hideMenuHandler = () => {
        setShowMenu(false);
        onMenuOpen(false);
    };

    const showArrowHandler = (e) => {
        const arrowId = e.target.dataset.arrowId;
        setShowArrow(arrowId);
    };

    const hideArrowHandler = () => {
        setShowArrow(null);
    };

    return (
        <>
            <div className="text-end mt-1">
                <span
                    className="text-2xl fellix-semibold z-50 cursor-pointer"
                    id="menu-link"
                    onClick={showMenuHandler}
                >menu</span>
            </div>

            <div className={`menu-box ${showMenu ? "" : "hidden"}`} onMouseLeave={hideMenuHandler}>
                <div className="text-end mt-1">
                    <span
                        className="text-2xl fellix-semibold z-50 menu-inside-text cursor-pointer"
                        onClick={showMenuHandler}
                    >menu</span>
                </div>
                <div className="menu-items">
                    <ol className="list-decimal" start="0">
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.INTRO}
                                    className="ms-1 text-xl fellix-medium menu-item block"
                                    data-arrow-id="0"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Úvod</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "0" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.CHANGES}
                                    className="ms-1 text-xl fellix-medium menu-item block"
                                    data-arrow-id="1"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Proměny světa práce</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "1" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link 
                                    href={Path.FEARLESS}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="2"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Pracovat a nebát se</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "2" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.TRADITION}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="3"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Česká tradice</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "3" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.VELVET}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="4"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Odbory po sametu</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "4" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.FUTURE}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="5"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Budoucnost práce</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "5" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.TRANSFORMATION}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="6"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Spravedlivá transformace</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "6" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="flex">
                                <Link
                                    href={Path.DEMOCRACY}
                                    className="ms-1 text-xl fellix-medium menu-item"
                                    data-arrow-id="7"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Vyhlídky demokracie</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={10}
                                    height={10}
                                    alt="spika"
                                    className={`ms-2 ${showArrow === "7" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                    </ol>
                    <div className="ms-1 mt-8 mb-8 text-lg flex">
                        <Link href={Path.INFO} 
                            className="ms-1 text-xl fellix-medium menu-item"
                            data-arrow-id="9"
                            onMouseOver={showArrowHandler}
                            onMouseLeave={hideArrowHandler}
                            onClick={showMenuHandler}
                        >Info o projektu
                        </Link>
                        <Image 
                            src="images/components/right-arrow.svg" 
                            width={10}
                            height={10}
                            alt="spika"
                            className={`ms-2 ${showArrow === "9" ? "" : "hidden"}`}
                        />
                    </div>
                </div>

                <div>
                </div>
            </div>
        </>
    );
};

export default Menu; 
