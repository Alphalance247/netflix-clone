import netflixLogo from "../assets/netflixLogo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="nav--logo">
      <div>
        <img src={netflixLogo} className="logo" alt="netflix" />
      </div>
      <div>
        <p className="btn">Sign In</p>
      </div>
    </div>
  );
};

export default Logo;
