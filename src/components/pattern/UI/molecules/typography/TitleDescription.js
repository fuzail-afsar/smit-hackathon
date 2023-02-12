import { Typography, TypographyProps } from "@mui/material";

const TitleDescription = ({ titleProps, descriptionProps }) => {
  return (
    <>
      <Typography {...titleProps} />
      <Typography {...descriptionProps} />
    </>
  );
};

export default TitleDescription;
