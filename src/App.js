import logo from "./logo.svg";
import "./App.css";
import Button from "./button/Button";
import { Provider } from "react-redux";
import { store } from ".";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Button />
      </Provider>
    </div>
  );
}

export default App;
