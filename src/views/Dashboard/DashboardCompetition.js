import React from "react";
import Select from "react-select";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";

const DashboardCompetition = () => {
  const competitionData = [
    { value: "app innovation", label: "App Innovation" },
    { value: "business IT case", label: "Business IT Case" },
    { value: "programming", label: "Programming" },
    { value: "smart device", label: "Smart Device" },
    { value: "capture the flag", label: "Capture the Flag" },
    { value: "game development", label: "Game Development" },
  ];
  return (
    <div className="dashboard-section-competition">
      <div className="academy">
        <div className="header">
          <Header center size="r">
            Competition
          </Header>
        </div>
        <div className="description">
          <Paragraph header large>
            Join The Online Competition
          </Paragraph>
          <div className="selection">
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#519a9e",
                  primary: "#1f81a0",
                },
              })}
              className="basic-single"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="competition"
              options={competitionData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCompetition;
