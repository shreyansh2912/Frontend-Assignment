import React, { useState, useContext, createContext } from 'react';

const handleChange = (variable,setvar)=>{
  if(variable == "Yes"){
    setvar("No");
  }
  else{
    setvar("Yes");
  }
}

const Checklist = () => {
  const[citizen,setCitizen] = useState("No");
  const[adult,setAdult] = useState("No");

  return (
    <div>
      <>
      <h1>Are you Citizen : {citizen} </h1>
      <h1>Are you over 21: {adult}  </h1>
      <div>
        <span>Are you a Citizen? </span>
        <input type='checkbox' id='citizen' onClick={()=>{handleChange( citizen,setCitizen)}}></input> <br/>
        <span>Are you over 21? </span>
        <input type='checkbox' id='adult' onClick={()=>{handleChange(adult,setAdult)}}></input>
      </div>
      </>
    </div>
  );
};

const App = () => (
    <Checklist />
);

export default App;
