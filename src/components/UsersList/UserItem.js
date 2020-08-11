import React from 'react';
require('./style.css');

const UserItem = (prop) => {
  const {
    user: { Fname, Lname, fotoLink, comment, data },
  } = prop;
  const link = require(`../../IncomeData/foto/${fotoLink}`);
  return (
    <>
        <img className="image" src={link} alt="foto avatar"></img>
      <h2>{Fname}</h2>
      <h3>{Lname}</h3>
      <p>{comment}</p>
      {data}
    </>
  );
};
export default UserItem;
