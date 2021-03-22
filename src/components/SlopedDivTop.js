import styled from "styled-components";

const SlopedDiv = styled.div`
    background-color: #f4e3d5;
    height: 50vh;
    clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% 50%, /* right bottom */
    0 100% /* left bottom */
  );
`;

const SlopedDivTop = () => {
  return <SlopedDiv />;
};

export default SlopedDivTop;