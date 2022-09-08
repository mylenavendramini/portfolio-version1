import {
  NotFoundContainer,
  NavBarContainer,
  Logo,
  FooterContainer,
} from "./not-found.styles";
import { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
      </NavBarContainer>
      <NotFoundContainer>
        <h3>404</h3>
        <h3>PAGE NOT FOUND</h3>
        <h1>
          The page you are looking for does not exist. It may have been moved,
          or removed altogether. Perhaps you can return back to the site's
          homepage and see if you can find what you are looking for.
        </h1>
      </NotFoundContainer>
      <FooterContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
      </FooterContainer>
    </Fragment>
  );
};

export default NotFound;
