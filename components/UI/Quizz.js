import Image from "next/image";
import { useState } from "react";

const Quizz = ({ question, options, correctAnswer }) => {
    const [optionHovered, setOptionHovered] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [correctOptionChosen, setCorrectOptionChosen] = useState(null);
    const [incorrectOptionChosen, setIncorrectOptionChosen] = useState(null);

    const mapIndex = (i) => {
        switch (i) {
            case 0:
                return "A";
            case 1:
                return "B";
            case 2:
                return "C";
            case 3:
                return "D";
            default:
                return "A";
        }
    };

    const correctAnswerHandler = (e) => {
        setCorrectOptionChosen(e.target.dataset.choice === correctAnswer); 

        if (e.target.dataset.choice !== correctAnswer) {
            setIncorrectOptionChosen(e.target.dataset.choice);
        }

        setIsAnswered(true);
    };

    const imageSourceHandler = (i) => {
        const option = mapIndex(i);

        if (false === isAnswered) {
            return optionHovered === i 
                ? `/images/components/quizz/${option}-hover.svg`
                : `/images/components/quizz/${option}.svg`;
        }

        if (true === isAnswered && correctOptionChosen && option === correctAnswer) {
            return `/images/components/quizz/${option}-correct.svg`;
        }

        if ((true === isAnswered && correctOptionChosen) || (true === isAnswered && option !== incorrectOptionChosen)) {
            return `/images/components/quizz/${option}-inactive.svg`;
        }

        if (true === isAnswered && !correctOptionChosen && option === incorrectOptionChosen) {
            return `/images/components/quizz/${option}-wrong.svg`;
        }
    };

    const textColorHandler = (i) => {
        const option = mapIndex(i);

        if (true === isAnswered && correctOptionChosen && option === correctAnswer) {
            return 'green';
        }

        if ((true === isAnswered && correctOptionChosen) || (true === isAnswered && option !== incorrectOptionChosen)) {
            return 'text-gray-500';
        }

        if (true === isAnswered && !correctOptionChosen && option === incorrectOptionChosen) {
            return 'text-red-500';
        }

        return 'text-black';
    }

    return (
        <div className="quizz-border">
            <h3 className="blue text-2xl fellix-semibold mb-8">{question}</h3>
            {options.map((option, i) => {
                 return (
                    <div className="flex mb-5" key={i}>
                        <div 
                            className="min-w-20 min-h-8" 
                        >
                            <Image 
                                onMouseOver={() => setOptionHovered(i)} 
                                onMouseLeave={() => setOptionHovered(null)}
                                onClick={correctAnswerHandler}
                                src={imageSourceHandler(i)}
                                width={30} 
                                height={30} 
                                alt={mapIndex(i)} 
                                className="cursor-pointer"
                                data-choice={mapIndex(i)}
                            />
                        </div>
                        <div>
                            <p className={textColorHandler(i)}>
                                {option}
                            </p>
                        </div>
                    </div>
                )}
            )}
        </div>
    );
};

export default Quizz;
