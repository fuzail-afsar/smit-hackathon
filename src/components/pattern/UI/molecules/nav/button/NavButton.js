import { Box, Button, BoxProps, ButtonProps } from "@mui/material";

const NavButton = ({ navProps, buttonsProps }) => {
  return (
    <Box {...{ component: "nav", ...navProps }}>
      {buttonsProps.map((buttonProps, index) => (
        <Button
          key={index}
          {...{
            ...buttonProps,
          }}
        />
      ))}
    </Box>
  );
};

export default NavButton;
