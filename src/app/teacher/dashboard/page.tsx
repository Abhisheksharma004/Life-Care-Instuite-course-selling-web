"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

// Mock data for teacher courses
const teacherCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    students: 124,
    rating: 4.7,
    revenue: "$1,240",
    lastUpdated: "2023-10-15"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    students: 89,
    rating: 4.8,
    revenue: "$890",
    lastUpdated: "2023-09-28"
  },
  {
    id: 3,
    title: "React for Beginners",
    students: 65,
    rating: 4.6,
    revenue: "$650",
    lastUpdated: "2023-10-05"
  }
];

// Mock data for recent enrollments
const recentEnrollments = [
  {
    id: 1,
    studentName: "Michael Brown",
    course: "Introduction to Web Development",
    date: "Oct 22, 2023"
  },
  {
    id: 2,
    studentName: "Sarah Johnson",
    course: "JavaScript Fundamentals",
    date: "Oct 21, 2023"
  },
  {
    id: 3,
    studentName: "David Wilson",
    course: "Introduction to Web Development",
    date: "Oct 20, 2023"
  },
  {
    id: 4,
    studentName: "Emily Davis",
    course: "React for Beginners",
    date: "Oct 19, 2023"
  }
];

export default function TeacherDashboard() {
  return (
    <DashboardLayout userRole="teacher" userName="Jane Teacher">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Courses</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">{teacherCourses.length}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">All published</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Students</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {teacherCourses.reduce((sum, course) => sum + course.students, 0)}
            </p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 15%</span> from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Average Rating</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">4.7</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 0.2</span> from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Revenue</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">$2,780</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 18%</span> from last month
            </div>
          </div>
        </div>
        
        {/* Create Course CTA */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Ready to create a new course?</h2>
              <p className="mt-1 text-gray-600">Share your knowledge and expand your reach with a new course.</p>
            </div>
            <Link 
              href="/teacher/create" 
              className="mt-4 md:mt-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Create New Course
            </Link>
          </div>
        </div>
        
        {/* My Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
            <Link href="/teacher/courses" className="text-sm text-green-600 hover:underline">
              Manage all courses
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teacherCourses.map(course => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.students}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm text-gray-900">{course.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.revenue}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{course.lastUpdated}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/teacher/courses/${course.id}`} className="text-green-600 hover:text-green-900 mr-4">
                        View
                      </Link>
                      <Link href={`/teacher/courses/${course.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Enrollments */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Enrollments</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
            {recentEnrollments.map(enrollment => (
              <div key={enrollment.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{enrollment.studentName}</p>
                  <p className="text-sm text-gray-500 mt-1">Enrolled in {enrollment.course}</p>
                </div>
                <div className="text-sm text-gray-500">{enrollment.date}</div>
              </div>
            ))}
            
            <div className="p-4 text-center">
              <Link href="/teacher/students" className="text-sm text-green-600 hover:underline">
                View all students
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/teacher/analytics" 
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-medium">View Analytics</h3>
              <p className="text-sm text-gray-500 mt-1">Track performance metrics for your courses</p>
            </Link>
            
            <Link 
              href="/teacher/messages" 
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-medium">Student Messages</h3>
              <p className="text-sm text-gray-500 mt-1">Respond to questions from your students</p>
            </Link>
            
            <Link 
              href="/teacher/resources" 
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-medium">Teaching Resources</h3>
              <p className="text-sm text-gray-500 mt-1">Access tools to improve your teaching</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 