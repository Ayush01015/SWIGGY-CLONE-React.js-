import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ShimmerCard = ()=>{
    return(
        <Stack className="card-component" spacing={1}>
        <div className="card">
          <Skeleton variant="rectangular" width={270} height={184} />
          <div className="card-items">
            <Skeleton variant="rectangular" width={250} height={60} />
            <Skeleton variant="rectangular" width={250} height={30} />
            <Skeleton variant="rectangular" width={100} height={19.2} />
            <div className="card-rating">
              <Skeleton variant="rectangular" width={86} height={16} />
              <Skeleton variant="rectangular" width={56} height={16} />
            </div>
          </div>
        </div>
      </Stack>
    )
}

export default ShimmerCard;