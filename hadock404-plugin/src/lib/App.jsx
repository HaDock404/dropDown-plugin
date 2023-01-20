/*import React from "react";
import './style.css'
import {useRef, useEffect} from 'react';

function closed() {
  const modalSelect = document.querySelector(".menucache")
  modalSelect.style.display = "none";
}

function testClick() {

  const modalSelect = document.querySelector(".menucache")
  const triage1 = document.querySelector(".test1")
  const triage2 = document.querySelector(".test2")
  const triage3 = document.querySelector(".test3")

  if (modalSelect.style.display === "flex") {
    modalSelect.style.animationName = "closeModale";
    triage1.style.animationName = "closeModale2";
    triage2.style.animationName = "closeModale2";
    triage3.style.animationName = "closeModale2";
    setTimeout(closed, 500)                
} else {
    modalSelect.style.display = "flex";
    modalSelect.style.animationName = "modale";
    triage1.style.animationName = "modaleX";
    triage2.style.animationName = "modaleX";
    triage3.style.animationName = "modaleX";
    
}
  
}

function testrendu() {
  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;
    console.log(el2.style.backgroundColor);
    //const el = document.querySelector('.dropdown');
    //console.log(el.style.backgroundColor);
  }, []);

  return (
    <div className="unroll" onClick={testClick}>
     <button ref={ref} className="dropdown" style={{backgroundColor: "#334a1f" }}>Choose</button>
     <div className="menucache" aria-hidden="true">
         <button className="triage test1" onClick={testClick}>Alabama</button>
         <button className="triage test2" onClick={testClick}>Ohio</button>
         <button className="triage test3" onClick={testClick}>Washington</button>
     </div>
   </div>
  )
}
*/

import './style.css'
import React from "react";
import { useState } from "react";

let i = 0;

function Modal(props) {

  function handleClick(event) {
    props.setClickedElement(event.target);
  }

  let modalState = ""

  if (props.display === true) {
    modalState = "block"
  } else {
    modalState = "none"
  }

  return (
    <div 
      style={
        {
          display: `${modalState}`,
          backgroundColor: `${props.modalBackgroundColor}`,
          width: `${props.modalWidth}`,
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px"
        }
      }
    >
      {props.wordsList.map(
        word => 
        <div
          className="wordList"
          data={word.word}
          key={i++} 
          style={
            {
              textAlign: "center",
              padding: "5px",

              cursor: "pointer",            
            }
          }
          onClick={handleClick}
        >
          {word.word}
        </div>
        )
      }
      
    </div>
  )
}

export default function HaDock404Plugin(props) {

  const [modal, setModal] = useState(false)
  const [clickedElement, setClickedElement] = useState(null);

  return (
    <div>
      <button id="button" type="button"
      style=
        {
          {
            backgroundColor: `${props.dropdownBackgroundColor}`, 
            width: `${props.dropdownWidth}`, 
            height: `${props.dropdownHeight}`,
            color: `${props.dropdownColor}`,
            fontWeight: `${props.dropdownFontweight}`,
            fontSize: `${props.dropdownFontsize}`,
            cursor: "pointer",
            borderRadius: `${props.dropdownBorderradius}`

          }
        } onClick={() =>setModal(!modal)}>
          {clickedElement ? clickedElement.innerHTML : props.dropdownMessage}      
      </button>
      <Modal 
        display={modal} 
        modalBackgroundColor={props.modalBackgroundColor}
        modalWidth={props.dropdownWidth}
        wordsList={props.tabWordsList}
        setClickedElement={setClickedElement}
      />
      
    </div>
  );
}

/*const App = ({ type = "text", label, value, onChange, props }) => (

  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>

  //<HaDock404Plugin></HaDock404Plugin>
  //haDock404Plugin()
   //testrendu()
);

App.defaultProps = {
  test: "bonjour"
}*/


const wordsList = [
  {
    word: "Alabama"
  },
  {
    word: "Washington"
  },
  {
    word: "California"
  }
]


HaDock404Plugin.defaultProps = {
  dropdownMessage: "Choose",
  dropdownBackgroundColor: "#334a1f",
  dropdownWidth: "120px",
  dropdownHeight: "40px",
  dropdownColor: "white",
  dropdownFontweight: "bold",
  dropdownFontsize: "16px",
  dropdownBorderradius: "5px",
  modalBackgroundColor: "#cfd4d1",
  tabWordsList: wordsList
}



//export default App;
