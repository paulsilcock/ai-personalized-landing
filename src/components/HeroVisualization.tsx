import React from 'react';

const HeroVisualization: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 450"
        className="absolute inset-0"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.7" />
          </linearGradient>
          
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background flowing shapes */}
        <path
          d="M0,300 Q200,200 400,250 T800,300 L800,450 L0,450 Z"
          fill="url(#purpleBlueGradient)"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        
        {/* Network nodes representing different data points */}
        <g className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Central AI node */}
          <circle cx="400" cy="200" r="12" fill="url(#nodeGradient)" filter="url(#glow)" />
          <text x="400" y="175" textAnchor="middle" className="text-xs font-medium" fill="hsl(var(--craftera-purple))">
            AI Engine
          </text>
          
          {/* User data nodes */}
          <circle cx="200" cy="150" r="8" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="200" y="135" textAnchor="middle" className="text-xs" fill="hsl(var(--craftera-blue))">
            User Data
          </text>
          
          <circle cx="600" cy="180" r="8" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="600" y="165" textAnchor="middle" className="text-xs" fill="hsl(var(--craftera-blue))">
            Behavior
          </text>
          
          <circle cx="300" cy="100" r="6" fill="url(#nodeGradient)" opacity="0.6" />
          <text x="300" y="90" textAnchor="middle" className="text-xs" fill="hsl(var(--craftera-purple))">
            Context
          </text>
          
          <circle cx="500" cy="120" r="6" fill="url(#nodeGradient)" opacity="0.6" />
          <text x="500" y="110" textAnchor="middle" className="text-xs" fill="hsl(var(--craftera-purple))">
            Intent
          </text>
          
          {/* Output nodes */}
          <circle cx="150" cy="280" r="10" fill="url(#nodeGradient)" opacity="0.9" />
          <text x="150" y="300" textAnchor="middle" className="text-xs font-medium" fill="hsl(var(--craftera-blue))">
            Content
          </text>
          
          <circle cx="400" cy="320" r="10" fill="url(#nodeGradient)" opacity="0.9" />
          <text x="400" y="340" textAnchor="middle" className="text-xs font-medium" fill="hsl(var(--craftera-blue))">
            Messaging
          </text>
          
          <circle cx="650" cy="300" r="10" fill="url(#nodeGradient)" opacity="0.9" />
          <text x="650" y="320" textAnchor="middle" className="text-xs font-medium" fill="hsl(var(--craftera-blue))">
            CTAs
          </text>
        </g>

        {/* Connecting lines showing data flow */}
        <g className="animate-fade-in" style={{ animationDelay: '1s' }}>
          {/* Input connections */}
          <line x1="200" y1="150" x2="400" y2="200" stroke="url(#edgeGradient)" strokeWidth="2" opacity="0.7" />
          <line x1="600" y1="180" x2="400" y2="200" stroke="url(#edgeGradient)" strokeWidth="2" opacity="0.7" />
          <line x1="300" y1="100" x2="400" y2="200" stroke="url(#edgeGradient)" strokeWidth="1.5" opacity="0.5" />
          <line x1="500" y1="120" x2="400" y2="200" stroke="url(#edgeGradient)" strokeWidth="1.5" opacity="0.5" />
          
          {/* Output connections */}
          <line x1="400" y1="200" x2="150" y2="280" stroke="url(#edgeGradient)" strokeWidth="2" opacity="0.8" />
          <line x1="400" y1="200" x2="400" y2="320" stroke="url(#edgeGradient)" strokeWidth="2" opacity="0.8" />
          <line x1="400" y1="200" x2="650" y2="300" stroke="url(#edgeGradient)" strokeWidth="2" opacity="0.8" />
        </g>

        {/* Floating data particles */}
        <g className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <circle cx="250" cy="180" r="2" fill="hsl(var(--craftera-purple))" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 20,-10; 0,0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="550" cy="160" r="2" fill="hsl(var(--craftera-blue))" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -15,15; 0,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="350" cy="140" r="1.5" fill="hsl(var(--craftera-purple))" opacity="0.4">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,20; 0,0"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Subtle grid pattern in background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--craftera-blue))" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default HeroVisualization;