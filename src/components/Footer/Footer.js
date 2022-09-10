import React from "react";
import { Wrapper, Link } from "./Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <p>© 2022 | EZ Cocktails</p>
      <p>
        <Link href="https://www.chingu.io/" target="_blank">
          Chingu 
        </Link>
        <span> | Voyage 40 | </span>
        <Link href="https://github.com/chingu-voyages/v40-geckos-team-20" target="_blank">
          geckos-team-20
        </Link>
      </p>
    </Wrapper>
  );
};

export default Footer;
