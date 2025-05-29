export interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

export interface QuickAction {
  emoji: string;
  label: string;
  action: string;
}

export type ChatState = "idle" | "loading" | "error"; 