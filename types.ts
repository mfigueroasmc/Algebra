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
  topic: string; // e.g., "Práctica 11", "Práctica 14"
  text: string;
  matrix?: MatrixData;
  codeSnippet?: string;
  options: Option[];
  explanation: string;
}

export enum AppView {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS'
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: number; selectedOptionId: string; isCorrect: boolean }[];
}