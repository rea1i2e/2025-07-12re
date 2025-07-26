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


import { useState } from 'react'

// 型定義
type QuestionNumber = 1 | 2 | 3 | 4;

function App() {

  // state定義
  // ・質問番号
  const [questionNumber, setQuestionNumber] = useState<QuestionNumber>(1);
  // ・回答
  const [answers, setAnswers] = useState<string[]>([]);

  // 回答を処理する関数
  const handleAnswer = (answer: string) => {
    setAnswers(prev => [...prev, answer]);
    goToNextQuestion();
  };

  // 結果判定（カウント方式）
  const getResult = () => {
    const [q1, q2, q3, q4] = answers;
    
    // 各職種への傾向をカウント
    let engineerCount = 0;
    let designerCount = 0;
    let salesCount = 0;
    let managerCount = 0;
    
    // 質問1の判定
    if (q1 === 'a') engineerCount++;
    if (q1 === 'b') salesCount++;
    if (q1 === 'c') designerCount++;
    if (q1 === 'd') managerCount++;
    
    // 質問2の判定
    if (q2 === 'a') engineerCount++;
    if (q2 === 'b') designerCount++;
    if (q2 === 'c') salesCount++;
    if (q2 === 'd') managerCount++;
    
    // 質問3の判定（仮の判定ルール）
    if (q3 === 'a') engineerCount++;
    if (q3 === 'b') designerCount++;
    if (q3 === 'c') salesCount++;
    if (q3 === 'd') managerCount++;
    
    // 質問4の判定（仮の判定ルール）
    if (q4 === 'a') engineerCount++;
    if (q4 === 'b') designerCount++;
    if (q4 === 'c') salesCount++;
    if (q4 === 'd') managerCount++;
    
    // 最高スコアの職種を返す
    const maxScore = Math.max(engineerCount, designerCount, salesCount, managerCount);
    
    if (engineerCount === maxScore) return 'エンジニア';
    if (designerCount === maxScore) return 'デザイナー';
    if (salesCount === maxScore) return 'セールス';
    return 'マネージャー';
  };

  // 次の質問に進む関数
  const goToNextQuestion = () => {
    setQuestionNumber(prev => prev < 4 ? (prev + 1) as QuestionNumber : prev);
  };

  // 前の質問に戻る関数
  const goToPreviousQuestion = () => {
    setQuestionNumber(prev => prev > 1 ? (prev - 1) as QuestionNumber : prev);
    // 回答も一つ削除
    setAnswers(prev => prev.slice(0, -1));
  };

  // 最初に戻る関数
  const resetToFirstQuestion = () => {
    setQuestionNumber(1);
    setAnswers([]);
  };

  // 診断が完了したかどうか
  const isCompleted = answers.length === 4;

  return (
    <>
      <h1 className="">診断アプリ</h1>

      {!isCompleted && (
        <>
        <p className="">以下の文章の中から、あなたに合うものを選んでください。</p>
          {/* 質問と選択肢の表示（質問番号に応じた質問と選択肢を表示） */}
          <h2 className="">質問{questionNumber}</h2>
          {/* 1問目 */}
          {questionNumber === 1 && (
            <>
              <p className="">次の中で、心が惹かれる仕事は何？</p>
              <ul className="">
                <li className="" onClick={() => handleAnswer('a')}>
                  - 黙々と手を動かして作業する
                </li>
                <li className="" onClick={() => handleAnswer('b')}>
                  - 人と交流する
                </li>
                <li className="" onClick={() => handleAnswer('c')}>
                  - アイディアを形にする
                </li>
                <li className="" onClick={() => handleAnswer('d')}>
                  - 数値を見て、戦略を考える
                </li>
              </ul>
            </>
          )}

          {/* 2問目 */}
          {questionNumber === 2 && (
            <>
              <p className="">次の中でよくやってしまう行動は何？</p>
              <ul className="">
                <li className="" onClick={() => handleAnswer('a')}>
                  - 看板を見て、コーディングを考えてしまう
                </li>
                <li className="" onClick={() => handleAnswer('b')}>
                  - 看板を見て、デザインを考えてしまう
                </li>
                <li className="" onClick={() => handleAnswer('c')}>
                  - 困っている様子の人がいたら声をかけてしまう
                </li>
                <li className="" onClick={() => handleAnswer('d')}>
                  - 飲食店でその店の経営戦略を考えてしまう
                </li>
              </ul>
            </>
          )}

          {/* 3問目 */}
          {questionNumber === 3 && (
            <>
              <p className="">休日に何をするのが好き？</p>
              <ul className="">
                <li className="" onClick={() => handleAnswer('a')}>
                  - プログラミングの勉強
                </li>
                <li className="" onClick={() => handleAnswer('b')}>
                  - 絵を描いたり、写真を撮る
                </li>
                <li className="" onClick={() => handleAnswer('c')}>
                  - 友人と会って話す
                </li>
                <li className="" onClick={() => handleAnswer('d')}>
                  - ビジネス書を読む
                </li>
              </ul>
            </>
          )}

          {/* 4問目 */}
          {questionNumber === 4 && (
            <>
              <p className="">チームで働くとき、どんな役割を担うことが多い？</p>
              <ul className="">
                <li className="" onClick={() => handleAnswer('a')}>
                  - 技術的な問題を解決する
                </li>
                <li className="" onClick={() => handleAnswer('b')}>
                  - アイディアを出したり、見た目を整える
                </li>
                <li className="" onClick={() => handleAnswer('c')}>
                  - メンバー間の調整をする
                </li>
                <li className="" onClick={() => handleAnswer('d')}>
                  - 全体の方向性を決める
                </li>
              </ul>
            </>
          )}

          <hr />
          {/* 「戻る」ボタン */}
          {questionNumber > 1 && (
            <button className="" onClick={goToPreviousQuestion}>戻る</button>
          )}
        </>
      )}

      {/* 結果の表示（回答により結果を出し分ける） */}
      {isCompleted && (
        <>
          <h2 className="">診断結果</h2>
          <p className="">あなたに向いているポジションは</p>
          <p className=""><strong>{getResult()}</strong>です</p>
          <p className="">回答: {answers.join(', ')}</p>
          {/* 「もう一度診断」ボタン */}
          <button className="" onClick={resetToFirstQuestion}>もう一度診断</button>
        </>
      )}

    </>
  )
}

export default App
