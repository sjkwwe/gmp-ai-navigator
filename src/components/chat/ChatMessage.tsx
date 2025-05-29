interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp?: string;
}

export default function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  if (isAI) {
    return (
      <div className="bg-blue-50 p-3 rounded-lg">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
            AI
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-800">{message}</p>
            {timestamp && (
              <p className="text-xs text-blue-500 mt-1">{timestamp}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="flex items-start gap-2 justify-end">
        <div className="flex-1 text-right">
          <p className="text-sm text-gray-600">{message}</p>
          {timestamp && (
            <p className="text-xs text-gray-400 mt-1">{timestamp}</p>
          )}
        </div>
        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs">
          나
        </div>
      </div>
    </div>
  );
} 