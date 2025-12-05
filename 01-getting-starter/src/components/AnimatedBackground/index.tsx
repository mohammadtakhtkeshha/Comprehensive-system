import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ParticleProps {
  delay: number;
  duration: number;
  left: number;
  size: number;
}

const Particle: React.FC<ParticleProps> = ({ delay, duration, left, size }) => {
  const animation = useSpring({
    from: { 
      transform: 'translateY(100vh) translateX(0px)',
      opacity: 0 
    },
    to: { 
      transform: 'translateY(-100vh) translateX(20px)',
      opacity: [0, 1, 1, 0]
    },
    config: { 
      duration,
      tension: 50,
      friction: 50
    },
    delay,
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...animation,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="absolute bg-white/20 rounded-full blur-sm"
    />
  );
};

export default function AnimatedBackground() {
  const particles = React.useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      delay: i * 300,
      duration: 8000 + Math.random() * 4000,
      left: Math.random() * 100,
      size: 4 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  );
}

