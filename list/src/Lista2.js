import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://myproject-be4c4-default-rtdb.firebaseio.com/lista-dois.json";

function Lista2() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
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
