"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

// Mock course data
const courseData = {
  id: 1,
  title: "Introduction to Web Development",
  instructor: "Jane Smith",
  description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course will give you a solid foundation to start your web development journey.",
  progress: 35,
  totalLessons: 15,
  completedLessons: 5,
  rating: 4.7,
  reviews: 128,
  category: "Web Development",
  level: "Beginner",
  lastUpdated: "September 15, 2023",
  modules: [
    {
      id: 1,
      title: "Getting Started with HTML",
      lessons: [
        {
          id: 1,
          title: "Introduction to HTML",
          duration: "10:25",
          completed: true,
          videoId: "qz0aGYrrlhU" // YouTube video ID
        },
        {
          id: 2,
          title: "HTML Document Structure",
          duration: "12:40",
          completed: true,
          videoId: "UB1O30fR-EE"
        },
        {
          id: 3,
          title: "Working with Text Elements",
          duration: "15:30",
          completed: true,
          videoId: "yfoY53QXEnI"
        }
      ]
    },
    {
      id: 2,
      title: "CSS Basics",
      lessons: [
        {
          id: 4,
          title: "Introduction to CSS",
          duration: "14:20",
          completed: true,
          videoId: "1PnVor36_40"
        },
        {
          id: 5,
          title: "CSS Selectors",
          duration: "18:10",
          completed: true,
          videoId: "qKoajPPWpmo"
        },
        {
          id: 6,
          title: "Box Model & Layouts",
          duration: "22:15",
          completed: false,
          videoId: "rIO5326FgPE"
        }
      ]
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      lessons: [
        {
          id: 7,
          title: "Introduction to JavaScript",
          duration: "15:45",
          completed: false,
          videoId: "W6NZfCO5SIk"
        },
        {
          id: 8,
          title: "Variables & Data Types",
          duration: "20:30",
          completed: false,
          videoId: "edlFjlzxkSI"
        },
        {
          id: 9,
          title: "Functions & Events",
          duration: "25:15",
          completed: false,
          videoId: "BMuFBYw91UQ"
        }
      ]
    }
  ]
};

export default function CourseDetail({ params }: { params: { id: string } }) {
  const [currentLesson, setCurrentLesson] = useState(courseData.modules[0].lessons[0]);
  
  // Find next incomplete lesson
  const findNextLesson = () => {
    let foundNext = false;
    for (const module of courseData.modules) {
      for (const lesson of module.lessons) {
        if (foundNext) {
          setCurrentLesson(lesson);
          return;
        }
        if (lesson.id === currentLesson.id) {
          foundNext = true;
        }
      }
    }
    // If we get here, we're at the last lesson already
  };
  
  return (
    <DashboardLayout userRole="student" userName="John Student">
      <div className="space-y-6">
        {/* Course navigation */}
        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-2">
          <Link href="/student/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <span>&gt;</span>
          <Link href="/student/courses" className="hover:text-blue-600">My Courses</Link>
          <span>&gt;</span>
          <span className="text-gray-700">{courseData.title}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{courseData.title}</h1>
          <div className="flex items-center space-x-2">
            <div className="text-yellow-400">★</div>
            <div className="text-gray-700">{courseData.rating}</div>
            <div className="text-gray-500">({courseData.reviews} reviews)</div>
          </div>
        </div>
        
        {/* Course progress */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium">Course Progress</h2>
            <span className="text-blue-600 font-medium">{courseData.progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${courseData.progress}%` }}></div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {courseData.completedLessons} of {courseData.totalLessons} lessons completed
          </div>
        </div>
        
        {/* Video player and module list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video player */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px]"
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{currentLesson.title}</h2>
                <p className="mt-2 text-gray-500">
                  Instructor: {courseData.instructor} • Duration: {currentLesson.duration}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={findNextLesson}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex-1"
              >
                Next Lesson
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                Mark as Complete
              </button>
            </div>
            
            {/* Course description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h2 className="text-lg font-bold mb-2">About this course</h2>
              <p className="text-gray-700">
                {courseData.description}
              </p>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Category:</span> {courseData.category}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Level:</span> {courseData.level}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Last Updated:</span> {courseData.lastUpdated}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Total Duration:</span> 2h 45m
                </div>
              </div>
            </div>
          </div>
          
          {/* Module list */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="font-bold text-lg">Course Content</h2>
              <p className="text-sm text-gray-500 mt-1">
                {courseData.totalLessons} lessons • 2h 45m total length
              </p>
            </div>
            
            <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
              {courseData.modules.map(module => (
                <div key={module.id} className="p-4">
                  <h3 className="font-medium mb-2">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.lessons.map(lesson => (
                      <li 
                        key={lesson.id} 
                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                          currentLesson.id === lesson.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setCurrentLesson(lesson)}
                      >
                        <div className="flex items-center">
                          <div className="mr-3">
                            {lesson.completed ? (
                              <span className="text-green-500">✓</span>
                            ) : (
                              <span className="text-gray-400">○</span>
                            )}
                          </div>
                          <span>{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Course resources and discussions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <h2 className="font-bold text-lg mb-4">Course Resources</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">📄</span>
                <a href="#" className="text-blue-600 hover:underline">HTML Cheat Sheet.pdf</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">📄</span>
                <a href="#" className="text-blue-600 hover:underline">CSS Reference Guide.pdf</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">🔗</span>
                <a href="#" className="text-blue-600 hover:underline">MDN Web Documentation</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">💻</span>
                <a href="#" className="text-blue-600 hover:underline">Starter Code Repository</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <h2 className="font-bold text-lg mb-4">Discussion Forum</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-3">
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Yesterday</div>
                  <div className="mt-1">
                    How do I link multiple CSS files in an HTML document?
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-3">
                  <div className="font-medium">David Wilson</div>
                  <div className="text-sm text-gray-500">2 days ago</div>
                  <div className="mt-1">
                    Is JavaScript case-sensitive?
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  View all discussions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 