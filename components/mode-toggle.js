import Mode from "@/enum/mode";
import { useContext, useEffect, useState } from "react";
import { ToggleModeContext } from "../context/ToggleModeContext";
import { WindowSizeContext } from "../context/WindowSizeContext";
import Image from "next/image";

const ToggleModeButton = () => {
  const { windowSize } = useContext(WindowSizeContext);
  const { toggleMode, toggleModeHandler } = useContext(ToggleModeContext);
  const [showHintLocal, setShowHintLocal] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasHint = window.localStorage.getItem("show-hint");
      if (hasHint === "false") {
        setShowHintLocal(false);
      } else if (hasHint === "true" || hasHint === null) {
        setShowHintLocal(true);
      }
    }
  }, [windowSize]);

  const showHintHandler = () => {
    if (toggleMode === Mode.NORMAL) {
      setShowHint(true);
    }
  };

  const hideHintHandler = () => {
    setShowHint(false);

    if (showHintLocal === true) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("show-hint", "false");
      }
      setShowHintLocal(false);
    }
  };

  return (
    <div className="md:mt-1 me-12">
      <button
        className="cursor-pointer"
        onClick={toggleModeHandler}
        onMouseOver={showHintHandler}
        onMouseLeave={hideHintHandler}
      >
        {toggleMode === Mode.NORMAL ? (
          <Image src="/images/components/normal-mode.svg" width={65} height={35} alt="normal" />
        ) : (
          <Image src="/images/components/fun-mode.svg" width={65} height={35} alt="fun" />
        )}
      </button>
      <div className={`${showHint === true || showHintLocal === true ? "block" : "hidden"} absolute mt-4`}>
        <div>
          <Image
            src={"/images/components/hint-arrow.svg"}
            width={65}
            height={35}
            className="hint-arrow"
            alt="hint-arrow"
          />
        </div>
        <div className="hint-box rounded-sm absolute right-0 -me-24 md:-me-32 mt-4">
          <div className="absolute ms-[255px] -mt-[10px] cursor-pointer">
            <Image src={"/images/components/close.svg"} width={20} height={20} alt="close" onClick={hideHintHandler} />
          </div>
          <p className="green">
            Přepínám <span className="fellix-bold">LITE</span> mód a <span className="fellix-bold">PRO</span> mód.
          </p>
          <p className="green mt-4">
            <span className="fellix-bold">LITE</span> mód zobrazuje základní texty, ilustrace a videa bez odboček.
          </p>
          <p className="green mt-4">
            <span className="fellix-bold">PRO</span> mód je pro fajnšmekry, co chtějí o tématu vědět co nejvíc.{" "}
            <span className="fellix-bold">Zkuste mě!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToggleModeButton;
