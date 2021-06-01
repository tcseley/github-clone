import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [gitUser, setGitUser] = useState([]);

  const returnGitUser = async () => {
    let url = "https://api.github.com/users/tcseley"
    const gitUser = await axios.get(url);
    console.log(gitUser);
    setGitUser(gitUser.data);
  };
  
  useEffect(() => returnGitUser(), []);
  
  
  
  return (
    <div className="App">
      <h1>Github Clone</h1>
      <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
      <div className="dash-repo">
        <h2 >Repos</h2>
      </div>
      <div>
        <h2>{gitUser && gitUser.length}</h2>
      </div>
    </div>
  );
}

export default App;
