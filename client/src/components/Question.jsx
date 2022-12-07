const RadioButton = ({ id, name, value, text }) => {
  return (
    <>
      <input className="input-quiz" type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{text}</label>
      <br />
    </>
  );
};

const Question = ({ question }) => {
  return (
    <>
      <h4 className="quiz-h">{question.prompt}?</h4>

      {question.options.map((opt) => (
        <RadioButton
          key={opt.text}
          id={`${question.prompt}-${opt.text}`}
          name={question.prompt}
          value={opt.correct}
          text={opt.text}
        />
      ))}
      <br />
    </>
  );
};

export default Question;
