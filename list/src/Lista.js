import React from "react";
import axios from "axios";

axios
  .get("https://myproject-be4c4-default-rtdb.firebaseio.com/lista.json")
  .then((res) => {
    console.log(res.data);
  });

/*
axios
  .post("https://myproject-be4c4-default-rtdb.firebaseio.com/lista.json", {
    outer: "Adeus",
  })
  .then((res) => {
    console.log(res.data);
  });
*/

function Lista() {
  return (
    <div className="Lista">
      <h1>Lista</h1>
    </div>
  );
}

export default Lista;
