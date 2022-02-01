import React from "react";
import { useStore } from 'react-stores';
import { UserStore } from "../store/UserStore";

const Dashboard = () => {
  const user = useStore(UserStore);
  if (user.auth) {
    return <h1>Wellcome user </h1>;
    // {user.username}
  }
  return (
    <div>
      <h1>Please Login</h1>
    </div>
  );
};

export default Dashboard;
