// JobForm.js
import React, { useState } from "react";
import InputField from "../dynamic/input";
import { Box, Button } from "@mui/material";
import ContentCard from "../dynamic/workHistory";
import { askGPT } from "../../API/openai/askGPT";
import LoadingScreen from "./loading";
import { Transition } from "react-transition-group";

function JobForm() {
  const fields = [
    {
      label: "Job Title",
      db_prop: "job_title",
      required: true,
      type: "text",
    },
    {
      label: "Company Name",
      db_prop: "company_name",
      required: true,
      type: "text",
    },
    {
      label: "Job Description",
      db_prop: "job_description",
      required: false,
      type: "multiline",
    },
    {
      label: "Job Dates",
      db_prop: "job_date",
      required: true,
      type: "date",
    },
  ];

  const [show, setShow] = useState();

  const [values, setValues] = useState({
    start_year: 2019,
    end_year: 2019,
    start_month: 1,
    end_month: 2,
    job_description: "A brief summary of duties",
    job_title: "Software Architect",
    company_name: "Space X",
    cardHidden: true,
    submit_disabled: false,
    gpt_prompt: "",
    loading: false,
  });


  const gpt_prompt = `In 2 to 3 sentences, describe the daily duties in a bulleted list for someone who works as a/an ${values.job_title}. The output should have a "\n" at the end of each bullet point.`;

  function handleChange(e) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(values.cardHidden);
  }

  async function handleSubmit() {
    // animate loading
    setShow(!show);

    if (
      (values.job_description === "A brief summary of duties" ||
        values.job_description === "") &&
      (values.job_title !== "Software Architect" || values.job_title !== "")
    ) {
      setValues((prev) => ({
        ...prev,
        loading: true,
        cardHidden: false
      }));

      await askGPT(
        gpt_prompt,
        "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",
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        150
      ).then((res) => {
        setValues((prev) => ({
          ...prev,
          job_description: res,
          loading: false,
        }));
      });
    }

    // if (values.cardHidden && values.job_description && values.job_title) {
    //   setValues((prev) => ({
    //     ...prev,
    //     cardHidden: !values.cardHidden
    //   }))
    // }
  }

  if (values.loading) {
    return (
      <Transition in={show} timeout={1000} unmountOnExit>
        {(state) => (
          <div className={`fade fade-${state}`}>{<LoadingScreen />}</div>
        )}
      </Transition>
    );
  }

  return (
    <div style={{maxWidth: "100%", width: "50vw", overflowY: "scroll"}}>
      <div>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {fields.map((field) => (
            <InputField
              label={field.label}
              type={field.type}
              key={field.db_prop}
              queryValue={field.db_prop}
              values={values}
              handleChange={handleChange}
            />
          ))}
        </Box>
        <Button onClick={handleSubmit} fullWidth variant="outlined">
          Submit
        </Button>
      </div>
      <Transition in={show} timeout={1000} unmountOnExit>
        {(state) => (
          <div style={{padding: '20px', justifyContent:'center', alignItems: 'center'}} className={`fade fade-${state}`}>
            {
              (<ContentCard
                work_history={{
                  job_title: values.job_title,
                  company_name: values.company_name,
                  job_description: values.job_description,
                  date_start_year: values.start_year,
                  date_start_month: values.start_month,
                  date_end_year: values.end_year,
                  date_end_month: values.end_months
                }}
                hidden={values.cardHidden}
              />)
            }
          </div>
        )}
      </Transition>
    </div>
  );
}

export default JobForm;
