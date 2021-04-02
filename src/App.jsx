import logo from './compare-icon.png';
import './App.css';
import { ListContextProvider } from "./context/ListContext";
import InputSection from './components/inputSection/InputSection.jsx';
import AnswerSection from './components/answerSection/AnswerSection.jsx';
import ListFormatControls from './components/ListFormatControls/ListFormatControls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Emek</h1>
      </header>
      <ListContextProvider>
      <div className='main-body'>
        <InputSection/>
        <ListFormatControls/>
        <AnswerSection/>
      </div>
      </ListContextProvider>
    </div>
  );
}

export default App;
