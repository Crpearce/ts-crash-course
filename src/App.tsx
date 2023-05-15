import './App.css';
import { useState } from 'react'
import List from './components/List/List.component';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note? : string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name: "Lebron James",
    age: 36,
    url: "https://www.gannett-cdn.com/presto/2023/05/13/USAT/63da4a57-f6e8-48ea-b70b-13c093876b94-AP_Warriors_Lakers_Basketball.jpg",
    note: "Allergic to staying with the same team"
  }])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
