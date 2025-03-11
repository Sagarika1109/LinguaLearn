import React from 'react';
import { BookOpen, Star } from 'lucide-react';
import { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onClick: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, isCompleted, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
        {isCompleted && (
          <div className="bg-green-100 p-2 rounded-full">
            <Star className="w-5 h-5 text-green-500" />
          </div>
        )}
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-3">
        <BookOpen className="w-4 h-4 mr-2" />
        <span>{lesson.language}</span>
        <span className="mx-2">•</span>
        <span className="capitalize">{lesson.difficulty}</span>
      </div>
      <p className="text-gray-600">{lesson.content}</p>
    </div>
  );
};