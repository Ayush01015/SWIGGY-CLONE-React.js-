import ShimmerCard from "./ShimmerCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const ShimmerUI = () => {
  return (
    <>
      {/* <div className="search-component" style={{
        // border:"3px solid red",
        display:"flex",
      }}>
        <Skeleton variant="rectangular" width={300} height={40}/>
        <Skeleton sx={{marginLeft:"50px"}} variant="rectangular" width={100} height={36}/>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array(15)
          .fill("")
          .map((e, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    </>
  );
};

export default ShimmerUI;
