import TaskList from "./task/TaskList"
import AddTaskForm from "./task/AddTaskForm"
import FilterButton from "./task/FilterButton"

function App() {

  return (
    <>
      <h2>Task List App</h2>
      <AddTaskForm />
      <FilterButton />
      <TaskList />
    
    </>
  )
}

export default App
