import "./App.css";
import LoginPage from "./components/login";
import Navbar from "./components/Navbar";
// import register from "./components/Register";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <div className="container">
        <TextForm />
      </div>

      <div className="container">
        <LoginPage/>
      </div>

      

      <register/>

    </>
  );
}

export default App;
