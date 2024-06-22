import React, { useEffect, useState } from "react";
import useFormValidation from "../hooks/useFormValidation";

const JobApplicationForm = () => {
  const [position, setPosition] = useState("null");
  const [showSummary, setShowSummary] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    interViewTime: "",
    releventExperience: "",
    managementExperience: "",
    portfilioUrl: "",
    additionalSkills: {
      javascript: false,
      CSS: false,
      Python: false,
      HTML: false,
      GitHub: false,
      React: false,
    },
  });

  const [errors, validate, clearError] = useFormValidation(userData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUserData((prevUserData) => {
        const newUserData = {
          ...prevUserData,
          additionalSkills: {
            ...prevUserData.additionalSkills,
            [name]: checked,
          },
        };
        clearError(name);
        return newUserData;
      });
    } else {
      setUserData((prevUserData) => {
        const newUserData = { ...prevUserData, [name]: value };
        clearError(name);
        return newUserData;
      });
    }
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSummary(true);
      
    } else {
      setShowSummary(false);
    }
  };

  const closeSummary = () => {
    setShowSummary(false);
    setPosition("null")
    setUserData({
      name: "",
      email: "",
      phoneNo: "",
      interViewTime: "",
      releventExperience: "",
      managementExperience: "",
      portfilioUrl: "",
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
      {showSummary == false ? (
        <div className="bg-white p-5 rounded-xl min-w-[400px]">
          <h2 className="font-bold">Job Application Form</h2>
          <form
            className="flex flex-col gap-2 mt-4 w-[800px] "
            onSubmit={handelFormSubmit}
          >
            <div className="flex justify-evenly gap-8">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="flex flex-col gap-2 font-semibold text-[14px] mb-2"
                >
                  Full Name
                  <input
                    required
                    name="name"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="text"
                    placeholder="Enter full Name "
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[13px]">{errors.name}</p>
                  )}
                </label>
                <label
                  htmlFor=""
                  className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                >
                  Email
                  <input
                    required
                    name="email"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="email"
                    placeholder="Enter Email "
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[13px]">{errors.email}</p>
                  )}
                </label>
                <label
                  htmlFor=""
                  className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                >
                  Phone No
                  <input
                    required
                    name="phoneNo"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="number"
                    placeholder="Enter Your Age "
                    value={userData.phoneNo}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNo && (
                    <p className="text-red-500 text-[13px]">{errors.phoneNo}</p>
                  )}
                </label>

                <label
                  htmlFor="select"
                  className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                >
                  Applying for Position
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="bg-gray-100 h-[30px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    name=""
                    id="select"
                  >
                    <option value="null">--Select--</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>

                <label
                  htmlFor=""
                  className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                >
                  Prefered Interview Time
                  <input
                    required
                    name="interViewTime"
                    className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                    type="datetime-local"
                    placeholder="Enter Your Age "
                    value={userData.interViewTime}
                    onChange={handleInputChange}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-[13px]">{errors.time}</p>
                  )}
                </label>
              </div>

              <div className="w-[50%]">
                {position != "null" && position != "manager" && (
                  <div>
                    <label
                      htmlFor=""
                      className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                    >
                      Relevent Experience
                      <input
                        required
                        name="releventExperience"
                        className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                        type="number"
                        placeholder="Enter Your Experience "
                        value={userData.releventExperience}
                        onChange={handleInputChange}
                      />
                      {errors.releventExperience && (
                        <p className="text-red-500 text-[13px]">
                          {errors.releventExperience}
                        </p>
                      )}
                    </label>
                    <label
                      htmlFor=""
                      className="flex gap-2 flex-col font-semibold text-[14px]"
                    >
                      Portfolio URL
                      <input
                        required
                        name="portfilioUrl"
                        className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                        type="text"
                        placeholder="Paste URL "
                        value={userData.portfilioUrl}
                        onChange={handleInputChange}
                      />
                      {errors.portfilioUrl && (
                        <p className="text-red-500 text-[13px]">
                          {errors.portfilioUrl}
                        </p>
                      )}
                    </label>
                  </div>
                )}

                {position != "null" && position == "manager" && (
                  <label
                    htmlFor=""
                    className="flex gap-2 flex-col font-semibold text-[14px] mb-2"
                  >
                    Management Experience
                    <input
                      required
                      name="managementExperience"
                      className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                      type="number"
                      placeholder="Enter Your Experience "
                      value={userData.managementExperience}
                      onChange={handleInputChange}
                    />
                    {errors.managementExperience && (
                      <p className="text-red-500 text-[13px]">
                        {errors.managementExperience}
                      </p>
                    )}
                  </label>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[13px]">Additional Skills</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    {Object.keys(userData.additionalSkills).map((skils) => (
                      <label
                        key={skils}
                        htmlFor={skils}
                        className="flex items-center justify-center gap-2 text-[15px] mb-2"
                      >
                        {skils}
                        <input
                          name={skils}
                          className="w-3 h-3"
                          type="checkbox"
                          id={skils}
                          checked={userData.additionalSkills[skils] == true}
                          onChange={handleInputChange}
                        />
                      </label>
                    ))}
                    {errors.additionalSkills && (
                      <p className="text-red-500 text-[13px]">
                        {errors.additionalSkills}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button className=" text-[17px] bg-blue-500 text-white rounded-xl border-none grid place-items-center h-[30px] mt-4 w-[150px] ">
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
              Name : <span className="text-blue-500"> {userData.name}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Email : <span className="text-blue-500"> {userData.email}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Phone No :{" "}
              <span className="text-blue-500"> {userData.phoneNo}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Position : <span className="text-blue-500"> {position}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              InterView Time :{" "}
              <span className="text-blue-500"> {userData.interViewTime}</span>
            </h2>

            {(position === "developer" || position === "designer") &&
            position !== "null" ? (
              <>
                <h2 className="font-bold text-[14px]">
                  Relevant Experience:{" "}
                  <span className="text-blue-500">
                    {userData.releventExperience}
                  </span>
                </h2>
                <h2 className="font-bold text-[14px]">
                  Portfolio URL:{" "}
                  <span className="text-blue-500">{userData.portfilioUrl}</span>
                </h2>
              </>
            ) : null}

            {position === "manager" && position !== "null" && (
              <h2 className="font-bold text-[14px]">
                Management Experience:{" "}
                <span className="text-blue-500">
                  {userData.managementExperience}
                </span>
              </h2>
            )}

            <h2 className="font-bold text-[14px]">
              Additional Skills:{" "}
              {Object.keys(userData.additionalSkills).map((skill) =>
                userData.additionalSkills[skill] ? (
                  <span key={skill} className="text-blue-500">
                    {skill}{" "}
                  </span>
                ) : null
              )}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplicationForm;
