export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatrixData {
  rows: number;
  cols: number;
  data: (number | string)[][];
}

export interface Question {
  id: number;
  topic: string; 
  text: string;
  matrix?: MatrixData;
  codeSnippet?: string;
  options: Option[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: 'geometry' | 'transform' | 'spectrum';
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  questions: Question[];
}

export enum AppView {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS'
}

export interface QuizState {
  activeQuizId: string | null;
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: number; selectedOptionId: string; isCorrect: boolean }[];
}