import back from './sky-planes-dark-minimalist-wallpaper-original.jpg';
import './Login.css';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

function Login() {
  const Navigate=useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword]=useState('');
  const [auth]=useState({username:"Nikhil", password:"password"});
  const [login,setLogin]=useState();
  const click = e => {
    e.preventDefault();
    if(username===(auth.username) && password===(auth.password)){
      console.log("Logged In");
      setLogin(true);
      Navigate("/page2")
    }
    //console.log(username);
    //console.log(password);  
    else{
      setLogin(false);
    console.log("Username or Password is Incorrect")
  } 
}
  return (
    <form onEnter={click}>
      <div className="background">
        <img src={back} className="background" alt="logo" />
        <div>
        <div className="main"></div>
          <header className='login'>
            <h1>LOGIN</h1>
          </header>
          <button className='signinbutton'  onClick={click}>SIGNIN</button>
          <div className='username'>
            <h1>Username</h1>
          </div>
          <div className='password'>
            <h1>Password</h1>
          </div>
          <div>  
            <input type="text" className='usernamefield' name="username" value={username} onChange={e => setUsername(e.target.value)}/><br/>    
          </div>
          <div>
            <input type="password" className='passfield' name="password" value={password} onChange={e => setPassword(e.target.value)}/><br/>
          </div>
          </div>
          {login===true ?
          <div className='logpass'>Successfully Logged In</div>:<></>}
          {login===false?
          <div className='logfail'>Username or Password is Incorrect!</div> :<></>} 
      </div> 
      </form>    
  );
}

export default Login;
