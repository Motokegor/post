import { useState } from "react";
import "./App.scss";
import post from "./post.json";
import Card from "./Components/Card/Card.jsx";

function App() {
  const[arr,setArr] = useState(post);
  function delCard(id){
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }
  function addCard(newObject) {
    setArr((prevArr) => [...prevArr, newObject]);
  }
  return (
    <>
      <div>
        {arr.map((item, index) => (
          <Card object={item} delCard={delCard}  addCard={addCard} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
