


import { useState } from "react";
function App() {

  // Arrey stste  เก็บข้อมูลมากกว่า 1 ค่า
  const [students,setStudent] = useState([
    
    { id:1 , name:"ก้อง" },
    { id:2 , name:"วิทยา" },
    { id:3 , name:" Chaison" },
    { id:4 , name:" Seagate" },
    { id:5 , name:" The First" },
    
    
  ]);
  
  const [show,setShow] = useState(true)
  
     

  



  function deleteStudent(id) {
    setStudent(students.filter(items=>items.id   !==id))
    
    }


  return (
    <>
      
     <h1> จำนวนนักเรียน = {students.length} </h1>   
     <botton onClick= {()=>setShow(!show)}>เปลียน </botton>

     <ul>
           { show && students.map((items)=>(

             <li key={items.id}> 
             <p> {items.id} - {items.name}  </p>
             <button onClick={()=> deleteStudent(items.id)}>ลบ</button>
              </li>
          ))}
      </ul>  
    </>
  );
}

export default App;
