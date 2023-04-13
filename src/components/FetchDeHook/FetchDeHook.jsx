import React from "react";

const FetchDeHook = ({ data }) => {
  return (
    <div>
      {data?.map(user => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      <h2>Aca finaliza el componente UNO</h2>
    </div>
  );
};

export default FetchDeHook;
