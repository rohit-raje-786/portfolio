import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = (props) => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form
                id="fs-frm"
                name="simple-contact-form"
                accept-charset="utf-8"
                action="https://formspree.io/f/mnqlprpz"
                method="post"
              >
                <fieldset id="fs-frm-inputs">
                  <label for="full-name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    placeholder="First and Last"
                    required=""
                  />
                  <label for="email-address">Email Address</label>
                  <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    placeholder="email@domain.tld"
                    required=""
                  />
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="_subject"
                    id="email-subject"
                    placeholder="Subject"
                  />
                  <label for="message">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </fieldset>
                <input
                  type="submit"
                  value="Submit"
                  className="contact-btn"
                  style={{ border: "none", textAlign: "center" }}
                />
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}

                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Visit Twitter profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  <br />
                  <br />
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
              <h3 className="text-dark mt-3 text-center">
                Total visitors:{`${props.visitors + 5000}`}
              </h3>
            </div>
          </div>
        </div>
        <div className="inline-block">
          <div className="align-self-baseline">
            <i className="fa fa-google"></i> : {contact.Gmail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
