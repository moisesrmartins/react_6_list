import React, { useEffect } from "react";
import axios from "axios";

const url =
  "https://myproject-be4c4-default-rtdb.firebaseio.com/lista-teste.json";

function Lista3() {
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="Lista3">
      <h1>Lista-Teste</h1>
    </div>
  );
}

export default Lista3;
