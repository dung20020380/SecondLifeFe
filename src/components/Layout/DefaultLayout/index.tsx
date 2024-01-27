import Header from "../../header/Header";
import "../../../index.css";
import Footer from "../../footer/Footer";
import { FlexCenter } from "../../../theme/icons/theme";
import { MainApp } from "../../../pages/home/home.styles";

type Props = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <FlexCenter>
        <MainApp>{children}</MainApp>
      </FlexCenter>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
