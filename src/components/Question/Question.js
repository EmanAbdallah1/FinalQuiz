import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  selectedCategoryNum,
  selected, setSelected,wronganswer, setWronganswer
  
}) => {

  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      if (selectedCategoryNum >= 3) {
        history.push("/result");
      } else {
        setSelected();
        history.push("/category");
      }
    } else if (selected === correct) {
      setCurrQues(currQues + 1);
      setSelected();
    } else if (selected !== correct) {
      setCurrQues(currQues + 1);
      setSelected();
      setWronganswer(wronganswer + 1);

    } 
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
    history.push("/result");

  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
