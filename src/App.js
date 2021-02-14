import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [display, setDisplay] = useState(0);
  const [firstInput, setFirstInput] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isClear, setIsClear] = useState(false);
  const [isEqual, setIsEqual] = useState(false);

  const clearAll = () => {
    setFirstInput(null)
    setOperation(null)
    setIsClear(false)
  }

  const insertNum = (num) =>{
   

    if(display === 0) {
      setDisplay(num)
    }
    else if(isClear){

      setFirstInput(display)
      setDisplay(num)
      setIsClear(false);
    }
    else{

      setDisplay(display+num)
    }

    if(isEqual === true){
      clearAll()
      setIsEqual(false)
    }

  } 

  const clear = () => {
    setDisplay(0)
    clearAll()
  }

  const reverse =() => {
    if(display[0] === '-'){
      setDisplay(display.slice(1, display.length))
    }
    else {
      setDisplay('-' + display)
    }
  }
  
  const percentage= () => {
    if(display != 0){
      setDisplay(display/100)
    }
  }

  const equal = () =>{
    let result = 0
    switch(operation){
      case 'divide' :
        result = firstInput/display
        break
      case 'multi' :
        result = firstInput*display
        break
      case 'plus' :
        result = Number(firstInput)+Number(display)
        break
      case 'minus' :
        result = firstInput-display
        break
    }
    setIsClear(true)
    setDisplay(result)
    setOperation(null)
    setIsEqual(true)
    setFirstInput(null)
  }
  const set = (operation) =>{
    setOperation(operation);
    setIsClear(true)
    if(firstInput === null){
      setFirstInput(display)
    }else{
      equal();
    }
  }

  return (
    <div className="container">
      <div className="result">
      {display}
      </div>
      <div className="flex-container">
        <div onClick={clear}>c</div>
        <div onClick={reverse}>+/-</div>
        <div onClick={percentage}>%</div>
        <div onClick={()=>set('divide')}>/</div>

        <div onClick={()=> insertNum('7')}>7</div>
        <div onClick={()=> insertNum('8')}>8</div>
        <div onClick={()=> insertNum('9')}>9</div>
        <div onClick={()=>set('multi')}>X</div>
        <div onClick={()=> insertNum('4')}>4</div>
        <div onClick={()=> insertNum('5')}>5</div>
        <div onClick={()=> insertNum('6')}>6</div>
        <div onClick={()=>set('minus')}>-</div>
        <div onClick={()=> insertNum('1')}>1</div>
        <div onClick={()=> insertNum('2')}>2</div>
        <div onClick={()=> insertNum('3')}>3</div>
        <div onClick={()=>set('plus')}>+</div>
        <div onClick={()=> insertNum('0')} style={{width:'160px'}}>0</div>
        <div>.</div>
        <div onClick={equal}>=</div>
      </div>
    </div>
  );
}

export default App;
