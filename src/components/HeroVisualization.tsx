import React from 'react';

const HeroVisualization = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#FDFEFF' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="purpleBlue1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: '#7c3aed', stopOpacity: 0.9 }} />
            <stop offset="60%" style={{ stopColor: '#6366f1', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.7 }} />
          </linearGradient>
          
          <linearGradient id="purpleBlue2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.6 }} />
          </linearGradient>
          
          <linearGradient id="purpleBlue3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#c084fc', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#a78bfa', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>

        {/* Main thick wave 1 */}
        <path
          d="M-200,900 Q200,600 600,400 T1400,-100"
          stroke="url(#purpleBlue1)"
          strokeWidth="80"
          fill="none"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            values="M-200,900 Q200,600 600,400 T1400,-100;M-200,900 Q250,650 600,450 T1400,-100;M-200,900 Q200,600 600,400 T1400,-100"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Main thick wave 2 */}
        <path
          d="M-300,850 Q300,550 700,350 T1300,-50"
          stroke="url(#purpleBlue2)"
          strokeWidth="60"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="M-300,850 Q300,550 700,350 T1300,-50;M-300,850 Q350,500 700,300 T1300,-50;M-300,850 Q300,550 700,350 T1300,-50"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Medium wave 3 */}
        <path
          d="M-100,950 Q400,650 800,450 T1500,0"
          stroke="url(#purpleBlue3)"
          strokeWidth="40"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            values="M-100,950 Q400,650 800,450 T1500,0;M-100,950 Q450,700 800,500 T1500,0;M-100,950 Q400,650 800,450 T1500,0"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>

        {/* Flowing string 4 */}
        <path
          d="M-400,800 Q100,500 500,300 T1200,-200"
          stroke="url(#purpleBlue1)"
          strokeWidth="25"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M-400,800 Q100,500 500,300 T1200,-200;M-400,800 Q150,550 500,350 T1200,-200;M-400,800 Q100,500 500,300 T1200,-200"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Flowing string 5 */}
        <path
          d="M-50,1000 Q500,700 900,500 T1600,100"
          stroke="url(#purpleBlue2)"
          strokeWidth="35"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            values="M-50,1000 Q500,700 900,500 T1600,100;M-50,1000 Q550,650 900,450 T1600,100;M-50,1000 Q500,700 900,500 T1600,100"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>

        {/* Thin accent string 6 */}
        <path
          d="M-150,750 Q250,450 650,250 T1350,-150"
          stroke="url(#purpleBlue3)"
          strokeWidth="15"
          fill="none"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            values="M-150,750 Q250,450 650,250 T1350,-150;M-150,750 Q300,500 650,300 T1350,-150;M-150,750 Q250,450 650,250 T1350,-150"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* Thin accent string 7 */}
        <path
          d="M-250,700 Q350,400 750,200 T1450,-100"
          stroke="url(#purpleBlue1)"
          strokeWidth="10"
          fill="none"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            values="M-250,700 Q350,400 750,200 T1450,-100;M-250,700 Q400,350 750,150 T1450,-100;M-250,700 Q350,400 750,200 T1450,-100"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Very thin detail string 8 */}
        <path
          d="M0,800 Q400,500 800,300 T1400,0"
          stroke="url(#purpleBlue2)"
          strokeWidth="5"
          fill="none"
          opacity="0.9"
        >
          <animate
            attributeName="d"
            values="M0,800 Q400,500 800,300 T1400,0;M0,800 Q450,550 800,350 T1400,0;M0,800 Q400,500 800,300 T1400,0"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Additional thin strings for texture */}
        <path
          d="M-500,600 Q0,300 400,100 T1100,-300"
          stroke="url(#purpleBlue3)"
          strokeWidth="8"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M-500,600 Q0,300 400,100 T1100,-300;M-500,600 Q50,350 400,150 T1100,-300;M-500,600 Q0,300 400,100 T1100,-300"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        {/* Glowing dots traveling along the diagonal paths */}
        <circle r="8" fill="rgba(147,51,234,0.9)">
          <animateMotion
            path="M-200,900 Q200,600 600,400 T1400,-100"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="6" fill="rgba(99,102,241,0.9)">
          <animateMotion
            path="M-100,950 Q400,650 800,450 T1500,0"
            dur="15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="5" fill="rgba(59,130,246,0.9)">
          <animateMotion
            path="M-250,700 Q350,400 750,200 T1450,-100"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default HeroVisualization;