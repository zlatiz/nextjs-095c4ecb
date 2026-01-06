"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, href, onClick, className }: ButtonProps): JSX.Element {
  const base = "cta-yellow";
  if (href) {
    return (
      <a href={href} className={`${base} ${className ?? ''}`} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`${base} ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
