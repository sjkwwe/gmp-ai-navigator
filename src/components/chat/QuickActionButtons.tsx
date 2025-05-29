import { QuickAction } from "@/types/chat";

interface QuickActionButtonsProps {
  onActionClick: (action: string) => void;
}

const quickActions: QuickAction[] = [
  { emoji: "🚇", label: "지하철", action: "subway" },
  { emoji: "🚌", label: "버스", action: "bus" },
  { emoji: "🚗", label: "자차", action: "car" },
  { emoji: "🍽️", label: "맛집", action: "restaurant" },
];

export default function QuickActionButtons({ onActionClick }: QuickActionButtonsProps) {
  return (
    <div className="pt-2">
      <p className="text-xs text-gray-500 mb-2">빠른 질문:</p>
      <div className="flex flex-wrap gap-1">
        {quickActions.map((action) => (
          <button
            key={action.action}
            onClick={() => onActionClick(action.action)}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200 transition-colors"
          >
            {action.emoji} {action.label}
          </button>
        ))}
      </div>
    </div>
  );
} 