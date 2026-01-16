import { useState } from "react";
import "./Destination.css";

import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const destinations = {
  Moon: {
    image: moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.",
    distance: "384,400 km",
    travel: "3 days",
  },
  Mars: {
    image: mars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain.",
    distance: "225 mil. km",
    travel: "9 months",
  },
  Europa: {
    image: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  Titan: {
    image: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan offers incredible views.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
};

export default function Destination() {
  const [active, setActive] = useState("Moon");

  return (
    <main className="destination">
      <h2 className="destination-title">
        <span>01</span> PICK YOUR DESTINATION
      </h2>

      <div className="destination-content">
       
        <div className="destination-image">
          <img src={destinations[active].image} alt={active} />
        </div>

      
        <div className="destination-info">
          <nav className="destination-tabs">
            {Object.keys(destinations).map((planet) => (
              <button
                key={planet}
                className={active === planet ? "active" : ""}
                onClick={() => setActive(planet)}
              >
                {planet.toUpperCase()}
              </button>
            ))}
          </nav>

          <h1>{active.toUpperCase()}</h1>
          <p>{destinations[active].description}</p>

          <div className="destination-stats">
            <div>
              <span>AVG. DISTANCE</span>
              <strong>{destinations[active].distance}</strong>
            </div>
            <div>
              <span>EST. TRAVEL TIME</span>
              <strong>{destinations[active].travel}</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
