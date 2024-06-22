import React, { useState } from "react";

const useFormValidation = (FormData) => {
  const [errors, setErrors] = useState({});
  const validate = () => {

    let errors = {};

    if(FormData.name==""){
      errors.name = "Plz check Full Name"
    }
    if(FormData.releventExperience==""){
      errors.releventExperience = "Plz fiil relevent Experience"
    }
    if(FormData.managementExperience==""){
      errors.managementExperience = "Plz fiil managementExperience"
    }
    if(FormData.portfilioUrl==""){
      errors.portfilioUrl = "Plz fiil portfilioUrl"
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(FormData.phoneNo)) {
      errors.phoneNo = "Invalid Phone Number ";
    }

    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if (!dateTimeRegex.test(FormData.interViewTime)) {
      errors.time = "Plz verify Phone Number ";
    }
    // const date = new Date(dateTime);
    // return !isNaN(date.getTime());

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(FormData.email)) {
      errors.email = "Plz verify email";
    }

    const { javascript, CSS, Python, HTML, GitHub, React } =
      FormData.additionalSkills;
    if (
      javascript == true ||
      CSS == true ||
      Python == true ||
      HTML == true ||
      GitHub == true ||
      React == true
    ) {
      return true;
    } else {
      errors.additionalSkills = "Plz check one skill";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearError = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };


  return [errors, validate ,clearError];
};

export default useFormValidation;
