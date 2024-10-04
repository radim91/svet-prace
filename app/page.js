"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Path from "../enum/path";
import anime from "animejs";

const HomePage = () => {
    const router = useRouter();
    const sendToIntro = () => {
        router.replace(Path.INTRO);
    };

    const animatePike = (e) => {
        anime({
            targets: '#' + e.target.id,
            keyframes: [
                {rotate: 15, duration: 200},
                {rotate: 0},
                {rotate: 20, duration: 100},
                {rotate: 0},
                {rotate: 18, duration: 200},
                {rotate: 0},
            ],
            duration: 500,
            easing: 'easeInOutSine',
        });
    };

    const animatePaws = (e) => {
        anime({
            targets: '#' + e.target.id,
            keyframes: [
                {skewX: -10, duration: 200},
                {skewX: 0},
                {skewX: 10, duration: 200},
                {skewX: 0},
                {skewX: -10, duration: 200},
                {skewX: 0},
            ],
            duration: 600,
            easing: 'cubicBezier(.5, .05, .1, .3)',
        });
    };

    const animateKeyboard = (e) => {
        anime({
            targets: '#' + e.target.id,
            keyframes: [
                {scale: 1.1, duration: 200},
                {scale: 1},
                {scale: 1.2, duration: 200},
                {scale: 1},
                {scale: 1.05, duration: 100},
                {scale: 1},
            ],
            duration: 500,
            easing: 'easeInOutSine',
        });
    };

    const animatePipette = (e) => {
        anime({
            targets: '#' + e.target.id,
            keyframes: [
                {translateY: -10, duration: 50},
                {translateY: 0},
                {translateY: 10, duration: 50},
                {translateY: 0},
                {translateY: -15, duration: 50},
                {translateY: 0},
                {translateY: 8, duration: 50},
                {translateY: 0},
            ],
            duration: 500,
            easing: 'easeInOutSine',
        })
    };

    return (
        <div className="items-center">
            <div className="headings">
                <h1 className="text-center trans-bold text-7xl lg:text-9xl">
                    Svět práce
                </h1>
                <h2 className="pt-6 text-2xl text-center trans-semibold lg:text-3xl">
                    Podpora sociální spravedlnosti a důstojné práce
                </h2>
            </div>
            <div className="absolute left-0 top-1/5 h-1/2 w-1/4">
                <Image
                    src="images/krumpac.svg"
                    alt="Krumpáč"
                    id="pike-svg"
                    layout="fill"
                    onMouseOver={animatePike}
                ></Image>
            </div>
            <div className="absolute bottom-1/5 left-1/4 h-1/4 w-1/4">
                <Image
                    src="images/packy.svg"
                    alt="Krumpáč"
                    id="paws-svg"
                    layout="fill"
                    onMouseOver={animatePaws}
                ></Image>
            </div>
            <div className="absolute left-1/2 top-1/5 h-1/2 w-1/4">
                <Image
                    src="images/klavesnice.svg"
                    alt="Krumpáč"
                    id="keyboard-svg"
                    layout="fill"
                    onMouseOver={animateKeyboard}
                ></Image>
            </div>
            <div className="absolute bottom-1/5 left-3/4 h-1/4 w-1/4">
                <Image
                    src="images/pipeta.svg"
                    alt="Krumpáč"
                    id="pipette-svg"
                    layout="fill"
                    onMouseOver={animatePipette}
                ></Image>
            </div>
            <div className="absolute inset-y-1/2 w-full z-100">
                <div className="flex justify-center">
                    <div className="mx-auto">
                        <button
                            className="intro-btn"
                            onClick={sendToIntro}
                        >
                            Začít objevovat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
