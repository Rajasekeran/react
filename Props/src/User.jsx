import React from 'react'

function user({name, age, phone, email}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{phone}</h3>
        <h4>{email}</h4>
    </div>
  )
}

export default user