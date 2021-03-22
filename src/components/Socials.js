import styled from "styled-components";
import {
  TwitterWithCircle,
  LinkedinWithCircle,
  GithubWithCircle,
  MediumWithCircle,
} from "@styled-icons/entypo-social";

const SocialIconContainer = styled.div`
  display: flex;
  width: 30%;
`;

const SocialIcon = styled.div`
  width: 25%;
`;

const Socials = () => {
  return (
    <SocialIconContainer>
      <SocialIcon>
        <TwitterWithCircle />
      </SocialIcon>
      <SocialIcon>
        <LinkedinWithCircle />
      </SocialIcon>
      <SocialIcon>
        <GithubWithCircle />
      </SocialIcon>
      <SocialIcon>
        <MediumWithCircle />
      </SocialIcon>
    </SocialIconContainer>
  );
};

export default Socials;
