import "./App.css";
import Login from "./Components/Signup/Login"
import Signup from "./Components/Signup/Signup"
import PhoneLogin from "./Components/Signup/PhoneLogin"
import OTPpage from "./Components/Signup/OTPpage";

function App() {
  return <div className="App">
    {/* <PhoneLogin/> */}
    {/* <Login/> */}
    <Signup/>
  </div>;
}

export default App;
