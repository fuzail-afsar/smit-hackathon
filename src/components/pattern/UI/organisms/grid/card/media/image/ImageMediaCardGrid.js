import { Grid, GridProps } from "@mui/material";
import ImageMediaCard, {
  ImageMediaCardProps,
} from "../../../../../molecules/cards/media/image/ImageMediaCard";

const ImageMediaCardGrid = ({ items, gridParentProps, gridItemsProps }) => {
  return (
    <Grid
      {...{
        container: true,
        spacing: 2,
        justifyContent: "space-between",
        ...gridParentProps,
      }}
    >
      {items.map((props, index) => (
        <Grid
          {...{ item: true, xs: 12, sm: 4, md: 3, ...gridItemsProps }}
          key={index}
        >
          <ImageMediaCard {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageMediaCardGrid;
