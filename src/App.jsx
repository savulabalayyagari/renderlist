import React, { Fragment } from "react";
import { users } from "./data";
import "./App.css";

function App() {
  
  const females = users.filter((u) => u.gender === "female");
  const males = users.filter((u) => u.gender === "male");
  const others = users.filter(
    (u) => u.gender !== "male" && u.gender !== "female"
  );

 
  const renderUser = (u) => (
    <div className="card" key={u.email}>
      <img src={u.picture.large} alt={u.name.first} />
      <h3>
        {u.name.first} {u.name.last}
      </h3>
      <p>{u.location.country}</p>
      <p>Age: {u.dob.age}</p>
    </div>
  );

  
  return (
    <div className="container">
      <h1>Filtered User List</h1>
      <Fragment>
        <section>
          <h2>Female Users</h2>
          {females.map(renderUser)}
        </section>

        <section>
          <h2>Male Users</h2>
          {males.map(renderUser)}
        </section>

        <section>
          <h2>Other</h2>
          {others.length > 0 ? others.map(renderUser) : <p>No others found</p>}
        </section>
      </Fragment>
    </div>
  );
}

export default App;
