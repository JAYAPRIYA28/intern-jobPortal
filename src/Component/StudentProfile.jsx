import React,{useEffect, useState} from "react";
import {withRouter,useParams,Link} from "react-router-dom";
// import {useParams} from "react-router";




function StudentProfile(){
const data = useParams();
  console.log(data.email);
 var [studentdetails, setstudentdetails] = useState([]);
 useEffect(()=>{
   const fetchData = async () =>{
     try{
       const get = await fetch(`http://localhost:3001/api/StudentDetail/${data.email}`);
      const getValue = await get.json();
      setstudentdetails(getValue.data.name);
      console.log(getValue.data.name);
     }catch(err){
       console.log(err.message);
     }
   };

   fetchData();
  },[])



  return(
    <div >
  {/* {studentdetails.id} */}
  {/* {studentdetails.username}
  {studentdetails.email}
  {studentdetails.mobile_no}
  {studentdetails.degree}
  {studentdetails.language_known}
  {studentdetails.skills} */}
  <h1 className=" text-4xl font-bold pt-10 ml-96 text-blue-900  ">MYPROFILE</h1>
   <div className=" containerStyle max-width: 768px">
   <table className="table table-borderless mt-10 ml-10">
      <thead>
       <tr>
         <th>NAME:
         <div className="box ml-16">{studentdetails.username}</div></th>
       </tr>
      </thead>
      
      <tbody>
       <tr>
         <td>
         ID:<div className="box ml-16">{studentdetails.id}</div></td>
         <td>
        DEGREE:<div className="box ml-16">{studentdetails.degree}</div></td>

       </tr>
     
       <tr>
         <td >
         SKILLS:<div className="box ml-16">{studentdetails.skills}</div></td>
         <td>
         LANGUAGE KNOWN:<div className="box ml-16">{studentdetails.language_known}</div></td>
         
       </tr>
      
       <tr>
       <td >EMAIL:
       <div className="box ml-16">{studentdetails.email}</div></td>
       <td>CONTACT:
       <div className="box ml-16">{studentdetails.mobile_no}</div></td>
       
       </tr>
      
       <tr>
       <td >RESUME:</td>
       
       </tr>
         <br/>
        
         
      </tbody>

      </table>
      <Link to={`/StudentProfile/${studentdetails.email}/Edit`}>
        <button className="button btn-success  ml-10 h-10">EDIT</button>
      </Link>  
      <button className=" button btn-success  mr-10 h-10">SAVE</button>
       
   </div>
  
   </div>
  )
}

export default withRouter(StudentProfile);
