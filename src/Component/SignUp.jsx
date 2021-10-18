import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


var path;


// function selectOnlyThis(id){
//   var myCheckbox = document.getElementsByName("myCheckbox");
//   Array.prototype.forEach.call(myCheckbox,function(el){
//     el.checked = false;
//   });
//   id.checked = true;
// }

function SignUp(){



  const [info , setInfo ] = useState({
    userName : "",
    eMail : "",
    password: ""
  });

  function handleOne(event){
    const {name, value} = event.target;

  setInfo(preValue =>{
   if(name === "userName"){
     return {
       userName:value,
       eMail: preValue.eMail,
       password: preValue.password
     }
   }else if(name === "eMail"){
     return {
       userName:preValue.userName,
       eMail: value,
       password: preValue.password
     }
   }else if(name === "password"){
     return {
       userName:preValue.userName,
       eMail: preValue.eMail,
       password: value
     }
   }

})

  }

console.log(info.userName);
console.log(info.eMail);
console.log(info.password);

  // function select(event){
  // const value = event.target.value;
  // console.log(value);
  // if(value === "Recruiter"){
  //   return (
  //       axios.post("http://localhost:3001/api/Recruiter_signup",{
  //         user_name:info.userName,
  //         email:info.eMail,
  //         password:info.password

  //       })
  //       .then(res=>{
  //         console.log(res);
  //       })
  //   );
  // }else if(value === "Student"){
  //   return (
  //       axios.post("http://localhost:3001/api/Student_signup",{
  //         user_name:info.userName,
  //         email:info.eMail,
  //         password:info.password
  //       })
  //       .then(res=>{
  //         console.log(res);
  //       })
  //     );
  //     }
  //   }
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

console.log(click.Recruiter);
console.log(click.Student);
  

function handleSubmit(event){
  // event.preventDefault();

  if(click.Recruiter === "Recruiter"){
    return (
        axios.post("http://localhost:3001/api/Recruiter_signup",{
          user_name:info.userName,
          email:info.eMail,
          password:info.password

        })
        .then(res=>{
          console.log(res);
           
        })
    );
  }else if(click.Student === "Student"){
    return (
        axios.post("http://localhost:3001/api/Student_signup",{
          user_name:info.userName,
          email:info.eMail,
          password:info.password
        })
        .then(res=>{
          console.log(res);
           
        })
      );
      }

}


if(click.Recruiter === "Recruiter"){
  path = "/updatepage";
}else if(click.Student=== "Student"){
  path = "/studentdetails";
}





  return(
     <form >
     <h1 className=" text-4xl font-bold SignUp pb-12 ">Sign Up</h1>

     <input type="checkbox" name="Recruiter" value= "Recruiter" onClick={handleClick} ></input>
     <label className="pr-24 text-2xl">Recruiter</label>

     <input   type="checkbox" name="Student" value = "Student" onClick={handleClick} ></input>
     <label className="pr-24  text-2xl" >Student</label><br />
     <label className="text-2xl pr-4"  >User name:</label>
     <input className="mt-12 pr-16 pl-1 pb-2" name="userName" onChange ={handleOne} value={info.userName} ></input><br />
     <label className="text-2xl pr-2">Email Id:</label>
     <input className="mt-12 ml-6 pr-16  pb-2" name="eMail" onChange ={handleOne} value={info.eMail} ></input><br />
     <label className="text-2xl pr-4">Password:</label>
     <input className="mt-12 pr-16 pl-1 pb-2" name="password" type="password" onChange ={handleOne} value={info.password}  ></input><br/>
     {/* <select className="mt-12 pr-12  pb-2 ml-10 rounded-lg" onChange={select} name="designation" >
     <option disabled>Select designation</option>
     <option value="Recruiter">Recruiter</option>
     <option value="Student">Student</option>
      </select><br/> */}
     {/* {
       if(click.Recruiter==="Recruiter"){}
     } */}
     <Link to={path}>
     <button className="font-bold button text-xl mr-16  opacity-100 mt-16" type=" submit" onClick={handleSubmit} >sign up</button>
     </Link>
     </form>

  );
}

export default SignUp;
