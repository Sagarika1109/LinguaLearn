import { create } from 'zustand';
import { Lesson, Quiz, UserProgress } from './types';

interface LanguageStore {
  lessons: Lesson[];
  currentLesson: Lesson | null;
  userProgress: UserProgress;
  setCurrentLesson: (lesson: Lesson | null) => void;
  completeLesson: (lessonId: string) => void;
  saveQuizScore: (lessonId: string, score: number) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  lessons: [
    {
      id: '1',
      title: 'Basic Greetings',
      language: 'Spanish',
      difficulty: 'beginner',
      content: 'Learn common Spanish greetings and introductions.',
      vocabulary: [
        { word: 'Hola', translation: 'Hello' },
        { word: 'Buenos días', translation: 'Good morning' },
        { word: 'Gracias', translation: 'Thank you' },
        { word: '¿Cómo estás?', translation: 'How are you?' },
        { word: 'Adiós', translation: 'Goodbye' },
      ],
      lecture: {
        sections: [
          {
            title: 'Formal vs Informal Greetings',
            content: "In Spanish, like in many languages, there are formal and informal ways to greet people. The choice depends on the social context and your relationship with the person you're speaking to.",
            examples: [
              { original: 'Hola (Informal)', translation: 'Hi/Hello' },
              { original: 'Buenos días (Formal)', translation: 'Good morning' },
              { original: '¿Qué tal? (Informal)', translation: "What's up?" },
            ],
          },
          {
            title: 'Time-based Greetings',
            content: 'Spanish has specific greetings for different times of the day.',
            examples: [
              { original: 'Buenos días', translation: 'Good morning' },
              { original: 'Buenas tardes', translation: 'Good afternoon' },
              { original: 'Buenas noches', translation: 'Good night' },
            ],
          },
        ],
      },
      quiz: {
        questions: [
          {
            id: '1',
            question: 'What is the informal way to say "hello" in Spanish?',
            options: ['Buenos días', 'Hola', 'Gracias', 'Adiós'],
            correctAnswer: 'Hola',
          },
          {
            id: '2',
            question: 'Which greeting would you use in the morning?',
            options: ['Buenas noches', 'Buenos días', 'Buenas tardes', '¿Qué tal?'],
            correctAnswer: 'Buenos días',
          },
          {
            id: '3',
            question: 'How do you say "thank you" in Spanish?',
            options: ['Por favor', 'Gracias', 'De nada', 'Adiós'],
            correctAnswer: 'Gracias',
          },
        ],
      },
    },
    {
      id: '2',
      title: 'Essential Phrases',
      language: 'French',
      difficulty: 'beginner',
      content: 'Master the most common French phrases for everyday conversations.',
      vocabulary: [
        { word: 'Bonjour', translation: 'Hello' },
        { word: 'Au revoir', translation: 'Goodbye' },
        { word: "S'il vous plaît", translation: 'Please' },
        { word: 'Merci', translation: 'Thank you' },
        { word: 'De rien', translation: "You're welcome" },
      ],
    },
    {
      id: '3',
      title: 'Numbers 1-10',
      language: 'Japanese',
      difficulty: 'beginner',
      content: 'Learn to count in Japanese and understand basic number usage.',
      vocabulary: [
        { word: '一 (いち)', translation: 'One' },
        { word: '二 (に)', translation: 'Two' },
        { word: '三 (さん)', translation: 'Three' },
        { word: '四 (よん)', translation: 'Four' },
        { word: '五 (ご)', translation: 'Five' },
      ],
    },
    {
      id: '4',
      title: 'Food and Dining',
      language: 'Italian',
      difficulty: 'intermediate',
      content: 'Learn vocabulary for ordering food and discussing Italian cuisine.',
      vocabulary: [
        { word: 'Pizza', translation: 'Pizza' },
        { word: 'Pasta', translation: 'Pasta' },
        { word: 'Acqua', translation: 'Water' },
        { word: 'Vino', translation: 'Wine' },
        { word: 'Il conto', translation: 'The bill' },
      ],
    },
    {
      id: '5',
      title: 'Business Communication',
      language: 'German',
      difficulty: 'advanced',
      content: 'Professional German vocabulary for business meetings and emails.',
      vocabulary: [
        { word: 'Geschäft', translation: 'Business' },
        { word: 'Termin', translation: 'Appointment' },
        { word: 'Besprechung', translation: 'Meeting' },
        { word: 'Vereinbarung', translation: 'Agreement' },
        { word: 'Projekt', translation: 'Project' },
      ],
    },
    {
      id: '6',
      title: 'Weather and Seasons',
      language: 'Mandarin',
      difficulty: 'intermediate',
      content: 'Learn to discuss weather patterns and seasonal changes in Mandarin.',
      vocabulary: [
        { word: '天气 (tiānqì)', translation: 'Weather' },
        { word: '下雨 (xiàyǔ)', translation: 'Rain' },
        { word: '春天 (chūntiān)', translation: 'Spring' },
        { word: '夏天 (xiàtiān)', translation: 'Summer' },
        { word: '冬天 (dōngtiān)', translation: 'Winter' },
      ],
    },
    {
      id: '7',
      title: 'Family Members',
      language: 'Korean',
      difficulty: 'beginner',
      content: 'Learn Korean vocabulary for family relationships.',
      vocabulary: [
        { word: '어머니 (eomeoni)', translation: 'Mother' },
        { word: '아버지 (abeoji)', translation: 'Father' },
        { word: '누나 (nuna)', translation: 'Older sister (male speaking)' },
        { word: '형 (hyeong)', translation: 'Older brother (male speaking)' },
        { word: '동생 (dongsaeng)', translation: 'Younger sibling' },
      ],
    },
    {
      id: '8',
      title: 'Travel Essentials',
      language: 'Portuguese',
      difficulty: 'intermediate',
      content: 'Essential Portuguese phrases for traveling in Brazil and Portugal.',
      vocabulary: [
        { word: 'Passaporte', translation: 'Passport' },
        { word: 'Bagagem', translation: 'Luggage' },
        { word: 'Aeroporto', translation: 'Airport' },
        { word: 'Hotel', translation: 'Hotel' },
        { word: 'Praia', translation: 'Beach' },
      ],
    }
  ],
  currentLesson: null,
  userProgress: {
    completedLessons: [],
    quizScores: {},
    currentStreak: 0,
    lastStudyDate: new Date().toISOString(),
  },
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  completeLesson: (lessonId) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        completedLessons: [...state.userProgress.completedLessons, lessonId],
      },
    })),
  saveQuizScore: (lessonId, score) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        quizScores: { ...state.userProgress.quizScores, [lessonId]: score },
      },
    })),
}));