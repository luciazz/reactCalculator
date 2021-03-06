import React, {useState} from 'react';
import './App.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Calculator from './component/Calculator';

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
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Calculator} />
      {/* <Route component={Default} /> */}
    </Switch>
  </div>
</Router>
  )
}

export default App;
