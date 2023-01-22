import React, { useState } from 'react'

export default function HideElement() {
    const [name, setName] = useState('Hide');
    const [visible, setVisible] = useState(true);

    const toggle = () => {
        setVisible(!visible);
        !visible ? setName('Hide') : setName('Show');
    }

    return (
    <div>
        {
            visible ? <h1>Hello Everyone</h1> : <h1></h1>  
        }
        <button onClick={()=> toggle()}>{name}</button>
    </div>
  )
}
