import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Counter = ({ text, count }) => {
  return (
    <div>
      <p>
        {text} {count}
      </p>
    </div>
  );
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

  return (
    <div>
      <Header text="give feedback" />
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>
      <Header text="statistics" />
      <Counter text="good" count={good} />
      <Counter text="neutral" count={neutral} />
      <Counter text="bad" count={bad} />
    </div>
  );
};

export default App;
