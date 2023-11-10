import React from "react";

const skillsMPBSD = [
  {
    skillName: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Next Js" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "SQL" },
    ],
    tools: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Visual Studio" },
      { name: "Azure Devops" },
      { name: "SQL Server Management Tool" },
      { name: "Browser Stack" },
    ],
  },
];

const skillsTO = [
  {
    skillName: [
      { name: "Python" },
      { name: "Selenium" },
      { name: "Wordpress" },
      { name: "Power Bi" },
    ],
    tools: [{ name: "VS Code" }, { name: "Azure Devops" }],
  },
];

const Experience = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 text-center">
      <p className="text-gray-500 text-sm md:text-base">Explore My</p>
      <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide mt-2">
        Experience
      </h2>
      <div className="flex items-center justify-center mt-10 text-xl">
        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-20 w-3/4">
          <div className="p-10 rounded-xl md:flex-1 border border-1 border-gray-500 h-18">
            <h2>I&IT Technology Analyst/Developer</h2>
            <p className="text-gray-500 text-sm mt-1">
              Ministry of public and Business Service Delivery, Toronto
            </p>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-6">
              During my co-op experience as an I&IT Technology Analyst at the
              MPBSD, I had the opportunity to work on a diverse range of
              projects.
              <br></br>
              <br></br>I developed a Python-based machine learning model to
              filter offensive content from license plates. I collaborated on
              bug fixes and improvements on the frontend side, built efficient
              API endpoints in C# .NET, and addressed email template format
              issues. I also crafted and documented user story test cases for
              quality assurance and conducted thorough manual testing, including
              website flow, responsive design, and data validation.
            </p>
            <hr></hr>
            <h2>Skills</h2>
          </div>
          <div className="p-10 rounded-xl md:flex-1 border border-1 border-gray-500 h-18">
            <h2>System Support Officer</h2>
            <p className="text-gray-500 text-sm mt-1">
              Tribunals Ontario, Toronto
            </p>
            <p className="text-gray-800 text-sm md:text-base mt-4 mb-6">
              During my co-op term at Tribunals Ontario, I had worked in
              multiple teams.
              <br></br>
              <br></br>I conducted comprehensive automated and manual testing of
              the Tribunals Ontario Portal, using Selenium and Python. I also
              maintained and updated WordPress pages for the Tribunals Ontario
              website, ensuring content requirements were met. Proficiency in
              Microsoft Excel and PowerBI enabled me to create insightful data
              visualizations for IT asset management reporting. Handled IT asset
              management, resolved technical issues with vendors, conducted IT
              system testing, and maintained a SharePoint site.
            </p>
            <hr></hr>
            <h2>Skills</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
