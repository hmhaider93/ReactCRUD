import React from "react";
import axios from "axios";

export default function Home() {

    const [exerciseEntry, setExerciseEntry] = React.useState({
        title:"",
        description:""
    })

    function handleOnChange(event){
        const {value,name} = event.target
        setExerciseEntry(preVal=>{
            return {
                ...preVal,
                [name]:value
            }
        })

    }

    function handleOnButtonClick(event){

        console.log(exerciseEntry);

        axios.post('http://localhost:5000/routes/add', exerciseEntry)
        .then((res) => console.log(res.data));

        setExerciseEntry({
            title:"",
            content:""
        })
        event.preventDefault()

    }


  return (
    <div>
    <form onSubmit={handleOnButtonClick}>
      <div className="mb-3" >
        <label  className="form-label ">
          Instruction Title:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="title"
          onChange={handleOnChange}
          value={exerciseEntry.title}
        />
      </div>
      <div className="mb-3" >
        <label  className="form-label">
          Content:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name = "description"
          onChange={handleOnChange}
          value={exerciseEntry.content}
        ></textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" className="btn btn-primary" onClick={handleOnButtonClick}>Primary</button>
      </div>

    </form>
    </div>
  );
}
