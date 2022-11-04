
import './css/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DictionaryPage  from './pages/DictionaryPage';
import ShowNewSentence  from './pages/ShowNewSentence';
import MyHook from "./components/MyHook"
import TicTacToe from "./components/TicTacToe"
import Alphabet from './components/Alphabet';
import LearnAlphabet from './components/LearnAlphabet';
function App() {

let MyVar
switch(window.location.pathname){
  case "/":
    MyVar = <Home/>
    break
  case "/DictionaryPage":
    MyVar = <DictionaryPage/>
    break
  case "/ShowNewSentence":
    MyVar = <ShowNewSentence />
    break

   case "/TicTacToe":
    MyVar = <TicTacToe/> 
    break
   case "/Alphabet":
    MyVar = <Alphabet/>
    break 
   case "/LearnAlphabet":
    MyVar = <LearnAlphabet/>
    break
}

  return (
    <>
      <Navbar/>
      {MyVar}
    </>
  );
}

export default App;
