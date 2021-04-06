import React from "react";
import axios from "axios";
import MasterForm from "./MasterForm"

export default function Home() {

    function onAddButtonClicked(exerciseEntry){
    console.log(exerciseEntry);
    axios.post('http://localhost:5000/routes/add', exerciseEntry)
    .then((res) => console.log(res.data));

    }

    
    


  return (
    <form>
    <MasterForm handleOnAddButtonClicked={onAddButtonClicked} buttonText="Add"/>
    </form>
  );
}
