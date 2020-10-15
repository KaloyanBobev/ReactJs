import React from 'react';

import './App.scss';

const api = {
  key: "1eb983d13270744b55230458ebacbc9d",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Search.." />
        </div>
      </main>

    </div>
  );
}

export default App;
