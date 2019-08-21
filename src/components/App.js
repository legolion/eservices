import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import {
  HomeScreen,
  RequirementsScreen,
  AuthorizationsScreen,
  FaqsScreen
} from "./screens";

import { Menubar } from "./common";

const App = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <BrowserRouter>
        <Menubar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/requirements" exact component={RequirementsScreen} />
        <Route path="/authorizations" exact component={AuthorizationsScreen} />
        <Route path="/faqs" exact component={FaqsScreen} />
      </BrowserRouter>
    </Container>
  );
};

export default App;
