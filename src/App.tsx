import React from 'react';
import { Globe, Trophy, Flame } from 'lucide-react';
import { useLanguageStore } from './store';
import { LessonCard } from './components/LessonCard';
import { ProgressBar } from './components/ProgressBar';
import { LessonView } from './components/LessonView';

function App() {
  const { lessons, userProgress, currentLesson, setCurrentLesson } = useLanguageStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">LinguaLearn</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-gray-600">Score: {Object.values(userProgress.quizScores).reduce((a, b) => a + b, 0)}</span>
              </div>
              <div className="flex items-center">
                <Flame className="h-5 w-5 text-orange-500 mr-1" />
                <span className="text-gray-600">Streak: {userProgress.currentStreak} days</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {currentLesson ? (
          <LessonView
            lesson={currentLesson}
            onBack={() => setCurrentLesson(null)}
          />
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
              <ProgressBar
                completed={userProgress.completedLessons.length}
                total={lessons.length}
              />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Lessons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={userProgress.completedLessons.includes(lesson.id)}
                    onClick={() => setCurrentLesson(lesson)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;