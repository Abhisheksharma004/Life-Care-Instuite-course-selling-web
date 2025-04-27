"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

// Mock data for platform statistics
const platformStats = {
  totalUsers: 1245,
  totalCourses: 78,
  totalTeachers: 34,
  totalRevenue: "$48,750",
  newUsers: {
    count: 125,
    percentage: 12
  },
  activeCourses: {
    count: 65,
    percentage: 83
  }
};

// Mock data for recent users
const recentUsers = [
  {
    id: 1,
    name: "Alexander Johnson",
    email: "alex.johnson@example.com",
    role: "Student",
    joinDate: "Oct 22, 2023"
  },
  {
    id: 2,
    name: "Emma Williams",
    email: "emma.williams@example.com",
    role: "Teacher",
    joinDate: "Oct 21, 2023"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Student",
    joinDate: "Oct 20, 2023"
  },
  {
    id: 4,
    name: "Sophia Miller",
    email: "sophia.miller@example.com",
    role: "Student",
    joinDate: "Oct 19, 2023"
  }
];

// Mock data for top performing courses
const topCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Jane Smith",
    students: 124,
    revenue: "$1,240",
    rating: 4.7
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    instructor: "John Doe",
    students: 89,
    revenue: "$890",
    rating: 4.8
  },
  {
    id: 3,
    title: "React for Beginners",
    instructor: "Jane Smith",
    students: 65,
    revenue: "$650",
    rating: 4.6
  }
];

export default function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        {/* Platform Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Users</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">{platformStats.totalUsers}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">+{platformStats.newUsers.count} new</span> this month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Courses</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">{platformStats.totalCourses}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">{platformStats.activeCourses.count} active</span> courses
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Teachers</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">{platformStats.totalTeachers}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">+5 new</span> this month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Revenue</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">{platformStats.totalRevenue}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 15%</span> from last month
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/admin/users/add" 
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                <span>👤</span>
              </div>
              <div>
                <h3 className="font-medium">Add User</h3>
                <p className="text-xs text-gray-500">Create new user account</p>
              </div>
            </Link>
            
            <Link 
              href="/admin/teachers/add" 
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                <span>👩‍🏫</span>
              </div>
              <div>
                <h3 className="font-medium">Add Teacher</h3>
                <p className="text-xs text-gray-500">Create teacher account</p>
              </div>
            </Link>
            
            <Link 
              href="/admin/courses/review" 
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <span>📚</span>
              </div>
              <div>
                <h3 className="font-medium">Review Courses</h3>
                <p className="text-xs text-gray-500">Approve/reject pending courses</p>
              </div>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                <span>⚙️</span>
              </div>
              <div>
                <h3 className="font-medium">Platform Settings</h3>
                <p className="text-xs text-gray-500">Configure site options</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Top Performing Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Top Performing Courses</h2>
            <Link href="/admin/courses" className="text-sm text-purple-600 hover:underline">
              View all courses
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
                    Instructor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topCourses.map(course => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.instructor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.students}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{course.revenue}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm text-gray-900">{course.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/courses/${course.id}`} className="text-purple-600 hover:text-purple-900">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Users */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Users</h2>
            <Link href="/admin/users" className="text-sm text-purple-600 hover:underline">
              View all users
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${user.role === 'Teacher' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.joinDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/users/${user.id}`} className="text-purple-600 hover:text-purple-900 mr-4">
                        View
                      </Link>
                      <Link href={`/admin/users/${user.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">System Status</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Server Load</span>
                  <span className="text-sm text-gray-500">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Database</span>
                  <span className="text-sm text-gray-500">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Storage</span>
                  <span className="text-sm text-gray-500">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="pt-2">
                <Link href="/admin/settings/system" className="text-sm text-purple-600 hover:underline">
                  View detailed system report
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
            
            <div className="space-y-4 divide-y">
              <div className="pb-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-1">
                    <span className="text-red-600">❗</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Course approval needed
                    </p>
                    <p className="text-sm text-gray-500">
                      3 new courses waiting for review and approval
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="py-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-1">
                    <span className="text-yellow-600">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Storage warning
                    </p>
                    <p className="text-sm text-gray-500">
                      Video storage usage approaching 70% capacity
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      5 hours ago
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Weekly backup completed
                    </p>
                    <p className="text-sm text-gray-500">
                      All systems successfully backed up
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 