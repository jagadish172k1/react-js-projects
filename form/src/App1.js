 import back from './back.jpg';
 import back1 from './back1.png';
import "./App.css";
import { useState } from "react";
import {  useNavigate,UserContext } from 'react';

function App() {
  var lett = /^[a-zA-Z' ']+$/;
  var numlet = /^[a-zA-Z0-9]+$/;
  var num = /^[0-9]+$/;
  const emaila = /^[^\s@]+@[^\s@]+(\.([^\s@]{2,4}){1})+$/;
  const [name, setName] = useState("");

  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [namef, setNamef] = useState(false);
  const [usnf, setUsnf] = useState(false);
  const [branchf, setBranchf] = useState(false);
  const [semf, setSemf] = useState(false);
  const [collegef, setCollegef] = useState(false);
  const [emailflag, setEmailflag] = useState(false);
  const [phonef, setPhonef] = useState(false);
  const [genderf, setGenderf] = useState(false);
  const Navigate=useNavigate();

  function click(e) {
    e.preventDefault();
    console.log(name);
    console.log(usn);
    console.log(branch);
    console.log(sem);
    console.log(phone);
    console.log(college);
    console.log(email);
    console.log(gender);
    if (lett.test(name) ) {
      setNamef(true);
      console.log("namef", namef);
    } else {
      setNamef(false);
      console.log("namef", namef);
    }
    if (numlet.test(usn)) {
      setUsnf(true);
      console.log("usnf", usnf);
    } else {
      setUsnf(false);
      console.log("usnf", usnf);
    }
    if (num.test(sem) ) {
      setSemf(true);
      console.log("semf", semf);
    } else {
      setSemf(false);
      console.log("semf", semf);
    }
    if (lett.test(branch)) {
      setBranchf(true);
      console.log("branchf", branchf);
    } else {
      setBranchf(false);
      console.log("branchf", branchf);
    }
    if (lett.test(college)) {
      setCollegef(true);
      console.log("collegef", collegef);
    } else {
      setCollegef(false);
      console.log("collegef", collegef);
    }
    if (emaila.test(email)) {
      setEmailflag(true);
      console.log("emailflag", emailflag);
    } else {
      setEmailflag(false);
      console.log("emailflag", emailflag);
    }
    if (num.test(phone) ) {
      setPhonef(true);
      console.log("phonef", phonef);
    } else {
      setPhonef(false);
      console.log("phonef", phonef);
    }
    if (gender !== "") {
      setGenderf(true);
      console.log("genderf", genderf);
    } else {
      setGenderf(false);
      console.log("genderf", genderf);
    }
    //console.log(email);
    //console.log(flag);
  }
  return (
    
    <form onKeyEnter={click}>
      
      <div className="background">
        <div>
          { <img src={back} className="background" name="background" alt="" /> }
          <div className="base" />
          { <div className="backgroundtwo">
            <img src={back1} name="background2" alt="" />
          </div> }
          <header className="header">Student Registration Form</header>
          <div>
            <div className="name">Name</div>
            <div className="usn">USN</div>
            <div className="sem">Semester</div>
            <div className="branch">Branch</div>
            <div className="email">Email</div>
            <div className="college">College</div>
            <div className="phone">Phone</div>
          </div>
          <div>
            <input
              type="text"
              className="namefield"
              name="namefield"
              
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="usnfield"
              name="usnfield"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="branchfield"
              name="branchfield"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="semfield"
              name="semfield"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="collegefield"
              name="collegefield"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="emailfield"
              name="emailfield"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            
            <input
              type="text"
              className="phonefield"
              name="phonefield"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <div className="gender">
              Male
              <input type="radio" value={gender} name="gender" onChange={setGender} />
            </div>
            <div className="genderf">
              Female
              <input type="radio" value={gender} name="gender" onChange={setGender}/>
            </div>
            <div className="gendero">
              Others
              <input type="radio" value={gender} name="gender" onChange={setGender}/>
            </div>
          </div>
          <div className="line1" />
          <div className="line2" />
          <button className="submit" onClick={click}>
            Register
          </button>
          {namef === true &&
          usnf === true &&
          branchf === true &&
          semf === true &&
          collegef === true &&
          emailflag === true &&
          phonef === true &&
          genderf === true ? 
             (Navigate("/page2")):<UserContext.Provider value={name} /> (
            <></>
          )}
          <div>
            {namef === false ? (
              <div className="namef">
                *Name cannot contain speacial characters or numbers
              </div>
            ) : (
              <></>
            )}
            {usnf === false ? (
              <div className="usnf">
                *USN cannot contain speacial characters{" "}
              </div>
            ) : (
              <></>
            )}
            {branchf === false ? (
              <div className="branchf">
                *Branch cannot contain speacial characters or alphabets
              </div>
            ) : (
              <></>
            )}
            {semf === false ? (
              <div className="semf">
                *Semester cannot contain speacial characters or letters
              </div>
            ) : (
              <></>
            )}
            {collegef === false ? (
              <div className="collegef">
                *College cannot contain speacial characters or numbers
              </div>
            ) : (
              <></>
            )}
            {emailflag === false ? (
              <div className="emailflag">*EmailID is INVALID</div>
            ) : (
              <div></div>
            )}
            {phonef === false ? (
              <div className="phonef">
                *Phone Number cannot contain speacial characters or alphabets
              </div>
            ) : (
              <></>
            )}
            {genderf === false ? (
              <div className="gendermsg">*Please select an option</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
export default App;