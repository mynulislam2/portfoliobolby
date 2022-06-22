import emailjs from 'emailjs-com';
import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Fade } from 'react-reveal';
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);

      emailjs.sendForm('service_exbt0mj', 'template_q7abua6', form.current, '2hqGfiOhj5YqlM6Qi')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      setMessage("You message has been sent!!!");

    }



  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="contact-info">
              <Fade left>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h3 >Let's talk about everything!</h3>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p >
                    Don't like forms? Send me an{" "}
                    <a href="mailto:name@example.com">email</a>. 👋
                  </p>
                </ScrollAnimation>
              </Fade>

            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              ref={form}
              onSubmit={submitHandler}
            >
              <Fade right>
                <div className="row">
                  <div className="column col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="InputName"
                        placeholder="Your name"
                        onChange={handleChange}
                        value={formdata.name}
                      />
                    </div>
                  </div>

                  <div className="column col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        value={formdata.email}
                      />
                    </div>
                  </div>

                  <div className="column col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="InputSubject"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={formdata.subject}
                      />
                    </div>
                  </div>

                  <div className="column col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="InputMessage"
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                        onChange={handleChange}
                        value={formdata.message}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Fade>

              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
