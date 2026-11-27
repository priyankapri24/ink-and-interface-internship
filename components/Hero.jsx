

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-main">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-icon">
              <Sparkles size={14} />
            </span>
            GOOD DESIGN. UNEXPECTED ENERGY.
          </div>

          <h1 className="hero-title">
            WE MAKE
            <br />
            <span className="hero-title-second">
              DIGITAL
            </span>
            <br />
            <span className="hero-title-third">
              FEEL<span className="hero-title-star">✳</span>
            </span>
            <br />
            <span className="hero-title-last">
              ALIVE<span className="hero-title-dot">.</span>
            </span>
          </h1>

          <div className="hero-description-wrap">
            <span className="hero-description-arrow">↘</span>
            <p className="hero-description">
              We turn curious ideas into digital experiences
              that refuse to blend in. A little unexpected.
              A lot intentional.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#work" className="hero-button-primary">
              Explore our universe
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="hero-button-secondary">
              Got a wild idea?
            </a>
          </div>

          <div className="hero-manifesto">
            <span>LESS TEMPLATE.</span>
            <span>MORE TEMPERAMENT.</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art-top">
            <span>ART DIRECTION / 001</span>
            <span>AN EXPERIMENT</span>
          </div>

          <div className="hero-art-stage">
            <div className="hero-grid-pattern"></div>

            <div className="hero-ring hero-ring-outer"></div>
            <div className="hero-ring hero-ring-inner"></div>

            <div className="hero-art-cross cross-one">+</div>
            <div className="hero-art-cross cross-two">+</div>

            <div className="hero-art-circle">
              <div className="hero-art-circle-inner"></div>
              <div className="hero-art-circle-shine"></div>
            </div>

            <div className="hero-art-square">
              <div className="hero-art-square-inner"></div>
            </div>

            <div className="hero-art-orb">
              <div className="hero-art-orb-highlight"></div>
            </div>

            <div className="hero-art-type">
              <span>DON&apos;T</span>
              <span>FOLLOW</span>
              <span className="hero-art-type-last">
                THE GRID.
              </span>
            </div>

            <div className="hero-art-note">
              <span className="hero-art-note-arrow">↗</span>
              <span>
                HAPPY
                <br />
                ACCIDENTS
                <br />
                WELCOME.
              </span>
            </div>

            <div className="hero-art-sticker">
              <div className="hero-sticker-inner">
                <span>CREATIVE</span>
                <span>CHAOS</span>
                <span>CLUB</span>
              </div>
            </div>

            <div className="hero-art-tiny">
              01 / MAKE SOMETHING MATTER
            </div>
          </div>

          <div className="hero-art-bottom">
            <span>DESIGN × CODE × CULTURE</span>
            <span>THERE ARE NO HAPPY BORING THINGS.</span>
          </div>
        </div>
      </div>

      <div className="hero-bottomline">
        <span>SCROLL INTO THE UNEXPECTED</span>

        <a href="#services" className="hero-scroll">
          <ArrowDown size={17} />
        </a>

        <span>MADE WITH INTENTION, NOT INSTRUCTIONS.</span>
      </div>
    </section>
  );
}
