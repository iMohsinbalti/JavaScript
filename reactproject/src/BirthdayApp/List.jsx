import React from "react";
import data from "./data";

const List = ({ people, setpeople }) => {
  return (
    <div>
      {people.map((p) => {
        return (
          <article key={p.id} className="person">
            <img src={p.image} alt={p.name} />

            <div>
              <h4>{p.name}</h4>
              <p>{p.age} Years</p>
            </div>
          </article>
        );
      })}
      <div>{}</div>
    </div>
  );
};

export default List;
