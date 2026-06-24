import { useEffect, useState, useRef } from "react";
import Image from 'next/image';

const AudioPlayer = ({ blueHeading, blackHeading, legend, audioSrc, duration }) => {
    const [playing, setPlaying] = useState(false);
    const [track, setTrack] = useState(null);
    const audioRef = useRef(null);
    const progressFilledRef = useRef(null);

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

        const percent = (e.target.currentTime / e.target.duration) * 100;
        if (progressFilledRef.current) {
            progressFilledRef.current.style.flexBasis = `${percent}%`;
        }
    };

    const scrubHandler = (e) => {
        if (!audioRef.current) return;
        const rect = e.target.getBoundingClientRect();
        const mousePos = e.clientX - rect.left;
        const width = rect.right - rect.left;
        const scrubTime = (mousePos / width) * audioRef.current.duration;

        audioRef.current.currentTime = scrubTime;
    };

    const endedHandler = () => {
        setPlaying(false);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.play().catch(err => {
                console.error("Audio playback error:", err);
            });
        } else {
            audioRef.current.pause();
        }
    }, [playing]);

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
                        <div ref={progressFilledRef} className="player-progress-filled"></div>
                    </div>
                    <span className="ms-2">{duration}</span>
                </div>
            </div>
            <small className="text-gray-600">{legend}</small>
            <audio ref={audioRef} src={audioSrc} onTimeUpdate={progressHandler} onEnded={endedHandler} crossOrigin="anonymous"></audio>
        </div>
    );
};

export default AudioPlayer;
