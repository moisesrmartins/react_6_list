import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://myproject-be4c4-default-rtdb.firebaseio.com/lista-dois.json";

function Lista2() {
  const [data, setData] = useState({ loading: true, data: {} });

  useEffect(() => {
    axios.get(url).then((res) => {
      setData({ loading: false, data: res.data });
      console.log({ loading: false, data: res.data });
    });
  }, []);

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Lista2">
      <h1>Lista-Dois</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default Lista2;
