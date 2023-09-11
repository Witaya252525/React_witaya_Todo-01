import { useState } from "react";
function App() {
  // เก็บข้อมูลของ component
  const [count,setCount] = useState(0);

  // function addCount() {
  //  console.log(count) 
  //  addCount(count+1)
  // }

  // function subtractCount() {
  //  console.log(count) 
  //  subtractCount(count-1)

  // }

  // function resetCount() {
  //  console.log(count) 
  //  reset(0)

  // }

  return (
    <>
      <h1> {count} </h1>
      <botton onClick={() => setCount(count+1)}>เพิ่มค่า</botton>
      <botton onClick={() => setCount(count-1)}>ลดค่า</botton>
      <botton onClick={() => setCount(0)}>Reset</botton>
    </>
  );
}

export default App;
