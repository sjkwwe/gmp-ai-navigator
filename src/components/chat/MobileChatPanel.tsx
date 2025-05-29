import { useState } from "react";

interface MobileChatPanelProps {
  isOpen: boolean;
  onSendMessage: (message: string) => void;
  onClose: () => void;
}

export default function MobileChatPanel({ 
  isOpen, 
  onSendMessage, 
  onClose 
}: MobileChatPanelProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div 
      className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* 드래그 핸들 */}
      <div className="flex justify-center mb-2">
        <button 
          onClick={onClose}
          className="w-10 h-1 bg-gray-300 rounded-full"
        />
      </div>
      
      {/* 입력 영역 */}
      <div className="flex gap-2">
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 p-3 border border-gray-300 rounded-lg" 
          placeholder="AI에게 질문하세요..."
        />
        <button 
          onClick={handleSubmit}
          disabled={!message.trim()}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          전송
        </button>
      </div>
    </div>
  );
} 