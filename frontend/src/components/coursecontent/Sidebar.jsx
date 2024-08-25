import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Sidebar = ({ onVideoSelect }) => {
  const [pythonOutput, setPythonOutput] = useState('');
  const [currentModule, setCurrentModule] = useState(0);
  const [showTestExam, setShowTestExam] = useState(false);

  const navigate = useNavigate();

  const courseContent = [
    { id: 1, title: 'Module 1: Getting Started with A', videoUrl: 'https://youtu.be/KRc9r8cqj-8' },
    { id: 2, title: 'Module 1: Getting Started with B', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with C', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with D', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with E', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with F', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with G', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with H', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with I', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with J', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with K', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with L', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with M', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with N', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with O', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with P', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with Q', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with R', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with S', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with T', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with U', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with V', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with W', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with X', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with Y', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with Z', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
  ];

  const runPythonScript = () => {
    fetch('http://localhost:5000/run-script')
      .then((response) => response.text())
      .then((data) => setPythonOutput(data))
      .catch((error) => console.error('Error:', error));a
  };

  const handleNext = () => {
    setCurrentModule((prevModule) => Math.min(prevModule + 1, courseContent.length - 1));
    onVideoSelect(courseContent[currentModule].videoUrl);
  };

  const handleTestExam = () => {
    navigate('/testpage');
    fetch('http://localhost:5000/test-script')
      .then((response) => response.text())
      .then((data) => {
        setPythonOutput(data);
        
      })
      .catch((error) => console.error('Error:', error));
  };
  


  return (
    <div className="bg-gray-900 text-white h-screen p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Course Content</h2>
      <button onClick={() => runPythonScript('C:/path/to/your-script.py')} className="mb-4 p-2 bg-blue-600 rounded-lg">
        Assignment
      </button>
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
        <ul>
          {courseContent.map((item, index) => (
            <li
              key={item.id}
              className={`p-3 rounded-lg ${index === currentModule ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-300 cursor-pointer`}
              onClick={() => onVideoSelect(item.videoUrl)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          {currentModule < courseContent.length - 1 ? (
            <button onClick={handleNext} className="mt-4 p-2 bg-green-600 rounded-lg">
              Next
            </button>
          ) : (
            <button onClick={handleTestExam} className="mt-4 p-2 bg-red-600 rounded-lg">
              Give Test
            </button>
          )}
          
          
          <pre>{pythonOutput}</pre>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
