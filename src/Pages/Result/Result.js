import { Button } from "@material-ui/core";
import { useEffect} from "react";
import { useHistory } from "react-router";
import "./Result.css";

import React from 'react';
const Result = ({ name, score,wronganswer}) => {
  const history = useHistory();
  
  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <h1>Hi, {name}</h1>
           <h1>corrected answer:{score}</h1>
      <h1>wrong answer:{wronganswer}</h1>


      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
