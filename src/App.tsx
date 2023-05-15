import './App.css';
import { useState } from 'react'
import List from './components/List/List.component';

interface IState {
  people: {
    name: string
    age: number
    url: string
    notes? : string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
