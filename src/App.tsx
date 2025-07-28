/**
 * ステートの定義（型定義と初期値設定）
 * 
 * 質問番号を保持するステート
 * ・初期値1
 * ・回答すると1ずつ増える
 * ・戻ると1減る
 * 
 * 回答を保持するステート
 * ・1〜４問目の回答（a, b, c, dいずれか）を保持
 * ・戻るとリセット
 * 
 * 診断が終わったかどうかを保持するステート
 */

/**
* 更新関数
* 質問番号を更新する関数
* ・回答したらプラス1
* ・「戻るボタン」クリックでマイナス1
* ・「もう一度診断」ボタンで、1に
* 
* 回答を更新する関数
* 
* 診断が終わったかどうかを更新する関数
*/


import { Question } from './components/Question'
import { Result } from './components/Result'
import { Navigation } from './components/Navigation'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { useDiagnosis } from './hooks/useDiagnosis'

function App() {
  // カスタムフックから状態とアクションを取得
  const {
    questionNumber,
    answers,
    isCompleted,
    currentQuestion,
    result,
    handleAnswer,
    goToPreviousQuestion,
    resetToFirstQuestion,
  } = useDiagnosis();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-4 sm:py-8 max-w-2xl">
        <Header 
          title="診断アプリ" 
          description={!isCompleted ? "以下の文章の中から、あなたに合うものを選んでください。" : undefined}
        />

        <div className="mt-8">
          {!isCompleted && (
            <div className="space-y-6">
              {/* プログレスバー */}
              <ProgressBar currentStep={questionNumber} totalSteps={4} />
              
              {/* 質問と選択肢の表示 */}
              {currentQuestion && (
                <Question
                  question={currentQuestion}
                  questionNumber={questionNumber}
                  onAnswer={handleAnswer}
                />
              )}

              <Navigation
                canGoBack={questionNumber > 1}
                onGoBack={goToPreviousQuestion}
              />
            </div>
          )}

          {/* 結果の表示 */}
          {isCompleted && (
            <Result
              result={result!}
              answers={answers}
              onRestart={resetToFirstQuestion}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
