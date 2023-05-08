import tvshow from "../assets/tv-show.png";
import swag from "../assets/swaag.png";
import kids from "../assets/kids.png";
import ark from "../assets/ark.png";
import "./showcase.css";

const Showcase = (props) => {
  return (
    <div>
      <div className="showcase show-1">
        <div className="details">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div>
          <img src={tvshow} alt="" />
        </div>
      </div>

      <div className="showcase show-2">
        <div>
          <img src={swag} alt="" />
        </div>
        <div className="details">
          <h1>Watch everywhere</h1>

          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>

      <div className="showcase show-3">
        <div className="details">
          <h1>Create profiles for kids</h1>

          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>

        <div>
          <img src={kids} alt="" />
        </div>
      </div>

      <div className="showcase show-4">
        <div>
          <img src={ark} alt="" />
        </div>

        <div className="details">
          <h1>Download your shows to watch offline</h1>

          <p>
            Download your shows to watch offline Save your favorites easily and
            always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
