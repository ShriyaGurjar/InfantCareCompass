import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [role, setRole] = useState("PARENT"); // Default role
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state
  const navigate = useNavigate(); // To redirect after registration

  // Handler for role toggle
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    reset(); // Reset form fields when toggling roles
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Disable button
    const payload = { ...data, role: role.toLowerCase() }; // Add role to payload

    const register = async (req,resp)=>({
      
    })

    try {
      // Simulate a POST request to the backend
      const response = await fetch("https://your-backend-url.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Redirect to login page on success
        navigate("/signin");
      } else {
        console.error("Registration failed!");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register. Check your connection.");
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        <h1 className="text-2xl font-bold text-center mb-6 transition-colors duration-300">
          {role === "DOCTOR" ? "Doctor Registration" : "Parent Registration"}
        </h1>

        {/* Role Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${role === "PARENT" ? "bg-blue-500 text-white" : "bg-gray-200"} transition-all duration-300`}
            onClick={() => handleRoleChange("PARENT")}
            disabled={isSubmitting}
          >
            Parent
          </button>
          <button
            className={`px-4 py-2 rounded ${role === "DOCTOR" ? "bg-blue-500 text-white" : "bg-gray-200"} transition-all duration-300`}
            onClick={() => handleRoleChange("DOCTOR")}
            disabled={isSubmitting}
          >
            Doctor
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 transition-opacity duration-300 ease-in-out"
        >
          {role === "DOCTOR" && (
            <div className="p-2">
              <div>
                <label className="block font-medium">First Name</label>
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Last Name</label>
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>
          )}
          {role === "PARENT" && (
            <div className="p-2">
              <div>
                <label className="block font-medium">Kid's Name</label>
                <input
                  type="text"
                  {...register("kidName", { required: "Kid's name is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.kidName && <p className="text-red-500 text-sm">{errors.kidName.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Date of Birth</label>
                <input
                  type="date"
                  {...register("dob", { required: "Date of birth is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
              </div>
            </div>
          )}
          <div className="p-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="p-2">
            <label className="block font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {role === "PARENT" && (
            <div className="p-2">
              <div>
                <label className="block font-medium">Father's Name</label>
                <input
                  type="text"
                  {...register("fatherName", { required: "Father's name is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Mother's Name</label>
                <input
                  type="text"
                  {...register("motherName", { required: "Mother's name is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.motherName && <p className="text-red-500 text-sm">{errors.motherName.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Contact Number</label>
                <input
                  type="text"
                  {...register("contactNumber", { required: "Contact number is required" })}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
              </div>
              <div>
                <label className="block font-medium">City</label>
                <input
                  type="text"
                  {...register("city")}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
              </div>
              <div>
                <label className="block font-medium">State</label>
                <input
                  type="text"
                  {...register("state")}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium">Postal Code</label>
                <input
                  type="text"
                  {...register("postalCode")}
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 outline-none"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white transition-colors duration-300 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
