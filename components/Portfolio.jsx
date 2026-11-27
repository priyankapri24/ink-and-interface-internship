
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Sunday Objects",
    category: "BRAND IDENTITY",
    type: "Branding / E-commerce",
    description: "A softer kind of everyday.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
    className: "archive-sunday",
    year: "2026",
  },
  {
    number: "02",
    title: "Form & Function",
    category: "DIGITAL DESIGN",
    type: "UI / UX / Web",
    description: "Digital, but with intention.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    className: "archive-form",
    year: "2026",
  },
  {
    number: "03",
    title: "Morrow Coffee",
    category: "VISUAL IDENTITY",
    type: "Branding / Packaging",
    description: "A ritual worth waking up for.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85",
    className: "archive-morrow",
    year: "2025",
  },
  {
    number: "04",
    title: "Offbeat Studio",
    category: "CREATIVE DIGITAL",
    type: "Development / Design",
    description: "Made for the wonderfully different.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
    className: "archive-offbeat",
    year: "2025",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="work">
      <div className="archive-topline">
        <span>INK & INTERFACE®</span>
        <span>THE IDEA ARCHIVE / 002</span>
      </div>

      <div className="archive-heading">
        <div>
          <span className="archive-kicker">
            <Sparkles size={14} />
            A FEW THINGS WE MADE
          </span>

          <h2>
            GOOD IDEAS
            <br />
            <span>DON&apos;T SIT STILL.</span>
          </h2>
        </div>

        <div className="archive-heading-note">
          <span className="archive-note-number">04</span>
          <p>
            Little experiments.
            <br />
            Big ideas.
            <br />
            Things made with purpose.
          </p>
          <span className="archive-note-bottom">
            INDEPENDENTLY IMAGINED.
          </span>
        </div>
      </div>

      <div className="archive-projects">
        {projects.map((project) => (
          <article key={project.number} className="archive-project">
            <a
              href="#contact"
              className="archive-project-visual"
              aria-label={`Discuss a project like ${project.title}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} design showcase`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className="archive-image-shade">
                <span>{project.description}</span>
                <span className="archive-image-arrow">
                  <ArrowUpRight size={25} />
                </span>
              </div>

              <span className="archive-index">
                PROJECT / {project.number}
              </span>

              <span className="archive-year">{project.year}</span>
            </a>

            <div className="archive-project-info">
              <div className="archive-project-meta">
                <span>{project.category}</span>
                <span>{project.type}</span>
              </div>

              <div className="archive-project-title">
                <h3>{project.title}</h3>
                <span className="archive-title-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="archive-closing">
        <div className="archive-closing-star">✳</div>
        <div>
          <span>HAVE SOMETHING IN MIND?</span>
          <h3>
            LET&apos;S MAKE
            <br />
            <span>IT WEIRD.</span>
          </h3>
        </div>

        <a href="#contact" className="archive-contact-link">
          START A PROJECT
          <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="archive-footer-line">
        <span>GOOD WORK. GOOD ENERGY. NO RULEBOOK.</span>
        <span>END OF COLLECTION — 002</span>
      </div>
    </section>
  );
}
