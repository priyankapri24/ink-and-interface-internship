
import {
  ArrowUpRight,
  ArrowUp,
  Asterisk,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
    
      {/* CREATIVE CLOSING */}
      <div className="footer-creative">
        <div className="footer-creative-copy">
          <span className="footer-eyebrow">
            <span className="footer-status-dot"></span>
            A NOTE BEFORE YOU GO
          </span>

          <h2>
            GOOD
            <br />
            IDEAS
            <br />
            <span>DON&apos;T</span>
            <br />
            SIT STILL.
          </h2>

          <p>
            They grow, they wander, they get a little weird.
            And eventually, they become something worth
            putting into the world.
          </p>

          <a href="#contact" className="footer-cta">
            LET&apos;S MAKE SOMETHING
            <span className="footer-cta-icon">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>

        {/* ORIGINAL CSS GRAPHIC */}
        <div className="footer-art">
          <div className="footer-art-grid"></div>

          <div className="footer-art-orbit footer-orbit-one"></div>
          <div className="footer-art-orbit footer-orbit-two"></div>
          <div className="footer-art-orbit footer-orbit-three"></div>

          <div className="footer-art-core">
            <div className="footer-art-core-inner">
              <Asterisk size={75} strokeWidth={1.5} />
            </div>
          </div>

          <div className="footer-art-sticker footer-sticker-top">
            <Sparkles size={14} />
            <span>THINK DIFFERENT</span>
          </div>

          <div className="footer-art-sticker footer-sticker-bottom">
            <span>IDEAS</span>
            <span>IN MOTION ↗</span>
          </div>

          <div className="footer-art-number">∞</div>

          <div className="footer-art-small">
            DESIGN / CODE / CHAOS
          </div>
        </div>
      </div>

      {/* CREATIVE TICKER */}
      <div className="footer-marquee">
        <div className="footer-marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="footer-marquee-content" key={index}>
              <span>THINK</span>
              <Asterisk size={28} />
              <span>MAKE</span>
              <Asterisk size={28} />
              <span>BREAK</span>
              <Asterisk size={28} />
              <span>REMAKE</span>
              <Asterisk size={28} />
              <span>REPEAT</span>
              <Asterisk size={28} />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            ink<span>&</span>interface
            <span className="footer-logo-dot">.</span>
          </a>

          <p>
            A little studio for big ideas.
            <br />
            Made with curiosity, always.
          </p>

          <span className="footer-brand-tag">
            DESIGNING OUR OWN RULES.
          </span>
        </div>

        <div className="footer-column">
          <span className="footer-heading">THE STUDIO</span>
          <a href="#home">Home</a>
          <a href="#services">What we do</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Start a project</a>
        </div>

        <div className="footer-column">
          <span className="footer-heading">THE CONNECTION</span>

          <a href="mailto:hello@inkandinterface.studio">
            Email us <ArrowUpRight size={14} />
          </a>

          <span className="footer-location">Chennai, India</span>
          <span className="footer-location">Working worldwide.</span>
        </div>

        <div className="footer-column">
          <span className="footer-heading">OUT IN THE WORLD</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* MANIFESTO */}
      <div className="footer-manifesto">
        <span className="footer-manifesto-label">
          OUR LITTLE MANIFESTO
        </span>

        <p>
          LESS ORDINARY.
          <span> MORE EXTRAORDINARY.</span>
        </p>

        <span className="footer-manifesto-symbol">
          ✳
        </span>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 INK & INTERFACE®</span>

        <span className="footer-credit">
          DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.
        </span>

        <a href="#home" className="footer-top-link">
          BACK TO TOP <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
