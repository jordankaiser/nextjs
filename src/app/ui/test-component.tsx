'use client';

import React, { useState } from 'react';

const TestComponent: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number | null>(null);

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
