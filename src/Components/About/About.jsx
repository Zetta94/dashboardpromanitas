import React from 'react';
import CardAbout from '../CardAbout/CardAbout';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    const grupoPromanitas = [
        {
          image: "https://avatars.githubusercontent.com/u/105263588?v=4 ",
          name: "Julian",
          description: "Desarrolador FullStack",
          linkedin: "",
          github: "https://github.com/Srezequielr",
        },
        {
          image: "https://avatars.githubusercontent.com/u/101506122?v=4",
          name: "Manuel Zuñiga",
          description: "Desarrolador FullStack",
          linkedin: "https://www.linkedin.com/in/manuzetta94/",
          github: "https://github.com/Zetta94",
        },
        {
          image:
            "https://media.licdn.com/dms/image/D4D03AQE_V2R6C2wnmg/profile-displayphoto-shrink_800_800/0/1667335985931?e=2147483647&v=beta&t=hJg61A-PUX_Qun4bybEG1UOwuDgvl2xnEplCrCJAJGU ",
          name:"Mariana Flores",
          description: "Desarrolador FullStack",
          linkedin: "https://www.linkedin.com/in/marigaby-flores-0a2540255",
          github: "https://github.com/Marigabyfc",
        },
        {
          image: "https://avatars.githubusercontent.com/u/98289398?v=4 ",
          name: "Lucio",
          description: "Desarrolador FullStack",
          linkedin: "",
          github: "https://github.com/lucioSantia",
        },
        {
          image: "https://avatars.githubusercontent.com/u/104286335?v=4 ",
          name: "Kevin Alfonzo",
          description: "Desarrolador FullStack",
          linkedin: "",
          github: "https://github.com/RaiderAlf",
        },
        {
          image: " https://avatars.githubusercontent.com/u/111536207?v=4",
          name: "Maria",
          description: "Desarrolador FullStack",
          linkedin: "",
          github: "https://github.com/Mlobeto/",
        },
        {
          image:
            "https://avatars.githubusercontent.com/u/46719844?v=4 ",
          name: "Gabriela",
          description: "Desarrolador FullStack",
          linkedin:
            "https://www.linkedin.com/in/gabriela-acevedo-512414a9/?locale=en_US",
          github: "https://github.com/gabydesi",
        },
        {
          image:
            "https://avatars.githubusercontent.com/u/105172384?s=400&u=b7485ebd3331e4bd9894315b41ddd316b0b2713f&v=4 ",
          name: "Yanina ",
          description: "Desarrolador FullStack",
          linkedin: "https://www.linkedin.com/in/yanina-zurcher-1945b6254",
          github: "https://github.com/yanirc1981",
        },
      ];

  return (
    <div>
      <Navbar/>
      <div className="card-container">
        {grupoPromanitas.map((e) => (
          <CardAbout
            image={e.image}
            name={e.name}
            description={e.description}
            linkedin={e.linkedin}
            github={e.github}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
