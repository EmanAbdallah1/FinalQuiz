import { Button, TextField,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";

const Home = ({ name, setName, difficulty, setDifficulty }) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    if ( !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      // fetchQuestions(category, difficulty);
      history.push("/category");
    }
  };

  return (
    <div className="content">
      <div  id="quizWrap">
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className="difficult">Select Difficulty</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => setDifficulty(e.target.value)}
        value={difficulty}
      >
        <FormControlLabel value="easy" control={<Radio />} label="Easy" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
      </RadioGroup>
    </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
