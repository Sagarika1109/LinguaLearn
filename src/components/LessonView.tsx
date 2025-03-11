import React, { useState } from 'react';
import { ArrowLeft, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { Lesson } from '../types';
import { LectureSection } from './LectureSection';
import { Quiz } from './Quiz';
import { useLanguageStore } from '../store';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const { saveQuizScore, completeLesson } = useLanguageStore();

  const handleQuizComplete = (score: number) => {
    saveQuizScore(lesson.id, score);
    completeLesson(lesson.id);
    setShowQuiz(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Lessons
      </button>

      <div className="space-y-8">
        {/* Lesson Header */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-gray-600">{lesson.language}</span>
              <span className="mx-2">•</span>
              <span className="capitalize text-gray-600">{lesson.difficulty}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-8">{lesson.content}</p>

          {/* Vocabulary Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Vocabulary</h2>
            <div className="grid gap-4">
              {lesson.vocabulary.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm"
                >
                  <span className="font-medium text-gray-800">{item.word}</span>
                  <span className="text-gray-600">{item.translation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Lecture */}
        {lesson.lecture && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Interactive Lecture</h2>
            </div>
            {lesson.lecture.sections.map((section, index) => (
              <LectureSection
                key={index}
                title={section.title}
                content={section.content}
                examples={section.examples}
              />
            ))}
          </div>
        )}

        {/* Quiz Section */}
        {lesson.quiz && !showQuiz && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Test Your Knowledge?
              </h2>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {/* Quiz Component */}
        {lesson.quiz && showQuiz && (
          <Quiz
            questions={lesson.quiz.questions}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  );
};