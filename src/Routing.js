import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RouteURL } from "./helper/constant";

const Login = lazy(() => import("./Login"));
const ContactForm = lazy(() => import("./ContactForm"));
const Note = lazy(() => import("./note"));

class AppRouting extends Component {
  requireAuth = () => {
    return localStorage.getItem("access") ? true : false;
  };

  render() {
    const SecretRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.requireAuth() ? (
            <Component {...props} />
          ) : (
            document.addEventListener("readystatechange", (event) => {
              if (event.target.readyState === "complete") {
                window.location.href = "/login";
              }
            })
          )
        }
      />
    );

    return (
      <React.Fragment>
        <BrowserRouter>
          {/* basename = '/projects' */}
          <div className="AppRouting">
            <Switch>
              {/* <LoginCheckRoute exact path="/login" component={Login} /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path={RouteURL.LOGIN} component={Login} />
                <SecretRoute
                  exact
                  path={RouteURL.CONTACT_FORM}
                  component={ContactForm}
                />
                <SecretRoute exact path={RouteURL.NOTE} component={Note} />
              </Suspense>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default AppRouting;
