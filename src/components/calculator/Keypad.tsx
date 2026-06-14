import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Delete, Eraser } from 'lucide-react';

interface KeypadProps {
  onDigit: (digit: string) => void;
  onDecimal: () => void;
  onOperator: (op: string) => void;
  onClear: () => void;
  onClearEntry: () => void;
  onEquals: () => void;
}

export default function Keypad({
  onDigit,
  onDecimal,
  onOperator,
  onClear,
  onClearEntry,
  onEquals,
}: KeypadProps) {
  const buttons = [
    { label: 'CE', action: onClearEntry, type: 'utility' },
    { label: 'C', action: onClear, type: 'utility' },
    { label: '÷', action: () => onOperator('÷'), type: 'operator' },
    { label: '×', action: () => onOperator('×'), type: 'operator' },
    { label: '7', action: () => onDigit('7'), type: 'number' },
    { label: '8', action: () => onDigit('8'), type: 'number' },
    { label: '9', action: () => onDigit('9'), type: 'number' },
    { label: '-', action: () => onOperator('-'), type: 'operator' },
    { label: '4', action: () => onDigit('4'), type: 'number' },
    { label: '5', action: () => onDigit('5'), type: 'number' },
    { label: '6', action: () => onDigit('6'), type: 'number' },
    { label: '+', action: () => onOperator('+'), type: 'operator' },
    { label: '1', action: () => onDigit('1'), type: 'number' },
    { label: '2', action: () => onDigit('2'), type: 'number' },
    { label: '3', action: () => onDigit('3'), type: 'number' },
    { label: '=', action: onEquals, type: 'equals' },
    { label: '0', action: () => onDigit('0'), type: 'number', span: 2 },
    { label: '.', action: onDecimal, type: 'number' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((btn, index) => {
        const isEquals = btn.type === 'equals';
        const isOperator = btn.type === 'operator';
        const isUtility = btn.type === 'utility';
        
        return (
          <Button
            key={index}
            onClick={btn.action}
            className={cn(
              "h-16 text-lg font-semibold rounded-2xl transition-all active:scale-95 duration-100",
              btn.span === 2 ? "col-span-2" : "",
              isEquals ? "bg-accent text-accent-foreground hover:bg-accent/90 row-span-2 h-auto" : "",
              isOperator ? "bg-primary/10 text-primary hover:bg-primary/20" : "",
              isUtility ? "bg-muted text-muted-foreground hover:bg-muted/80" : "",
              btn.type === 'number' ? "bg-white border-2 border-border/50 text-foreground shadow-sm hover:border-primary/30" : ""
            )}
            variant={isEquals ? "default" : "ghost"}
          >
            {btn.label === 'C' ? <Eraser className="w-5 h-5" /> : 
             btn.label === 'CE' ? <Delete className="w-5 h-5" /> : 
             btn.label}
          </Button>
        );
      })}
    </div>
  );
}
