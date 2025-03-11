import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LectureSectionProps {
  title: string;
  content: string;
  examples: Array<{
    original: string;
    translation: string;
  }>;
}

export const LectureSection: React.FC<LectureSectionProps> = ({
  title,
  content,
  examples,
}) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Examples:</h4>
        {examples.map((example, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-gray-50 rounded-lg"
          >
            <span className="font-medium text-gray-800">{example.original}</span>
            <ChevronRight className="mx-3 text-gray-400" />
            <span className="text-gray-600">{example.translation}</span>
          </div>
        ))}
      </div>
    </div>
  );
};