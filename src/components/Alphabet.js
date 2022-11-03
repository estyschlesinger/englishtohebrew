import {useState, useEffect} from "react"
import "../css/Alphabet.css"

function Alphabet(){

const englishAlph = [
    {englishAlph: 'a', heb:'א'},
    {englishAlph: 'b', heb:'ב'},
    {englishAlph: 'c', heb:'ק'},
    {englishAlph: 'd', heb:'ד'},
    {englishAlph: 'e', heb:'ע'},
    {englishAlph: 'f', heb:'פ'},
    {englishAlph: 'g', heb:'ג'},
    {englishAlph: 'h', heb:'ה'},
    {englishAlph: 'i', heb:'י'},
    {englishAlph: 'j', heb:'דג'},
    {englishAlph: 'k', heb:'ק'},
    {englishAlph: 'l', heb:'ל'},
    {englishAlph: 'm', heb:'מ'},
    {englishAlph: 'n', heb:'נ'},
    {englishAlph: 'o', heb:'א'},
    {englishAlph: 'p', heb:'פ'},
    {englishAlph: 'q', heb:'קו'},
    {englishAlph: 'r', heb:'ר'},
    {englishAlph: 's', heb:'ס'},
    {englishAlph: 't', heb:'ט'},
    {englishAlph: 'u', heb:'א'},
    {englishAlph: 'v', heb:'ו'},
    {englishAlph: 'w', heb:'ו'},
    {englishAlph: 'x', heb:'קס'},
    {englishAlph: 'y', heb:'י'},
    {englishAlph: 'z', heb:'ז'},

]

const [input, setInput] = useState('')
const [current, setCurrent] = useState(0)

const [streak, setStreak] = useState(0)
const [maxStreak, setMaxStreak] = useState(0)

const [error, setError]= useState(false)

const setRandomEnglish = () => {
    const randomIndex = Math.floor(Math.random() * englishAlph.length)
    setCurrent(randomIndex)
}

const handleChange = evt => {
    setInput(evt.target.value)
}

const handleSubmit = evt => {
    evt.preventDefault()

    if(input.toLowerCase() ===  englishAlph[current].heb) {
        setStreak(streak + 1)
        setMaxStreak(Math.max(streak +1, maxStreak))
        setError(false)

        localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
        localStorage.setItem('streak',streak +1)
    }
    else {
        setStreak(0)
        setError(`Wrong! The correct answer for ${englishAlph[current].heb} is ${englishAlph[current].englishAlph} `)
    
       localStorage.setItem('streak', 0)
    }

    setInput('')
    setRandomEnglish()
}

 useEffect(() => {
setRandomEnglish()
setStreak(parseInt(localStorage.getItem('streak')) || 0)
setMaxStreak(parseInt(localStorage.getItem('maxStreak' ))|| 0)
 },[])

    return(
        <div>
            <h1>English Alphabet Quiz</h1>
            {streak}/{maxStreak}

            <div className="textLetter">
                {englishAlph[current].englishAlph}
            </div>

            <div>
                <form onSubmit={handleSubmit}>

                    <input type="text"
                    value={input}
                    onChange={handleChange} />
                </form>
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Alphabet