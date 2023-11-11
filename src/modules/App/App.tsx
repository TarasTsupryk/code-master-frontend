import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "pages";

const App = () => {
  return (
    <>
      <Routes>
        {PAGES.map((page) => (
          <Route key={page.path} path={page.path} Component={page.Component} />
        ))}
      </Routes>
    </>
  );
};

export default App;
