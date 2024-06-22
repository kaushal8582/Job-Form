import React, { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";

const JobApplicationForm = () => {
  const [position, setPosition] = useState("null");
  const [showSummary, setShowSummary] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    interviewTime: "",
    relevantExperience: "",
    managementExperience: "",
    portfolioUrl: "",
    additionalSkills: {
      javascript: false,
      CSS: false,
      Python: false,
      HTML: false,
      GitHub: false,
      React: false,
    },
  });

  const [errors, validate, clearError] = useFormValidation(userData,position);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        additionalSkills: {
          ...prevUserData.additionalSkills,
          [name]: checked,
        },
      }));
      clearError(name);
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
      clearError(name);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (validate()) {
      setShowSummary(true);
    } else {
      setShowSummary(false);
    }
  };

  const closeSummary = () => {
    setShowSummary(false);
    setPosition("null");
    setUserData({
      name: "",
      email: "",
      phoneNo: "",
      interviewTime: "",
      relevantExperience: "",
      managementExperience: "",
      portfolioUrl: "",
      additionalSkills: {
        javascript: false,
        CSS: false,
        Python: false,
        HTML: false,
        GitHub: false,
        React: false,
      },
    });
  };

  return (
    <>
      {!showSummary ? (
        <div className="bg-white p-5 rounded-xl min-w-[400px]">
          <h2 className="font-bold">Job Application Form</h2>
          <form className="flex flex-col gap-2 mt-4 w-[800px]" onSubmit={handleFormSubmit}>
            <div className="flex justify-evenly gap-8">
              <div className="w-[50%]">
                <label htmlFor="name" className="flex flex-col gap-2 font-semibold text-[14px] mb-2">
                  Full Name
                  <input
                    required
                    name="name"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="text"
                    placeholder="Enter full name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-red-500 text-[13px]">{errors.name}</p>}
                </label>
                <label htmlFor="email" className="flex gap-2 flex-col font-semibold text-[14px] mb-2">
                  Email
                  <input
                    required
                    name="email"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="email"
                    placeholder="Enter email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
                </label>
                <label htmlFor="phoneNo" className="flex gap-2 flex-col font-semibold text-[14px] mb-2">
                  Phone No
                  <input
                    required
                    name="phoneNo"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="text"
                    placeholder="Enter phone number"
                    value={userData.phoneNo}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNo && <p className="text-red-500 text-[13px]">{errors.phoneNo}</p>}
                </label>
                <label htmlFor="position" className="flex gap-2 flex-col font-semibold text-[14px] mb-2">
                  Applying for Position
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="bg-gray-100 h-[30px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                  >
                    <option value="null">--Select--</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>
                <label htmlFor="interviewTime" className="flex gap-2 flex-col font-semibold text-[14px] mb-2">
                  Preferred Interview Time
                  <input
                    required
                    name="interviewTime"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="datetime-local"
                    value={userData.interviewTime}
                    onChange={handleInputChange}
                  />
                  {errors.interviewTime && (
                    <p className="text-red-500 text-[13px]">{errors.interviewTime}</p>
                  )}
                </label>
              </div>
              <div className="w-[50%]">
                {(position === "developer" || position === "designer") && (
                  <>
                    <label
                      htmlFor="relevantExperience"
                      className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                    >
                      Relevant Experience
                      <input
                        required
                        name="relevantExperience"
                        className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                        type="number"
                        placeholder="Enter your experience"
                        value={userData.relevantExperience}
                        onChange={handleInputChange}
                      />
                      {errors.relevantExperience && (
                        <p className="text-red-500 text-[13px]">{errors.relevantExperience}</p>
                      )}
                    </label>
                    <label htmlFor="portfolioUrl" className="flex gap-2 flex-col font-semibold text-[14px] mb-2">
                      Portfolio URL
                      <input
                        required
                        name="portfolioUrl"
                        className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                        type="text"
                        placeholder="Paste URL"
                        value={userData.portfolioUrl}
                        onChange={handleInputChange}
                      />
                      {errors.portfolioUrl && (
                        <p className="text-red-500 text-[13px]">{errors.portfolioUrl}</p>
                      )}
                    </label>
                  </>
                )}
                {position === "manager" && (
                  <label
                    htmlFor="managementExperience"
                    className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                  >
                    Management Experience
                    <input
                      required
                      name="managementExperience"
                      className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                      type="number"
                      placeholder="Enter your experience"
                      value={userData.managementExperience}
                      onChange={handleInputChange}
                    />
                    {errors.managementExperience && (
                      <p className="text-red-500 text-[13px]">{errors.managementExperience}</p>
                    )}
                  </label>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[13px]">Additional Skills</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    {Object.keys(userData.additionalSkills).map((skill) => (
                      <label key={skill} htmlFor={skill} className="flex items-center justify-center gap-2 text-[15px] mb-2">
                        {skill}
                        <input
                          name={skill}
                          className="w-3 h-3"
                          type="checkbox"
                          id={skill}
                          checked={userData.additionalSkills[skill]}
                          onChange={handleInputChange}
                        />
                      </label>
                    ))}
                    {errors.additionalSkills && (
                      <p className="text-red-500 text-[13px]">{errors.additionalSkills}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button className="text-[17px] bg-blue-500 text-white rounded-xl border-none grid place-items-center h-[30px] mt-4 w-[150px]">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-5 rounded-xl min-w-[400px]">
          <div className="w-full flex justify-between">
            <h2 className="font-bold">Summary</h2>
            <h2 onClick={closeSummary} className="font-bold cursor-pointer">
              X
            </h2>
          </div>
          <div className="mt-5">
            <h2 className="font-bold text-[14px]">
              Name: <span className="text-blue-500">{userData.name}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Email: <span className="text-blue-500">{userData.email}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Phone No: <span className="text-blue-500">{userData.phoneNo}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Position: <span className="text-blue-500">{position}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Interview Time: <span className="text-blue-500">{userData.interviewTime}</span>
            </h2>
            {(position === "developer" || position === "designer") && (
              <>
                <h2 className="font-bold text-[14px]">
                  Relevant Experience: <span className="text-blue-500">{userData.relevantExperience}</span>
                </h2>
                <h2 className="font-bold text-[14px]">
                  Portfolio URL: <span className="text-blue-500">{userData.portfolioUrl}</span>
                </h2>
              </>
            )}
            {position === "manager" && (
              <h2 className="font-bold text-[14px]">
                Management Experience: <span className="text-blue-500">{userData.managementExperience}</span>
              </h2>
            )}
            <h2 className="font-bold text-[14px]">
              Additional Skills:
              {Object.keys(userData.additionalSkills)
                .filter((skill) => userData.additionalSkills[skill])
                .map((skill) => (
                  <span key={skill} className="text-blue-500">
                    {skill}{" "}
                  </span>
                ))}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplicationForm;
