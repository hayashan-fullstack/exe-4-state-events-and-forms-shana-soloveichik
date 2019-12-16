import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Leale Levi',
      number: '0583295987'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(newPerson))
    setNewName(event.target.value)
    setNewNumber(event.target.value)
    console.log(persons)
  }
  
  const handleName = (event) => {
    setNewName(event.target.value)
    console.log(persons)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
    console.log(persons)
  }

  const Print = () => {
    return (
      persons.map(person => <h5>name: {person.name}<br />number: {person.number}</h5>)
    )
  }
  return (
    <div style={{ margin: '10%', color: 'white', padding: 200, background: 'purple', fontSize: 20, font: 'Museo Sans 500', textAlign: 'center' }}>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:<input value={newName} onChange={handleName} />
          <br />
          Number:<input value={newNumber} onChange={handleNumber} />
          <div>
          <button type="submit" onClick={addPerson}>add</button>
          </div>
        </div>
      </form>
      <br/>
    <h2>Numbers:</h2>
    {Print()}
    </div >
  )
};
ReactDOM.render(<App />, document.getElementById("root"));

