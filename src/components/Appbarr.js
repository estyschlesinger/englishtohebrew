import { Typography, AppBar, CssBaseline, Toolbar, IconButton, Stack, Box, Tabs, Tab, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import {CgProfile} from 'react-icons/cg'
import {GiFeather} from 'react-icons/gi'
import { useState } from "react";

export const AppBarr = () => {

    const [value, setValue] = useState(0);

    return(
        <>
        <AppBar >
            <Toolbar>
                <Stack direction="row" spacing={4}>
                <IconButton>
                  <GiFeather/>
                  </IconButton>
               <Typography>HEVANTI</Typography> 
             </Stack>
             <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor>  
                <Tab label = "דף הבית" href="/"/>
                   <Stack>
                <Tab label = "קריאה"/> 
                     <Box label="אותיות" href="/Reading"/>
                     <Box label="תרגול" href="/Alphabet"/>
                     <Box label="בוחן" href="/Alphabet"/>
                   </Stack>
                <Tab label = "שפה"/>
                <Tab label = "מילון"/>
             </Tabs>
             <Button color="secondary" sx={{marginRight: "auto"}}>כניסה לחשבון</Button>
             <Button color="secondary" sx={{marginRight: "10px"}}>פתיחת חשבון חדש</Button>
            </Toolbar>
        </AppBar>
        </>



//    <ul className='nav-items'>

//    <li>
//         <a className="menu-item" href="/">דף הבית</a>
//     </li>
    
//    <li><div className='wholeDrop'>
//         <div className='menu-item'>קריאה</div>
        
//         <div className='has-submenu'>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Reading">לימוד אותיות באנגלית</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Alphabet">מבחן באותיות באנגלית</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Alphabet">תרגול אותיות באנגלית</a>
//             </div>
//         </div>
//         </div>
//     </li>

//     <li>
//     <div className='wholeDrop'>
//         <div className='menu-item'>דקדוק</div>
        
//         <div className='has-submenu'>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Grammar">ללמוד משפט חדש</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Grammar">למוד כלל דקדוק</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Grammar">תרגול</a>
//             </div>
//         </div>
//         </div>
//     </li>

//     <li><div className='wholeDrop'>
//         <div className="menu-item" >משחקים</div> 
        
          
//         <div className='has-submenu'>
//             <div>
//             <a className="menu-dropdown-item hide" href="/TicTacToe">משחק האיקס ואפס</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/TicTacToe">משחק זיכרון</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/TicTacToe">משחק אישיות </a>
//             </div>
//         </div>
//         </div>
//     </li>
    
//     <li>
//         <a className="menu-item" href="/Glossary">אוצר מילים </a>
//     </li>

//     <div className='wholeDrop'>
//    <div className='menu-item my-icon '> <CgProfile/> </div>      
        
//         <div className='has-submenu'>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Dashboard">my dashboard</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Reading">החשבון שלי</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/Alphabet">הגדרות</a>
//             </div>
//             <div>
//             <a className="menu-dropdown-item hide" href="/SignIn">כניסה לחשבון</a>
//             </div>
//         </div>
        
    
// </div>

//    </ul>

//            </Stack>
           
//             </Toolbar>


//         </AppBar>
//         </>
    )
}