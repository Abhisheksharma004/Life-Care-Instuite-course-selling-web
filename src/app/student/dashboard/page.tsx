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
      {/* Decorative Gradient Orbs */}
      <div className="fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#ff2c9c] to-[#9b4fb8] opacity-20 blur-[120px] -top-48 -left-48 z-0 pointer-events-none"></div>
      <div className="fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#6f38c5] to-[#ff2c9c] opacity-20 blur-[120px] -bottom-48 -right-48 z-0 pointer-events-none"></div>
      <div className="space-y-12 relative z-10 max-w-7xl mx-auto px-2 md:px-8">
        {/* Hero/Welcome Section */}
        <div className="glass-card p-10 text-center animate-fadeIn mb-6 rounded-2xl shadow-2xl border border-pink-500/20 flex flex-col items-center gap-3">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text glow-text drop-shadow-lg">Welcome back, John!</h1>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl mx-auto">Ready to continue your learning journey? Explore your courses, track your progress, and achieve your goals!</p>
          <Link href="/student/courses" className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">Start Learning</Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2 max-w-5xl mx-auto">
          <div className="glass-card p-7 text-center rounded-xl shadow-md border border-pink-500/10 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl mb-1">📚</span>
            <div className="text-4xl gradient-text font-extrabold mb-1">{studentCourses.length}</div>
            <div className="text-sm text-gray-400 font-medium">Courses</div>
          </div>
          <div className="glass-card p-7 text-center rounded-xl shadow-md border border-blue-500/10 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl mb-1">📈</span>
            <div className="text-4xl gradient-text font-extrabold mb-1">48%</div>
            <div className="text-sm text-gray-400 font-medium">Avg. Progress</div>
          </div>
          <div className="glass-card p-7 text-center rounded-xl shadow-md border border-green-500/10 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl mb-1">🎓</span>
            <div className="text-4xl gradient-text font-extrabold mb-1">2</div>
            <div className="text-sm text-gray-400 font-medium">Certificates</div>
          </div>
          <div className="glass-card p-7 text-center rounded-xl shadow-md border border-yellow-500/10 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl mb-1">✅</span>
            <div className="text-4xl gradient-text font-extrabold mb-1">95%</div>
            <div className="text-sm text-gray-400 font-medium">Pass Rate</div>
          </div>
        </div>

        {/* My Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold gradient-text flex items-center gap-2"><span className="text-pink-500">📖</span> My Courses</h2>
            <Link href="/student/courses" className="text-sm text-pink-600 hover:underline font-medium flex items-center gap-1">
              View all
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {studentCourses.map(course => (
              <div key={course.id} className="glass-card group p-7 rounded-2xl shadow-xl border border-pink-500/20 flex flex-col transition transform hover:scale-[1.04] hover:shadow-2xl animate-fadeIn bg-gradient-to-br from-white/5 to-pink-500/5">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/40 to-purple-500/40 flex items-center justify-center text-3xl font-bold text-pink-500 shadow-md">
                    {course.title.split(' ').map(w=>w[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl gradient-text mb-1">{course.title}</h3>
                    <p className="text-gray-400 text-xs">Instructor: {course.instructor}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span className="font-medium text-blue-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200/60 rounded-full h-3">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-3 rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs text-gray-500 gap-2">
                  <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Last accessed: {course.lastAccessed}
                </div>
                <div className="mt-auto pt-4 flex">
                  <Link href={`/student/courses/${course.id}`} className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all text-sm shadow-md">Continue Learning</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-6 mt-16">
            <h2 className="text-2xl font-bold gradient-text flex items-center gap-2"><span className="text-purple-500">✨</span> Recommended For You</h2>
            <Link href="/student/discover" className="text-sm text-pink-600 hover:underline font-medium flex items-center gap-1">
              Browse more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendedCourses.map(course => (
              <div key={course.id} className="glass-card group p-7 rounded-2xl shadow-xl border border-purple-500/20 transition transform hover:scale-[1.04] hover:shadow-2xl animate-fadeIn bg-gradient-to-br from-white/5 to-purple-500/5">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center text-2xl font-bold text-purple-500 shadow-md">
                    {course.title.split(' ').map(w=>w[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl gradient-text mb-1">{course.title}</h3>
                    <p className="text-gray-400 text-xs">Instructor: {course.instructor}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex text-yellow-400 text-lg">
                    {Array.from({length: Math.floor(course.rating)}, (_,i)=>(<span key={i}>★</span>))}
                    {course.rating % 1 ? <span>☆</span> : null}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">{course.rating} ({course.students} students)</span>
                </div>
                <div className="mt-4 flex">
                  <Link href={`/student/courses/${course.id}`} className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all text-sm shadow-md">View Course</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-2"><span className="text-blue-500">🕒</span> Recent Activity</h2>
          <div className="space-y-5">
            <div className="glass-card flex items-center gap-5 p-6 rounded-2xl animate-fadeIn shadow-md border border-blue-500/10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-3xl">🎥</div>
              <div>
                <p className="font-semibold text-white">Completed <span className="gradient-text">"HTML Basics"</span> lesson</p>
                <p className="text-xs text-gray-400 mt-1">Introduction to Web Development • 2 days ago</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-5 p-6 rounded-2xl animate-fadeIn shadow-md border border-green-500/10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/30 to-blue-500/30 flex items-center justify-center text-3xl">📝</div>
              <div>
                <p className="font-semibold text-white">Passed <span className="gradient-text">"JavaScript Syntax"</span> quiz</p>
                <p className="text-xs text-gray-400 mt-1">JavaScript Fundamentals • 3 days ago</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-5 p-6 rounded-2xl animate-fadeIn shadow-md border border-purple-500/10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-3xl">📚</div>
              <div>
                <p className="font-semibold text-white">Enrolled in <span className="gradient-text">"Python for Beginners"</span></p>
                <p className="text-xs text-gray-400 mt-1">5 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-6 mt-12 flex items-center gap-2"><span className="text-green-500">🌟</span> Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-7 text-center flex flex-col items-center rounded-2xl shadow-md border border-pink-500/10 hover:scale-105 transition-transform">
              <span className="text-4xl mb-2">📚</span>
              <h3 className="font-bold mb-2 gradient-text text-lg">Board-Aligned</h3>
              <p className="text-[#AAAAAA]">Courses strictly follow state board syllabus for maximum exam relevance.</p>
            </div>
            <div className="glass-card p-7 text-center flex flex-col items-center rounded-2xl shadow-md border border-purple-500/10 hover:scale-105 transition-transform">
              <span className="text-4xl mb-2">👩‍🏫</span>
              <h3 className="font-bold mb-2 gradient-text text-lg">Expert Teachers</h3>
              <p className="text-[#AAAAAA]">Learn from passionate, experienced educators who care about your success.</p>
            </div>
            <div className="glass-card p-7 text-center flex flex-col items-center rounded-2xl shadow-md border border-blue-500/10 hover:scale-105 transition-transform">
              <span className="text-4xl mb-2">📱</span>
              <h3 className="font-bold mb-2 gradient-text text-lg">Responsive Design</h3>
              <p className="text-[#AAAAAA]">Enjoy a seamless learning experience on mobile, tablet, or desktop.</p>
            </div>
            <div className="glass-card p-7 text-center flex flex-col items-center rounded-2xl shadow-md border border-green-500/10 hover:scale-105 transition-transform">
              <span className="text-4xl mb-2">📝</span>
              <h3 className="font-bold mb-2 gradient-text text-lg">Practice & Tests</h3>
              <p className="text-[#AAAAAA]">Mock tests, solved examples, and regular assessments to boost confidence.</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-14">
          <div className="glass-card p-8 backdrop-blur-md max-w-2xl mx-auto animate-fadeIn rounded-2xl shadow-xl border border-pink-500/20">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500/60 to-purple-600/60 mr-4 flex items-center justify-center text-2xl text-white font-bold shadow-lg">👦</div>
              <div>
                <h4 className="text-white font-semibold text-lg">Rohan Patel</h4>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="text-sm text-white/70 ml-2">Grade 12 Science Student</span>
                </div>
              </div>
            </div>
            <p className="text-white text-base italic">
              "Life Care Institute's PCM courses helped me secure 92% in my board exams! The teachers explain complex topics in such a simple way, and the practice questions are exactly like what appeared in the actual exam."
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}