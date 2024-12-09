'use client';

import React, { useState, useEffect } from 'react';

interface TestComponentProps {
  initialNum1?: number;
  initialNum2?: number;
}

const TestComponent: React.FC<TestComponentProps> = ({ initialNum1 = 0, initialNum2 = 0 }) => {
  const [num1, setNum1] = useState<number>(initialNum1);
  const [num2, setNum2] = useState<number>(initialNum2);
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
    setSum(initialNum1 + initialNum2);
  }, [initialNum1, initialNum2]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSum(num1 + num2);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
        <button type="submit">Calculate Sum</button>
      </form>
      {sum !== null && <div>Sum: {sum}</div>}
    </div>
  );
};

export default TestComponent;
