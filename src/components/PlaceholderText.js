import styled from "styled-components";

const PlaceholderContainer = styled.div`
  padding: 20px;

  @media only screen and (max-width: 750px) {
    padding: 30px 30px 0px 30px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 100;
  letter-spacing: 3px;
  line-height: 1.5;
  
  text-align: center;

  @media only screen and (max-width: 750px) {
    font-size: 3.8rem;
    margin-top: 0;
  }
`;

const PlaceHolderText = () => {
  return (
    <PlaceholderContainer>
      <StyledH1>Coming Soon</StyledH1>
    </PlaceholderContainer>
  );
};

export default PlaceHolderText;
