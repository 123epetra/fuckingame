import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === 'fuck') {
      setValue('you are dead');
    } else {
      setValue(inputValue);
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Hello</h1>
      <input
        type="text"
        value={value}
        placeholder="say fuck"
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <p>{value}</p>
    </div>
  );
}
