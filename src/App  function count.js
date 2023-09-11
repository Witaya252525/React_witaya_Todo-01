import { useState } from "react";
function App() {
  let count = 0;
  // เก็บข้อมูลของ component
  function addCount() {
      count+=1;
      console.log(count)


  }
//  const [count, setCount] = useState(0);

  return (
    <>

      <h1> {count} </h1>
      <botton onClick={addCount}>เพิ่มค่า</botton>



      {/* <botton onClick={() => setCount(count + 1)}>เพิ่มค่า</botton>
      <botton onClick={() => setCount(count - 1)}>ลดค่า</botton>
      <botton onClick={() => setCount(0)}>Reset</botton> */}

    </>
  );
}

export default App;
