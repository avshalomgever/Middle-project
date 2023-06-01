// import React from "react";
// import "./About.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBusinessTime, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";

// const About = () => {
//   return (

//     <div>
//       <div className="about-container">
//       <div className="about">
//         <div className="about-content">
//           <h2 className="h-about">Who we are?</h2>
//           <div className="icon-about">
//             <span>
//               <FontAwesomeIcon icon={faBusinessTime} />
//               <p>3 years experience</p>
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faHeart} />
//               <p>over 20,000 couples</p>
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faUsers} />
//               <p>300 employees</p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="about-story" >
//       <img src="https://media.weddingz.in/images/9934e16690a6f9842aa4f0c900c7249e/The-perfect-wedding-destinations-for-the-couples-that-are-obsessed-with-nature-apart-from-Udaipur--Jodhpur7.jpg
//       " alt="" 
//       className="story-img"/>
//       <div className="black-div" >

//       </div>

//     </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about">
          <div className="about-content">
            <h2 className="h-about">Who we are?</h2>
            <div className="icon-about">
              <span>
                <FontAwesomeIcon icon={faBusinessTime} />
                <p>3 years experience</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faHeart} />
                <p>over 20,000 couples</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faUsers} />
                <p>300 employees</p>
              </span>
            </div>
            <button className="about-btn">for more...</button>
          </div>
        </div>
      </div>
      <div className="about-story">
        <div className="text-container">
          <p className="text-story">
            Our event hall is more than just a venue -- we pride ourselves on
            offering a personalized experience for couples embarking on their
            special journey. With years of experience, our team specializes in
            providing dedicated support and guidance to couples throughout the
            entire planning process. From the initial consultation to the final
            moments of the event, we are by your side, ensuring that every
            detail is taken care of with meticulous care and attention. Our
            personalized accompaniment extends beyond logistics; we take the
            time to understand your vision, preferences, and dreams, curating
            an unforgettable event that reflects your unique love story. Trust
            us to bring your vision to life and create memories that will be
            cherished for a lifetime.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://media.weddingz.in/images/9934e16690a6f9842aa4f0c900c7249e/The-perfect-wedding-destinations-for-the-couples-that-are-obsessed-with-nature-apart-from-Udaipur--Jodhpur7.jpg"
            alt=""
            className="story-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
