import React from 'react';

interface DisplayProps {
  value: string;
  expression: string;
}

export default function Display({ value, expression }: DisplayProps) {
  return (
    <div className="bg-secondary/50 rounded-2xl p-6 text-right flex flex-col justify-end min-h-[140px] gap-2">
      <div className="text-muted-foreground text-sm font-medium tracking-tight overflow-hidden text-ellipsis whitespace-nowrap min-h-[1.25rem]">
        {expression}
      </div>
      <div className="text-5xl font-bold text-foreground tabular-nums overflow-hidden text-ellipsis whitespace-nowrap">
        {value}
      </div>
    </div>
  );
}
