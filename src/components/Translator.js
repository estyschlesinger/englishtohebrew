import React, { useEffect } from 'react'
import axios from 'axios'

function Translator() {

const dictionaryApi = async() => {
    try{
const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane")
    console.log(data)
}
     catch (error) {
        console.log(error)
     }
}

useEffect(()=> {
dictionaryApi()
},[])

  return (
    <div>Translator</div>
  )
}

export default Translator