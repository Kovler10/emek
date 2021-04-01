import logo from './logo.svg';
import './App.css';
import { ListContextProvider } from "./context";
import InputSection from './components/inputSection/InputSection';
import AnswerSection from './components/answerSection/AnswerSection';

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
