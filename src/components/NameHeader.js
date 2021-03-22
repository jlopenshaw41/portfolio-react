import styled from "styled-components";

const StyledH2 = styled.h2``;

const StyledH3 = styled.h2``;

const NameHeader = () => {
  return (
    <div className="name-header">
      <StyledH2>Jennifer Openshaw</StyledH2>
      <StyledH3>Software Engineer</StyledH3>
    </div>
  );
};

export default NameHeader;
