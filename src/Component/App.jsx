import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Switch, withRouter, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Search from "./Search";
import UpdatePage from "./UpdatePage";
import StudentDetails from "./StudentDetails";
import StudentProfile from "./StudentProfile";
import Edit from "./Edit";
import Name from "./Name";
import Id from "./Id";
import Degree from "./Degree";
import Language_known from "./Language_Known";
import Skills from "./Skills";
import Contact from "./Contact";


function App(){
  return(

<Router>
  <div >
  <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/signup" exact component={SignUp} />
   <Route path="/signin" exact component={SignIn} />
   <Route path="/studentdetails" exact component={StudentDetails} />
   <Route path="/search" exact component={Search} />
   <Route path="/updatepage" exact component={UpdatePage} />
   <Route path ="/StudentProfile/:email" exact component={withRouter(StudentProfile)} />
   <Route path = "/StudentProfile/:email/Edit" exact component={Edit}/>
   <Route path ="/StudentProfile/:email/Edit/Name" exact component={Name}/>
   <Route path ="/StudentProfile/:email/Edit/Id" exact component={Id}/>
   <Route path ="/StudentProfile/:email/Edit/Degree" exact component={Degree}/>
   <Route path ="/StudentProfile/:email/Edit/Language_known" exact component={Language_known}/>
   <Route path ="/StudentProfile/:email/Edit/Skills" exact component={Skills}/>
   <Route path ="/StudentProfile/:email/Edit/Contact" exact component={Contact}/>
   
  </Switch>
  </div>
</Router>


);
}

export default App;
