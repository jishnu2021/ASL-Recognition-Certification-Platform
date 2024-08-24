// CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const GotoContent = () =>{
    navigate('/content');
    // alert("Hello")
  }
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-gray-600 mt-2">{course.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={GotoContent}>
          Start
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
