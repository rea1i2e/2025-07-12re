import type { DiagnosisData } from '../types/diagnosis';

// 診断質問データ
export const diagnosisData: DiagnosisData = {
  totalQuestions: 4,
  questions: [
    {
      id: 1,
      text: '次の中で、心が惹かれる仕事は何？',
      choices: [
        {
          value: 'a',
          text: '黙々と手を動かして作業する',
          resultType: 'エンジニア'
        },
        {
          value: 'b',
          text: '人と交流する',
          resultType: 'セールス'
        },
        {
          value: 'c',
          text: 'アイディアを形にする',
          resultType: 'デザイナー'
        },
        {
          value: 'd',
          text: '数値を見て、戦略を考える',
          resultType: 'マネージャー'
        }
      ]
    },
    {
      id: 2,
      text: '次の中でよくやってしまう行動は何？',
      choices: [
        {
          value: 'a',
          text: '看板を見て、コーディングを考えてしまう',
          resultType: 'エンジニア'
        },
        {
          value: 'b',
          text: '看板を見て、デザインを考えてしまう',
          resultType: 'デザイナー'
        },
        {
          value: 'c',
          text: '困っている様子の人がいたら声をかけてしまう',
          resultType: 'セールス'
        },
        {
          value: 'd',
          text: '飲食店でその店の経営戦略を考えてしまう',
          resultType: 'マネージャー'
        }
      ]
    },
    {
      id: 3,
      text: '休日に何をするのが好き？',
      choices: [
        {
          value: 'a',
          text: 'プログラミングの勉強',
          resultType: 'エンジニア'
        },
        {
          value: 'b',
          text: '絵を描いたり、写真を撮る',
          resultType: 'デザイナー'
        },
        {
          value: 'c',
          text: '友人と会って話す',
          resultType: 'セールス'
        },
        {
          value: 'd',
          text: 'ビジネス書を読む',
          resultType: 'マネージャー'
        }
      ]
    },
    {
      id: 4,
      text: 'チームで働くとき、どんな役割を担うことが多い？',
      choices: [
        {
          value: 'a',
          text: '技術的な問題を解決する',
          resultType: 'エンジニア'
        },
        {
          value: 'b',
          text: 'アイディアを出したり、見た目を整える',
          resultType: 'デザイナー'
        },
        {
          value: 'c',
          text: 'メンバー間の調整をする',
          resultType: 'セールス'
        },
        {
          value: 'd',
          text: '全体の方向性を決める',
          resultType: 'マネージャー'
        }
      ]
    }
  ]
}; 