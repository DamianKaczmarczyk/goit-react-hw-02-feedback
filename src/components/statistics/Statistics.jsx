export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) {
    return (
      <div >
        <h2 className="heading" >Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }