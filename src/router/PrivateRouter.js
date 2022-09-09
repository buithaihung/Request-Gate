import {
    Route,
    Redirect,
  } from "react-router-dom";
  export const PrivateRouter = ({ children, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
      <Route
        {...rest}
        render={({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };