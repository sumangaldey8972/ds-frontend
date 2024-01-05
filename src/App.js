import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Common/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
