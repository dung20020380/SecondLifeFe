import {
  BrowserRouter as Router,
  Routes as Routess,
  Route,
} from "react-router-dom";
import { publicRouter } from "./constants";
import DefaultLayout from "../components/Layout/DefaultLayout";
import React from "react";

type RouterProp = {
  path: string;
  component: () => JSX.Element;
  layout?: string;
};

const Routes = () => {
  return (
    <Routess>
      {publicRouter.map((route: RouterProp, index) => {
        const Layout = route.layout ? React.Fragment : DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page></Page>
              </Layout>
            }
          ></Route>
        );
      })}
    </Routess>
  );
};

export default Routes;
