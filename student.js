import React from 'react';
import  './students.css';
//import Button from '../../UI/button/button';
const Student=(props)=>{
    return(
        <div className="students">
            <label>شماره دانش آموزی :{props.id}</label>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={props.name} onChange={props.nameChange}/>

            <label>کلاس</label>
            <input type="text"  value={props.classNumber} onChange={props.classNumberChange}/>

            <label>تلفن</label>
            <input type="number" value={props.phoneNumber} onChange={props.phoneNumberChange}/>

            <label>ایمیل</label>
            <input type="email" value={props.email} onChange={props.emailChange}/>
            <label style={{color:'red'}} onClick={props.delete}>
                حذف
            </label>

            
        </div>
    )
}
export default Student;