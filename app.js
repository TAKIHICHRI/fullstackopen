import { useState } from 'react'

const App = () => {
  // 1. الحالات (States)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // 2. معالجة إضافة اسم جديد (التمرين 2.6 و 2.7 و 2.8)
  const addPerson = (event) => {
    event.preventDefault()
    
    // التحقق مما إذا كان الاسم موجوداً بالفعل
    const isDuplicate = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // 3. تصفية القائمة بناءً على البحث (التمرين 2.9)
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* البحث (التمرين 2.9) */}
      <div>
        filter shown with <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>

      <h3>Add a new</h3>
      
      {/* نموذج الإضافة (التمرين 2.8) */}
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h3>Numbers</h3>
      
      {/* عرض القائمة المفلترة */}
      {personsToShow.map(person => 
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App
