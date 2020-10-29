import logo from './logo.svg';
import './App.css';

import { I18nProvider, LOCALES } from './i18n';

function App() {
  return (

    <div className="App">
      <I18nProvider locale={LOCALES.ENGLISH}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </I18nProvider>
    </div>

  );
}

export default App;
