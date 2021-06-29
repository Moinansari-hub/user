import { FC } from "react";

import User from "../models/User";

type PropsType = {
  users: User[];
};

const UsersDisplay: FC<PropsType> = ({ users }) => {
  return (
    <div>
      {users.map((user: User, index: number) => {
        return (
          <li key={index}>
            <h3 style={{ marginTop: "8px" }}>{user.name.toString()}</h3>
            <ul>
              <li
                key={index}
                style={{ marginTop: "-20px", marginBottom: "5px" }}
              >
                {user.email.toString()}
              </li>
              <img
                src={user.avatar}
                alt="User"
                style={{ marginBottom: "15px" }}
              />
            </ul>
          </li>
        );
      })}
    </div>
  );
};

export default UsersDisplay;
