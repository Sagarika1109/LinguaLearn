import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizProps {
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      onComplete(finalScore);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <span className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mt-2">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              showResult
                ? option === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : option === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-50 border-gray-200'
                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
            } border`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showResult && option === question.correctAnswer && (
                <CheckCircle className="text-green-500" />
              )}
              {showResult &&
                option === selectedAnswer &&
                option !== question.correctAnswer && (
                  <XCircle className="text-red-500" />
                )}
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <button
          onClick={nextQuestion}
          className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      )}
    </div>
  );
};