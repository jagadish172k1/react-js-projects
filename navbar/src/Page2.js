import back from './back2.jpg';
import './Page2.css';
export default function Page2(){
    return(
    <div>
     { <img src={back}  className="background" name="background" alt="" /> }
     <div className='box'/>
     <div className='msg'><h1> Hi,Your Registration Was Successful</h1></div>

    </div>
)}

