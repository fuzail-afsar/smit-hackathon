import {
  Card,
  CardContent,
  CardContentProps,
  CardMedia,
  CardMediaProps,
  CardProps,
} from "@mui/material";
import TitleDescription, {
  TitleDescriptionProps,
} from "../../../typography/TitleDescription.js";

const ImageMediaCard = ({
  imageProps,
  titleProps,
  descriptionProps,
  cardProps,
  cardContentProps,
}) => {
  return (
    <Card {...cardProps}>
      <CardMedia {...{ component: "img", height: 140, ...imageProps }} />
      <CardContent {...cardContentProps}>
        <TitleDescription
          titleProps={{
            variant: "h5",
            gutterBottom: true,
            color: "secondary",
            ...titleProps,
          }}
          descriptionProps={{
            variant: "body2",
            color: "text.secondary",
            ...descriptionProps,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ImageMediaCard;
