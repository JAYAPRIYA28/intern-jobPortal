import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faSearch} className="icon" />

function  UpdatePage (){
var [studentdetails, setstudentdetails] = useState([]);

   const fetchData = async () =>{
     try{
       const get = await fetch('http://localhost:3001/api/StudentDetail')
      const getValue = await get.json();
      setstudentdetails(getValue.data.name);
      console.log(getValue.data.name);
     }catch(err){
       console.log(err.message);
     }
   };
useEffect(()=>{
   fetchData();
  },[])


 return (
   <div >
   <input type="text" placeholder="   Search.." className="w-2/3 h-8 mt-10 ml-10" name="search2"></input>
  <button className="bg-white w-10 h-10 ml-4"> {element} </button>
{studentdetails.map(studentdetails=>


     <div className="container ">
      <table className="table table-borderless  ml-10">
      <thead>
       <tr>
         <th>SKILLS:{studentdetails.skills}</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>ID:{studentdetails.id}</td>
         <td>DEGREE:{studentdetails.degree}</td>

       </tr>
       <tr>
         <td >NAME:{studentdetails.username}</td>
         <td>LANGUAGE KNOWN:{studentdetails.language_known}</td>

       </tr>
       <tr>
       <td >EMAIL:{studentdetails.email}</td>
       <td>CONTACT:{studentdetails.mobile_no}</td>

       </tr>
       <tr>
       <td >RESUME:{studentdetails.resume.type}</td>

       </tr>
         <br/>
      </tbody>

      </table>
      <br />
      
      </div>
     
      
     

)}
     
  </div>

);
}

export default UpdatePage;
