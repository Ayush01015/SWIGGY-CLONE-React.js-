import ShimmerCard from "./ShimmerCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const ShimmerUI = ({count}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array(count)
          .fill("")
          .map((e, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    </>
  );
};

export default ShimmerUI;
