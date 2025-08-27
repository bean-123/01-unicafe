import { useState } from "react";

const Statistics = (props) => {
  console.log(props);
  return (
    <>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="nautral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <Statistics text="all" value={props.total} />
      <Statistics text="average" value={props.average} />
      <Statistics text="positive" value={props.positive} />
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  const handleGood = () => {
    console.log("good", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  };

  const handleNautral = () => {
    console.log("neutral", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + bad + good);
  };

  const handleBad = () => {
    console.log("bad", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
  };

  const handleAverage = () => {
    console.log("average", average);
    setAverage(good - bad);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNautral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  );
};

export default App;
