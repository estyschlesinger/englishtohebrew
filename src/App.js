
import './css/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Glossary  from './components/Glossary';
import Grammar from './components/Grammar';
import TicTacToe from "./components/TicTacToe"
import Alphabet from './components/Alphabet';
import Reading from './components/Reading';
import SignIn from './components/SignIn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBarr } from './components/Appbarr';
//import Dashboard, {DashboardContent} from './components/Dashboard.tsx';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2CB522"
    },
    secondary: {
      main: "#494c7d"
    }
  },
  typography: {
    fontFamily: [

      'Noto Sans Hebrew',
      'sans-serif'
    ]
  },
 
  
});

theme.typography.h3 =   {
fontSize: '1.2rem',

}

function App() {

let MyVar
switch(window.location.pathname){
  case "/":
    MyVar = <Home/>
    break
  case "/Glossary":
    MyVar = <Glossary/>
    break
  case "/Grammar":
    MyVar = <Grammar />
    break
  case "/TicTacToe":
    MyVar = <TicTacToe/> 
    break
  case "/Alphabet":
    MyVar = <Alphabet/>
    break 
  case "/Reading":
    MyVar = <Reading/>
    break
  case "/SignIn":
    MyVar = <SignIn/>
    break
   
}

  return (
    <>
    <ThemeProvider theme={theme}>
    {/* <Navbar/> */}
<AppBarr/>
      {MyVar}
      </ThemeProvider>
    </>
  );
}

export default App;
