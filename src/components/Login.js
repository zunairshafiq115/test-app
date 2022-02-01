import React from "react";
import { useStore } from 'react-stores';
import { UserStore } from "../store/UserStore";

function Login() {
  // const myStoreState = useStore(UserStore);
  
  const LoginHandler = () => {

    UserStore.setState({
      auth:true
    });
  
  };
  
  const LogoutHandler = () => {
    UserStore.setState({
      auth:false
    });
  };
  return (
    <div>
      <button onClick={LoginHandler}>Login</button>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
}

export default Login;
