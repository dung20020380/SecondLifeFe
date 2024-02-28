import { Fragment } from "react";
import { DividerCol, FlexCenter } from "../../theme/icons/theme";

function SellAddress() {
  return (
    <Fragment>
      <FlexCenter
        flexColumn
        justifyContent="start"
        alignItems="start"
        style={{
          maxWidth: "70%",
        }}
      >
        <p
          style={{
            display: "flex",
            fontSize: 16,
            margin: "5px 0",
          }}
        >
          Lê Hữu Dũng
          <DividerCol color="#161515" height="20px"></DividerCol> 0374188281
        </p>
        <p
          style={{
            maxWidth: "60%",
            fontWeight: 300,
          }}
        >
          Số 27, Ngách 83/51 Ngõ 83 Đường Tân Triều Xã Tân Triều, Huyện Thanh
          Trì, Hà Nội
        </p>
      </FlexCenter>
    </Fragment>
  );
}

export default SellAddress;
