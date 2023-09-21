import React, {useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import {BtnTemaStyle} from "./Components/UI";
import BtnTema from "./Components/BtnTema";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTemaStyle onClick={toggleTema}>
        <BtnTema  tema={tema}/>
      </BtnTemaStyle>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
