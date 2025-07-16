import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Shield, Stethoscope, Baby, ArrowRight, AlertCircle } from "lucide-react";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'PARENTS'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    
    if (!formData.role) {
      newErrors.role = "Role is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Submitted Data: ", formData);
      
      // Simulate successful login
      alert("Login successful!");
      
    } catch (error) {
      console.error("Signin error:", error);
      alert("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const InputField = ({ icon: Icon, label, name, type = "text", placeholder }) => {
    const hasError = errors[name];
    const isFocused = focusedField === name;
    const hasValue = formData[name];

    return (
      <div className="relative group">
        <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue 
            ? 'text-xs text-indigo-600 -top-2 bg-white px-2 font-medium' 
            : 'text-gray-500 top-4'
        }`}>
          {label}
        </label>
        
        <div className="relative">
          <Icon className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-indigo-600' : hasError ? 'text-red-500' : 'text-gray-400'
          }`} />
          
          <input
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={isFocused || hasValue ? placeholder : ''}
            className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
              hasError 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                : isFocused 
                  ? 'border-indigo-500 focus:border-indigo-600 focus:ring-indigo-500/20 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
            } focus:outline-none focus:ring-4`}
          />
          
          {name === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
          
          {hasError && (
            <div className="absolute right-4 top-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          )}
        </div>
        
        {hasError && (
          <p className="mt-2 text-sm text-red-600 flex items-center animate-slideIn">
            <AlertCircle className="w-4 h-4 mr-1" />
            {hasError}
          </p>
        )}
      </div>
    );
  };

  const RoleCard = ({ value, icon: Icon, title, description, isSelected, onClick }) => (
    <div
      onClick={onClick}
      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected 
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-indigo-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-center mb-3">
        <div className={`p-3 rounded-full ${
          isSelected ? 'bg-white/20' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }`}>
          <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-white'}`} />
        </div>
        <h3 className={`ml-3 font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
      </div>
      <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
      
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 animate-slideUp">
          <div className="space-y-6">
            <InputField
              icon={Mail}
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            
            <InputField
              icon={Lock}
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            {/* Role Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Your Role
              </label>
              
              <div className="grid grid-cols-1 gap-3">
                <RoleCard
                  value="PARENTS"
                  icon={Baby}
                  title="Parents"
                  description="Access parental resources and child care information"
                  isSelected={formData.role === 'PARENTS'}
                  onClick={() => setFormData(prev => ({ ...prev, role: 'PARENTS' }))}
                />
                
                <RoleCard
                  value="DOCTOR"
                  icon={Stethoscope}
                  title="Doctor"
                  description="Professional dashboard for healthcare providers"
                  isSelected={formData.role === 'DOCTOR'}
                  onClick={() => setFormData(prev => ({ ...prev, role: 'DOCTOR' }))}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl active:scale-95'
              } focus:outline-none focus:ring-4 focus:ring-indigo-500/50`}
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a 
              href="/registration" 
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
            >
              Register here
            </a>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}