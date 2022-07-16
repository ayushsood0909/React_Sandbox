import "./styles.css";
import Greet from "./components/greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
export default function App() {
  return (
    <div className="App">
      <Greet name="Ayush" />
      <Greet name="Naman" />
      <Greet name="Vyom" />
      <Message name="Rahul" heroname="Batman" />
      <Welcome></Welcome>
      <Hello></Hello>
    </div>
  );
}
