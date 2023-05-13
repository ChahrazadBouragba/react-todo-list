
// we can pass everything as props, even functions
export const Task = (props) => {
    return (
        <div
         class="taskContainer"
         style={{ color: props.done ? "pink" : "black" }}
         >
         <h4>{props.taskName}</h4>
         <button onClick={() => props.checkList(props.id)}>✔</button>
         <button onClick={() => props.removeTask(props.id)}>X</button>
         </div>
    )
}