import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const NavList = ({ listProps, listItemsProps }) => {
  return (
    <List {...listProps}>
      {listItemsProps.map(
        ({ listItemProps, listItemButtonProps, listItemTextProps }, index) => (
          <ListItem key={index} {...listItemProps}>
            <ListItemButton {...listItemButtonProps}>
              <ListItemText {...listItemTextProps} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
};

export default NavList;
