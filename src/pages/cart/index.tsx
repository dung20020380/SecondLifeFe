import React from "react";
// import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Button, Checkbox } from "@mui/material";
import { ProductBlock } from "./product-block";

export const Cart = () => {
  return (
    <div style={{ marginTop: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div style={{ display: 'flex', gap: 20, alignSelf: 'center' }}>
          <GppGoodOutlinedIcon />
          <div>
            Cam kết hoàn tiền. Nhận sản phẩm như mô tả hoặc nhận tiền hoàn.
          </div>
        </div> */}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
        <div>SecondLife</div>
        <div>{">"}</div>

        <div>Giỏ hàng</div>
      </div>
      <div style={{ display: "flex", marginTop: 80, gap: 15 }}>
        <div style={{ flex: 2, border: 1, width: "100%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <div>1 SP trong giỏ hàng</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox />
              <div>Chọn tất cả</div>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            {new Array(3).fill(0).map((item, index) => (
              <ProductBlock />
            ))}
          </div>
        </div>

        <div style={{ flex: 1, border: 1, marginLeft: 20 }}>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: 15,
                borderBottom: "1px solid gray ",
              }}
            >
              Tóm tắt đơn hàng
            </div>

            <div
              style={{
                marginTop: 10,
                width: "100%",
                borderBottom: "1px solid gray",
              }}
            >
              <div
                style={{
                  padding: 15,
                  justifyContent: "space-between",
                  display: "flex",
                  gap: 10,
                }}
              >
                <div>Tổng tiền hàng:</div>
                <div>200.000VND</div>
              </div>

              <div
                style={{
                  padding: 15,
                  justifyContent: "space-between",
                  display: "flex",
                  gap: 10,
                }}
              >
                <div>Tổng tiền phí vận chuyển:</div>
                <div>200.000VND</div>
              </div>

              <div
                style={{
                  padding: 15,
                  justifyContent: "space-between",
                  display: "flex",
                  gap: 10,
                }}
              >
                <div>Tổng số tiền:</div>
                <div>200.000VND</div>
              </div>
            </div>

            <div
              style={{
                padding: 15,
                marginTop: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <p>
                  Tôi xác nhận đã kiểm tra đơn hàng và đồng ý với các
                  <div style={{ color: "blue" }}> điều khoản quy định</div>
                </p>
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ alignSelf: "center", margin: "auto" }}
                  size="large"
                  variant="contained"
                  sx={{
                    fontSize: "18px",
                    boxSizing: "20px",
                    paddingX: 10,
                  }}
                >
                  Xác nhận
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
