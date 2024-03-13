import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface SkillItemProps {
  name: string;
}

const skillsMPBSD = [
  {
    skillName: [
      { name: "Python" },
      { name: "ML" },
      { name: "NextJs" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "SQL" },
      { name: "Java" },
      { name: "Selenium" },
      { name: "Agile" },
      { name: "Entity Framework" },
      { name: "ASP.NET" },
      { name: "SDLC" },
      { name: "Deployment" },
      { name: "Frontend" },
      { name: "Backend" },
      { name: "QA" },
    ],
    tools: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Visual Studio" },
      { name: "IntelliJ" },
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

const SkillItem: React.FC<SkillItemProps> = ({ name }) => (
  <li className="flex items-center p-2">
    <IoMdCheckmarkCircleOutline className="mr-2 text-green-500" />
    {name}
  </li>
);

const Experience = () => {
  return (
    <div id="Experience">
      <section className="p-4 md:p-8 lg:p-12 text-center">
        <p className="text-gray-500 text-sm md:text-base">Explore My</p>
        <h1 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide mt-2">
          Experience
        </h1>
        <div className="flex items-center justify-center mt-10 text-xl">
          <article className="flex flex-col md:flex-row items-stretch md:space-x-4 mt-20 w-full md:w-3/4">
            <div className="p-6 md:flex-1 border border-1 border-gray-500 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                I&IT Technology Analyst/Developer
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Ministry of Public and Business Service Delivery, Toronto -
                Government of Ontario
              </p>
              <p className="text-gray-800 text-sm mb-6 leading-6">
                During my co-op at MPBSD, I developed a Python ML model to
                filter offensive content from license plates, collaborated on
                frontend enhancements, and implemented a C# generic repository
                with Entity Framework for efficient database retrieval. I also
                crafted user story test cases, conducted manual testing, and
                contributed to automation testing using Java and Selenium.
              </p>
              <hr className="my-6" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap">
                  <ul className="flex flex-wrap">
                    {skillsMPBSD[0].skillName.map((skill, index) => (
                      <div key={index}>
                        <SkillItem key={index} name={skill.name} />
                      </div>
                    ))}
                  </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4 mt-4">Tools</h2>
                <div className="flex flex-wrap">
                  <ul className="flex flex-wrap">
                    {skillsMPBSD[0].tools.map((tool, index) => (
                      <SkillItem key={tool.name} name={tool.name} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 md:flex-1 border border-1 border-gray-500 rounded-lg mt-8 md:mt-0 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                System Support Officer
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Tribunals Ontario, Toronto
              </p>
              <p className="text-gray-800 text-sm mb-6 leading-6">
                During my co-op term at Tribunals Ontario, I had worked in
                multiple teams. I conducted comprehensive automated and manual
                testing of the Tribunals Ontario Portal, using Selenium and
                Python. Proficiency in Microsoft Excel and PowerBI enabled me to
                create insightful data visualizations for IT asset management
                reporting.
              </p>
              <hr className="my-6" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap">
                  <ul className="flex flex-wrap">
                    {skillsTO[0].skillName.map((skill, index) => (
                      <SkillItem key={index} name={skill.name} />
                    ))}
                  </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4 mt-4">Tools</h2>
                <div className="flex flex-wrap">
                  <ul className="flex flex-wrap">
                    {skillsTO[0].tools.map((tool, index) => (
                      <SkillItem key={index} name={tool.name} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Experience;
