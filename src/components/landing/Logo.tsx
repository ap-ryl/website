interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 24, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 4L4 20H9L12 14L15 20H20L12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
