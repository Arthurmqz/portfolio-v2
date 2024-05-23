'use client';

import React, { useState, useEffect } from 'react';
import ExampleComponent from '@/components/Exemple';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ProgressBar';

const HomePage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Provider store={store}>
        <Progress value={progress} />
      <div className={cn("container mx-auto")}>
        <h1 className={cn("text-3xl font-bold underline")}>Hello, Next.js!</h1>
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
      </div>
    </Provider>
  );
};

export default HomePage;
