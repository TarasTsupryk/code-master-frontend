import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "pages";

import { BasePage } from "components/wrappers/BasePage";

const App = () => {
  return (
    <>
      <BasePage>
        <Routes>
          {PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              Component={page.Component}
            />
          ))}
        </Routes>
      </BasePage>
    </>
  );
};

export default App;
