import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ selectedCategoryNum, setSelectedCategoryNum,questions, score, setScore, setQuestions,selected, setSelected,wronganswer, setWronganswer }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            wrong={questions[currQues]?.incorrect_answers}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            selectedCategoryNum={selectedCategoryNum}
            setSelectedCategoryNum={setSelectedCategoryNum}
            selected={selected}
            setSelected={setSelected}
            wronganswer={wronganswer}
            setWronganswer={setWronganswer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
