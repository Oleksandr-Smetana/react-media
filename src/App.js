import logo from './logo.svg';
import './App.css';
import Media from 'react-media';

function App() {
  return (
    <div className="App">
      <Media
        queries={{
          // initial: '(max-width: 319px)',
          // small: '(min-width: 320px) and (max-width: 767px)',
          // medium: '(min-width: 768px) and (max-width: 1279px)',
          // large: '(min-width: 1280px)',
          init: { maxWidth: 319 },
          small: { minWidth: 320, maxWidth: 767 },
          medium: { minWidth: 768, maxWidth: 1279 },
          large: { minWidth: 1280 },
        }}
      >
        {matches => (
          <>
            {matches.init && (
              <p className="initBar">The document is less than 320px wide.</p>
            )}
            {matches.small && (
              <p className="smallBar">The document width is 320-767px.</p>
            )}
            {matches.medium && (
              <p className="mediumBar">The document width is 768-1279px.</p>
            )}
            {matches.large && (
              <p className="largeBar">The document is at least 1280px wide.</p>
            )}
          </>
        )}
      </Media>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
