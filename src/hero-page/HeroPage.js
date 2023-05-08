import "./hero.css";

const HeroPage = () => {
  return (
    <div className="hero--page">
      <div className="overlay"></div>
      <div className="content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="input--btn">
          <input
            className="mail--input"
            placeholder="Email address"
            type="mail"
          />
          <div>
            <button className="hero--button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
