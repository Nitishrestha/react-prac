import React, { useState } from 'react'

export default function Profile() {
  const [validated, setValidated] = useState(3);
    
  return (
    <div>Profile Page
        {validated ==1 ?
         <h1>Welcome user1</h1> 
        : validated ==2?  <h1>Welcome user2</h1> 
        : <h1>Welcome user3</h1>}
    </div>
  )
}
