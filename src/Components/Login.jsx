import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return( 
    <>
    { isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn btn-outline-light">Log Out</button>
    :<button onClick={() => loginWithRedirect()} className="btn btn-outline-light">Log In</button>
    }
    </>
  )
};

export default LoginButton;