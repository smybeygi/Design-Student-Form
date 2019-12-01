import React from 'react';
import  Student from './student/student';
//import Button from '../../UI/button/button';
const Students=(props)=>{
    return(
        props.studentsList.map((student,index)=>
            <Student 
                key={index}
                id={student.id}
                name={student.name}
                classNumber={student.classNumber}
                phoneNumber={student.phoneNumber}
                email={student.email}
                nameChange={(event)=>props.nameChanged(event,student.id)}
                classNumberChange={(event)=>props.classNumberChanged(event,student.id)}
                phoneNumberChange={(event)=>props.phoneNumberChanged(event,student.id)}
                emailChange={(event)=>props.emailChanged(event,student.id)}
                delete={props.deleted}
                
            />
        )
    )
}
export default Students;