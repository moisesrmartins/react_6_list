import React, { useEffect, useReducer } from "react";
import axios from "axios";

const url =
  "https://myproject-be4c4-default-rtdb.firebaseio.com/lista-teste.json";

const reducer = (state, action) => {
  console.log("state", state, "action", action);
  return state;
};

function Lista3() {
  const [data, dispatch] = useReducer(reducer, { loading: true, data: {} });

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    axios.get(url).then((res) => {
      dispatch({ type: "SUCCESS", data: res.data });
    });
  }, []);

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Lista3">
      <h1>Lista-Teste</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default Lista3;
