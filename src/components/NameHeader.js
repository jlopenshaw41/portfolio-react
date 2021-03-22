import styled from "styled-components";

const NameHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 750px) {
    font-size: 1.1rem;
  }
`;

const StyledH3 = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-align: center;

  width: 20ch;
  animation: typing 2s steps(21), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid gray ;

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }

  @media only screen and (max-width: 750px) {
   font-size: 0.1rem;
  }
`;

const NameHeader = () => {
  return (
    <NameHeaderContainer>
      <StyledH2>Jennifer Openshaw</StyledH2>
      <StyledH3>Software Engineer</StyledH3>
    </NameHeaderContainer>
  );
};

export default NameHeader;
