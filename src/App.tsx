import React, {useState} from 'react';

export default function App(){

  const [value, setValue] = useState('')
  
  function handleClick(event:React.ChangeEvent<HTMLInputElement>){

    if(event.currentTarget.value === 'fuck'){
      setValue('you are dead')
    }
    else{
      setValue(event.currentTarget.value)
    }


  }
  
  return(
    <div>
    <h1>Hello</h1>
    <input type='text' value={value} placeholder='say fuck' onChange={handleClick}></input>
    <p>{value}</p>
    </div>

  )
}