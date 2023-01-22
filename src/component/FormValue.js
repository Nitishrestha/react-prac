import React from 'react'
import { useState } from 'react';

export default function FormValue() {
    const [data,setData] = useState('');
  const [print, setPrint] = useState(false);

  const getData = (val) => {
    setPrint(false);
   // console.log(val.target.value);
    setData(val.target.value);
  }

  const printData = () => {
    setPrint(true);
  }

  return (
    <div className="App">
      <h1>Get input box value</h1>
      <input type="text" onChange={getData}></input>
      <button onClick={()=>printData()}>Print Value</button>
      <br/>
      {
        print ? data : null
      }
    </div>
  );
}
