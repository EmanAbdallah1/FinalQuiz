import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import './Category.css'
const Category = ({
  category,
  setCategory,
  fetchQuestions,
  difficulty,
  selectedCategoryNum,
  setSelectedCategoryNum,
}) => {
  const [error, setError] = useState(false);
  const [selectedcategory, setSelectedcategory] = useState(false);

  const history = useHistory();

  const handelNextStep = () => {
    if (!category) {
      setError(true);
      return;
    } else {
      setError(false);
      setSelectedcategory(true);
      setSelectedCategoryNum(selectedCategoryNum + 1);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div id="quizWrap">
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat,index) => (
              <MenuItem
                key={cat.category}
                value={cat.value} 
                >
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handelNextStep}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
