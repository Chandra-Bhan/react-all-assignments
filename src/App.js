import logo from "./logo.svg";
import "./App.css";
import Todos from "./todos/Todos";
import { Provider } from "react-redux";
import { state } from ".";

function App() {
  return (
    <div className="App">
      {/* <Provider state={state}>
        <Todos />
      </Provider> */}
    </div>
  );
}

export default App;
