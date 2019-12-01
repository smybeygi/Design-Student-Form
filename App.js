import React,{useState} from 'react';
import Students from './components/students/students';
import './App.css';

const App=()=> {

  const[studentsState,setStudents]=useState([
    {id:0,name:"Mahdi",classNumber:204,phoneNumber:1234,email:"reactapp.ir@gmail.com"},
      {id:1,name:"Ali",classNumber:205,phoneNumber:12345,email:"reactapp.ir@gmail.com"},
      {id:2,name:"Amir",classNumber:206,phoneNumber:123456,email:"reactapp.ir@gmail.com"},
      {id:3,name:"Melody",classNumber:207,phoneNumber:1234567,email:"reactapp.ir@gmail.com"}
  ]);

  const nameChangedHandler=(event,id)=>{
    const studentIndex=studentsState.findIndex(student=>{
      return student.id===id;
    })
    //console.log(studentIndex)

    const student={...studentsState[studentIndex]};
    console.log(student)
    student.name=event.target.value;
    const students=[...studentsState];
    students[studentIndex]=student;
    setStudents(students)

  }

  const classNumberChangedHandler=(event,id)=>{
    const studentIndex=studentsState.findIndex(student=>{
      return student.id===id
     } )

      const student={...studentsState[studentIndex]};
      student.classNumber=event.target.value;
      const students=[...studentsState];
      students[studentIndex]=student;
      setStudents(students);
      console.log(student)

}

const phoneNumberChangedHandler=(event,id)=>{
  const studentIndex=studentsState.findIndex(student=>{
    return student.id===id
   } )

    const student={...studentsState[studentIndex]};
    student.phoneNumber=event.target.value;
    const students=[...studentsState];
    students[studentIndex]=student;
    setStudents(students);
    console.log(student)

}

const emailChangedHandler=(event,id)=>{
  const studentIndex=studentsState.findIndex(student=>{
    return student.id===id
   } )

    const student={...studentsState[studentIndex]};
    student.emaill=event.target.value;
    const students=[...studentsState];
    students[studentIndex]=student;
    setStudents(students);
    console.log(student)

}
const deleteHandler=(index)=>{
  const students=[...studentsState];
  students.splice(index,1);
  setStudents(students)

}

  return (
    <div className="App">
      <Students 
        studentsList={studentsState}
        nameChanged={nameChangedHandler}
        classNumberChanged={classNumberChangedHandler}
        phoneNumberChanged={phoneNumberChangedHandler}
        emailChanged={emailChangedHandler}
        deleted={deleteHandler}
      />



    </div>
  );
}

export default App;
