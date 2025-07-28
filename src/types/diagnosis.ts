// 診断アプリの型定義

// 質問番号の型
export type QuestionNumber = 1 | 2 | 3 | 4;

// 回答選択肢の型
export type AnswerChoice = 'a' | 'b' | 'c' | 'd';

// 診断結果の型
export type DiagnosisResult = 'エンジニア' | 'デザイナー' | 'セールス' | 'マネージャー';

// 選択肢の型
export interface Choice {
  value: AnswerChoice;
  text: string;
  resultType: DiagnosisResult;
}

// 質問の型
export interface Question {
  id: QuestionNumber;
  text: string;
  choices: Choice[];
}

// 診断データ全体の型
export interface DiagnosisData {
  questions: Question[];
  totalQuestions: number;
} 