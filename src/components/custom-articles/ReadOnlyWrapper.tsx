"use client"; // ఇది క్లయింట్ కాంపోనెంట్ అని Next.js కి చెప్తుంది

import React from 'react';

export default function ReadOnlyWrapper({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`select-none ${className}`}
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}