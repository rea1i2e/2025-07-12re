import type { AnswerChoice, DiagnosisResult } from '../types/diagnosis';
import { diagnosisData } from '../data/questions';

/**
 * 回答配列から診断結果を計算する純粋関数
 * 
 * @param answers - 回答の配列
 * @returns 診断結果
 */
export const calculateDiagnosisResult = (answers: AnswerChoice[]): DiagnosisResult => {
  // 各職種への傾向をカウント
  const resultCounts: Record<DiagnosisResult, number> = {
    'エンジニア': 0,
    'デザイナー': 0,
    'セールス': 0,
    'マネージャー': 0
  };
  
  // 回答から結果タイプをカウント
  answers.forEach((answer, index) => {
    const question = diagnosisData.questions[index];
    const choice = question.choices.find(c => c.value === answer);
    if (choice) {
      resultCounts[choice.resultType]++;
    }
  });
  
  // 最高スコアの職種を返す
  const maxScore = Math.max(...Object.values(resultCounts));
  const result = Object.entries(resultCounts).find(([_, count]) => count === maxScore);
  
  return (result ? result[0] : 'エンジニア') as DiagnosisResult;
};

/**
 * 診断が完了しているかどうかを判定する純粋関数
 * 
 * @param answers - 回答の配列
 * @returns 診断完了フラグ
 */
export const isDiagnosisCompleted = (answers: AnswerChoice[]): boolean => {
  return answers.length === diagnosisData.totalQuestions;
};

/**
 * 現在の質問を取得する純粋関数
 * 
 * @param questionNumber - 質問番号
 * @returns 現在の質問データ、存在しない場合はundefined
 */
export const getCurrentQuestion = (questionNumber: number) => {
  return diagnosisData.questions.find(q => q.id === questionNumber);
}; 