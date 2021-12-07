import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ibrahim" },
  { meta: "last name", metaInfo: "Ahmed" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "A Digital Nomad" },
  { meta: "Whatsapp", metaInfo: "+923105444579" },
  { meta: "Email", metaInfo: "ibrahim_ahmed1@outlook.com" },
  { meta: "langages", metaInfo: "Urdu, English " },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
