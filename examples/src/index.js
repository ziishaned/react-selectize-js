import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Select from "../../src";

const data = [
  {
    value: 1,
    text: 'Chuck Tesla'
  },
  {
    value: 2,
    text: 'Elon Musk'
  },
  {
    value: 3,
    text: 'Paweł Kuna'
  },
  {
    value: 4,
    text: 'Nikola Tesla'
  }
]

export function App() {
  const [user, setUser] = useState("");

  return (
    <div className="container">
      <h1>react-selectize-js</h1>

      <p>Selected user: {user}</p>
      <Select defaultValue={user} onChange={(event) => {
        setUser(event.target.value);
      }}>
        {data.map((item, index) => {
          return (
            <option value={item.value} key={index}>{item.text}</option>
          );
        })}
      </Select>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
