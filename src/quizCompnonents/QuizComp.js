import React from 'react';
import { useState } from 'react';
import './QuizStyle.css'

const QuizComp = () => {

    var QuestionBank = [
        {
            Question: "Cartoon character Spongebob Squarepants lives in a what under the sea ?",
            Answers: [
                { Answer: 'PineApple', isCorrect: true },
                { Answer: 'Tower', isCorrect: false },
                { Answer: 'Castle', isCorrect: false },
                { Answer: 'Grape', isCorrect: false }
            ]
        },
        {
            Question: "What does the character Popeye famously eat to boost his strength ?",
            Answers: [
                { Answer: 'Egg', isCorrect: false },
                { Answer: 'Honey', isCorrect: false },
                { Answer: 'Spinach', isCorrect: true },
                { Answer: 'Cake', isCorrect: false }
            ]
        },
        {
            Question: "In which series will you find the cartoon characters Blossom, Bubbles and Buttercup ?",
            Answers: [
                { Answer: 'Oswald', isCorrect: false },
                { Answer: 'Power Puff Girls', isCorrect: true },
                { Answer: 'Bob The Builder', isCorrect: false },
                { Answer: 'Noddy', isCorrect: false }
            ]
        },
        {
            Question: "The Cartoon Network channel was launched in the USA in which year ?",
            Answers: [
                { Answer: '2001', isCorrect: false },
                { Answer: '1992', isCorrect: true },
                { Answer: '1947', isCorrect: false },
                { Answer: '1998', isCorrect: false }
            ]
        },
        {
            Question: "What is the thing which have so many holes ?",
            Answers: [
                { Answer: 'Oswald', isCorrect: false },
                { Answer: 'Bob The Builder', isCorrect: false },
                { Answer: 'Sponge Bob Pants', isCorrect: true },
                { Answer: 'Noddy', isCorrect: false }
            ]
        },
        {
            Question: "What do you have to say to make the clubhouse appear ?",
            Answers: [
                { Answer: 'Mickey Wants To Know Your Location', isCorrect: false },
                { Answer: 'San Diego', isCorrect: false },
                { Answer: 'Meeska Mooska Mickey Mouse!', isCorrect: true },
                { Answer: 'Im Here Where Are You', isCorrect: false }
            ]
        },
        {
            Question: "What color is Donald Duck's sailor suit? ?",
            Answers: [
                { Answer: 'Blue', isCorrect: true },
                { Answer: 'Violet', isCorrect: false },
                { Answer: 'Red', isCorrect: false },
                { Answer: 'Green', isCorrect: false }
            ]
        },
        {
            Question: "What color is Daisy Duck's bow ?",
            Answers: [
                { Answer: 'Blue', isCorrect: false },
                { Answer: 'Purple', isCorrect: true },
                { Answer: 'Olive Pink', isCorrect: false },
                { Answer: 'Cherry', isCorrect: false }
            ]
        },
        {
            Question: "What is the Mousekadoer ?",
            Answers: [
                { Answer: 'Pizza Hut', isCorrect: false },
                { Answer: 'Pond', isCorrect: false },
                { Answer: 'Wonder Land', isCorrect: false },
                { Answer: "Mickey 's Computer", isCorrect: true }
            ]
        },
        {
            Question: "What is the name of the park near the clubhouse ?",
            Answers: [
                { Answer: 'Mouse Park', isCorrect: false },
                { Answer: 'Mickey Park', isCorrect: true },
                { Answer: 'Dyna Dee Park', isCorrect: false },
                { Answer: 'Humiini Park', isCorrect: false }
            ]
        }
    ]


    // useStateHooks
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    //handleSubmit
    const handleAnswerResponse = (isCorrect) =>
     {
        if (isCorrect) 
        {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < QuestionBank.length) 
        {
            setCurrentQuestion(nextQuestion)
        }
        else 
        {
            setShowScore(true);
        }
    }

    // resetQuiz
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }  

    // console.log(QuestionBank)
    return (
        <div className='app'>
            {
                showScore ?
                    (
                        <div className='score-section'>
                            You have scored {score} out of {QuestionBank.length}
                            <>
                                <button type="submit" onClick={resetQuiz}>
                                    Play Again..
                                </button>
                            </>
                        </div>
                    ) : (
                        <>
                            {/* QuestionText */}
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>
                                        {currentQuestion + 1}</span> /{QuestionBank.length}
                                    
                                </div>
                                <div className='question-text'>
                                    {QuestionBank[currentQuestion].Question}
                                </div>
                            </div>

                            {/* AnswerText */}
                            <div className='answer-section'>
                                {QuestionBank[currentQuestion].Answers.map((answer) =>
                                (
                                    <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                                        {answer.Answer}
                                    </button>
                                ))}
                            </div>
                        </>
                    )
            }
        </div>
    );
}

export default QuizComp