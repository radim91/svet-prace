import { useEffect, useState } from "react";
import Image from 'next/image';

const AudioPlayer = ({ blueHeading, blackHeading, legend, audioSrc, duration }) => {
    const [playing, setPlaying] = useState(false);
    const [track, setTrack] = useState(null);
    const [audio, setAudio] = useState(null);

    const playHandler = () => {
        setPlaying(!playing);
    };

    const progressHandler = (e) => {
        const time = new Date(e.target.currentTime * 1000);
        const sec = time.getSeconds().toString().padStart(2, "0");

        if (time.getMinutes() <= 0) {
            setTrack(`00:0${sec}`);
        } 

        const min = time.getMinutes().toString().padStart(2, "0");
        setTrack(`${min}:${sec}`);

        const percent = (audio.currentTime / audio.duration) * 100;
        document.querySelector(".player-progress-filled").style.flexBasis = `${percent}%`
    };

    const scrubHandler = (e) => {
        const rect = e.target.getBoundingClientRect();
        const mousePos = e.clientX - rect.left;
        const width = rect.right - rect.left;
        const scrubTime = (mousePos / width) * audio.duration;

        audio.currentTime = scrubTime;
    };

    const endedHandler = () => {
        setPlaying(false);
        audio.currentTime = 0;
    };

    useEffect(() => {
        const audioEl = document.querySelector("audio");
        setAudio(audioEl);

        if (audio === null) {
            return;
        }

        if (playing) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playing, audio]);

    return (
        <div className="px-16 py-8 bg-white shadow-md rounded-sm">
            <h3 className="pb-4 text-2xl trans-semibold"><span className="blue">{blueHeading}:</span> {blackHeading}</h3>
            <div className="w-full mb-4 flex align-center">
                <div className="w-fit">
                    <button id="play" onClick={playHandler}>
                        {!playing
                            ? <Image src="/images/components/play.svg" alt="play" width={32} height={32} />
                            : <Image src="/images/components/pause.svg" alt="pause" width={32} height={32} />
                        }
                    </button>
                </div>
                <div className="slider ms-8 w-full player-timeline">
                    <span className="me-2">{track === null ? "00:00" : track}</span>
                    <div className="player-progress" onClick={scrubHandler}>
                        <div className="player-progress-filled"></div>
                    </div>
                    <span className="ms-2">{duration}</span>
                </div>
            </div>
            <small className="text-gray-600">{legend}</small>
            <audio src={audioSrc} onTimeUpdate={progressHandler} onEnded={endedHandler} crossOrigin="anonymous"></audio>
        </div>
    );
};

export default AudioPlayer;
