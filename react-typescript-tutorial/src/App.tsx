import React from 'react';
import { Counter } from './components/Counter';
import TextField from './components/TextField';


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TextField
        text="hello"
        person={{ firstName: "John", lastName: "Smith" }}
        handleChange={e => {
          e.target
        }}
      /> */}

      <Counter>
        {({ count, setCount }) => (<div>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter>
    </div>
  );
}

export default App;
