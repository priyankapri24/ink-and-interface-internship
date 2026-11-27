

"use client";

import { useState } from "react";
import { ArrowUpRight, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-topline">
        <span>04 / LET&apos;S CONNECT</span>
        <span>GOOD THINGS START WITH A HELLO.</span>
      </div>

      <div className="contact-main">
        <div className="contact-copy">
          <span className="section-kicker">
            <span className="kicker-dot"></span>
            GOT SOMETHING IN MIND?
          </span>

          <h2>
            Let&apos;s make
            <br />
            some <span className="contact-highlight">noise.</span>
          </h2>

          <p className="contact-description">
            A big idea? A tiny idea? An idea that doesn&apos;t
            quite make sense yet? We want to hear it.
            Let&apos;s turn it into something wonderful.
          </p>

          <div className="contact-email-block">
            <span>OR DROP US AN EMAIL</span>

            <a href="mailto:hello@inkandinterface.studio">
              hello@inkandinterface.studio
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-sticker">
            <Sparkles size={20} />
            <span>
              NO BORING
              <br />
              IDEAS, PLEASE.
            </span>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success" role="status">
              <div className="success-icon">
                <Send size={28} />
              </div>

              <h3>Well, hello there!</h3>

              <p>
                Your form passed our little demo check.
                Thanks for reaching out!
              </p>

              <button
                className="contact-reset"
                onClick={() => setSubmitted(false)}
              >
                Send another message ↗
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>YOUR NEXT BIG IDEA</span>
                <span>✳</span>
              </div>

              <div className="form-field">
                <label htmlFor="name">01 / YOUR NAME</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="What should we call you?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">02 / YOUR EMAIL</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Where can we find you?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">03 / THE GOOD STUFF</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about what you're thinking..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send it our way <ArrowUpRight size={19} />
              </button>

              <p className="form-footnote">
                No pressure. No nonsense. Just a conversation.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="contact-bottomline">
        <span>IDEAS ARE BETTER WHEN SHARED.</span>
        <span>LET&apos;S CREATE SOMETHING UNEXPECTED. ↗</span>
      </div>
    </section>
  );
}
