import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ShimmerMenu = () => {
  return (
    <>
      <div className="shimmer-menu-header">
        <div className="shimmer-menu">
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={1519} height={245} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                width={100}
                height={40}
                style={{ marginTop:"10px" }}
              />
              {Array(10)
                .fill("")
                .map((e, i) => (
                  <Skeleton
                    variant="rectangular"
                    width={500}
                    height={150}
                    key={i}
                    style={{ margin: "10px 0px" }}
                  />
                ))}
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ShimmerMenu;
