import { DeleteForever } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Cart = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="cart items table">
                <TableHead>
                  <TableRow>
                    <TableCell width={110}></TableCell>
                    <TableCell align="left">Product</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Subtotal</TableCell>
                    <TableCell align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell scope="row">
                      <img src={"image"} />
                    </TableCell>
                    <TableCell align="left">"name"</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button>-</Button>
                        <TextField type="number" color="primary" />
                        <Button>+</Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="center">123</TableCell>
                    <TableCell align="center">123</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => {
                          //   deleteItemFromCart(+id);
                        }}
                      >
                        <DeleteForever />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">234234</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        sx={{ color: "white" }}
                        // onClick={checkoutClickHandler}
                      >
                        Place Order
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Cart;
