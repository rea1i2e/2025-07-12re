import type { QuestionProps } from '../types/components';

/**
 * 質問と選択肢を表示するコンポーネント
 * 
 * @param question - 表示する質問データ
 * @param questionNumber - 質問番号
 * @param onAnswer - 回答選択時のコールバック関数
 */
export const Question = ({ question, questionNumber, onAnswer }: QuestionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100 animate-fade-in">
      {/* 質問番号 */}
      <div className="flex items-center justify-center mb-6">
        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          質問 {questionNumber}
        </span>
      </div>
      
      {/* 質問文 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center leading-relaxed">
        {question.text}
      </h2>
      
      {/* 選択肢 */}
      <div className="space-y-3">
        {question.choices.map((choice) => (
          <button
            key={choice.value}
            className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
            onClick={() => onAnswer(choice.value)}
          >
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-blue-400 flex items-center justify-center mr-4 text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors">
                {choice.value.toUpperCase()}
              </span>
              <span className="text-gray-700 group-hover:text-gray-800 transition-colors">
                {choice.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 