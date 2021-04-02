import logo from './logo.svg';
import './App.css';
import { ListContextProvider } from "./context/ListContext";
import InputSection from './components/inputSection/InputSection.jsx';
import AnswerSection from './components/answerSection/AnswerSection.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ListContextProvider>
      <div className='main-body'>
        <InputSection/>
        <AnswerSection/>
      </div>
      </ListContextProvider>
    </div>
  );
}

export default App;
