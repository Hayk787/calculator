
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="canteiner">
      <div className='calculator'>
        <div className='form'>
          <input type='text' value={value}/>
        </div>
        <div>
          <input className='ac' type='button' value="AC" onClick={e => setValue(value.slice(-1,0))}/>
          <input className='plusminus' type='button' value="+-"/>
          <input className='tokos' type='button' value="%"/>
          <input className='bajanum' type='button' value="/" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type='button' value="7" onClick={e => setValue(value + e.target.value)}/>
          <input type='button' value="8" onClick={e => setValue(value + e.target.value)}/>
          <input type='button' value="9" onClick={e => setValue(value + e.target.value)}/>
          <input className='bazm' type='button' value="*" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type='button' value="4" onClick={e => setValue(value + e.target.value)}/>
          <input type='button' value="5" onClick={e => setValue(value + e.target.value)}/>
          <input type='button' value="6" onClick={e => setValue(value + e.target.value)}/>
          <input  className='gumarum' type='button' value="+" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
         <input type='button' value="1" onClick={e => setValue(value + e.target.value)}/>
         <input type='button' value="2" onClick={e => setValue(value + e.target.value)}/>
         <input type='button' value="3" onClick={e => setValue(value + e.target.value)}/>
         <input className='minus' type='button' value="-" onClick={e => setValue(value + e.target.value)}/>
        </div>
        <div>
        <input className='ziro' type='button' value="0" onClick={e => setValue(value + e.target.value)}/>
        <input type='button' value="." onClick={e => setValue(value + e.target.value)}/>
        <input className='havasar' type='button' value="=" onClick={e => setValue(eval(value))}/>
        </div>
      </div>
    </div>
  );
}

export default App;
