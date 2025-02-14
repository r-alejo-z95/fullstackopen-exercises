import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Counter = ({ text, count }) => {
  return (
    <p>
      {text} {count}
    </p>
  );
};

const TotalCount = ({ text, count }) => {
  return (
    <p>
      {text} {count}
    </p>
  );
};

const Average = ({ text, avg }) => {
  return (
    <p>
      {text} {avg}
    </p>
  );
};

const Positive = ({ text, percentage }) => {
  return (
    <p>
      {text} {percentage} %
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total, average, posiPercent }) => {
  if (total === 0) {
    const noFeedback = "No feedback given";
    return (
      <div>
        <Header text="statistics" />
        <p>{noFeedback}</p>
      </div>
    );
  } else {
    return (
      <div>
        <Header text="statistics" />
        <Counter text="good" count={good} />
        <Counter text="neutral" count={neutral} />
        <Counter text="bad" count={bad} />
        <TotalCount text="all" count={total} />
        <Average text="average" avg={average} />
        <Positive text="positive" percentage={posiPercent} />
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
      <Header text="give feedback" />
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        posiPercent={posiPercent}
      />
    </div>
  );
};

export default App;
