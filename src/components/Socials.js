import styled from "styled-components";
import {
  TwitterWithCircle,
  LinkedinWithCircle,
  GithubWithCircle,
  MediumWithCircle,
} from "@styled-icons/entypo-social";

const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 30%;

  @media only screen and (max-width: 750px) {
    width: 40%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #595959;

  &:hover {
    color: #e7c1a3;
  }
`;

const SocialIcon = styled.div`
  width: 20%;
  position: relative;
  color: #595959;

  &:hover {
    color: #e7c1a3;
    transform: scale(1.2);
  }

  &:active {
    color: #e7c1a3;
    top: 2px;
    left: 2px;
  }
`;

const Socials = () => {
  return (
    <SocialIconContainer>
      <SocialIcon>
        <StyledLink href="https://twitter.com/Jlopenshaw">
          <TwitterWithCircle title="Twitter" />
        </StyledLink>
      </SocialIcon>
      <SocialIcon>
        <StyledLink href="https://www.linkedin.com/in/jennifer-openshaw/">
          <LinkedinWithCircle title="LinkedIn" />
        </StyledLink>
      </SocialIcon>
      <SocialIcon>
        <StyledLink href="https://github.com/jlopenshaw41">
          <GithubWithCircle title="Github" />
        </StyledLink>
      </SocialIcon>
      <SocialIcon>
        <StyledLink href="https://jlopenshaw.hashnode.dev/">
        <MediumWithCircle title="Blog" /></StyledLink>
      </SocialIcon>
    </SocialIconContainer>
  );
};

export default Socials;
