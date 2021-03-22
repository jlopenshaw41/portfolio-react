import GlobalStyle from "../theme/globalStyle";
import styled from "styled-components";
import SlopedDivTop from "./SlopedDivTop";
import PlaceHolderText from "./PlaceholderText";
import NameHeader from "./NameHeader";
import Socials from "./Socials";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  background-color: #fcf7f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 65%;
  width: 55%;

  @media only screen and (max-width: 750px) {
    top: 30%;
    width: 75%;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main className="App">
        <SlopedDivTop />
        <TextContainer>
          <PlaceHolderText />
          <NameHeader />
          <Socials />
        </TextContainer>
      </Main>
    </>
  );
};

export default App;
