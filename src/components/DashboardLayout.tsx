"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavLinkProps = {
  href: string;
  icon: string;
  children: ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
};

const NavLink = ({ href, icon, children, isMobile, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
        isActive 
          ? "bg-[#3A1F00] text-[#D2691E]" 
          : "hover:bg-[#282828] text-[#E0E0E0]"
      } ${isMobile ? "text-base" : ""}`}
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      <span>{children}</span>
    </Link>
  );
};

const SidebarProfile = ({ userName, roleName, roleColor }: { userName: string; roleName: string; roleColor: string }) => (
  <div className="flex flex-col items-center py-8 px-4">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/60 to-purple-600/60 flex items-center justify-center text-3xl text-white font-bold shadow-lg mb-3">
      {userName.split(' ').map(w => w[0]).join('').slice(0,2)}
    </div>
    <div className="text-lg font-semibold text-white mb-1">{userName}</div>
    <div className={`px-2 py-0.5 rounded text-xs font-medium text-white ${roleColor}`}>{roleName}</div>
  </div>
);

type DashboardLayoutProps = {
  children: ReactNode;
  userRole: "student" | "teacher" | "admin";
  userName?: string;
};

export default function DashboardLayout({ 
  children, 
  userRole,
  userName = "User"
}: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const handleLogout = () => {
    // In a real app, implement actual logout logic here
    console.log("Logging out...");
    router.push("/login");
  };
  
  let roleNavLinks;
  let roleColor;
  let roleName;
  
  switch (userRole) {
    case "student":
      roleNavLinks = (
        <>
          <NavLink href="/student/dashboard" icon="📊" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
          <NavLink href="/student/courses" icon="📚" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>My Courses</NavLink>
          <NavLink href="/student/discover" icon="🔍" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Discover</NavLink>
          <NavLink href="/student/progress" icon="📈" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>My Progress</NavLink>
          <NavLink href="/student/certificates" icon="🏆" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Certificates</NavLink>
        </>
      );
      roleColor = "bg-[#8B4513]";
      roleName = "Student";
      break;
    case "teacher":
      roleNavLinks = (
        <>
          <NavLink href="/teacher/dashboard" icon="📊" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
          <NavLink href="/teacher/courses" icon="📚" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>My Courses</NavLink>
          <NavLink href="/teacher/students" icon="👨‍🎓" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Students</NavLink>
          <NavLink href="/teacher/create" icon="✏️" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Create Course</NavLink>
          <NavLink href="/teacher/analytics" icon="📈" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Analytics</NavLink>
        </>
      );
      roleColor = "bg-[#7B3F00]";
      roleName = "Teacher";
      break;
    case "admin":
      roleNavLinks = (
        <>
          <NavLink href="/admin/dashboard" icon="📊" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
          <NavLink href="/admin/users" icon="👥" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Users</NavLink>
          <NavLink href="/admin/courses" icon="📚" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Courses</NavLink>
          <NavLink href="/admin/teachers" icon="👩‍🏫" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Teachers</NavLink>
          <NavLink href="/admin/settings" icon="⚙️" isMobile={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>Settings</NavLink>
        </>
      );
      roleColor = "bg-[#5C2E00]";
      roleName = "Admin";
      break;
  }
  
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      {/* Header */}
      <header className="dark-gradient text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-[#D2691E]">
                Life Care Institute
              </Link>
              <div className={`ml-3 px-2 py-1 rounded-md text-xs font-medium text-white ${roleColor}`}>
                {roleName}
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <div className="flex items-center">
                  <span className="mr-2 text-[#E0E0E0]">{userName}</span>
                  <button 
                    onClick={handleLogout}
                    className="px-3 py-1 border border-[#D2691E] text-[#D2691E] rounded-md hover:bg-[#D2691E] hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#E0E0E0] hover:bg-[#282828] focus:outline-none"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E1E1E] p-4 border-t border-[#333333]">
            <div className="space-y-1">
              {roleNavLinks}
            </div>
            <div className="mt-4 pt-4 border-t border-[#333333]">
              <div className="flex items-center justify-between">
                <span className="text-[#E0E0E0]">{userName}</span>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-1 border border-[#D2691E] text-[#D2691E] rounded-md hover:bg-[#D2691E] hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0 bg-[#18122B] bg-opacity-80 backdrop-blur-xl border-r border-[#333333] shadow-xl relative">
          <div className="w-64 flex flex-col h-full">
            <SidebarProfile userName={userName} roleName={roleName} roleColor={roleColor} />
            <nav className="flex-1 px-2 space-y-1 mt-2">
              {roleNavLinks}
            </nav>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-6 pt-4 border-t border-[#333333] bg-[#18122B] bg-opacity-80">
              <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#E0E0E0] hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white transition mb-2">
                <span className="text-xl">🏠</span>
                <span>View Website</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white transition font-semibold"
              >
                <span className="text-xl">🚪</span>
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-[#121212] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}