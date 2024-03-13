import React from "react";
import { certificates } from "./certicateInfo";

const Certificates = () => {
  return (
    <div id="Certifications">
      <div className="p-4 md:p-8 lg:p-12 text-center">
        <p className="text-gray-500 text-sm md:text-base">
          Have a look into my
        </p>
        <h1 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide mt-2">
          Certifications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {certificate.imageSrc && (
                <img
                  src={certificate.imageSrc}
                  alt={`Certificate: ${certificate.title}`}
                  className="mb-4 mx-auto"
                />
              )}
              <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {certificate.platform}
              </p>
              <a
                href={certificate.link}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
