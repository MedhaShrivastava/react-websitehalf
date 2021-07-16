import React from "react";


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>Welcome</h3>
              <h1>About</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            
          
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://user-images.githubusercontent.com/87075276/125195128-f4224300-e271-11eb-99cc-defbdcb5aa8a.jpeg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
