import React, { useState } from 'react';
import { InputField } from './components/InputField';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            InputField Component Demo
          </h1>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive, accessible, and customizable input field component
          </p>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Basic Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Basic Examples
            </h2>
            <div className="space-y-6">
              <InputField
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                helperText="We'll never share your email"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                showPasswordToggle
                helperText="Must be at least 8 characters"
              />
              <InputField
                label="Search"
                placeholder="Search for anything..."
                clearable
              />
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              States & Validation
            </h2>
            <div className="space-y-6">
              <InputField
                label="Invalid Email"
                placeholder="Enter a valid email"
                type="email"
                invalid
                errorMessage="Please enter a valid email address"
              />
              <InputField
                label="Loading Input"
                placeholder="Loading..."
                loading
                defaultValue="Processing..."
              />
              <InputField
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
                defaultValue="Cannot edit this"
              />
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Size Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Small"
              placeholder="Small size"
              size="sm"
              clearable
            />
            <InputField
              label="Medium (Default)"
              placeholder="Medium size"
              size="md"
              clearable
            />
            <InputField
              label="Large"
              placeholder="Large size"
              size="lg"
              clearable
            />
          </div>
        </div>

        {/* Variant Styles */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Variant Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Filled"
              placeholder="Filled variant"
              variant="filled"
              helperText="This is the filled variant"
            />
            <InputField
              label="Outlined (Default)"
              placeholder="Outlined variant"
              variant="outlined"
              helperText="This is the outlined variant"
            />
            <InputField
              label="Ghost"
              placeholder="Ghost variant"
              variant="ghost"
              helperText="This is the ghost variant"
            />
          </div>
        </div>

        {/* Complex Form Example */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Complex Form Example
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              required
              helperText="As it appears on your ID"
            />
            <InputField
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              type="tel"
              helperText="Include country code"
            />
            <InputField
              label="Email Address"
              placeholder="your.email@example.com"
              type="email"
              required
              clearable
              helperText="We'll send a confirmation email"
            />
            <InputField
              label="Website"
              placeholder="https://yourwebsite.com"
              type="url"
              helperText="Include http:// or https://"
            />
            <InputField
              label="Password"
              placeholder="Create a strong password"
              type="password"
              required
              showPasswordToggle
              helperText="At least 8 characters with numbers and symbols"
            />
            <InputField
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              required
              showPasswordToggle
              helperText="Must match your password"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Built with React, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App; 