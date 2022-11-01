import Dictionary from "../Dictionary.json"

export const ListWords = () => {
    return(
Dictionary.map(Dictionary => {
    return(

        <div key={Dictionary.grammarRule}>
            <span>{Dictionary.englishTrans}</span>
        </div>
    )
    }) 
    )
 }
