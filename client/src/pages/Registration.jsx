import React, { useState } from "react";
import { User, UserCheck, Mail, Lock, Phone, MapPin, Calendar, FileText, Award, Heart } from "lucide-react";

export default function Registration() {
  const [role, setRole] = useState("PARENT");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({});
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (role === "DOCTOR") {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.about) newErrors.about = "Please write about yourself";
      if (!formData.experience) newErrors.experience = "Experience is required";
    }

    if (role === "PARENT") {
      if (!formData.kidName) newErrors.kidName = "Child's name is required";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
      if (!formData.fatherName) newErrors.fatherName = "Father's name is required";
      if (!formData.motherName) newErrors.motherName = "Mother's name is required";
      if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const payload = { ...formData, role: role.toUpperCase() };

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Registration successful", payload);
      alert("Registration successful! Redirecting to login...");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const InputField = ({ icon: Icon, label, type = "text", name, ...props }) => (
    <div className="group relative">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          value={formData[name] || ''}
          onChange={(e) => handleInputChange(name, e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white"
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 animate-pulse">{errors[name]}</p>
      )}
    </div>
  );

  const TextAreaField = ({ icon: Icon, label, name, ...props }) => (
    <div className="group relative">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute top-3 left-3 pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <textarea
          value={formData[name] || ''}
          onChange={(e) => handleInputChange(name, e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white resize-none"
          rows="4"
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 animate-pulse">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            {role === "DOCTOR" ? (
              <UserCheck className="h-8 w-8 text-white" />
            ) : (
              <Heart className="h-8 w-8 text-white" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {role === "DOCTOR" ? "Doctor Registration" : "Parent Registration"}
          </h1>
          <p className="text-gray-600">
            {role === "DOCTOR" 
              ? "Join our healthcare network and help families" 
              : "Create an account to track your child's health"}
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-2xl flex gap-1">
            <button
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                role === "PARENT"
                  ? "bg-white text-blue-600 shadow-md scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => handleRoleChange("PARENT")}
              disabled={isSubmitting}
            >
              <Heart className="h-4 w-4" />
              Parent
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                role === "DOCTOR"
                  ? "bg-white text-blue-600 shadow-md scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => handleRoleChange("DOCTOR")}
              disabled={isSubmitting}
            >
              <UserCheck className="h-4 w-4" />
              Doctor
            </button>
          </div>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {role === "DOCTOR" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField icon={User} label="First Name" name="firstName" placeholder="Enter first name" />
                <InputField icon={User} label="Last Name" name="lastName" placeholder="Enter last name" />
              </div>
              <TextAreaField icon={FileText} label="About Yourself" name="about" placeholder="Describe your experience" />
              <InputField icon={Award} label="Experience" name="experience" type="number" placeholder="Years of experience" />
            </div>
          )}

          {role === "PARENT" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField icon={Heart} label="Child's Name" name="kidName" placeholder="Enter child's name" />
                <InputField icon={Calendar} label="Date of Birth" name="dob" type="date" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField icon={User} label="Father's Name" name="fatherName" placeholder="Enter father's name" />
                <InputField icon={User} label="Mother's Name" name="motherName" placeholder="Enter mother's name" />
              </div>
              <InputField icon={Phone} label="Contact Number" name="contactNumber" placeholder="Enter phone number" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField icon={MapPin} label="City" name="city" placeholder="Enter city" />
                <InputField icon={MapPin} label="State" name="state" placeholder="Enter state" />
                <InputField icon={MapPin} label="Postal Code" name="postalCode" placeholder="Enter postal code" />
              </div>
            </div>
          )}

          {/* Common Fields */}
          <InputField icon={Mail} label="Email" name="email" type="email" placeholder="Enter your email" />
          <InputField icon={Lock} label="Password" name="password" type="password" placeholder="Create a strong password" />

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 shadow-lg"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Registering...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
