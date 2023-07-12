import React, { useState } from "react";
import HelloTS from "./HelloTS";

const Slider: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Hello, TS");
  const sectionNames: string[] = ["Hello, TS"];

  const handleSectionChange = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "Hello, TS":
        return <HelloTS />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-row gap-3 items-center flex-nowrap whitespace-nowrap overflow-x-auto pb-2 p-4">
        <img src="/logo.svg" alt="" className="w-10 -ml-1" />

        {sectionNames.map((sectionName) => (
          <div
            key={sectionName}
            onClick={() => handleSectionChange(sectionName)}
            className={`cursor-pointer font-medium ${
              activeSection === sectionName
                ? "text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-4"
                : "text-gray-600"
            }`}
          >
            {sectionName}
          </div>
        ))}
      </div>

      <main className="px-4">
        {activeSection && (
          <div className="mt-2">{renderSection(activeSection)}</div>
        )}
      </main>
    </>
  );
};

export default Slider;
