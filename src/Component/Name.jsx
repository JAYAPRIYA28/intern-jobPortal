import React,{useEffect, useState} from "react";
import {useParams,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const element = <FontAwesomeIcon icon={faEdit} className="icon" />


function Name(){

    const data = useParams();
    console.log(data.email);
   var [studentdetails, setstudentdetails] = useState([]);
   useEffect(()=>{
     const fetchData = async () =>{
       try{
          // eslint-disable-next-line react-hooks/exhaustive-deps
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

const [info, setInfo] = useState({
    userName:""
});

function handleOne(event){
    const{name, value} =event.target;

    setInfo(() =>{
        if(name=== "userName")
        {
            return{
                userName: value
            }
        }
    })
}

// console.log(info.userName);

const handleSubmit = async (event) => {
    // event.preventDefault()
    try{
      axios.put(`http://localhost:3001/api/StudentDetail/${data.email}`,{
        id: studentdetails.id,
        username : info.userName,
        email: studentdetails.email,
        mobile_no:studentdetails.mobile_no,
        degree:studentdetails.degree,
        language_known:studentdetails.language_known,
        skills: studentdetails.skills
      })
      .then(res=>{
        console.log(res);
      })
    
      
    }catch(err){
      console.log(err);
    }
  }

    return(
        <div>
        <h1 className=" text-4xl font-bold pt-10 ml-96 text-blue-900  ">MYPROFILE</h1>
   <div className=" containerStyle max-width: 768px">
   
    <div>
     <label className="ml-12 mt-2 font-bold">NAME:
     </label>
     
     <br/>
      <input className="ml-28 box" name="userName" value={info.userName}  placeholder={studentdetails.username} onChange={handleOne}></input><br/>
      
      
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div>
    <label className="ml-12 mt-2 ">ID:</label>
    <Link to={`/StudentProfile/${studentdetails.email}/Edit/Id`}>
    <button className="bg-white rounded-full w-10">{element}</button>
    </Link><br />
    <input className="ml-28 mb-2 box" value={studentdetails.id} ></input><br/>
    
    </div>
    <div>
        <label>DEGREE:</label>
        <Link to={`/StudentProfile/${studentdetails.email}/Edit/Degree`}>
        <button className="bg-white rounded-full w-10">{element}</button>
        </Link><br />
         <input className="ml-20 box" value={studentdetails.degree}></input><br/>
         
    </div>
    
    </div>

    <div className="grid grid-cols-2 gap-4">
    <div>
    
    <label className="ml-12 mt-2 ">SKILLS:</label>
    <Link to={`/StudentProfile/${studentdetails.email}/Edit/Skills`}>
    <button className="bg-white rounded-full w-10">{element}</button>
    </Link><br />
    <input className="ml-28 mb-2 box" value={studentdetails.skills} ></input><br/>
    

    </div>
    <div>
        
         <label>LANGUAGE KNOWN:</label>
         <Link to={`/StudentProfile/${studentdetails.email}/Edit/Language_known`}>
         <button className="bg-white rounded-full w-10">{element}</button>
         </Link><br />
         <input className="ml-20 box" value={studentdetails.language_known}></input><br/>
         
    </div>
    
    </div>

    <div className="grid grid-cols-2 gap-4">
    <div>
    
    <label className="ml-12 mt-2 " >EMAIL:</label><br />
    <input className="ml-28 mb-2 box" value={studentdetails.email}></input><br/>
    <label className="ml-12 mt-2 ">RESUME:</label><button className="bg-white rounded-full w-10">{element}</button><br /> 

    </div>
    <div>
        
         
         <label>CONTACT:</label>
         <Link to={`/StudentProfile/${studentdetails.email}/Edit/Contact`}><button className="bg-white rounded-full w-10">{element}</button>
         </Link><br />
         <input className="ml-20 box" value={studentdetails.mobile_no}></input> <br/>
    </div>
    
    </div>
   
    <br/>
    <Link to={`/StudentProfile/${data.email}`}>
    <button className="btn-success button ml-96 h-10" onClick={handleSubmit}>ENTER</button>
      </Link>
      
      
         
        {/* DEGREE:<div className="box ml-16">{studentdetails.degree}</div>
     
       
         
         <div className="box ml-16">{studentdetails.skills}</div>
         <div className="box ml-16">{studentdetails.language_known}</div>
      
       
       <div className="box ml-16">{studentdetails.email}</div>
       <div className="box ml-16">{studentdetails.mobile_no}</div>
       RESUME:
         <br/>
        
         
      
        <button className="button btn-success  ml-10 h-10">EDIT</button>
       
      <button className="btn-success  mr-10 h-10">SAVE</button>
        */}
   </div>
    </div>
    )
}

export default Name;