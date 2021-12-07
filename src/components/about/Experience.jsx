import React from "react";

const experienceContent = [
  {
    year: "Nov 2021 - Present",
    position: " Front End Engineer",
    compnayName: "Inventory Ahead",
    details: `Working as a front end developer to maintain and scale the existing application.`,
  },
  {
    year: "Aug 2020 - Present",
    position: "Product Engineer",
    compnayName: "Try Catch Pro",
    details: `Working and a Product Engineer and has Contributed to design, development, deployment, and production of more than half a dozen commercial Products till now while many are still in progress.`,
  },
  {
    year: "OCT 2019 - Aug 2020",
    position: "Front End Engineer",
    compnayName: "InnowayIT",
    details: `Designed and developed of UI elements and features for the front end of the Product`,
  },
  {
    year: "Aug 2018 - Mar 2020",
    position: "Software Engineer",
    compnayName: "Test International",
    details: `Participated in R&D of various products.Documented and performed end to end testing`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
