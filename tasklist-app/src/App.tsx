import TaskList from "./task/TaskList"
import AddTaskForm from "./task/AddTaskForm"
import FilterButton from "./task/FilterButton"

function App() {

  return (
    <div>
      <h2 className="my-10 text-2xl text-center">
        <span className="text-green-600 text-6xl font-bold">TaskList</span>
        <span className="text-gray-600 text-3xl ml-2">App</span>
      </h2>

      <AddTaskForm />
      <FilterButton />
      <TaskList />
    
    </div>
  )
}

export default App
