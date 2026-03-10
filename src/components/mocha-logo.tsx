export function MochaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Coffee bean / abstract "M" mark */}
      <path
        d="M16 2L6 8.5V23.5L16 30L26 23.5V8.5L16 2Z"
        fill="url(#mocha-gradient)"
      />
      <path
        d="M11 13.5C11 13.5 13 17 16 17C19 17 21 13.5 21 13.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 18.5C11 18.5 13 22 16 22C19 22 21 18.5 21 18.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="mocha-gradient" x1="6" y1="2" x2="26" y2="30">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
