
import Sentences from "../data/Sentences.json" 
import '../css/Grammar.css'
import ParseVerb from "./ParseVerb"
import { WatchOffRounded, WorkRounded } from "@mui/icons-material"
import  SplitSentence, {MyArray} from "./SplitSentence"


 const Grammar = () => {

    let randomEngSentence= Math.floor(Math.random()* Sentences.length)

    while(Sentences[randomEngSentence].alreadyLearned == true)
    randomEngSentence= Math.floor(Math.random() * Sentences.length)


     let theSentence=Sentences[randomEngSentence].englishSentence
     Sentences[randomEngSentence].alreadyLearned = true; //how to do this that sentence shouldn't show up twice?

    return (
    <div className="sentence-output">
    <SplitSentence sentence= {theSentence} randomNo={randomEngSentence}/>
    </div>

    )

}

export default Grammar