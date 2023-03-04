import { Route, Routes } from "react-router-dom";
import { Login }  from "./Login.jsx";
import { Profile } from "./Profile.jsx";
import { ListOfUsers } from "./ListOfUsers.jsx";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
        <Route exact path="/user-list" element={<ListOfUsers/>}/>
    </Routes>
  )
}

export default App
