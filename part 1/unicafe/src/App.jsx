import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total, average, posiPercent }) => {
  if (total === 0) {
    const noFeedback = "No feedback given";
    return (
      <div>
        <h1>statistics</h1>
        <p>{noFeedback}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={posiPercent} />
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const clickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const clickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const posiPercent = (good * 100) / total;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} text={"good"} />
      <Button onClick={clickNeutral} text={"neutral"} />
      <Button onClick={clickBad} text={"bad"} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        posiPercent={posiPercent + "%"}
      />
    </div>
  );
};

export default App;
