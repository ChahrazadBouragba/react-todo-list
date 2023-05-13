import './App.css';
import { useState } from "react";


// variable to keep track of list of tasks
function App() {
  
  // intialyzing an empty array for lists
const [list, setList] = useState([]);

 // useState to get the inpute value
const [input, setInput] = useState("");

// function for input
const handleChange = (event) => {
  setInput(event.target.value);
}

// fanction for button
const addTask = () => {
  // add an object for each task
  const task = {
    // setting the first elemet in the lit to 1. Grabing the id of the last element in the list and increment it by 1. 
    id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
    taskName: input,
  }

  // add the input to the empty arraylist we insialized earlier
  setList([...list, task])
}

const removeTask = (id) => {
  setList(list.filter((task) => task.id !== id));

  // or creating new array
  /* const newList = list.filter((task) => task !== taskName
     or = if (task === taskName) {
      return false
    } else {
      return true
    } 
  )*/
  // setting the old list array equal to the new array
}

  return (
    <div className="App">
      <section class="part1">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      

      </section>

      <section class="part2">

        {list.map((task) => {
         return (
         <div class="taskContainer">
          <h4>{task.taskName}</h4>
          <button onClick={() => removeTask(task.id)}>X</button>
          </div>
          )
        })}

      </section>

    </div>
  );
}


export default App;
