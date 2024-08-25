import React, { useState } from 'react';

const Sidebar = ({ onVideoSelect }) => {
  const [pythonOutput, setPythonOutput] = useState('');

  const courseContent = [
    { id: 1, title: 'Module 1: Getting Started with A', videoUrl: 'https://youtu.be/KRc9r8cqj-8' },
    { id: 2, title: 'Module 1: Getting Started with B', videoUrl: 'https://youtu.be/drMgnX5l0X4' },
    { id: 3, title: 'Module 2: Advanced Topics with C', videoUrl: '' },
  ];

  const runPythonScript = () => {
    fetch('http://localhost:5000/run-script')
      .then((response) => response.text())
      .then((data) => setPythonOutput(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="bg-gray-900 text-white h-screen p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Course Content</h2>
      <button onClick={runPythonScript} className="mb-4 p-2 bg-blue-600 rounded-lg">Run Python Script</button>
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
        <ul>
          {courseContent.map((item) => (
            <li
              key={item.id}
              className="p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              onClick={() => onVideoSelect(item.videoUrl)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Python Output:</h3>
          <pre>{pythonOutput}</pre>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
