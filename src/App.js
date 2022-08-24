import './App.css';
import Dictionary from './Dictionary';
import logo from "./AB-logo.svg";

function App() {
  return (
    <div className="App container">
      <main>
        <Dictionary defaultWord="sunset" />
      </main>
      <img src={logo} alt="AB Logo" className="logo img-fluid" />
      <footer className='mb-5'>Coded by Apilyn Bonny</footer>
    </div>
  );
}

export default App;
