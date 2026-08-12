import React, { useState, useRef } from "react";
const App = () => {
  const [value, setValues] = useState({
    name: "",
  })
  const [submittedData, setSubmittedData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const inputRef = useRef(null)
  const { name } = value
  const changeHandler = (e) => {
    setValues({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (name.trim() === "") {
      return;
    }
    const newUser = {
      name,
    }
    setSubmittedData(newUser)
    if (isEditing) {
      setIsEditing(false)
    }
    setValues({ name: "" })
    setIsChecked(false);
  }
  const editHandler = () => {
    if (isChecked) return
    setValues({
      name: submittedData.name,
    })
    setIsEditing(true)
    inputRef.current.focus()
  }
  const deleteHandler = () => {
    if (isChecked) return
    setSubmittedData(null)
    setValues({ name: "" })
    setIsEditing(false)
    setIsChecked(false)
  }
  return (
    <div>
      <center>
        <h1>Submit Form</h1>
        <form onSubmit={submitHandler}>
        <input ref={inputRef} type="text" name="name" placeholder="Enter Name" value={name} onChange={changeHandler}/>
        <br/>
        <br/>
        <button type="submit"> {isEditing ? "Update" : "Submit"}</button>
        </form>
        {submittedData && (
          <div>
            <h2>Submitted Data</h2>
            <p
              style={{ textDecoration: isChecked ? "line-through" : "none", }}>
              <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>{" "}
              <strong>Name:</strong> {submittedData.name}
            </p>
            <button onClick={editHandler} disabled={isChecked}  style={{ cursor: isChecked ? "not-allowed" : "pointer" }}> Edit</button>
            <button onClick={deleteHandler} disabled={isChecked}  style={{ cursor: isChecked ? "not-allowed" : "pointer" }}>Delete</button>
          </div>
        )}
      </center>
    </div>
  )
}
export default App