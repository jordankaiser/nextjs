'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        // jsonplaceholder uses json-server which is where the _limit query parameter comes from.
        // https://jsonplaceholder.typicode.com/guide/
        // https://github.com/typicode/json-server
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
        const jsonData = await response.json();
        if (!ignore) {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  // Moved list rendering directly to the Page return value.
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}