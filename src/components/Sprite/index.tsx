import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ScenarioComponent from '../Scenario';

interface KnightComponentProps {
  progress: number;
}
const KnightComponent: React.FC<KnightComponentProps> = ({ progress }) => {
  const [scrollDirection, setScrollDirection] = useState('idle');
  const knightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const knightElement = knightRef.current;
      if (knightElement) {
        const currentPosition = window.scrollY;
        const lastPosition = parseFloat(knightElement.dataset.lastPosition || '0');

        if (currentPosition > lastPosition) {
          setScrollDirection('right');
        } else if (currentPosition < lastPosition) {
          setScrollDirection('left');
        }

        knightElement.dataset.lastPosition = currentPosition.toString();

        setTimeout(() => {
          setScrollDirection('idle');
        }, 2500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn("fixed top-0 w-2/5")} style={{ transform: `translateX(${progress * 0.98}%` }}>
      <Image
        ref={knightRef}
        className={cn(`knight ${scrollDirection}`)}
        src={`/knight_${scrollDirection}.gif`}
        width={24}
        height={24}
        alt="Knight"
        property='unoptimized'
      />
    </div>
  );
};

export default KnightComponent;
