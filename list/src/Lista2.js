import React, { useEffect } from "react";
import axios from "axios";

const url =
  "https://myproject-be4c4-default-rtdb.firebaseio.com/lista-dois.json";

function Lista2() {
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="Lista2">
      <h1>Lista-Dois</h1>
    </div>
  );
}

export default Lista2;
