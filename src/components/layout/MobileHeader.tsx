interface MobileHeaderProps {
  onChatToggle: () => void;
}

export default function MobileHeader({ onChatToggle }: MobileHeaderProps) {
  return (
    <div className="lg:hidden absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h1 className="text-lg font-semibold text-gray-900">AI Navigator</h1>
        </div>
        <button 
          onClick={onChatToggle}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          💬 채팅
        </button>
      </div>
    </div>
  );
} 