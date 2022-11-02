
import './App.css';
import Home from './pages/Home';
import DictionaryPage  from './pages/DictionaryPage';
import Navbar from './Navbar';
import  ShowNewSentence  from './pages/ShowNewSentence';
function App() {
let MyVar
switch(window.location.pathname){
  case "/":
    MyVar = <Home/>
    break
  case "/DictionaryPage":
    MyVar = <DictionaryPage/>
    break
  // case "/CardGame":
  //   MyVar = <CardGame />
  //   break
  case "/ShowNewSentence":
    MyVar = <ShowNewSentence />
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
