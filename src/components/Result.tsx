import type { ResultProps } from '../types/components';

/**
 * 診断結果を表示するコンポーネント
 * 
 * @param result - 診断結果
 * @param answers - 回答の配列
 * @param onRestart - 「もう一度診断」ボタンクリック時のコールバック関数
 */
export const Result = ({ result, answers, onRestart }: ResultProps) => {
  // 結果に応じた色とアイコンを設定
  const getResultStyle = (result: string) => {
    switch (result) {
      case 'エンジニア':
        return {
          bg: 'from-green-400 to-blue-500',
          icon: '💻',
          color: 'text-green-600'
        };
      case 'デザイナー':
        return {
          bg: 'from-pink-400 to-purple-500',
          icon: '🎨',
          color: 'text-pink-600'
        };
      case 'セールス':
        return {
          bg: 'from-orange-400 to-red-500',
          icon: '🤝',
          color: 'text-orange-600'
        };
      case 'マネージャー':
        return {
          bg: 'from-yellow-400 to-orange-500',
          icon: '👔',
          color: 'text-yellow-600'
        };
      default:
        return {
          bg: 'from-gray-400 to-gray-500',
          icon: '📊',
          color: 'text-gray-600'
        };
    }
  };

  const style = getResultStyle(result);

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-8 border border-gray-100 text-center animate-fade-in">
      {/* お祝いアイコン */}
      <div className="mb-6">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">診断結果</h2>
      </div>

      {/* 結果カード */}
      <div className={`bg-gradient-to-r ${style.bg} rounded-lg p-6 mb-6 text-white shadow-lg`}>
        <div className="text-4xl mb-3">{style.icon}</div>
        <p className="text-lg mb-2 opacity-90">あなたに向いているポジションは</p>
        <h3 className="text-3xl font-bold">
          {result}
        </h3>
        <p className="text-lg mt-2 opacity-90">です！</p>
      </div>

      {/* 回答詳細 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600 mb-2">あなたの回答</p>
        <p className="text-gray-700 font-mono">
          {answers.join(' → ')}
        </p>
      </div>

      {/* アクションボタン */}
      <button 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
        onClick={onRestart}
      >
        🔄 もう一度診断する
      </button>
    </div>
  );
}; 