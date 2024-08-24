// CoursesPage.jsx
import React from 'react';
import CourseCard from './CourseCard';
import home from '../img/home.png'

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for course 1', image: home },
  { id: 2, title: 'Course 2', description: 'Description for course 2', image: home },
  { id: 2, title: 'Course 2', description: 'Description for course 2', image: home },
  { id: 2, title: 'Course 2', description: 'Description for course 2', image: home },
  { id: 2, title: 'Course 2', description: 'Description for course 2', image: home },
  { id: 2, title: 'Course 2', description: 'Description for course 2', image: home},
  
  // Add 8 more course objects here
];

const CoursesPage = () => {
  return (
    <div className="p-4" style={{padding:'8rem',paddingTop:'1rem'}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
