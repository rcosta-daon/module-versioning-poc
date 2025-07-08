import { utils } from '@module-versioning-poc/utils';
import { useState } from 'react';

export function Introduction() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Introduction</p>
      <p>{utils()}</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  );
}

export default Introduction;
