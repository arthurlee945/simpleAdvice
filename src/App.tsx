import React,{useState, useEffect} from 'react';
import './App.scss';
import Quote from "./components/Quote"

const App = () => {
  const [advice, setAdvice] = useState<string[]>([])
  useEffect(()=>{
    handleQuoteClick();
  },[])
  
  const handleQuoteClick = () =>{
    fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data =>{
      setAdvice([data.slip.id, data.slip.advice]);
    })
  }
  return (
    <div className = "mainPage">
      <Quote quote = {advice} click = {handleQuoteClick}/>
    </div>
  );
}

export default App;
