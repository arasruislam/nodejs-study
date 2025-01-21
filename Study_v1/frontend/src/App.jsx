import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("/api/jokes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Get Your Code</h1>
      <p>Length: {data.length}</p>

      {data.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
