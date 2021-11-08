import React from "react";
import avatar from "../../assets/images/hero.jpg";

const About = () => {
  return (
    <section className="my-5">
      <div className="flex-row center" style={{justifyContent: 'center',alignItems: 'center', margin: "auto"}}>
      <img src={avatar}  style={{ width: "30%", border: "5px solid #CAAE68", borderRadius: "50%"}} alt="cover" />
      </div>
      <div className=" my-5" >
        <p>
            I am Sumant Singh,
            a creative full stack developer 💻 from Punjab, currently living in Toronto,
            I did an advance diploma in tool and die making ⚙ and a diploma in mechanical designing but I was always compelled towards techy stuff.
            Finally I decided to go for a bootcamp course 📚 and learn stuff about web development.
            and guess what......
            I DESIGNED THIS PORTFOLIO ON MY OWN.😃
        </p>
      </div>
    </section>
  );
};

export default About;