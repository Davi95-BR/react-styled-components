import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <nav>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </nav>
  );
}

export default App;
