import './App.css'

export default function Navbar(){

    return <nav className="nav">
        <a className="site-title" href="/">The Languagician</a>
   <ul>
    <li>
        <a className="navigat" href="/DictionaryPage">Our Dictionary</a>
    </li>
    <li>
        <a className="navigat" href="/CardGame">Start Memory Game</a>
    </li>
    <li>
        <a className="navigat" href="/ShowNewSentence">Learn new English</a>
    </li>
   </ul>
    </nav>
}