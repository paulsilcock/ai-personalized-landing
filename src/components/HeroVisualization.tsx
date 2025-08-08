import React from 'react';

const HeroVisualization: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 450"
        className="absolute inset-0"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="waveGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--craftera-purple))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--craftera-blue))" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Animated wave layers */}
        <g>
          {/* First wave layer */}
          <path
            d="M0,350 Q200,200 400,300 T800,250 L800,450 L0,450 Z"
            fill="url(#waveGradient1)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,-20; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Second wave layer */}
          <path
            d="M0,300 Q150,150 350,250 T800,200 L800,450 L0,450 Z"
            fill="url(#waveGradient2)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -30,15; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Third wave layer */}
          <path
            d="M0,280 Q250,100 500,220 T800,180 L800,450 L0,450 Z"
            fill="url(#waveGradient3)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,25; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Floating gradient orbs */}
        <g>
          <circle cx="200" cy="150" r="40" fill="url(#waveGradient1)" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 20,-10; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="600" cy="200" r="60" fill="url(#waveGradient2)" opacity="0.4">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -25,15; 0,0"
              dur="14s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="400" cy="100" r="30" fill="url(#waveGradient3)" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 15,20; 0,0"
              dur="11s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Subtle flowing lines */}
        <g opacity="0.3">
          <path
            d="M0,100 Q200,50 400,120 T800,80"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000; 100,900; 0,1000"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,180 Q300,130 600,200 T800,160"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="100,900; 0,1000; 100,900"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default HeroVisualization;