import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./container/HomePage/Homepage";
const app = props => {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            
          </Switch>
        </Layout>
      </div>
    );
}

export default app;
