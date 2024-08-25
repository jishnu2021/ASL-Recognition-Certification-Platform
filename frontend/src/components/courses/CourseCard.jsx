import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseCard = ({ course }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const GotoContent = async () => {
    try {
      // Trigger the Python script by sending a GET request to the backend
      await axios.get('http://localhost:5000/run-script');
      navigate('/content');
    } catch (error) {
      console.error('Error running script:', error);
    }
  };

  const Complete = () => {
    setShowPopup(true);
    setTimeout(() => {
      navigate('/earning');
    }, 3000); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-gray-600 mt-2">{course.description}</p>
        <div style={{ display: 'flex', columnGap: '1rem', justifyContent: 'space-evenly' }}>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={GotoContent}>
            Start
          </button>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={Complete}>
            Complete
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Congratulations!</h2>
            <p className="mb-4">You have received an NFT for completing the course.</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
