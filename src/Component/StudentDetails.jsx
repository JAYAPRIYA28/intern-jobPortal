import React, { useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



function StudentDetails(props){


const [info , setInfo] = useState({
  userId:"",
   userName: "",
   email: "",
   mobile_no: "",
   degree: "",
   language_known: "",
   skills: "Select skills",
   resume:""
});


function handleOne(event){
  const {name, value} = event.target;


setInfo(preValue =>{
  if(name==="userName"){
    return{
    userName: value,
    email: preValue.email,
    mobile_no: preValue.mobile_no,
    degree: preValue.degree,
    language_known: preValue.language_known,
    skills: preValue.skills,
    resume: preValue.resume,
    userId: preValue.userId
  }
  } else if(name==="email"){
    return{
      userName: preValue.userName,
      email: value,
      mobile_no: preValue.mobile_no,
      degree: preValue.degree,
      language_known: preValue.language_known,
      skills: preValue.skills,
      resume: preValue.resume,
      userId: preValue.userId
    }
    }else if(name==="mobile_no"){
      return{
        userName: preValue.userName,
        email: preValue.email,
        mobile_no: value,
        degree: preValue.degree,
        language_known: preValue.language_known,
        skills: preValue.skills,
        resume: preValue.resume,
        userId: preValue.userId
      }
      }else if(name==="degree"){
        return{
          userName: preValue.userName,
          email: preValue.email,
          mobile_no: preValue.mobile_no,
          degree: value,
          language_known: preValue.language_known,
          skills: preValue.skills,
          resume: preValue.resume,
          userId: preValue.userId
        }
        }else if(name==="language_known"){
          return{
            userName: preValue.userName,
            email: preValue.email,
            mobile_no: preValue.mobile_no,
            degree: preValue.degree,
            language_known: value,
            skills: preValue.skills,
            resume: preValue.resume,
            userId: preValue.userId
          }
          }else if(name==="skills"){
            return{
              userName: preValue.userName,
              email: preValue.email,
              mobile_no: preValue.mobile_no,
              degree: preValue.degree,
              language_known: preValue.language_known,
              skills: value,
              resume: preValue.resume,
              userId: preValue.userId
            }
          }else if(name==="resume"){
              return{
                userName: preValue.userName,
                email: preValue.email,
                mobile_no: preValue.mobile_no,
                degree: preValue.degree,
                language_known: preValue.language_known,
                skills: preValue.skills,
                resume: value,
                userId: preValue.userId
              }
            }else if(name==="userId"){
                  return{
                    userName: preValue.userName,
                    email: preValue.email,
                    mobile_no: preValue.mobile_no,
                    degree: preValue.degree,
                    language_known: preValue.language_known,
                    skills: preValue.skills,
                    resume: preValue.resume,
                    userId: value
                  }
                  }
                 
});


}



const handleSubmit = async (event) => {
  // event.preventDefault()
  try{
    axios.post("http://localhost:3001/api/StudentDetail/",{
      id: info.userId,
      username : info.userName,
      email: info.email,
      mobile_no:info.mobile_no,
      degree:info.degree,
      language_known:info.language_known,
      skills: info.skills,
      resume: info.resume
    })
    .then(res=>{
      console.log(res);
    })
  
    
  }catch(err){
    console.log(err);
  }
}



  return (
    <div>
    <form >
    <h1 className=" text-4xl font-bold pt-10 text-blue-900 pb-12 ">StudentDetails</h1>
    <label className="text-2xl pr-4" >User ID:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 rounded-lg" name="userId" value={info.userId} onChange={handleOne}></input><br />
    <label className="text-2xl pr-4" >User name:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 mr-4 rounded-lg" name="userName" value={info.userName} onChange={handleOne}></input><br />
    <label className="text-2xl pr-4">Email:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 ml-12 rounded-lg" name="email" value={info.email} onChange={handleOne}
              placeholder="Email"></input><br/>
    <label className="text-2xl pr-4">Mobile no:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 rounded-lg" name="mobile_no" value={info.mobile_no} onChange={handleOne} ></input><br/>
    <label className="text-2xl pr-4">Degree:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 ml-6 rounded-lg" name="degree" value={info.degree} onChange={handleOne} ></input><br/>
    <label className="text-2xl pr-2 pl-8">Language known:</label>
    <input className="mt-12 pr-16 pl-1 pb-2 ml-6 mr-32 rounded-lg" name="language_known" value={info.language_known} onChange={handleOne} ></input><br/>
    <label className="text-2xl pr-2">Skills:</label>
    <select className="mt-12 pr-12  pb-2 ml-10 rounded-lg" name="skills" value={info.skills} onChange={handleOne} >
    <option disabled>Select skills</option>
    <option value="Front-End development">Front-End development</option>
    <option value="Back-End development">Back-End development</option>
     <option value="Full Stack development">Full Stack development</option>
     <option value="Data Science/AI/ML">Data Science/AI/ML</option>
     <option value="UI/UX Design">UI/UX Design</option>
     <option value="Digital Marketing">Digital Marketing</option>
     <option value="Video Editing">Video Editing</option>
     <option value="Databases">Databases</option>
     <option value="Mobile App Development">Mobile App Development</option>
     </select><br/>
     <label className="text-2xl pl-36"name="resume" value={info.resume}>Resume:</label>
     <input  className ="mt-12 pr-16 pl-1 pb-2 ml-20 " type="file" accept="application/pdf" /><br />
     <Link to={`/StudentProfile/${info.email}`}>
    <button className="font-bold button text-xl mr-16  opacity-100" onClick={handleSubmit} type="submit" >Save</button>
     </Link>
    </form>
    </div>
  );
}

export default StudentDetails;
