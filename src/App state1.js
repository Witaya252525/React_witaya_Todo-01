import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> {count} </h1>
      <botton onClick={() => setCount(count + 1)}>เพิ่มค่า</botton>
      <botton onClick={() => setCount(count - 1)}>ลดค่า</botton>
      <botton onClick={() => setCount(0)}>Reset</botton>
    </>
  );
}

export default App;
