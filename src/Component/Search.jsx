import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} className="icon" />


function Search(){
  return(
    <div >
    <input type="text" placeholder="   Search.." className="w-2/3 h-8 mt-10 ml-10" name="search2"></input>
   <button className="bg-white w-10 h-10 ml-4">{element}</button>
   <div className="container">
   <table className="table table-borderless  ml-10">
  <thead>

  </thead>
  <tbody>
  <tr>
    <th className="font-bold">SKILLS:</th>
  </tr>
    <tr>
      <th>ID</th>
      <td>DEGREE:</td>

    </tr>
    <tr>
      <th >NAME:</th>
      <td>LANGUAGE KNOWN:</td>

    </tr>
    <tr>
    <td >EMAIL:</td>
    <td>CONTACT:</td>

    </tr>
    <tr>
    <td >RESUME:</td>
    </tr>
  </tbody>

  </table>
  </div>

    </div>
  );
}

export default Search;
