import { useState } from "react";
import "./Technology.css";

import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

const technologies = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space.",
    imageDesktop: launchPortrait,
    imageMobile: launchLandscape,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching spacecraft, by analogy to seaport for ships or airport for aircraft.",
    imageDesktop: spaceportPortrait,
    imageMobile: spaceportLandscape,
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere.",
    imageDesktop: capsulePortrait,
    imageMobile: capsuleLandscape,
  },
];

export default function Technology() {
  const [active, setActive] = useState(0);
  const tech = technologies[active];

  return (
    <main className="technology">
      <h2 className="technology-title">
        <span>03</span> SPACE LAUNCH 101
      </h2>

      <div className="technology-content">
        <div className="technology-left">
          <div className="technology-nav">
            {technologies.map((_, i) => (
              <button
                key={i}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="technology-info">
            <span>THE TERMINOLOGY…</span>
            <h1>{tech.name.toUpperCase()}</h1>
            <p>{tech.description}</p>
          </div>
        </div>

        <div className="technology-image">
          <img 
            src={tech.imageDesktop} 
            alt={tech.name}
            className="desktop-image"
          />
          <img 
            src={tech.imageMobile} 
            alt={tech.name}
            className="mobile-image"
          />
        </div>
      </div>
    </main>
  );
}
