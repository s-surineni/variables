import React, { useRef } from 'react'
import './App.css';
import { useState } from 'react';

function Row(props) {
  const nameForm = useRef(null)

  const handleClickEvent = () => {
    const form = nameForm.current
    const key = form['key'].value
    const value = form['value'].value
    console.log('ironman key, value', key, value);
    props.onClick(form['key'].value, form['value'].value)
  }
  return (<div>
    <form ref={nameForm}>
      <input label={'key'} name={'key'} />
      <input label={'value'} name={'value'} />
    </form><button onClick={handleClickEvent}>Save</button></div>)
}
function App() {
  const [variables, setVariables] = useState(new Map());
  const addVariable = (key, value) => setVariables(new Map(variables.set(key, value)));
  const nameForm = useRef(null)

  const handleClickEvent = () => {
    const form = nameForm.current
    const key = form['key'].value
    const value = form['value'].value
    console.log('ironman key, value', key, value);
    addVariable(form['key'].value, form['value'].value)
  }
  return (
    <div className="App">
      <div>
        <form ref={nameForm}>
          <input label={'key'} name={'key'} />
          <input label={'value'} name={'value'} />
        </form><button onClick={handleClickEvent}>Save</button></div>
      {/* {JSON.stringify(variables)} */}
      {/* <div><Row onClick={addVariable} /></div> */}
      {/* <ul>
        {[...variables.keys()].map(k => (
          <li key={k}>{variables.get(k)}</li>
        ))}
      </ul> */}
      <ul>
        {[...variables.keys()].map(key => (
          <li key={key}>
            <input label={key} name={key} value={key} />
            <input label={variables.get(key)} name={variables.get(key)} value={variables.get(key)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
