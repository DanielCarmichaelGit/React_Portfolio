import React from "react";
import { TableCell } from "@mui/material";

function Cell(props) {
  const { item, indexAsKey, variant = "body" } = props;
  console.log(variant);
  return (
    <TableCell
      variant={variant}
      style={{
        margin: "0px",
        padding: "0px",
        width: "0px",
        ...(variant === "head"
          ? { border: "solid", borderColor: "#f1f1f1", borderWidth: "1px" }
          : {}),
      }}
      key={indexAsKey + 2}
    >
      {
        typeof item === 'object' ? JSON.stringify(item) : (item)
      }
    </TableCell>
  );
}

export default Cell;
