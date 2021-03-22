import GlobalStyle from "../theme/globalStyle";
import PlaceHolderText from "./PlaceholderText";
import NameHeader from "./NameHeader";
import Socials from "./Socials";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <PlaceHolderText />
        <NameHeader />
        <Socials />
      </div>
    </>
  );
};

export default App;
