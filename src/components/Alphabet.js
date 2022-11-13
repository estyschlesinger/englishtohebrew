import {useState, useEffect} from "react"
// import "../css/Alphabet.css"
import React from "react"
import Reading, {alpha} from "./Reading"
import { englishAlphInfo } from "../data/EnglishAlphInfo"

function Alphabet(){

const [input, setInput] = useState('')
const [current, setCurrent] = useState(0)

const [streak, setStreak] = useState(0)
const [maxStreak, setMaxStreak] = useState(0)

const [error, setError]= useState(false)

const setRandomEnglish = () => {
    const randomIndex = Math.floor(Math.random() * englishAlphInfo.length)
    setCurrent(randomIndex)
}

const handleChange = evt => {
    setInput(evt.target.value)
}

const handleSubmit = evt => {
    evt.preventDefault()

    if(input.toLowerCase() ===  englishAlphInfo[current].heb) {
        setStreak(streak + 1)
        setMaxStreak(Math.max(streak +1, maxStreak))
        setError(false)

        localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
        localStorage.setItem('streak', streak +1)
    }
    else {
        setStreak(0)
        setError(`Wrong! The correct answer for ${englishAlphInfo[current].englishAlph} is ${englishAlphInfo[current].heb} `)
    
       localStorage.setItem('streak', 0)
    }

    setInput('')
    setRandomEnglish()
    //let x= setTimeout(setError("j", 4000))
}

 useEffect(() => {
setRandomEnglish()
setStreak(parseInt(localStorage.getItem('streak')) || 0)
setMaxStreak(parseInt(localStorage.getItem('maxStreak' ))|| 0)
 },[])

    return(
        <div className="alphabet-quiz">
            <h1 className="part-of-quiz">English Alphabet Quiz</h1>
            <div className="part-of-quiz simple-text">Current streak: {streak} Maximum streak: {maxStreak}</div>
            <div className="part-of-quiz textLetter">
                {/* {englishAlph[current].englishAlph} */}
                {englishAlphInfo[current].englishAlph}
            </div>

            <div>
                <form className="part-of-quiz" onSubmit={handleSubmit}>

                    <input type="text"
                    value={input}
                    className="part-of-quiz input-box"
                    onChange={handleChange} />
                </form>
            </div>
            {error && <p>{error}</p>}

        
        </div>
    )
}

export default Alphabet