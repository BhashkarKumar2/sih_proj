import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    role: '',
    contactNumber: '',
    dob: '',
    address: '',
    terms: false,
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(formData);
    // Submit form data to the backend
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl shadow-orange-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-900">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left side - Profile Photo */}
          <div className="flex flex-col items-center justify-center">
            <label className="block font-medium mb-20 text-center">
              Profile Photo
            </label>
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center mb-9 overflow-hidden">
              {formData.profilePhoto ? (
                <img
                  src={URL.createObjectURL(formData.profilePhoto)}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src="/avatar.jpg" // Default avatar image from the public folder
                  alt="Default Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-sm text-purple-900 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-sm file:font-medium file:text-orange-700 hover:file:bg-gray-100"
            />
          </div>

          {/* Right side - Form Fields */}
          <div>
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block font-medium mb-1 text-left">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-medium mb-1 text-left">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block font-medium mb-1 text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block font-medium mb-1 text-left">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block font-medium mb-1 text-left">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              >
                <option value="">Select Department</option>
                <option value="urban-planning">Urban Planning</option>
                <option value="public-works">Public Works</option>
                <option value="transportation">Transportation</option>
              </select>
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block font-medium mb-1 text-left">
                Role/Position
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block font-medium mb-1 text-left">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-purple-700 via-pink-500 to-orange-500   bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition duration-300 mt-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
