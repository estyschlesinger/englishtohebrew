import React from "react"
import Dictionary from "../Dictionary.json"


 const CreateCard = () => {

//create cards for memory game level 1 12 cards and randomly insert words and their translations acros the cards
const arrayRan=[]
const ran= Math.floor(Math.random() * Dictionary.length)

while(arrayRan.indexOf(ran) != -1)
{
    ran=Math.floor(Math.random() * Dictionary.length)
    console.log("finding new index")
}
    arrayRan.push(ran)
    console.log("arrayRan " + arrayRan)
    console.log(ran)
    const element = <div className="card">{Dictionary[ran].englishTrans}</div>
    return ( element );
}

export default CreateCard
