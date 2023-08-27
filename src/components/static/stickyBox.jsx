import React, { useState } from "react";
import styles from "../../css/StickyBox.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { askGPT } from "../../API/openai/askGPT";
import LoadingBar from "./loadingBar";

const StickyBox = ({ onClick, status }) => {
  const [values, setValues] = useState({
    gpt_prompt: "",
    gpt_response: "",
    loading: false,
  });

  function handleChange(e) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(values.gpt_prompt);
  }

  function handleClick() {
    setValues((prev) => ({
      ...prev,
      loading: true,
    }));

    askGPT(
      values.gpt_prompt,
      "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",
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      150
    ).then((res) => {
        console.log(res)
      setValues((prev) => ({
        ...prev,
        gpt_response: res,
        loading: false,
      }));
    });
  }


  const boxClass = `${styles.stickyBox} ${styles[status]}`;
  
  return (
    <div className={boxClass}>
      { !values.loading && (
        <>
          <IconButton className={styles.closeButton} onClick={onClick}>
            <CloseIcon />
          </IconButton>
          <Typography>Ask ChatGPT a burning question!</Typography>
          <OutlinedInput
            fullWidth
            multiline={true}
            minRows="3"
            onChange={handleChange}
          ></OutlinedInput>
          <Button variant="outlined" onClick={handleClick}>
            {<Typography>Ask GPT</Typography>}
          </Button>
        </>
      )}
      { values.loading && <LoadingBar /> }
    </div>
  );
};

export default StickyBox;
