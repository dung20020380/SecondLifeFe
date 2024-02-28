import { Fragment, useState } from "react";
import UploadProductOne from "./uploadProductOne";
import UploadProductTwo from "./uploadProductTwo";
import { Button, Stack } from "@mui/material";
import { FlexCenter } from "../../theme/icons/theme";
import { ItemStepUpload } from "./index.styled";
import NavBar from "../../components/header/navBar";

function SellProduct() {
  const [step, setStep] = useState(1);

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <p
        style={{
          fontSize: 24,
          fontWeight: 500,
          margin: "10px 0",
        }}
      >
        Thêm sản phẩm
      </p>
      <p
        style={{
          color: "#3A7Bd5",
          fontWeight: 600,
          marginLeft: 20,
        }}
      >
        Bước {step}
      </p>
      <div
        style={{
          background: "#fff",
          margin: "10px 0px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <ItemStepUpload isShow={step === 1 ? false : true}>
          <UploadProductOne setStep={setStep} />
        </ItemStepUpload>
        <ItemStepUpload isShow={step === 2 ? false : true}>
          <UploadProductTwo setStep={setStep} />
        </ItemStepUpload>
      </div>
    </div>
  );
}

export default SellProduct;
