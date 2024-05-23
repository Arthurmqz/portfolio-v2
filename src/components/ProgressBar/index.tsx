import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import KnightComponent from "../Sprite";
import ScenarioComponent from "../Scenario";


interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => {
  const backgroundImageUrl = '/progressBar_chapter1.png';

  return (
    <div className={cn("relative w-full flex justify-center h-4")}>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 mt-8 h-2 w-2/5 overflow-hidden rounded-full bg-slate-100 z-40",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full bg-red-700 transition-all"
          style={{ width: `${value}%` }}
        />
      </ProgressPrimitive.Root>
      <KnightComponent progress={value} />

    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
