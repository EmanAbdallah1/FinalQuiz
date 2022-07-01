import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategoryNum, setSelectedCategoryNum] = useState(0);
  const [selected, setSelected] = useState();
  const [wronganswer, setWronganswer] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
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
          </Route>
          <Route path="/category">
            <Category
           name={name}
           setName={setName}
           fetchQuestions={fetchQuestions}
           difficulty={difficulty}
           setDifficulty={setDifficulty}
           category={category}
           setCategory={setCategory}
           selectedCategoryNum={selectedCategoryNum}
           setSelectedCategoryNum={setSelectedCategoryNum}
            />
          </Route>
          <Route path="/result">
            <Result 
            name={name} score={score}      
           wronganswer={wronganswer}
          />
          </Route>
       
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
