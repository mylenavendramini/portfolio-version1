import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles.jsx";
import Presentation from "../../components/presentation/presentation.component";
import Vertical from "../../components/vertical/vertical.component.jsx";

const Home = () => {
  return (
    <div>
      <Outlet />
      <HomeContainer>
        <Vertical />
        <Presentation />
      </HomeContainer>
    </div>
  );
};

export default Home;
