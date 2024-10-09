import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '',
    role: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_yn3pcyt',
      'template_6eavog6',
      {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        message: formData.message,
        role: formData.role
      },
      'yrPgD2eJQa5Zl7Udi'
    )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true);
          setErrorMessage('');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setErrorMessage('Failed to send feedback. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-lg min-h-[400px] mx-auto my-2 p-6 bg-gray-800 text-white rounded-lg shadow-md">
      {formSubmitted ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your feedback!</h2>
            <p>Your feedback is valuable and helps us improve. We appreciate your time!</p>
          </div>
        </div>

      ) : (
        <form onSubmit={sendEmail}>
          <h2 className="text-3xl font-bold text-center mb-6">Feedback Form</h2>
          <p className="mb-4 text-center">We would love to hear your thoughts!</p>

          {errorMessage && (
            <div className="mb-4 p-2 bg-red-600 rounded text-center">
              {errorMessage}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Student, Researcher, etc."
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-1">
              Rating <span className="text-red-500">*</span>
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              required
            >
              <option value="">Select a rating</option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Below Average</option>
              <option value="1">Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 h-24 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Write your feedback here"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Submit Feedback
          </button>

          <p className="mt-4 text-center text-sm">Your feedback is important to us! Thank you for taking the time to share your thoughts.</p>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
