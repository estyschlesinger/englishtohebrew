
import Sentences from "../Sentences.json" 
import MyHook from "../components/MyHook"
import ParseVerb from "../components/ParseVerb"

 const ShowNewSentence = () => {

    // var myObj = JSON.parse(Sentences[1])
    // console.log(myObj)

    let randomEngSentence= Math.floor(Math.random()* Sentences.length)

    while(Sentences[randomEngSentence].alreadyLearned == true)
    randomEngSentence= Math.floor(Math.random() * Sentences.length)


    let theSentence=Sentences[randomEngSentence].englishSentence
    Sentences[randomEngSentence].alreadyLearned = true; //how to do this that sentence shouldn't show up twice?

    //after outputting a sentence, now parse it
    if(Sentences[randomEngSentence].partOfSpeech.indexOf("Verb") != -1){
        //if the sentence contains a verb
        let index = Sentences[randomEngSentence].partOfSpeech.indexOf("Verb")
        let myObj = JSON.parse(Sentences[randomEngSentence].englishSentence)
        console.log(myObj)
        return (
            <h1>`This sentence contains the verb ${Sentences[randomEngSentence].englishSentence[index]}` </h1>
        )
    }
    

    return (
    <div><h1 className="bodyText">{theSentence}</h1>
    <MyHook/>
    <ParseVerb verb = "jump"/>
    </div>

    )

}

export default ShowNewSentence