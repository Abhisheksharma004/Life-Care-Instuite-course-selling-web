"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

// Mock data for student courses
const studentCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 75,
    instructor: "Jane Smith",
    lastAccessed: "2023-10-15"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    progress: 45,
    instructor: "John Doe",
    lastAccessed: "2023-10-18"
  },
  {
    id: 3,
    title: "Python for Beginners",
    progress: 25,
    instructor: "Alex Johnson",
    lastAccessed: "2023-10-20"
  }
];

// Mock data for recommended courses
const recommendedCourses = [
  {
    id: 4,
    title: "React for Beginners",
    instructor: "Jane Smith",
    rating: 4.8,
    students: 1245
  },
  {
    id: 5,
    title: "Node.js Essentials",
    instructor: "John Doe",
    rating: 4.7,
    students: 890
  }
];

export default function StudentDashboard() {
  return (
    <DashboardLayout userRole="student" userName="John Student">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Courses Enrolled</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">{studentCourses.length}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">2 in progress</span> • 1 not started
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Average Progress</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">48%</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 12%</span> from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Certificates Earned</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">2</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-gray-500">View all certificates</span>
            </div>
          </div>
        </div>
        
        {/* My Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
            <Link href="/student/courses" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studentCourses.map(course => (
              <div key={course.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col">
                <h3 className="font-medium text-lg">{course.title}</h3>
                <p className="text-gray-500 text-sm mt-1">Instructor: {course.instructor}</p>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  Last accessed: {course.lastAccessed}
                </div>
                
                <div className="mt-auto pt-4 flex">
                  <Link href={`/student/courses/${course.id}`} className="text-blue-600 hover:underline">
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recommended For You</h2>
            <Link href="/student/discover" className="text-sm text-blue-600 hover:underline">
              Browse more
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg">{course.title}</h3>
                <p className="text-gray-500 text-sm mt-1">Instructor: {course.instructor}</p>
                
                <div className="mt-2 flex items-center">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="ml-1 text-sm text-gray-600">{course.rating} ({course.students} students)</span>
                </div>
                
                <div className="mt-4 flex">
                  <Link href={`/student/courses/${course.id}`} className="text-blue-600 hover:underline">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
            <div className="p-4 flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                <span role="img" aria-label="video">🎥</span>
              </div>
              <div>
                <p className="font-medium">Completed "HTML Basics" lesson</p>
                <p className="text-sm text-gray-500 mt-1">Introduction to Web Development • 2 days ago</p>
              </div>
            </div>
            
            <div className="p-4 flex items-start">
              <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                <span role="img" aria-label="quiz">📝</span>
              </div>
              <div>
                <p className="font-medium">Passed "JavaScript Syntax" quiz</p>
                <p className="text-sm text-gray-500 mt-1">JavaScript Fundamentals • 3 days ago</p>
              </div>
            </div>
            
            <div className="p-4 flex items-start">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-4">
                <span role="img" aria-label="enrolled">📚</span>
              </div>
              <div>
                <p className="font-medium">Enrolled in "Python for Beginners"</p>
                <p className="text-sm text-gray-500 mt-1">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 