import React, { useRef } from "react";

const HireMeForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const aboutRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    const about = aboutRef.current.value;

    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    aboutRef.current.value = "";

    console.log(name, age, email, about);
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          ref={nameRef}
        />
      </div>
      <div className="form-row">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="form-input"
          ref={ageRef}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          ref={emailRef}
        />
      </div>
      <div className="form-row">
        <label htmlFor="about" className="form-label">
          about you
        </label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          className="form-textarea"
          ref={aboutRef}
        ></textarea>
      </div>
      <button className="btn">Submit</button>
    </form>
  );
};

export default HireMeForm;
