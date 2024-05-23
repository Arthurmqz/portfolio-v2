import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ScenarioComponent = () => {
  const scenarioRef = useRef<HTMLImageElement>(null);

  return (
    <div className={cn("fixed top-0 w-2/5")}>
      <Image
        ref={scenarioRef}
        className={cn()}
        src={`/progressBar_chapter1.png`}
        width={400}
        height={24}
        alt="Scenario"
      />
    </div>
  );
};

export default ScenarioComponent;
