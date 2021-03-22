import styled from "styled-components";

const SlopedDiv = styled.div`
  background-color: #f4e3d5;
  width: 100%;
  height: 50vh;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
`;

const SlopedDivTop = () => {
  return <SlopedDiv />;
};

export default SlopedDivTop;
