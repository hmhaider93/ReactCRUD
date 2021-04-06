import React from 'react';
import axios from 'axios'
import MasterForm from './MasterForm';



export default function ExercisePage(){

    const [exerciseEntries, setExerciseEntries] = React.useState([{}]);


    React.useEffect(() => {
        // code to run on component mount

        axios.get('http://localhost:5000/routes/')
        .then((response) => {
            setExerciseEntries(()=>{
                return response.data.map((val)=>{
                    return {id:val._id, content: val.post}
                })
            })

        })
        .catch((error) => {
          console.log(error);
        });

      }, [])

    return(
        <div>
        <form>
            <ol>

            {exerciseEntries.map((value,index) =>{
                 return (
       <li key = {index}>

                     <MasterForm key={value.id} content={value.content}/>
       </li>
            
                 )
            })}
            </ol>
        </form>
        </div>
    )
}