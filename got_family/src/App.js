import "./App.css";
import CardConatiner from "./Components/CardContainer/CardContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://pbs.twimg.com/profile_images/779000319644569600/Y3WMnZUG_400x400.jpg"
          className="App-logo"
          alt="logo"
        />
        <div>George Raymond Richard Martin latest Books</div>
      </header>
      <div className="App-body">
          <CardConatiner />
      </div>
    </div>
  );
}

export default App;
