import React from "react";
import axios from "axios";
import MasterForm from "./MasterForm";

export default function ExercisePage() {
  const [exerciseEntries, setExerciseEntries] = React.useState([{}]);

  function handleOnDeleteButtonClicked(entry){
    axios.post('http://localhost:5000/routes/delete', entry)
    .then((res) => console.log(res.data));

    console.log(entry.id);
    setExerciseEntries(preVal=>{
        return preVal.filter(value=>{
            return value.id !== entry.id;
        })
    })
}

  React.useEffect(() => {
    // code to run on component mount

    axios
      .get("http://localhost:5000/routes/")
      .then((response) => {
        setExerciseEntries(() => {
          return response.data.map((val) => {
            return { id: val._id, content: val.post };
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <form>
        <ol>
          {exerciseEntries.map((value, index) => {
            return (
              <li key={index}>
                <MasterForm key={value.id} content={value.content} id={value.id} buttonText="Delete" buttonColorRed='true' handleOnDeleteButtonClicked={handleOnDeleteButtonClicked}/>
              </li>
            );
          })}
        </ol>
      </form>
    </div>
  );
}
