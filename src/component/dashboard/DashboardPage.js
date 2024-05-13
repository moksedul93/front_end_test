import React, { useState, useEffect } from "react";
import Header from "../common/header/header";
import PenImage from "../../assets/pen.png";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch dashboard data from the JSON file
    fetch("../../dashboardData.json")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  if (!dashboardData) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" bg-black px-4 py-7">
      <Header />
      <div className="mt-4 w-full h-[1px] bg-[#FFFFFF40]"></div>
      <div className="py-2">
        <h2 className=" text-white text-[13px] leading-[19.5px] font-bold">
          {dashboardData.date}
        </h2>
        <h4 className=" text-white text-[13px] leading-[19.5px] font-normal">
          {dashboardData.dayName}
        </h4>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF40]"></div>
      <div className="text-white text-[16px] leading-[19.36px] font-normal my-4">
        <p>Total Live Jobs: {dashboardData.totalJobs}</p>
      </div>
      <div>
        <ul className="border border-[#5f5f60] rounded-md bg-[#262728]">
          {dashboardData.jobTitles.map((jobTitle, index, array) => (
            <li
              key={index}
              className={`py-3 px-5 ${
                index !== array.length - 1
                  ? "border-b border-[rgba(255, 255, 255, 0.25)]"
                  : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="text-white text-[16px] leading-[19.36px]">
                  {jobTitle}
                </span>
                <span>
                  <img src={PenImage} alt="PenImage" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 border border-[#5f5f60] rounded-md bg-[#262728] text-white px-5 py-3">
        <p className="text-white text-[16px] leading-[19.36px] font-semibold">
          Total Applicants:
        </p>
        <h4 className="text-[36px] leading-[43.57px] font-bold">
          {dashboardData.totalApplicants}
        </h4>
        <p className="text-[#00E0B8]">+25 last week</p>
      </div>

      <div className="mt-4 border border-[#5f5f60] rounded-md bg-[#262728] text-white px-5 py-3">
        <h3 className="text-[20px] leading-[24.2px] font-semibold">
          Matched Applicants
        </h3>
        <ul>
          {dashboardData.matchApplicants.map((applicant, index, array) => (
            <li key={index}>
              <div
                className={`flex justify-between py-4 ${
                  index !== array.length - 1
                    ? "border-b border-[rgba(255, 255, 255, 0.25)]"
                    : ""
                }`}
              >
                <div className="flex justify-between">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={applicant.img}
                    alt={applicant.name}
                  />
                  <span className="ml-2 text-white text-sm leading-[16.94px]">
                    {applicant.name}
                  </span>
                </div>
                <div>
                  <a
                    className="text-white text-sm leading-[16.94px] underline"
                    href={applicant.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </li>
          ))}
          <button className="flex justify-center items-center bg-black text-center mx-auto px-4 py-2 rounded-[20px] text-[12px] leading-[14.52px]">
            See More
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
