"use client";

import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { Card } from '@/components/ui/card';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondValue) {
      setDisplayValue(digit);
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondValue) {
      setDisplayValue('0.');
      setWaitingForSecondValue(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearAll = () => {
    setDisplayValue('0');
    setExpression('');
    setOperator(null);
    setFirstValue(null);
    setWaitingForSecondValue(false);
  };

  const clearEntry = () => {
    setDisplayValue('0');
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
      setExpression(`${inputValue} ${nextOperator}`);
    } else if (operator) {
      const result = performCalculation();
      setFirstValue(result);
      setDisplayValue(String(result));
      setExpression(`${result} ${nextOperator}`);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);
    if (firstValue === null || operator === null) return inputValue;

    let result = 0;
    switch (operator) {
      case '+':
        result = firstValue + inputValue;
        break;
      case '-':
        result = firstValue - inputValue;
        break;
      case '×':
        result = firstValue * inputValue;
        break;
      case '÷':
        result = firstValue / inputValue;
        break;
      default:
        result = inputValue;
    }
    
    // Fix floating point precision
    return Math.round(result * 100000000) / 100000000;
  };

  const handleEquals = () => {
    if (firstValue === null || operator === null) return;

    const result = performCalculation();
    setExpression(`${expression} ${displayValue} =`);
    setDisplayValue(String(result));
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(true);
  };

  return (
    <Card className="p-6 bg-white border-2 border-border shadow-2xl overflow-hidden rounded-[2rem]">
      <div className="flex flex-col gap-6">
        <Display value={displayValue} expression={expression} />
        <Keypad 
          onDigit={inputDigit}
          onDecimal={inputDecimal}
          onOperator={handleOperator}
          onClear={clearAll}
          onClearEntry={clearEntry}
          onEquals={handleEquals}
        />
      </div>
    </Card>
  );
}
