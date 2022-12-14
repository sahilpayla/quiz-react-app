import React, { useState } from 'react'

const QuizComp = () => {

    const QuestionBank = [
        {
            Question: "Cartoon character Spongebob Squarepants lives in a what under the sea ?",
            AnswerText: [
                { Answer: 'PineApple', isCorrect: true },
                { Answer: 'Tower', isCorrect: false },
                { Answer: 'Castle', isCorrect: false },
                { Answer: 'Grape', isCorrect: false }
            ]
        },
        {
            Question: "What does the character Popeye famously eat to boost his strength ?",
            AnswerText: [
                { Answer: 'Egg', isCorrect: false },
                { Answer: 'Honey', isCorrect: false },
                { Answer: 'Spinach', isCorrect: true },
                { Answer: 'Cake', isCorrect: false }
            ]
        },
        {
            Question: "In which series will you find the cartoon characters Blossom, Bubbles and Buttercup ?",
            AnswerText: [
                { Answer: 'Oswald', isCorrect: false },
                { Answer: 'Power Puff Girls', isCorrect: true },
                { Answer: 'Bob The Builder', isCorrect: false },
                { Answer: 'Noddy', isCorrect: false }
            ]
        },
        {
            Question: "The Cartoon Network channel was launched in the USA in which year ?",
            AnswerText: [
                { Answer: '2001', isCorrect: false },
                { Answer: '1992', isCorrect: true },
                { Answer: '1947', isCorrect: false },
                { Answer: '1998', isCorrect: false }
            ]
        },
        {
            Question: "What is the thing which have so many holes ?",
            AnswerText: [
                { Answer: 'Oswald', isCorrect: false },
                { Answer: 'Bob The Builder', isCorrect: false },
                { Answer: 'Sponge Bob Pants', isCorrect: true },
                { Answer: 'Noddy', isCorrect: false }
            ]
        },
    ]

    // useStateHooks
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)


    console.log(QuestionBank)
    return (
        <div>
            {
                showScore ?
                    (
                        <div>
                            You have scored {score} out of {QuestionBank.length}
                        </div>
                    ) :
                    (
                        <>
                            <div>

                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default QuizComp