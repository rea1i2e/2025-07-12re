interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

/**
 * 診断の進行状況を表示するプログレスバーコンポーネント
 * 
 * @param currentStep - 現在のステップ
 * @param totalSteps - 総ステップ数
 */
export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* プログレス情報 */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          進行状況
        </span>
        <span className="text-sm font-medium text-gray-600">
          {currentStep} / {totalSteps}
        </span>
      </div>
      
      {/* プログレスバー */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* ステップ表示 */}
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div
              key={stepNumber}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : isCurrent
                  ? 'bg-blue-500 text-white ring-4 ring-blue-200'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {isCompleted ? '✓' : stepNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 