import React, { useState } from "react";
import Cell from "./tableCell";
import { TableRow } from "@mui/material";

function Row(props) {
  const { rowData, indexAsKey, toggle = false, variant } = props;

  const [values, setValues] = useState({
    opened: false,
  });

  function toggleOpen() {
    setValues((prev) => ({
        ...prev,
        opened: !values.opened
    }))
  }

  return (
    <TableRow key={indexAsKey} style={{width: '100%'}}>
        {/* <Cell variant={variant}/> */}
      {
        rowData.map((cellItem, index) => {
            return <Cell item={cellItem} indexAsKey={index}/>;
        })
      }
    </TableRow>
  );
}

export default Row;
