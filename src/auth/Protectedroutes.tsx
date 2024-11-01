import { Route } from "react-router-dom";

export default function Protectedroutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props:any) =>
        sessionStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
