import { useEffect, useState } from "react";
import "./App.css";
import SingleData from "./components/SingleData/SingleData";

const App = () => {
  const [names, setName] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setName(data);
      });
  }, []);

  return (
    <div>
      <h1>count :{names.length}</h1>
      {names.map((singleData, i) => (
        <SingleData key={i} singleData={singleData}></SingleData>
      ))}
      <button>Count add</button>
    </div>
  );
};

export default App;
