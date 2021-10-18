import React,{useEffect, useState} from "react";
import {useParams,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const element = <FontAwesomeIcon icon={faEdit} className="icon" />

function Id(){
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
    id:""
});

function handleOne(event){
    const{name, value} =event.target;

    setInfo(() =>{
        if(name=== "id")
        {
            return{
                id: value
            }
        }
    })
}

// console.log(info.userName);

const handleSubmit = async (event) => {
    // event.preventDefault()
    try{
      axios.put(`http://localhost:3001/api/StudentDetail/${data.email}`,{
        id: info.id,
        username : studentdetails.username,
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
     <Link to= {`/StudentProfile/${studentdetails.email}/Edit/Name`}>
     <button className="bg-white rounded-full w-10">{element}</button>
       </Link>
     <br/>
      <input className="ml-28 box" value={studentdetails.username}  ></input><br/>
      
      
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div>
    <label className="ml-12 mt-2 ">ID:</label><button className="bg-white rounded-full w-10">{element}</button><br />
    <input className="ml-28 mb-2 box" name="id" value={info.id} placeholder={studentdetails.id}  onChange={handleOne}  ></input><br/>
    
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
        
         
         <label>CONTACT:</label><Link to={`/StudentProfile/${studentdetails.email}/Edit/Contact`}><button className="bg-white rounded-full w-10">{element}</button>
         </Link><br />
         <input className="ml-20 box" value={studentdetails.mobile_no}></input> <br/>
    </div>
    
    </div>
   
    <br/>
    <Link to={`/StudentProfile/${data.email}`}>
    <button className="btn-success button ml-96 h-10" onClick={handleSubmit}>ENTER</button>
      </Link>
      
         
       
   </div>
    </div>
    )
}

export default Id;