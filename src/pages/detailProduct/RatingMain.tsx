import { Button, Divider, Rating } from "@mui/material";
import { FlexCenter, styledTheme } from "../../theme/icons/theme";

function RatingMain() {
  const userRating = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "good",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",

      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "good",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "good",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "goood",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "goood",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Le Dung",
      rating: 5,
      timeregister: "2024-01-16 16:22",
      product: "May tinh",
      comment: "goood",
    },
  ];
  return (
    <>
      <p
        style={{
          fontSize: 24,
          color: styledTheme.primary,
        }}
      >
        Đánh giá sản phẩm
      </p>
      <FlexCenter
        justifyContent="start"
        style={{
          padding: "3rem",
          background: " rgba(241, 93, 98,0.1)",
        }}
      >
        <FlexCenter flexcolumn={"true"}>
          <p
            style={{
              color: styledTheme.secondary,
              fontSize: " 1.7rem",
            }}
          >
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
              }}
            >
              4.4
            </span>
            &nbsp; trên 5
          </p>
          <p>
            <Rating name="read-only" value={4.4} readOnly size="large" />
          </p>
        </FlexCenter>
        <div
          style={{
            display: "inline-block",
            marginLeft: "60px",
          }}
        >
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            Tất cả
          </Button>
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            5 Sao
          </Button>
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            4 Sao
          </Button>
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            3 Sao
          </Button>
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            2 Sao
          </Button>
          <Button
            style={{
              margin: "0 5px",
              fontSize: 20,
              background: "#fff",
              border: "1px solid #3A7BD5",
              padding: "0px 10px",
            }}
          >
            1 Sao
          </Button>
        </div>
      </FlexCenter>
      <div
        style={{
          padding: "20px 2.5rem",
        }}
      >
        {userRating.map((item, index) => {
          return (
            <>
              <FlexCenter
                justifyContent="start"
                alignItems="start"
                style={{
                  padding: "10px 0 ",
                }}
              >
                <img
                  src={item.image}
                  alt="loi"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: 999,
                    marginRight: 15,
                  }}
                />
                <FlexCenter flexcolumn={"true"} alignItems="start">
                  <p
                    style={{
                      color: styledTheme.primary,
                    }}
                  >
                    {item.name}
                  </p>
                  <Rating name="read-only" value={item.rating} readOnly />
                  <p>{item.timeregister}</p>
                  <p
                    style={{
                      marginTop: "1.5rem",
                    }}
                  >
                    Sản phẩm:&nbsp;
                    {item.product}
                  </p>
                  <p
                    style={{
                      margin: "10px 0",
                    }}
                  >
                    {item.comment}
                  </p>
                  <img src={item.image} alt="loi" width={100} />
                </FlexCenter>
              </FlexCenter>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#dedada",
                  height: "1px",
                  margin: " 0 8px",
                }}
              ></div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default RatingMain;
