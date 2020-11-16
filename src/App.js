import logo from "./logo.svg";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";

import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ background: "#EBE8F0", paddingBottom: "100px" }}
    >
      <Header />
      <SignUp />
    </div>
  );
}

export default App;
