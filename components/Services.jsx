
import {
  ArrowUpRight,
  Palette,
  Monitor,
  Code2,
  Shapes,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Give your ideas a face, a voice and a personality that people remember.",
    tags: "IDENTITY / STRATEGY",
    icon: Palette,
    className: "menu-brand",
    art: "brand",
  },
  {
    number: "02",
    title: "Web design",
    description:
      "Design digital spaces that are intuitive, expressive and a little unexpected.",
    tags: "UX / UI / EXPERIENCE",
    icon: Monitor,
    className: "menu-web",
    art: "web",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Thoughtful code, playful interactions and ideas brought to life.",
    tags: "FRONTEND / INTERACTION",
    icon: Code2,
    className: "menu-code",
    art: "code",
  },
   {
    number: "04",
    title: "Arts & Play",
    description:
      "Explore experimental visuals, playful interactions and creative ideas that break the usual rules.",
    tags: "EXPERIMENT / CREATIVE PLAY",
    icon: Shapes,
    className: "menu-play",
    art: "play",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="menu-topline">
        <span>INK & INTERFACE®</span>
        <span>WHAT WE MAKE / 001</span>
      </div>

      <div className="menu-intro">
        <div className="menu-intro-left">
          <span className="menu-kicker">
            THE CREATIVE MENU
          </span>

          <h2>
            A LITTLE
            <br />
            <span>OF THIS.</span>
            <span className="menu-highlight">
              A LOT OF THAT.
            </span>
          </h2>
        </div>

        <div className="menu-intro-right">
          <div className="menu-intro-asterisk">✳</div>
          <p>
            We don&apos;t believe in doing just one thing.
            We believe in making the right things
            in the right way, with a little extra magic.
          </p>
        </div>
      </div>

      <div className="menu-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a
              href="#contact"
              key={service.number}
              className={`menu-card ${service.className}`}
            >
              <div className="menu-card-top">
                <span>{service.number} / 04</span>

                <span className="menu-card-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className={`menu-art menu-art-${service.art}`}>
                {service.art === "brand" && (
                  <div className="brand-art">
                    <div className="brand-art-circle"></div>
                    <div className="brand-art-square"></div>
                    <span className="brand-art-text">Aa</span>
                    <span className="brand-art-small">
                      MADE OF IDEAS
                    </span>
                  </div>
                )}

                {service.art === "web" && (
                  <div className="web-art">
                    <div className="web-art-window">
                      <div className="web-art-bar">
                        <i></i><i></i><i></i>
                      </div>
                      <div className="web-art-content">
                        <div className="web-art-line"></div>
                        <div className="web-art-line short"></div>
                        <div className="web-art-block"></div>
                      </div>
                    </div>
                    <span className="web-art-star">✳</span>
                  </div>
                )}

                {service.art === "code" && (
                  <div className="code-art">
                    <span className="code-art-bracket">
                      {"<"}
                    </span>
                    <div className="code-art-lines">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <span className="code-art-bracket">
                      {"/>" }
                    </span>
                  </div>
                )}

                {service.art === "play" && (
                  <div className="play-art">
                    <div className="play-art-ring"></div>
                    <div className="play-art-cross"></div>
                    <span className="play-art-star">✳</span>
                    <span className="play-art-word">
                      WHY<br />NOT?
                    </span>
                  </div>
                )}
              </div>

              <div className="menu-card-content">
                <div className="menu-card-heading">
                  <h3>{service.title}</h3>
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                <p>{service.description}</p>

                <span className="menu-card-tags">
                  {service.tags}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="menu-footer">
        <span>GOOD WORK. GOOD ENERGY. NO RULEBOOK.</span>

        <a href="#contact">
          GOT AN IDEA? LET&apos;S TALK.
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
