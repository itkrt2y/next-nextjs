import { Route, Switch } from "wouter-preact";
import { Layout } from "./components/Layout";

const pageFiles = import.meta.globEager("./pages/**/*.tsx");

const pages = Object.keys(pageFiles)
  .map((filePath) => {
    const path = `/${filePath.slice(8, -4).replace(/\/?index$/, "")}`;
    const { Page } = pageFiles[filePath];

    return (
      <Route key={path} path={path}>
        {(params) => <Page {...params} />}
      </Route>
    );
  })
  .concat(<Layout>404: Not Found!</Layout>);

export const App = () => <Switch>{pages}</Switch>;
