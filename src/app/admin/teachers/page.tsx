"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

// Mock teacher data
const teachersData = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "active",
    courses: 3,
    students: 124,
    revenue: "$2,780",
    joinDate: "2023-05-15"
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    courses: 2,
    students: 89,
    revenue: "$1,540",
    joinDate: "2023-06-22"
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    status: "pending",
    courses: 0,
    students: 0,
    revenue: "$0",
    joinDate: "2023-10-18"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    status: "inactive",
    courses: 1,
    students: 35,
    revenue: "$350",
    joinDate: "2023-04-10"
  }
];

export default function TeachersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  // Filter teachers based on search term and status
  const filteredTeachers = teachersData.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || teacher.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Handle teacher form input changes
  const handleTeacherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTeacher(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle adding a new teacher
  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (newTeacher.password !== newTeacher.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // In a real app, you would send the data to your backend
    console.log("Adding teacher:", newTeacher);
    
    // Reset form and close modal
    setNewTeacher({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setIsAddTeacherModalOpen(false);
    
    // Show success message
    alert("Teacher added successfully! Login credentials have been sent to their email.");
  };
  
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-2">
          <Link href="/admin/dashboard" className="hover:text-purple-600">Dashboard</Link>
          <span>&gt;</span>
          <span className="text-gray-700">Teachers Management</span>
        </div>
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Teachers Management</h1>
          <button
            onClick={() => setIsAddTeacherModalOpen(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center gap-2"
          >
            <span>+</span> Add Teacher
          </button>
        </div>
        
        {/* Filters and search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        
        {/* Teachers table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Courses
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
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
                {filteredTeachers.map(teacher => (
                  <tr key={teacher.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                          {teacher.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                          <div className="text-sm text-gray-500">{teacher.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${teacher.status === 'active' ? 'bg-green-100 text-green-800' : 
                          teacher.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'}`}
                      >
                        {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {teacher.courses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {teacher.students}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {teacher.revenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(teacher.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-3 justify-end">
                        <Link 
                          href={`/admin/teachers/${teacher.id}`}
                          className="text-purple-600 hover:text-purple-900"
                        >
                          View
                        </Link>
                        <Link 
                          href={`/admin/teachers/${teacher.id}/edit`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                        <button className="text-red-600 hover:text-red-900">
                          Deactivate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredTeachers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No teachers match your search criteria
            </div>
          )}
        </div>
        
        {/* Teacher Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Total Teachers</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">{teachersData.length}</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 15%</span> from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Active Teachers</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">
              {teachersData.filter(t => t.status === 'active').length}
            </p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 5%</span> from last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Pending Approvals</h2>
            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {teachersData.filter(t => t.status === 'pending').length}
            </p>
            <div className="mt-2 text-sm text-gray-600">
              Need review
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-gray-500 text-sm uppercase font-medium">Teacher Revenue</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">$4,670</p>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-green-500">↑ 12%</span> from last month
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Teacher Modal */}
      {isAddTeacherModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium text-lg">Add New Teacher</h3>
              <button 
                onClick={() => setIsAddTeacherModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleAddTeacher} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={newTeacher.name}
                  onChange={handleTeacherInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter teacher's full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={newTeacher.email}
                  onChange={handleTeacherInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter teacher's email"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Login credentials will be sent to this email
                </p>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={newTeacher.password}
                  onChange={handleTeacherInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={newTeacher.confirmPassword}
                  onChange={handleTeacherInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Confirm the password"
                />
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-md text-sm text-yellow-700 mt-4">
                <p className="font-medium">Note:</p>
                <p>A welcome email with login credentials will be sent to the teacher. They will be able to set up their profile and start creating courses after approval.</p>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddTeacherModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Add Teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
} 