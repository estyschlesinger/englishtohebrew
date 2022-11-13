import Dictionary from "../data/Dictionary.json"
import "../css/DictionaryPage.css"
import Translator from "./Translator"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"


const Glossary = () => {

  return(
<Table sx={{width : 300 }}>
  <TableHead>
    <TableRow>
      <TableCell>
        אנגלית
      </TableCell>
      <TableCell>
        עברית
      </TableCell>
      <TableCell>
        מה עוד
      </TableCell>
    </TableRow>
  </TableHead>

  <TableBody>
  {Dictionary.map(Dictionary => {
    return(
      <TableRow key={Dictionary.grammarRule}>
        <TableCell className="engl">   {Dictionary.englishTrans}  </TableCell>
        <TableCell> {Dictionary.hebrewTrans} </TableCell>
        <TableCell>{`${Dictionary.partOfSpeech[1]} ${Dictionary.partOfSpeech[0]}`}</TableCell>
      </TableRow>
    )
  }
  )
}

  </TableBody>
</Table>
  )
}


export default Glossary