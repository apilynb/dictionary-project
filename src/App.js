import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./AB-logo.svg";

function App() {
  return (
    <div className="App container">
      <main>
        <Dictionary defaultWord="sunset" />
      </main>
      <img src={logo} alt="AB Logo" className="logo img-fluid" />
      <footer className="mb-5">
        This project was coded by{" "}
        <a
          href="https://apilynbonny.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Apilyn Bonny
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/apilynb/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
