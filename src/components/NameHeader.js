import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const StyledH3 = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
  letter-spacing: 3px;

  width: 20ch;
  animation: typing 2s steps(21), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid #404040 ;

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
`;

const NameHeader = () => {
  return (
    <div className="name-header">
      <StyledH2>Jennifer Openshaw</StyledH2>
      <StyledH3>Software Engineer</StyledH3>
    </div>
  );
};

export default NameHeader;
