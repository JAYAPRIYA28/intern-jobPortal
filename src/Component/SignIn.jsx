import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";



var path;


function SignIn(){

  const [click ,setClick] = useState({
    Recruiter:"",
    Student:""
  });


  


function handleClick(event){
  const {name, value} = event.target;

  setClick(preValue => {
    if(name === "Recruiter"){
      return{
        Recruiter: value,
        Student: preValue.Student
      }
    }
    else if(name === "Student"){
      return{
        Recruiter: preValue.Recruiter,
        Student: value
      }
    }
  })

}

// console.log(click.Recruiter);
// console.log(click.Student);


const [info , setInfo ] = useState({
  email : "",
  password: ""
});

function handleOne(event){
  const {name, value} = event.target;

setInfo(preValue =>{
 if(name === "email"){
   return {
     email: value,
     password: preValue.password
   }
 }else if(name === "password"){
   return {
     email: preValue.email,
     password: value
   }
 }

})

}

// console.log(info.email);
// console.log(info.password);

var [recruiter, setRecruiter] = useState([]);
  
var [signin, setSIgnin] = useState([]);


const fetchDataContent = async () =>{
  try{
    const get = await fetch('http://localhost:3001/api/Recruiter_signup')
   const getValue = await get.json();
   setRecruiter(getValue.data.name);
  //  console.log(getValue.data.name);
  }catch(err){
    console.log(err.message);
  }
};
useEffect(()=>{
fetchDataContent();
},[])



 
  const fetchData = async () =>{
    try{
      const get = await fetch('http://localhost:3001/api/Student_signup')
     const getValue = await get.json();
     setSIgnin(getValue.data.name);
    //  console.log(getValue.data.name);
    }catch(err){
      console.log(err.message);
    }
  };
useEffect(()=>{
  fetchData();
 },[])

 if(click.Recruiter === "Recruiter" ){
  recruiter.map(recruiter => {
   if(info.email===recruiter.email && info.password === recruiter.password){
     console.log(recruiter.email);
     path="/updatepage";
   }
})
}



 

 if(click.Student === "Student" ){
  signin.map(signin => {
   if(info.email===signin.email && info.password === signin.password){
     path = `/StudentProfile/${signin.email}`
   }
})
}





  return(

     <form >
     <h1 className=" text-4xl font-bold SignUp pb-12 ">Sign In</h1>
     <input type="checkbox" name="Recruiter" value="Recruiter" onClick = {handleClick} ></input>
     <label className="pr-24 text-2xl">Recruiter</label>

     <input   type="checkbox" name="Student" value="Student"  onClick = {handleClick} ></input>
     <label className="pr-24  text-2xl" >Student</label><br />

     <label className="text-2xl pr-4" >Email:</label>
     <input className="mt-12 pr-16 pl-1 pb-2" name="email" value={info.email} onChange={handleOne} type="email"></input><br />
     <label className="text-2xl pr-4">Password:</label>
     <input className="mt-12 pr-16 pl-1 pb-2" name="password" value={info.password} onChange={handleOne} type="password"></input><br/>
     <Link to={path}>
     <button className="font-bold button text-xl mr-16  opacity-100 mt-16"type=" submit" >sign In</button>
     </Link>
     </form>

  );
}

export default SignIn;
