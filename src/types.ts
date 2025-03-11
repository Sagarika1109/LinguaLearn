export interface Lesson {
  id: string;
  title: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  vocabulary: Array<{
    word: string;
    translation: string;
  }>;
  lecture?: {
    sections: Array<{
      title: string;
      content: string;
      examples: Array<{
        original: string;
        translation: string;
      }>;
    }>;
  };
  quiz?: {
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: string;
    }>;
  };
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  currentStreak: number;
  lastStudyDate: string;
}