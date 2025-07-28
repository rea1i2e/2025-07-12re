import { useState, useCallback, useMemo } from 'react';
import type { QuestionNumber, AnswerChoice } from '../types/diagnosis';
import type { UseDiagnosisReturn } from '../types/hooks';
import { diagnosisData } from '../data/questions';
import { 
  calculateDiagnosisResult, 
  isDiagnosisCompleted, 
  getCurrentQuestion 
} from '../utils/diagnosisLogic';

/**
 * 診断アプリの状態管理とビジネスロジックを提供するカスタムフック
 * 
 * @returns 診断の状態とアクション関数
 */
export const useDiagnosis = (): UseDiagnosisReturn => {
  // 状態管理
  const [questionNumber, setQuestionNumber] = useState<QuestionNumber>(1);
  const [answers, setAnswers] = useState<AnswerChoice[]>([]);

  // 計算値（メモ化）
  const isCompleted = useMemo(() => isDiagnosisCompleted(answers), [answers]);
  const currentQuestion = useMemo(() => getCurrentQuestion(questionNumber), [questionNumber]);
  const result = useMemo(() => 
    isCompleted ? calculateDiagnosisResult(answers) : null, 
    [isCompleted, answers]
  );

  // 次の質問に進む関数
  const goToNextQuestion = useCallback(() => {
    setQuestionNumber(prev => 
      prev < diagnosisData.totalQuestions ? (prev + 1) as QuestionNumber : prev
    );
  }, []);

  // 回答を処理する関数
  const handleAnswer = useCallback((answer: AnswerChoice) => {
    setAnswers(prev => [...prev, answer]);
    goToNextQuestion();
  }, [goToNextQuestion]);

  // 前の質問に戻る関数
  const goToPreviousQuestion = useCallback(() => {
    setQuestionNumber(prev => prev > 1 ? (prev - 1) as QuestionNumber : prev);
    // 回答も一つ削除
    setAnswers(prev => prev.slice(0, -1));
  }, []);

  // 最初に戻る関数
  const resetToFirstQuestion = useCallback(() => {
    setQuestionNumber(1);
    setAnswers([]);
  }, []);

  return {
    // 状態
    questionNumber,
    answers,
    isCompleted,
    currentQuestion,
    result,
    
    // アクション
    handleAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    resetToFirstQuestion,
  };
}; 