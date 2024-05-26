import React from 'react';
import pasicon from './passicon.jpg';
import proicon from './profileicon.jpeg';
import back  from './back.jpg';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      login:""
    }
    }
    click =(e)=>{
    e.preventDefault();
    if(this.state.username==="Nikhil" && this.state.password==="password"){
      console.log("Logged In");
      this.setState({ login:true})

    }
  
    else{
    this.setState({ login:false})
    console.log("Username or Password is Incorrect")
  } 
}
render(){
return(
    <form onEnter={this.click}>
      <div className="background">
        <img src={back} className="background" alt="background" />
        <div className='formbackground'></div>
        <div className='message'>User Login</div>
        <div>
        <button className='login' onClick={this.click}>Login</button>
        </div>
        <input type="text" className='userfield' name="userfield" value={this.state.username} onChange={e => this.setState({username:e.target.value})}/><br/>
        <input type="password" className='passfield' name="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/><br/>
        <img src={pasicon} className="passicon" alt="passicon" />
        <img src={proicon} className="proicon" alt="proicon" />
        {this.state.login===true ? <div className='logpass'>Successfully Logged In!</div>:<></>}
        {this.state.login===false ? <div className='logfail'>Username or Password is Incorrect!</div> :<></>}
      </div>
    </form>
)
}
}
export {App}