import React, { useState } from 'react'

export default function HandleForm() {
  
    const [name, setName] = useState('');
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState('');

    const getFormData = (e) => {
        e.preventDefault();
        console.log('name: ' + name + ' interest: ' + interest + ' tnc accepted: ' + tnc);
    }

    return (
    <div>
        <h1>Handle Form in React</h1>
        <form onSubmit={(e)=> getFormData(e)}>
            <input type="text" placeholder='enter name'
            onChange={(e)=> setName(e.target.value)}
            /><br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Java</option>
                <option>Python</option>
                <option>PHP</option>
                <option>React</option>
            </select>
            <br/><br/>
            <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/><span>Accept Terms and Condtions</span>
            <br/><br/>
            <button type='submit'> Submit</button>
        </form>
        </div>
  )
}
