import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchGitHubUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserData(data);
  };
  

  return (
    <>
      <div>
        <h1>Github User Finder</h1>
        <input type=" text" onChange={(e) => setUsername(e.target.value)} placeholder='Github username'/>
        <button onClick={fetchGitHubUser}>Search</button>
        {userData && (
          <div>
            <p>Name : {userData.name}</p>
            <p>Folllwers:{userData.followers}</p>
            <p>Repositiories: {userData.public_repos}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
