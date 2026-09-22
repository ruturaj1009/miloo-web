import React from 'react';

interface VerifiedBadgeProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function VerifiedBadge({ size = 22, className, style }: VerifiedBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{
        flexShrink: 0,
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 2px 6px rgba(56, 189, 248, 0.4))',
        ...style,
      }}
      aria-label="Verified Profile"
    >
      {/* Blue scalloped rounded star badge */}
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        fill="#38BDF8"
      />
      {/* High-contrast crisp white checkmark */}
      <path
        d="m8.8 12.2 2.2 2.2 4.6-4.6"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
