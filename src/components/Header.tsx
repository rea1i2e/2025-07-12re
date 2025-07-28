import type { HeaderProps } from '../types/components';

/**
 * ヘッダー（タイトルと説明文）を表示するコンポーネント
 * 
 * @param title - アプリケーションのタイトル
 * @param description - 説明文（オプション）
 */
export const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      )}
    </header>
  );
}; 