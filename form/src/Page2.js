import back from './back2.jpg';
import './Page2.css';
import { useContext,UserContext } from 'react';
export default function Page2(){
    var name=useContext(UserContext);
    return(
    <div>
     { <img src={back}  className="background" name="background" alt="" /> }
     <div className='box'/>
     <div className='msg'><h1> Hi,{name}, Your Registration Was Successful</h1></div>

    </div>
)}

