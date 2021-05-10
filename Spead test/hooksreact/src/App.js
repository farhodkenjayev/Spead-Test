import React, { useState, useEffect,useRef } from "react";
import "./style.css";

const App = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(5);
  const [isTimeRunning, SetTimeRunning] = useState(false)
  const [testNumber, setTestNumber] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (number > 0 && isTimeRunning == true) {
      setTimeout(() => {
        setNumber(number - 1);
      }, 1000);
    }else if(number == 0){
      const wordsNumber = calculateArray(text)
      SetTimeRunning(false)
      setTestNumber(wordsNumber)
    
    }
  }, [number, isTimeRunning]);
 
  function handlechang(e) {
    setText(e.target.value);
  }

  function calculateArray(text) {
    const wordsArray = text.trim().split(" ");
    const filterDate = wordsArray.filter((e) => e !== "");
    return filterDate.length
  }

  return (
    <div className="app">
      <h1>Speed text</h1>
      <textarea ref={myRef} onChange={handlechang} value={text} disabled={isTimeRunning == false}/>
      <h4>Qolgan vaqt: {number}</h4>
      <button disabled={isTimeRunning}
        onClick={()=>{
            SetTimeRunning(true)
            setNumber(5)
            setText('')
            setTestNumber(0)
            myRef.current.disabled = false
            myRef.current.focus()
            
            
        }}>
        Start
      </button>
      <h1>Sozlar soni:{testNumber } </h1>
    </div>
  );
};

export default App;
