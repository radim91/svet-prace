"use client";

import Mode from "@/enum/mode";
import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";
import { WindowSizeContext } from "@/context/WindowSizeContext";
import { ToggleModeContext } from "@/context/ToggleModeContext";

const Menu = ({onMenuOpen}) => {
    const { toggleMode } = useContext(ToggleModeContext);
    const { windowSize } = useContext(WindowSizeContext)
    const menuText = useRef(null);
    const menuBox = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showArrow, setShowArrow] = useState(null);

    if (windowSize.width === 0) {
        return null;
    }

    const showMenuHandler = () => {
        if (windowSize.isMobile && menuText.current !== null && menuBox.current !== null) {
            const menuTextPosition = menuText.current.getBoundingClientRect();
            const menuBox = menuBox.current;
            menuBox.style.left = (menuTextPosition.x - 371) + "px";
        }

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

    const toggleMenuHandler = () => {
        setShowMenu(!showMenu);
        onMenuOpen(!showMenu);
    };

    return (
        <>
            {windowSize.isMobile 
            ? (
                <div className="text-end me-8 mt-2 md:mt-4 cursor-pointer" onClick={toggleMenuHandler}>
                    {showMenu
                    ? (
                        <Image 
                            src={toggleMode === Mode.FUN 
                                ? "/images/components/menu-close-green.svg" 
                                : "/images/components/menu-close.svg"} 
                            width={30} 
                            height={30} 
                            alt="menu-close" 
                        />
                    ) : (
                        <Image 
                            src={toggleMode === Mode.FUN 
                                ? "/images/components/menu-green.svg"
                                : "/images/components/menu.svg"
                            }
                            width={30} 
                            height={30} 
                            alt="menu" 
                        />
                    )}
                </div>
            ) : (
                <div className="text-end mt-1">
                    <span
                        className="text-2xl fellix-semibold z-50 cursor-pointer"
                        id="menu-link"
                        ref={menuText}
                        onClick={showMenuHandler}
                    >menu</span>
                </div>
            )}

            <div className={`menu-box ${showMenu ? "" : "hidden"}`} onMouseLeave={hideMenuHandler} ref={menuBox}>
                {windowSize.isMobile == false && (
                    <div className="text-end mt-1" id="menu-box-title">
                        <span
                            className="text-2xl fellix-semibold z-50 menu-inside-text cursor-pointer"
                            onClick={showMenuHandler}
                        >menu</span>
                    </div>
                )}
                <div className="menu-items">
                    <ol className="list-decimal" start="0">
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.INTRO}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="0"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Úvod</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "0" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.CHANGES}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="1"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Proměny světa práce</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "1" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link 
                                    href={Path.FEARLESS}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="2"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Pracovat a nebát se</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "2" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.TRADITION}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="3"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Česká tradice</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "3" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.VELVET}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="4"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Odbory po sametu</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "4" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.FUTURE}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="5"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Budoucnost práce</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "5" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.TRANSFORMATION}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="6"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Spravedlivá transformace</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "6" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                        <li className="mb-4 font-semibold md:mb-2 md:font-normal text-2xl md:text-xl">
                            <div className="flex">
                                <Link
                                    href={Path.DEMOCRACY}
                                    className="ms-1 text-2xl font-semibold md:text-xl md:font-normal fellix-medium menu-item block"
                                    data-arrow-id="7"
                                    onMouseOver={showArrowHandler}
                                    onMouseLeave={hideArrowHandler}
                                    onClick={showMenuHandler}
                                >Vyhlídky demokracie</Link>
                                <Image 
                                    src="images/components/right-arrow.svg" 
                                    width={15}
                                    height={15}
                                    alt="sipka"
                                    className={`ms-2 ${showArrow === "7" ? "" : "hidden"}`}
                                />
                            </div>
                        </li>
                    </ol>
                    <div className="ms-1 mt-8 mb-8 text-lg flex">
                        <Link href={Path.INFO} 
                            className="ms-1 font-semibold text-2xl md:font-normal md:text-xl fellix-medium menu-item-info"
                            data-arrow-id="9"
                            onMouseOver={showArrowHandler}
                            onMouseLeave={hideArrowHandler}
                            onClick={showMenuHandler}
                        >Info o projektu
                        </Link>
                        <Image 
                            src="images/components/right-arrow.svg" 
                            width={15}
                            height={15}
                            alt="sipka"
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
