import { NotFoundContainer } from "./not-found.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3>404</h3>
      <h3>PAGE NOT FOUND</h3>
      <h1>
        The page you are looking for does not exist. It may have been moved, or
        removed altogether. Perhaps you can return back to the site's homepage
        and see if you can find what you are looking for.
      </h1>
    </NotFoundContainer>
  );
};

export default NotFound;
