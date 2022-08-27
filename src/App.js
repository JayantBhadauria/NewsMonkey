import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from './components/News';

export default function App() {
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 const API="3ebbdd71006f430a91112c116d1f8bd9"
   const [progress1,setProgress]=useState(0);
   const[Mode,setMode]=useState("dark");
   const toggleMode=()=>{
    if(Mode==='dark'){
      setMode('light');
    }
    else{
      setMode('dark');
      
    }
  }
      return (
      <>
      <Router>
      <Navbar Mode={Mode} toggleMode={toggleMode}/>
      <LoadingBar
        color='orange'
        progress={progress1}
        height={3}
      />
      <Switch>
      <Route exact path="/" ><News setProgress={setProgress}  apikey={API} country='in' category='general' Mode={Mode} ></News></Route>
      <Route exact path="/general" ><News setProgress={setProgress}   apikey={API} key="general" country='in' Mode={Mode} category='general'></News></Route>
      <Route exact path="/technology"><News setProgress={setProgress}   apikey={API} key="technology" country='in' Mode={Mode} category='technology'></News></Route>
      <Route exact path="/sports" ><News setProgress={setProgress}   apikey={API} key="sports" country='in' Mode={Mode} category='sports'></News></Route>
      <Route exact path="/entertainment"  ><News setProgress={setProgress}   apikey={API} key="entertainment" Mode={Mode} country='in' category='entertainment'></News></Route>
      <Route exact path="/business"><News setProgress={setProgress}   apikey={API} key="business" country='in' Mode={Mode} category='business'></News></Route>
      <Route exact path="/science"><News setProgress={setProgress}  apikey={API}  key="science" country='in' Mode={Mode} category='science'></News></Route>
      </Switch>
      </Router>
      </>
    )
}

