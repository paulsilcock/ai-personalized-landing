import React from 'react';

const HeroVisualization = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <defs>
          {/* Gradient for strings */}
          <linearGradient id="stringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#818cf8', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.4 }} />
          </linearGradient>
          
          <linearGradient id="stringGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c084fc', stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: '#a78bfa', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 0.3 }} />
          </linearGradient>
          
          <linearGradient id="stringGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>

        {/* Flowing string waves */}
        {/* String 1 */}
        <path
          d="M-100,200 Q300,250 600,200 T1200,250"
          stroke="url(#stringGradient1)"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            values="M-100,200 Q300,250 600,200 T1200,250;
                    M-100,250 Q300,200 600,250 T1200,200;
                    M-100,200 Q300,250 600,200 T1200,250"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 2 */}
        <path
          d="M-100,300 Q350,350 700,300 T1200,350"
          stroke="url(#stringGradient2)"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            values="M-100,300 Q350,350 700,300 T1200,350;
                    M-100,350 Q350,300 700,350 T1200,300;
                    M-100,300 Q350,350 700,300 T1200,350"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 3 */}
        <path
          d="M-100,400 Q400,500 800,400 T1200,500"
          stroke="url(#stringGradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M-100,400 Q400,500 800,400 T1200,500;
                    M-100,450 Q400,400 800,450 T1200,400;
                    M-100,400 Q400,500 800,400 T1200,500"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 4 - diagonal */}
        <path
          d="M-100,600 Q300,400 600,300 T1200,100"
          stroke="url(#stringGradient3)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            values="M-100,600 Q300,400 600,300 T1200,100;
                    M-100,550 Q300,450 600,350 T1200,150;
                    M-100,600 Q300,400 600,300 T1200,100"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 5 */}
        <path
          d="M-100,100 Q250,150 500,100 T1200,150"
          stroke="url(#stringGradient2)"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M-100,100 Q250,150 500,100 T1200,150;
                    M-100,150 Q250,100 500,150 T1200,100;
                    M-100,100 Q250,150 500,100 T1200,150"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 6 - another diagonal */}
        <path
          d="M-100,50 Q400,250 700,450 T1200,650"
          stroke="url(#stringGradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="M-100,50 Q400,250 700,450 T1200,650;
                    M-100,100 Q400,300 700,500 T1200,700;
                    M-100,50 Q400,250 700,450 T1200,650"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 7 */}
        <path
          d="M-100,500 Q300,550 600,500 T1200,550"
          stroke="url(#stringGradient3)"
          strokeWidth="3.5"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            values="M-100,500 Q300,550 600,500 T1200,550;
                    M-100,550 Q300,500 600,550 T1200,500;
                    M-100,500 Q300,550 600,500 T1200,550"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* String 8 - crossing wave */}
        <path
          d="M-100,700 Q500,500 900,300 T1200,200"
          stroke="url(#stringGradient2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="M-100,700 Q500,500 900,300 T1200,200;
                    M-100,650 Q500,450 900,250 T1200,150;
                    M-100,700 Q500,500 900,300 T1200,200"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>

        {/* Additional thin strings for detail */}
        <path
          d="M-100,350 Q400,380 800,350 T1200,380"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
        >
          <animate
            attributeName="d"
            values="M-100,350 Q400,380 800,350 T1200,380;
                    M-100,380 Q400,350 800,380 T1200,350;
                    M-100,350 Q400,380 800,350 T1200,380"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M-100,250 Q350,280 700,250 T1200,280"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
        >
          <animate
            attributeName="d"
            values="M-100,250 Q350,280 700,250 T1200,280;
                    M-100,280 Q350,250 700,280 T1200,250;
                    M-100,250 Q350,280 700,250 T1200,280"
            dur="5.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Glowing dots moving along paths */}
        <circle r="4" fill="rgba(255,255,255,0.8)">
          <animateMotion
            path="M-100,200 Q300,250 600,200 T1200,250"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" fill="rgba(168,85,247,0.9)">
          <animateMotion
            path="M-100,400 Q400,500 800,400 T1200,500"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default HeroVisualization;