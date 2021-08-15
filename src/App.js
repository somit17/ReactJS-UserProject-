import { useState } from "react";
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler=(uName,uAge)=>{
    console.log(uName,uAge);
    setUsersList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,id:Math.random().toString()}];
    });
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
