import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ContentCard = ({ work_history, hidden }) => {
  console.log(hidden);
  return (
    <Card
      hidden={hidden}
      style={{
        marginTop: "30px",
        minWidth: "400px",
        minHeight: "300px",
        borderWidth: '1px',
        borderColor: '#f1f1f1',
        borderRadius: '5%',
        boxShadow: '',
        margin: '10px, 10px, 10px, 10px'
      }}
    >
      <CardContent>
        {Object.keys(work_history).map((key, index) =>
          key === "job_title" ? (
            <Typography style={{ color: "#ff5733", fontSize: "24px" }}>
              {work_history[key]}
            </Typography>
          ) : key === "company_name" ? (
            <Typography style={{ color: "#a1a1a1", fontSize: "14px", marginBottom: "10px" }}>
              {work_history[key]}
            </Typography>
          ) : key === "job_description" ? (
            work_history[key]
              .replace("*", "")
              .split("-")
              .map((description) =>
                description ? (
                  <Typography
                    style={{ color: "2a3439", fontSize: "12px" }}
                  >{`- ${description}`}</Typography>
                ) : null
              )
          ) : null
        )
        }
        <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"right", marginTop: '10px'}}>
            <Typography style={{color:"fafafa", fontSize:"10px"}}>{`${work_history.date_end_month}/${work_history.date_start_year}`}</Typography>
            <Typography style={{marginLeft:"5px", marginRight:"5px", color:"fafafa", fontSize:"10px"}}>-</Typography>
            <Typography style={{color:"fafafa", fontSize:"10px"}}>{`${work_history.date_start_month}/${work_history.date_start_year}`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
