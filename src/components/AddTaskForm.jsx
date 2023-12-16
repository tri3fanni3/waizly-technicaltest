const AddTaskForm = ({ newTask, setNewTask, addTask, searchTask, toDo }) => {
  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
      {/* Search Bar */}
      {toDo.length > 0 && (
        <>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div className="w-25">
              <input 
                type="search"
                placeholder="Search"
                onChange={searchTask}
                className="form-control form-control-md"
              />
            </div>
          </div>
          <br />
        </>
      )}
    </>
  )
}

export default AddTaskForm;