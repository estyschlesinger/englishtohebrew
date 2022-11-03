import '../css/App.css'

export default function Navbar(){

    return <nav className="nav" dir='rtl'>
        <a className="site-title" href="/">The Languagician</a>
   <ul>
   <li>
        <a className="navigat" href="/">דף הבית</a>
    </li>
    
   <li>
        <span className='navigat'>בואו נלמד לקרוא באנגלית</span>
        
        <div>
            <div>
            <a className="menu-dropdown-item hide" href="/Alphabet">לימוד אותיות באנגלית</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/Alphabet">מבחן באותיות באנגלית</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/Alphabet">מבחן באותיות באנגלית</a>
            </div>
        </div>
       
    </li>
    <li>
        <a className="navigat" href="/ShowNewSentence">ללמוד משפט חדש</a>
    </li>

    <li>
        <span className="navigat" >משחקים</span> 
        
          
        <div>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק האיקס ואפס</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק האיקס ואפס</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק האיקס ואפס</a>
            </div>
        </div>
    </li>
    
   
    
    <li>
        <a className="navigat" href="/DictionaryPage">אוצר מילים </a>
    </li>
   </ul>
    </nav>
}