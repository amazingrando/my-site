interface PinProps {
  lineColor?: string;
  className?: string;
}

export default function Pin({ lineColor = "black", className = "" }: PinProps) {
  return (
    <svg 
      width="13" 
      height="32" 
      viewBox="0 0 13 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line 
        x1="6.5" 
        y1="7" 
        x2="6.5" 
        y2="32" 
        stroke={lineColor}
      />
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="6.5" 
        fill="currentColor"
      />
    </svg>
  );
} 