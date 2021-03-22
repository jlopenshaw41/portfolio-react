import GlobalStyle from "../theme/globalStyle";
import SlopedDivTop from "./SlopedDivTop";
import PlaceHolderText from "./PlaceholderText";
import NameHeader from "./NameHeader";
import Socials from "./Socials";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <SlopedDivTop />
        <PlaceHolderText />
        <NameHeader />
        <Socials />
      </div>
    </>
  );
};

export default App;
