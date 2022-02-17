import imgButtons from "./buttons.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Botones Originales del Framework</h3>
      <div className="originalButtons">
        <img src={imgButtons} alt="Botones Originales" className="imgButtons" />
      </div>
      <h3>Botones Personalizados</h3>
      <div className="buttons">
        <p uk-margin>
          <button class="uk-button uk-button-default">Default</button>
          <button class="uk-button uk-button-primary">Primary</button>
          <button class="uk-button uk-button-secondary">Secondary</button>
          <button class="uk-button uk-button-danger">Danger</button>
          <button class="uk-button uk-button-text">Text</button>
          <button class="uk-button uk-button-link">Link</button>
          <button class="uk-button uk-button-primary" id="buttonP2">P2</button>
        </p>
      </div>
      <h3>Card Model</h3>
      <div className="card">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
