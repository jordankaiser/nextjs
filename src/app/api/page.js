'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      // jsonplaceholder uses json-server which is where the _limit query parameter comes from.
      // https://jsonplaceholder.typicode.com/guide/
      // https://github.com/typicode/json-server
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
      const data = await response.json();
      if (!ignore) setData(data);
      console.log(data);
    }

    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }

    return () => {
      ignore = true;
    };
  }, []);

  function AsyncListData() {
    return (
      <div>
        <ul>
          {data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    );
  }
  return (
    <>
      <div>
        <h1>test api</h1>
        <AsyncListData />
      </div>
    </>
  );
}
