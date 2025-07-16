import React, { useState } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const InputField = ({ icon: Icon, label, name, type = "text", placeholder, rows }) => {
    const Component = rows ? 'textarea' : 'input';
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
          
          <Component
            name={name}
            type={type}
            rows={rows}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={isFocused || hasValue ? placeholder : ''}
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
              hasError 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                : isFocused 
                  ? 'border-indigo-500 focus:border-indigo-600 focus:ring-indigo-500/20 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
            } focus:outline-none focus:ring-4 ${rows ? 'resize-none' : ''}`}
          />
          
          {hasError && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
        
        {hasError && (
          <p className="mt-2 text-sm text-red-600 animate-slideIn">{hasError}</p>
        )}
      </div>
    );
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h2>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Have questions or need assistance? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 animate-slideUp">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={User}
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
              />
              
              <InputField
                icon={Mail}
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            
            <InputField
              icon={MessageCircle}
              label="Subject"
              name="subject"
              placeholder="What's this about?"
            />
            
            <InputField
              icon={MessageCircle}
              label="Message"
              name="message"
              rows={4}
              placeholder="Tell us more about your inquiry..."
            />

            {/* Submit Button */}
            <div className="pt-6">
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
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
          animation: fadeIn 0.8s ease-out;
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
};

export default ContactUs;