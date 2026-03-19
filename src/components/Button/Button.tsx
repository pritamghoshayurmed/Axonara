import React, { useRef } from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'dark';
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ArrowIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
  href,
  size = 'md',
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const className = `zyforia-btn zyforia-btn--${variant} zyforia-btn--${size}`;

  const content = (
    <>
      <span className="btn-label">{label}</span>
      <span className="btn-arrow-wrap">
        <span className="btn-arrow-inner">
          <ArrowIcon />
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        ref={btnRef as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      ref={btnRef as React.Ref<HTMLButtonElement>}
    >
      {content}
    </button>
  );
};

export default Button;
