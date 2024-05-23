'use client';


import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { cn } from '@/lib/utils';

const ExampleComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const exampleState = useAppSelector((state) => state.example);

  return (
    <div className={cn("p-4 bg-blue-200 text-white")}>
      <h1 className="text-xl">Example Component</h1>
      <p>State: {exampleState}</p>
      <button
        className={cn("mt-2 p-2 bg-green-500 rounded")}
        onClick={() => dispatch({ type: 'example/update', payload: 'New State' })}
      >
        Update State
      </button>
    </div>
  );
};

export default ExampleComponent;
