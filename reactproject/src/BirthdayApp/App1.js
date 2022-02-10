import React, { useState } from "react";
import "./index.css";
import List from "./List";
import data from "./data";
const App1 = () => {
  const [peolpe, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{data.length} birthday today</h3>
        <List people={peolpe} setpeople={setpeople} />
        <button onClick={() => setpeople([])}>Clear Me</button>
      </section>
    </main>
  );
};

export default App1;
