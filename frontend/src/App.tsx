import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return <h1 onClick={() => setCount(count + 1)}>Hello world! {count}</h1>;
};

export default App;
