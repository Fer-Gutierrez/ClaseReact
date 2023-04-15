import React from "react";

const FetchDeHook = ({ data }) => {
  return (
    <div>
      <h1>Fetch dede un Hook</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h3>Aca finaliza el componente UNO</h3>
    </div>
  );
};

export default FetchDeHook;
