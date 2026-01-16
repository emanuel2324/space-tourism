import { useState } from "react";
import "./Crew.css";

import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: douglas,
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu.",
    image: mark,
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the ISS.",
    image: victor,
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.",
    image: anousheh,
  },
];

export default function Crew() {
  const [index, setIndex] = useState(0);
  const crew = crewData[index];

  return (
    <main className="crew">
      <h2 className="crew-title">
        <span>02</span> MEET YOUR CREW
      </h2>

      <div className="crew-content">
        {/* TEXTO */}
        <div className="crew-info">
          <h3>{crew.role.toUpperCase()}</h3>
          <h1>{crew.name.toUpperCase()}</h1>
          <p>{crew.bio}</p>

          {/* DOTS (para navegar entre os tripulantes) */}
          <div className="crew-dots">
            {crewData.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Membro ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <div className="crew-image">
          <img src={crew.image} alt={crew.name} />
        </div>
      </div>
    </main>
  );
}
