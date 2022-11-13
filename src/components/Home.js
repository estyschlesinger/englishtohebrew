
import Button from '@mui/material/Button';



export default function Home(){
    return (
        <div>
    <h1 className="bodyText">ברוכים הבאים ללימוד אנגלית</h1>
    <p className="bodyText">אז התייאשת מללמוד אנגלית, נכון? בואו ואוכיח לכם אחרת</p>
    
    <div className="button-group">

        
    {<Button variant="contained" color="primary" align="center">בא לי ללמוד</Button>}
    
    </div>
    
    </div>
        )
}