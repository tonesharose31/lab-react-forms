import React from "react";
import {useState} from "react"
import "./Form.css";

function Form() {
  const [inputValues, setInputValues] = useState("");
  const[ SelectedOperation,setSelectedOperation]= useState("");
  
  const handleInputchange = (e) => {
  setInputValues(e.target.value);
};

const handleOperationChange = (e) => {
  setSelectedOperation(e.target.value);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
};

const numbers = inputValues.split(",").map((num)=> parseFloat(num.trim());)

if(numbers.some(isNaN)){
  SetResult(`Invalid input.`);
  return;
}

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input id="values" name="values" type="text" value={inputValues} onChange={handleInputchange}/>
        <select id="operation" name="operation" value={SelectedOperation} onChange={handleOperationChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{/* display calculated results here*/}</p>
      </section>
    </>
  );
}

export default Form;
