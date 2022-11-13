import Grammar from './Grammar'
// import '../css/Grammar.css'
import React, { createElement } from 'react'
import Dictionary from "../data/Dictionary.json"
import Sentences from "../data/Sentences.json"
import MyGram, { partsOfSpeech } from "../data/MyGram"
//split the sentence so that when you hover you get every word unique explanation


const SplitSentence = (props) => {
 console.log(props.randomNo)

        let toSplit = props.sentence
        console.log("current sentence to split: " + toSplit)
        let splitArrays= toSplit.split(' ')
        console.log("the array is: " + splitArrays)
let count = 0



           return(
            splitArrays.map((splitArray)=>{
 
                const createDiv = 
                <div key={count} className="whole" >
                    <h1 className='word-in-sentence'>{splitArray}</h1>
                <p className='hide'>The word {splitArray} is a{partsOfSpeech[0][Sentences[props.randomNo].partOfSpeech[count]]}. 
                <br/>It translates as {Sentences[props.randomNo].hebrewSentence}
                </p>
                </div> 
                
                
                console.log(splitArray)
count++
               return createDiv
            })
            
           )
           
    
}

export default SplitSentence