export function StripeLogo({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontWeight: 700,
        fontSize: "22px",
        letterSpacing: "-0.5px",
        color: "#635bff",
        userSelect: "none",
      }}
    >
      stripe
    </span>
  );
}
