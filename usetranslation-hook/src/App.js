import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation()

  function handleClick(lang) {

    i18n.changeLanguage(lang)
  }


  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem ', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')}>
          English
        </button>
        <button onClick={() => handleClick('bg')}>
          Bulgarian
        </button>
      </nav>
      <header className="App-header">
        <p>{t('Thanks.1')}</p>
        <p>{t('Why.1')}</p>
      </header>
    </div>
  );
}

export default App;
