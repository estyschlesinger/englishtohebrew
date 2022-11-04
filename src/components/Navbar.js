import '../css/Navbar.css'

export default function Navbar(){

    return <nav className="nav" dir='rtl'>

 <a className="site-title" href="/">HEVANTI</a>

   <ul className='nav-items'>

   <li>
        <a className="menu-item" href="/">דף הבית</a>
    </li>
    
   <li><div className='wholeDrop'>
        <div className='menu-item'>בואו נלמד לקרוא באנגלית</div>
        
        <div className='has-submenu'>
            <div>
            <a className="menu-dropdown-item hide" href="/LearnAlphabet">לימוד אותיות באנגלית</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/Alphabet">מבחן באותיות באנגלית</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/Alphabet">תרגול אותיות באנגלית</a>
            </div>
        </div>
        </div>
    </li>
    <li>
        <a className="menu-item" href="/ShowNewSentence">ללמוד משפט חדש</a>
    </li>

    <li><div className='wholeDrop'>
        <div className="menu-item" >משחקים</div> 
        
          
        <div className='has-submenu'>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק האיקס ואפס</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק זיכרון</a>
            </div>
            <div>
            <a className="menu-dropdown-item hide" href="/TicTacToe">משחק אישיות </a>
            </div>
        </div>
        </div>
    </li>
    
    <li>
        <a className="menu-item" href="/DictionaryPage">אוצר מילים </a>
    </li>

   </ul>
    </nav>
}