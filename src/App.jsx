import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div id="app-container" className="relative">
      <img
        className="object-cover w-full absolute z-[-1] opacity-75 h-screen"
        src="https://img.freepik.com/free-vector/gradient-halftone-background-vector_53876-77799.jpg"
        alt="background image"
      ></img>

      <LoginForm />
    </div>
  );
}

export default App;
