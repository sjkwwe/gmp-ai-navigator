import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickActionButtons from "./QuickActionButtons";
import { Message } from "@/types/chat";

interface AISidebarProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onQuickAction: (action: string) => void;
  isLoading?: boolean;
}

export default function AISidebar({ 
  messages, 
  onSendMessage, 
  onQuickAction, 
  isLoading = false 
}: AISidebarProps) {
  return (
    <aside className="hidden lg:flex w-80 bg-white border-l border-gray-200 flex-col">
      {/* 사이드바 헤더 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-blue-600'}`}></div>
          <h2 className="text-lg font-semibold text-gray-900">AI 채팅</h2>
        </div>
        <p className="text-sm text-gray-600">길찾기와 장소 정보를 물어보세요</p>
      </div>

      {/* 대화 영역 */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">대화를 시작해보세요!</p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isAI={message.isAI}
              timestamp={message.timestamp}
            />
          ))
        )}
        
        {isLoading && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                AI
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-800">생각 중...</p>
              </div>
            </div>
          </div>
        )}

        {/* 빠른 액션 버튼들 */}
        <QuickActionButtons onActionClick={onQuickAction} />
      </div>

      {/* 입력 영역 */}
      <ChatInput 
        onSendMessage={onSendMessage} 
        disabled={isLoading}
      />
    </aside>
  );
} 