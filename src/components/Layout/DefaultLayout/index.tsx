import Header from "../../header/Header";
import "../../../index.css";
import Footer from "../../footer/Footer";
import { FlexCenter, styledTheme } from "../../../theme/icons/theme";
import { MainApp } from "../../../pages/home/home.styles";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import NavBar from "../../header/navBar";

type Props = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <FlexCenter
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #3A7Bd5",
          borderTop: "1px solid #3A7Bd5",
        }}
      >
        <NavBar />
      </FlexCenter>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          alignSelf: "center",
          margin: "10px 0",
          color: styledTheme.primary,
          fontWeight: 600,
        }}
      >
        <GppGoodOutlinedIcon fontSize="large" />
        <div>Vì một môi trường giảm thiểu Cacbon</div>
      </div>
      <FlexCenter>
        <MainApp>{children}</MainApp>
      </FlexCenter>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
