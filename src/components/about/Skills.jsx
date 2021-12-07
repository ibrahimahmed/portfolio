import React from "react";

const skillsContent = [
  { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p45", skillPercent: "45", skillName: "NextJs" },
  { skillClass: "p45", skillPercent: "45", skillName: "NextJs" },
  { skillClass: "p25", skillPercent: "85", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "TypeScript" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p50", skillPercent: "50", skillName: "AWS" },
  { skillClass: "p50", skillPercent: "50", skillName: "Google Cloud" },
  { skillClass: "p50", skillPercent: "50", skillName: "Firebase" },
  { skillClass: "p50", skillPercent: "50", skillName: "Hasura Graphql" },
  { skillClass: "p50", skillPercent: "50", skillName: "MongoDB" },
  { skillClass: "p50", skillPercent: "50", skillName: "MySql" },
  { skillClass: "p50", skillPercent: "50", skillName: "PostgreSql" },
  { skillClass: "p50", skillPercent: "50", skillName: "Git" },
  { skillClass: "p50", skillPercent: "50", skillName: "Jira" },
  { skillClass: "p50", skillPercent: "50", skillName: "CI/CD" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
