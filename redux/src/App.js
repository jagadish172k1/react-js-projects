import React, { useState } from 'react'
import {incaction ,decaction} from './action'
//import {connect} from 'react'


function  App() {
 const value=useState(0)
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incaction} >increment</button>
        <button onClick={decaction}>decrease</button>
      </div>
    
   );

  }
  
  const mapDispatchToProps = (setValue) => ({
    incaction: () => setValue(incaction()),
    decaction: () => setValue(decaction()),
  });
export default (value, mapDispatchToProps)(App);