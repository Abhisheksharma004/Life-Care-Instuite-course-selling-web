"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

type Lesson = {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
};

export default function CreateCourse() {
  // Course basic info state
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    category: "",
    level: "beginner",
    price: "",
    thumbnail: null as File | null
  });
  
  // Modules and lessons state
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "",
      lessons: [
        {
          id: 1,
          title: "",
          duration: "",
          videoUrl: "",
          description: ""
        }
      ]
    }
  ]);
  
  // Current step in the course creation process
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // Preview states
  const [previewVideoUrl, setPreviewVideoUrl] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  
  // Handle course info changes
  const handleCourseInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourseInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file upload for thumbnail
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCourseInfo(prev => ({
        ...prev,
        thumbnail: e.target.files![0]
      }));
    }
  };
  
  // Add a new module
  const addModule = () => {
    const newModuleId = modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1;
    setModules([
      ...modules,
      {
        id: newModuleId,
        title: "",
        lessons: [
          {
            id: 1,
            title: "",
            duration: "",
            videoUrl: "",
            description: ""
          }
        ]
      }
    ]);
  };
  
  // Remove a module
  const removeModule = (moduleId: number) => {
    if (modules.length === 1) return; // Keep at least one module
    setModules(modules.filter(m => m.id !== moduleId));
  };
  
  // Update module title
  const updateModuleTitle = (moduleId: number, title: string) => {
    setModules(modules.map(m => 
      m.id === moduleId ? { ...m, title } : m
    ));
  };
  
  // Add a new lesson to a module
  const addLesson = (moduleId: number) => {
    setModules(modules.map(m => {
      if (m.id === moduleId) {
        const newLessonId = m.lessons.length > 0 ? Math.max(...m.lessons.map(l => l.id)) + 1 : 1;
        return {
          ...m,
          lessons: [
            ...m.lessons,
            {
              id: newLessonId,
              title: "",
              duration: "",
              videoUrl: "",
              description: ""
            }
          ]
        };
      }
      return m;
    }));
  };
  
  // Remove a lesson from a module
  const removeLesson = (moduleId: number, lessonId: number) => {
    setModules(modules.map(m => {
      if (m.id === moduleId) {
        if (m.lessons.length === 1) return m; // Keep at least one lesson
        return {
          ...m,
          lessons: m.lessons.filter(l => l.id !== lessonId)
        };
      }
      return m;
    }));
  };
  
  // Update lesson data
  const updateLesson = (moduleId: number, lessonId: number, field: keyof Lesson, value: string) => {
    setModules(modules.map(m => {
      if (m.id === moduleId) {
        return {
          ...m,
          lessons: m.lessons.map(l => 
            l.id === lessonId ? { ...l, [field]: value } : l
          )
        };
      }
      return m;
    }));
  };
  
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // Preview YouTube video
  const previewVideo = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      setPreviewVideoUrl(`https://www.youtube.com/embed/${videoId}`);
      setIsPreviewVisible(true);
    } else {
      alert("Please enter a valid YouTube URL");
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend API
    console.log("Course Info:", courseInfo);
    console.log("Modules:", modules);
    
    // For demonstration purposes, just navigate to the next step or complete
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Course creation complete - would redirect to course listing in a real app
      alert("Course created successfully!");
    }
  };
  
  // Navigation between steps
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <DashboardLayout userRole="teacher" userName="Jane Teacher">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-2">
          <Link href="/teacher/dashboard" className="hover:text-green-600">Dashboard</Link>
          <span>&gt;</span>
          <Link href="/teacher/courses" className="hover:text-green-600">My Courses</Link>
          <span>&gt;</span>
          <span className="text-gray-700">Create New Course</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800">Create New Course</h1>
        
        {/* Progress steps */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center ${index < currentStep ? 'text-green-600' : 'text-gray-400'}`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                    index + 1 === currentStep ? 'bg-green-600' : 
                    index + 1 < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {index + 1 < currentStep ? '✓' : index + 1}
                </div>
                <div className="mt-2 text-sm">
                  {index === 0 ? 'Basic Info' : index === 1 ? 'Content & Modules' : 'Review & Publish'}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
            <div 
              className="h-full bg-green-500 transition-all" 
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-6">Course Basic Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={courseInfo.title}
                    onChange={handleCourseInfoChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Complete JavaScript Course"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={courseInfo.description}
                    onChange={handleCourseInfoChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Provide a detailed description of your course"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      required
                      value={courseInfo.category}
                      onChange={handleCourseInfoChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="e.g., Web Development"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="level"
                      name="level"
                      required
                      value={courseInfo.level}
                      onChange={handleCourseInfoChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="all-levels">All Levels</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      Price ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      required
                      min="0"
                      step="0.01"
                      value={courseInfo.price}
                      onChange={handleCourseInfoChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="e.g., 49.99"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
                      Course Thumbnail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      id="thumbnail"
                      name="thumbnail"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 1280x720 pixels (16:9 ratio)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Course Content</h2>
                <button
                  type="button"
                  onClick={addModule}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Add Module
                </button>
              </div>
              
              <div className="space-y-8">
                {modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-full">
                        <label htmlFor={`module-${module.id}-title`} className="block text-sm font-medium text-gray-700 mb-1">
                          Module Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id={`module-${module.id}-title`}
                          value={module.title}
                          onChange={(e) => updateModuleTitle(module.id, e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          placeholder="e.g., Introduction to JavaScript"
                          required
                        />
                      </div>
                      
                      {modules.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeModule(module.id)}
                          className="ml-4 text-red-500 hover:text-red-700"
                          title="Remove Module"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium flex justify-between items-center">
                        <span>Lessons</span>
                        <button
                          type="button"
                          onClick={() => addLesson(module.id)}
                          className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition"
                        >
                          Add Lesson
                        </button>
                      </h3>
                      
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lesson.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-medium">Lesson {lessonIndex + 1}</h4>
                            {module.lessons.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeLesson(module.id, lesson.id)}
                                className="text-red-500 hover:text-red-700"
                                title="Remove Lesson"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label htmlFor={`lesson-${module.id}-${lesson.id}-title`} className="block text-sm font-medium text-gray-700 mb-1">
                                Lesson Title <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id={`lesson-${module.id}-${lesson.id}-title`}
                                value={lesson.title}
                                onChange={(e) => updateLesson(module.id, lesson.id, 'title', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                                placeholder="e.g., Variables and Data Types"
                                required
                              />
                            </div>
                            
                            <div>
                              <label htmlFor={`lesson-${module.id}-${lesson.id}-duration`} className="block text-sm font-medium text-gray-700 mb-1">
                                Duration (MM:SS) <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id={`lesson-${module.id}-${lesson.id}-duration`}
                                value={lesson.duration}
                                onChange={(e) => updateLesson(module.id, lesson.id, 'duration', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                                placeholder="e.g., 12:30"
                                pattern="^([0-9]{1,2}):([0-5][0-9])$"
                                required
                              />
                            </div>
                            
                            <div>
                              <label htmlFor={`lesson-${module.id}-${lesson.id}-video`} className="block text-sm font-medium text-gray-700 mb-1">
                                YouTube Video URL <span className="text-red-500">*</span>
                              </label>
                              <div className="flex">
                                <input
                                  type="url"
                                  id={`lesson-${module.id}-${lesson.id}-video`}
                                  value={lesson.videoUrl}
                                  onChange={(e) => updateLesson(module.id, lesson.id, 'videoUrl', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
                                  placeholder="e.g., https://www.youtube.com/watch?v=..."
                                  required
                                />
                                <button
                                  type="button"
                                  onClick={() => previewVideo(lesson.videoUrl)}
                                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 transition"
                                >
                                  Preview
                                </button>
                              </div>
                              <p className="mt-1 text-xs text-gray-500">
                                Using YouTube videos saves server space and provides fast streaming.
                              </p>
                            </div>
                            
                            <div>
                              <label htmlFor={`lesson-${module.id}-${lesson.id}-description`} className="block text-sm font-medium text-gray-700 mb-1">
                                Lesson Description
                              </label>
                              <textarea
                                id={`lesson-${module.id}-${lesson.id}-description`}
                                value={lesson.description}
                                onChange={(e) => updateLesson(module.id, lesson.id, 'description', e.target.value)}
                                rows={3}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                                placeholder="Describe what students will learn in this lesson"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-6">Review and Publish</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">Course Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Title:</span>
                      <p className="mt-1">{courseInfo.title || "Not specified"}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Category:</span>
                      <p className="mt-1">{courseInfo.category || "Not specified"}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Level:</span>
                      <p className="mt-1">{courseInfo.level || "Not specified"}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Price:</span>
                      <p className="mt-1">${courseInfo.price || "0.00"}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-gray-700">Description:</span>
                    <p className="mt-1">{courseInfo.description || "No description provided"}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-gray-700">Thumbnail:</span>
                    <p className="mt-1">{courseInfo.thumbnail ? courseInfo.thumbnail.name : "No thumbnail uploaded"}</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">Course Content</h3>
                  <div className="space-y-4">
                    {modules.map((module, moduleIndex) => (
                      <div key={module.id} className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium">Module {moduleIndex + 1}: {module.title || "Untitled Module"}</h4>
                        <ul className="mt-2 pl-6 list-disc space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lesson.id}>
                              {lesson.title || "Untitled Lesson"} ({lesson.duration || "00:00"})
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-medium text-yellow-800 mb-2">Important Notes</h3>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                    <li>Once published, your course will be available to all students on the platform.</li>
                    <li>You can edit your course content after publishing.</li>
                    <li>YouTube video links will be validated before the course is published.</li>
                    <li>Make sure all required fields are filled correctly.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                Previous
              </button>
            ) : (
              <div></div> // Empty div to maintain flex spacing
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Publish Course
              </button>
            )}
          </div>
        </form>
        
        {/* Video Preview Modal */}
        {isPreviewVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-3xl mx-4 overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">Video Preview</h3>
                <button 
                  onClick={() => setIsPreviewVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={previewVideoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px]"
                ></iframe>
              </div>
              <div className="p-4 border-t">
                <p className="text-sm text-gray-600">
                  This is how your video will appear to students in your course.
                </p>
                <div className="mt-3 flex justify-end">
                  <button 
                    onClick={() => setIsPreviewVisible(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 