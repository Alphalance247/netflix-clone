import logo from "./logo.svg";
import "./App.css";
import Logo from "./LOGO/Logo";
import HeroPage from "./hero-page/HeroPage.js";
import Showcase from "./showCase/Showcase";
import Question from "./Question/Question";

function App() {
  return (
    <div>
      <Logo />
      <HeroPage />
      <Showcase />
      <Question />
    </div>
  );
}

export default App;
