import { useState } from "react";
import "./App.css";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if ((good + bad + neutral) == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + bad + neutral} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + bad + neutral)}
          />
          <StatisticLine
            text="positive"
            value={(good / (good + bad + neutral)) * 100 + ' ' + '%'} 
          />
        </tbody>
      </table>
    </div>
  );
};

const Boton = (props) => (
  <button onClick={props.eventHandler}>{props.nombre}</button>
);

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>

      <Boton eventHandler={() => {
          setGood(good + 1);
        }}
        nombre="good"
      />
      <Boton
        eventHandler={() => {
          setNeutral(neutral + 1);
        }}
        nombre="neutral"
      />
      <Boton
        eventHandler={() => {
          setBad(bad + 1);
        }}
        nombre="bad"
      />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
