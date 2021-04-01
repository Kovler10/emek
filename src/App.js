import logo from './logo.svg';
import './App.css';
import ListArea from './ListArea.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class='main-body'>
        <div class='input-area'>
          <ListArea title="List A"></ListArea>  
          <ListArea title="List B"></ListArea>
        </div>

        <div class="answer-area">
          <ListArea title="Only in List A" readonly="true"></ListArea>  
          <ListArea title="In both" readonly="true"></ListArea>
          <ListArea title="Only in List B" readonly="true"></ListArea>  
        </div>
      </div>
    </div>
  );
}

export default App;
