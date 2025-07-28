import type { NavigationProps } from '../types/components';

/**
 * ナビゲーション（戻るボタンなど）を表示するコンポーネント
 * 
 * @param questionNumber - 現在の質問番号
 * @param canGoBack - 戻ることができるかどうか
 * @param onGoBack - 戻るボタンクリック時のコールバック関数
 */
export const Navigation = ({ canGoBack, onGoBack }: NavigationProps) => {
  return (
    <div className="flex justify-center mt-6">
      {canGoBack && (
        <button 
          className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 shadow-sm"
          onClick={onGoBack}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          前の質問に戻る
        </button>
      )}
    </div>
  );
}; 