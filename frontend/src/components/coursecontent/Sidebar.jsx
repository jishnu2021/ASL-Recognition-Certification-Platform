import React from 'react';

const Sidebar = ({ onVideoSelect }) => {
  const courseContent = [
    { id: 1, title: 'Module 1: Getting Started', videoUrl: '' },
    { id: 2, title: 'Module 1: Getting Started', videoUrl: '' },
    { id: 3, title: 'Module 2: Advanced Topics', videoUrl: '' },

  ];

  return (
    <div className="bg-gray-900 text-white h-screen p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Course Content</h2>
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
      </div>
    </div>
  );
};

export default Sidebar;
