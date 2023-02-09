import React, { useState } from "react";

import { Container } from './styles';
import { GiAssassinPocket } from "react-icons/gi";

const Calculator: any = () => {

  const [result, setResult] = useState("0")
  const [memory, setMemory] = useState<any | null>(null);

  const [operator, setOperator] = useState<"+" | "-" | "*" | "/" | null>(null);




  function handleNumberClick(event : any) {

    if(result === "0") {
      setResult(event.target.value)
    } else {
      setResult(result + event.target.value)

    }
  }

  function handleClearClick() {
    setResult("0");
    setMemory(null);
    setOperator(null);
  }

  function handleOperatorClick(event: any) {
    setResult("0");
    setMemory(result);
    setOperator(event.target.value as "+" | "-" | "*" | "/" | null);
  }


  function handleEqualClick() {
    if (operator === "+") {
      setResult((parseInt(memory!, 10) + parseFloat(result)).toString());
    } else if (operator === "-") {
      setResult((parseFloat(memory!) - parseFloat(result)).toString());
    } else if (operator === "*") {
      setResult((parseFloat(memory!) * parseFloat(result)).toString());
    } else if (operator === "/") {
      setResult((parseFloat(memory!) / parseFloat(result)).toString());
    }
  }





  return (
    <Container>
      <input type="number" value={result} disabled/>
      <button value="7" onClick={handleNumberClick}>7</button>
      <button value="8" onClick={handleNumberClick}>8</button>
      <button value="9" onClick={handleNumberClick}>9</button>
      <button value="*" onClick={handleOperatorClick}>x</button>
      <button value="4" onClick={handleNumberClick}>4</button>
      <button value="5" onClick={handleNumberClick}>5</button>
      <button value="6" onClick={handleNumberClick}>6</button>
      <button value="-" onClick={handleOperatorClick}>-</button>
      <button value="1" onClick={handleNumberClick}>1</button>
      <button value="2" onClick={handleNumberClick}>2</button>
      <button value="3" onClick={handleNumberClick}>3</button>
      <button value="+" onClick={handleOperatorClick}>+</button>
      <button value="C" onClick={handleClearClick}>C</button>
      <button value="0" onClick={handleNumberClick}>0</button>
      <button value="/" onClick={handleOperatorClick}>/</button>
      <button value="=" onClick={handleEqualClick}>=</button>
    </Container>
    );
}

export default Calculator;
