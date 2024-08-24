import React from 'react';

const Sidebar = ({ onVideoSelect }) => {
  const courseContent = [
    { id: 1, title: 'Introduction to the Course', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 2, title: 'Module 1: Getting Started', videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    { id: 3, title: 'Module 2: Advanced Topics', videoUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
    { id: 4, title: 'Module 3: Expert Level', videoUrl: 'https://www.youtube.com/watch?v=fRh_vgS2dFE' },
    { id: 5, title: 'Conclusion and Next Steps', videoUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
  ];

  return (
    <div className="bg-gray-900 text-white h-screen p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">Course Content</h2>
      <ul className="space-y-4">
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
  );
};

export default Sidebar;
