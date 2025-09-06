import { cn } from "@/lib/utils"

interface ChessIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function ChessIcon({ className }: ChessIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      {/* Chess King Crown */}
      <path d="M8 2L12 6L16 2" />
      <path d="M6 4L18 4" />
      <path d="M7 8L17 8" />
      <path d="M8 12L16 12" />
      <path d="M6 16L18 16" />
      <path d="M5 20L19 20" />
      {/* Chess piece body */}
      <path d="M9 8L9 12" />
      <path d="M15 8L15 12" />
      <path d="M12 8L12 12" />
    </svg>
  )
}
