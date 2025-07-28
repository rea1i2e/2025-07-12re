// カスタムフックの型定義

import type { QuestionNumber, AnswerChoice, DiagnosisResult, Question } from './diagnosis';

/**
 * useDiagnosisカスタムフックの戻り値の型
 */
export interface UseDiagnosisReturn {
  // 状態
  questionNumber: QuestionNumber;
  answers: AnswerChoice[];
  isCompleted: boolean;
  currentQuestion: Question | undefined;
  result: DiagnosisResult | null;
  
  // アクション
  handleAnswer: (answer: AnswerChoice) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetToFirstQuestion: () => void;
} 