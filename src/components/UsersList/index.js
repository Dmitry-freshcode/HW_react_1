import React from 'react';
import UserItem from './UserItem';
import Users from './../../IncomeData/index';
// const itemOut = (user) => {
//   return <UserItem user={user} />;
// };

// const UserList = (Users) => {
//   //   let list;
//   //   Users.forEach((user) => {
//   //     list = list + itemOut(user);
//   //   });
//   //   return list;
//   return <ul> {Users.map(itemOut)}</ul>;
// };
// export default UserList;
const articleElements = Users.map((user) => (
  <li className="listItem" key={user.id}>
    <UserItem user={user} />
  </li>
));

export default function UserList() {
  return (
      <ul className="list">{articleElements}</ul>
  );
}
