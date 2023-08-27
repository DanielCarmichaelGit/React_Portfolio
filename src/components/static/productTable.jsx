import React, { useState, useEffect } from "react";
import LoadingScreen from "./loading";
import SortableTable from "../dynamic/sortableTable";
import { getProducts } from "../../API/fake-data/fakestoreapi";

function ProductTable() {
  const [values, setValues] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    setTimeout(() => {
      getProducts()
        .then((res) => {
          console.log(res);
          setValues((prev) => ({
            ...prev,
            loading: false,
            data: res.data,
          }));
        })
        .catch((error) => {
          console.error("Problem getting product list", error.response);
          throw error;
        });
    });
  });

  return (
    <div>
      {values.loading ? (
        <LoadingScreen />
      ) : (
        values.data && <SortableTable data={values.data} />
      )}
    </div>
  );
}

export default ProductTable;
