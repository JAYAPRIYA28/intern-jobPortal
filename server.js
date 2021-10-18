require('dotenv').config();

const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/api/StudentDetail", async function(req, res){
try{
  const results = await db.query("SELECT * FROM studentdetails");

    res.status(200).json({
      status:"success",
      results: results.rows.length,
      data:{
        name: results.rows
      }
    })
}catch(err){
 console.log(err);
}

});





app.get("/api/StudentDetail/:email", async function(req, res){
  console.log(req.params.email);
try{
  const resultes = await db.query("SELECT * FROM studentdetails where email = $1",[req.params.email]);

  res.status(200).json({
    status:"success",
    data:{
      name: resultes.rows[0]
    }
  })
}catch{
  console.log(err);
}

});



app.post("/api/StudentDetail",async function(req, res){

  try{
    const results = await db.query("INSERT INTO studentdetails (id, username, email, mobile_no, degree,language_known, skills,resume ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) returning *",[req.body.id, req.body.username,
     req.body.email, req.body.mobile_no, req.body.degree,req.body.language_known,req.body.skills,req.body.resume])

     res.status(201).json({
       status:"success",
       data:{
         name:results.rows[0]
       }
     })
  }catch(err){

  }

});






app.put("/api/StudentDetail/:email",async function(req, res){

try{
  const results = await db.query("UPDATE studentdetails SET username = $1 , id = $2, mobile_no = $3, degree = $4, skills = $5 ,language_known=$6 where email = $7 returning *",[req.body.username,
   req.body.id, req.body.mobile_no, req.body.degree, req.body.skills,req.body.language_known , req.params.email]);

   res.status(200).json({
     status:"success",
     data:{
       name: results.rows[0]
     }
   })
}catch(err){
  console.log(err);
}


});








app.delete("/api/StudentDetail/:id",async function(req, res){
  try{
    const results = await db.query("DELETE FROM studentdetails WHERE id = $1",[req.params.id]);
    res.status(204).json({
      status:"sucess"
    })
  }catch(err){

  }

});

/***********************studentprofile****************************** */

app.get("/StudentProfile/:email", async function(req, res){
  console.log(req.params.email);
try{
  const resultes = await db.query("SELECT * FROM studentdetails where id = $1",[req.params.email]);

  res.status(200).json({
    status:"success",
    data:{
      name: resultes.rows[0]
    }
  })
}catch{
  console.log(err);
}

});


// signup
app.get("/api/Recruiter_signup", async function(req, res){
  try{
    const results = await db.query("SELECT * FROM Recruiter_signup");
    res.status(200).json({
      status:"success",
      results: results.rows.length,
      data:{
        name: results.rows
      }
    })
  }catch(err){
    console.log(err);
  }
} );



app.post("/api/Recruiter_signup",async function(req, res){

  try{
    const results = await db.query("INSERT INTO Recruiter_signup (user_name, email, password ) VALUES ($1,$2,$3) returning *",[req.body.user_name, req.body.email,req.body.password])

     res.status(201).json({
       status:"success",
       data:{
         name:results.rows[0]
       }
     })
  }catch(err){

  }

});


//student signup

app.get("/api/Student_signup", async function(req, res){
  try{
    const results = await db.query("SELECT * FROM Student_signup");
    res.status(200).json({
      status:"success",
      results: results.rows.length,
      data:{
        name: results.rows
      }
    })
  }catch(err){
    console.log(err);
  }
} );


app.post("/api/Student_signup",async function(req, res){

  try{
    const results = await db.query("INSERT INTO Student_signup (user_name, email, password ) VALUES ($1,$2,$3) returning *",[req.body.user_name, req.body.email,req.body.password])

     res.status(201).json({
       status:"success",
       data:{
         name:results.rows[0]
       }
     })
  }catch(err){

  }

});


const port = process.env.PORT;
app.listen(port, ()=>{
  console.log(`server is up and listening on port ${port}`);
});
