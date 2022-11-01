import Dictionary from "../Dictionary.json"


 const DictionaryPage = () => {
    return(
        <div>
<table>
<thead>
                <th>English</th>
                <th>Hebrew</th>
                <th>Part of Speech</th>
            </thead>

     {Dictionary.map(Dictionary => {
    return (
      
<tr key={Dictionary.grammarRule}>
        
           <td>     {Dictionary.englishTrans}  </td>
         <td>     {Dictionary.hebrewTrans}  </td>
         <td>To be said</td>
 </tr>
           
    )
 }
    ) }
</table>
   </div>     
    )}
  

/* //<h1><DictionaryPage/></h1> */

export default DictionaryPage