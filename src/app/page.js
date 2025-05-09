"use client";

import { useState } from "react";

const gradePoints = {
  "A+": 4.0, A: 4.0, "A-": 3.7,
  "B+": 3.3, B: 3.0, "B-": 2.7,
  "C+": 2.3, C: 2.0, "C-": 1.7,
  "D+": 1.3, D: 1.0, F: 0.0,
};

export default function GPAcalculator() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("A");

  const addCourse = (e) => {
    e.preventDefault();
    if (courseName && credits && grade) {
      setCourses([...courses, { name: courseName, credits: parseFloat(credits), grade }]);
      setCourseName("");
      setCredits("");
      setGrade("A");
    }
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0;
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach((course) => {
      totalPoints += gradePoints[course.grade] * course.credits;
      totalCredits += course.credits;
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">GPA Calculator</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add Course</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Credits"
            value={credits}
            min="0"
            step="0.1"
            onChange={(e) => setCredits(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.keys(gradePoints).map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <button
            onClick={addCourse}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Add Course
          </button>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        {courses.length === 0 ? (
          <p className="text-gray-600">No courses added yet.</p>
        ) : (
          <div className="space-y-2">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <span>
                  {course.name} - {course.credits} Credits - {course.grade}
                </span>
                <button
                  onClick={() => deleteCourse(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Your GPA: {calculateGPA()}</h2>
      </div>
    </div>
  );
}