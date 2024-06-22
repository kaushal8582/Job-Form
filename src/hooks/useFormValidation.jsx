import { useState } from "react";

const useFormValidation = (formData, position) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    const isString = (value) => (typeof value === "string" ? value.trim() : "");

    // General Validations
    if (!isString(formData.name)) {
      errors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (position == "manager") {
      if (Number(formData.managementExperience) < 0) {
        errors.managementExperience =
          "Please fill currect management experience.";
      }
    } else {
      if (Number(formData.relevantExperience) < 0) {
        errors.relevantExperience = "Please fill Currect relevant experience.";
      }
      const urlRegex =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!formData.portfolioUrl) {
        errors.portfolioUrl = "Please fill in your portfolio URL.";
      } else if (!urlRegex.test(formData.portfolioUrl)) {
        errors.portfolioUrl = "Please enter a valid URL.";
      }
    }

    const phoneRegex = /^\d{10}$/;
    const phoneNo = isString(formData.phoneNo);
    if (!phoneRegex.test(phoneNo)) {
      errors.phoneNo = "Invalid phone number. It should be 10 digits.";
    }

    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    const interviewTime = isString(formData.interviewTime);
    if (!dateTimeRegex.test(interviewTime)) {
      errors.interviewTime = "Please verify the interview time.";
    }

    const { javascript, CSS, Python, HTML, GitHub, React } =
      formData.additionalSkills || {};
    if (!javascript && !CSS && !Python && !HTML && !GitHub && !React) {
      errors.additionalSkills = "Please check at least one skill.";
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

  return [errors, validate, clearError];
};

export default useFormValidation;
