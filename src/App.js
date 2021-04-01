import logo from './logo.svg';
import './App.css';
import ListArea from './components/ListArea/ListArea.js'
import { ListContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ListContextProvider>
      <div className='main-body'>
        <div className='input-area'>
          <ListArea title="List A" listIndex="0"></ListArea>  
          <ListArea title="List B" listIndex="1"></ListArea>
        </div>

        <div className="answer-area">
          <ListArea title="Only in List A" listIndex="0" readonly="true"></ListArea>  
          <ListArea title="In both" listIndex="2" readonly="true"></ListArea>
          <ListArea title="Only in List B" listIndex="1" readonly="true"></ListArea>  
        </div>
      </div>
      </ListContextProvider>
    </div>
  );
}

export default App;
