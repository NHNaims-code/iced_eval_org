import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import useInput from "../hooks/use-input";

const ContactFormOne = () => {
  const [sending, setSending] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length >= 3);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim().length >= 10);
  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim().length >= 6);
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim().length >= 30);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const phoneInputClasses = phoneInputHasError
    ? "form-control invalid"
    : "form-control";
  const subjectInputClasses = subjectInputHasError
    ? "form-control invalid"
    : "form-control";
  const messageInputClasses = messageInputHasError
    ? "form-control form-control-full invalid"
    : "form-control form-control-full";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPhoneIsValid &&
      !enteredSubjectIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    setSending(true);

    const data = {
      enteredName,
      enteredEmail,
      enteredPhone,
      enteredSubject,
      enteredMessage,
    };

    console.log("Form Submitted", data);

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetSubjectInput();
    resetMessageInput();
    setSending(false);
  };
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine="Contact With Us"
              />
              <p className="block-text mb-30 pr-10">
                If you have questions or would like to find out more on how to
                get involved with our organization, please fill out the form
                below and someone will be in touch with you as soon as possible.
              </p>
              <div className="footer-social black-hover">
                <a
                  href="https://twitter.com/ICED_THINKTANK"
                  aria-label="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/ICED.THINKTANK"
                  aria-label="facebook"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/international-centre-for-evaluation-and-development-iced-/"
                  aria-label="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <form
              className="contact-form-validated contact-page__form form-one mb-40"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <div className={nameInputClasses}>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={nameChangedHandler}
                    value={enteredName}
                    onBlur={nameBlurHandler}
                  />
                  {nameInputHasError && (
                    <p className="error-text">Name must contain atleast 3 characters</p>
                  )}
                </div>
                <div className={emailInputClasses}>
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={emailChangedHandler}
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
                  />
                   {emailInputHasError && (
                    <p className="error-text">Email must contain '@' </p>
                  )}
                </div>
                <div className={phoneInputClasses}>
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={phoneChangedHandler}
                    value={enteredPhone}
                    onBlur={phoneBlurHandler}
                  />
                   {phoneInputHasError && (
                    <p className="error-text">Phone number must be of 10 digits</p>
                  )}
                </div>
                <div className={subjectInputClasses}>
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    onChange={subjectChangedHandler}
                    value={enteredSubject}
                    onBlur={subjectBlurHandler}
                  />
                   {subjectInputHasError && (
                    <p className="error-text">Subject must be of atleast 6 charcaters long</p>
                  )}
                </div>
                <div className={messageInputClasses}>
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                    onChange={messageChangedHandler}
                    value={enteredMessage}
                    onBlur={messageBlurHandler}
                  ></textarea>
                   {messageInputHasError && (
                    <p className="error-text">Message must be of atleast 30 charcaters long</p>
                  )}
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    {sending ? "Sending Message" : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
