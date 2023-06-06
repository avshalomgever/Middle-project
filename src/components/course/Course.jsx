
import React, { useState } from "react";
import "./course.css";

const Course = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    // Perform your registration logic here
    // For demonstration purposes, let's simply toggle the registration status
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="course-container">
      <h1 className="course-title">Marriage Enrichment Course</h1>
      <img
        className="course-image"
        src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/mlev4ob8jhsmgmdq9cqn"
        alt="Course"
      />
      <p className="course-description">
        Discover the keys to a fulfilling and harmonious marriage in our Marriage Enrichment Course. Join us on a transformative journey to strengthen your bond, improve communication, and deepen your love and connection with your partner. This course is designed for married couples who want to invest in their relationship and create a lifetime of happiness together.
      </p>
      <ul className="course-topics">
        <li>Building trust and intimacy</li>
        <li>Effective communication techniques</li>
        <li>Nurturing love and romance</li>
        <li>Conflict resolution strategies</li>
        <li>Creating shared goals and dreams</li>
      </ul>
      <button
        className={`course-button ${isRegistered ? "registered" : ""}`}
        onClick={handleRegistration}
        disabled={isRegistered}
      >
        {isRegistered ? "Registered" : "Register Now"}
      </button>
    </div>
  );
};

export default Course;
