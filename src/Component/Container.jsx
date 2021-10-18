import React from "react";
import {Link} from "react-router-dom";

function Container(){
  return(
    <div >
    <Link to="/SignUp">
    <button className="font-bold button text-xl opacity-100  mt-16"type=" submit" >sign up</button>
    </Link>
    <Link to="/SignIn">
    <button className="font-bold button text-xl opacity-100" type=" submit">sign in</button>
    </Link>
    </div>
  );
}

export default Container;
