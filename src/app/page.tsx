"use client";

import { useState } from "react";
import { 
  MapContainer, 
  MobileHeader, 
  AISidebar, 
  MobileChatPanel 
} from "@/components";
import { Message } from "@/types/chat";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "안녕하세요! 어디로 가시나요?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "2", 
      text: "강남역에서 홍대입구역까지 가는 방법을 알려주세요",
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);
    
    // TODO: AI API 호출 구현
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "네, 강남역에서 홍대입구역까지 가는 방법을 안내해드릴게요!",
        isAI: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      subway: "지하철 노선을 알려주세요",
      bus: "버스 정보를 알려주세요", 
      car: "자차 경로를 알려주세요",
      restaurant: "근처 맛집을 추천해주세요",
    };
    
    const message = actionMessages[action];
    if (message) {
      handleSendMessage(message);
    }
  };

  const toggleMobileChat = () => {
    setIsMobileChatOpen(!isMobileChatOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* 메인 지도 영역 */}
      <main className="flex-1 relative">
        <MobileHeader onChatToggle={toggleMobileChat} />
        <MapContainer />
      </main>

      {/* AI 프롬프터 사이드바 - 데스크톱 */}
      <AISidebar
        messages={messages}
        onSendMessage={handleSendMessage}
        onQuickAction={handleQuickAction}
        isLoading={isLoading}
      />

      {/* 모바일용 하단 AI 채팅 */}
      <MobileChatPanel
        isOpen={isMobileChatOpen}
        onSendMessage={handleSendMessage}
        onClose={() => setIsMobileChatOpen(false)}
      />
    </div>
  );
}
