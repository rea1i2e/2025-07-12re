// コンポーネントのProps型定義

import type { Question, AnswerChoice, DiagnosisResult } from './diagnosis';

// Questionコンポーネントのprops
export interface QuestionProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answer: AnswerChoice) => void;
}

// Resultコンポーネントのprops
export interface ResultProps {
  result: DiagnosisResult;
  answers: AnswerChoice[];
  onRestart: () => void;
}

// Navigationコンポーネントのprops
export interface NavigationProps {
  canGoBack: boolean;
  onGoBack: () => void;
}

// Headerコンポーネントのprops
export interface HeaderProps {
  title: string;
  description?: string;
} 