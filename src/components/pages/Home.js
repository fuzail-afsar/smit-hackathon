import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import bannerImage from "../../assets/images/grocery.jpg";
const Home = () => {
  return (
    <>
      <section>
        <Grid container>
          <Grid xs item>
            <Box
              component="img"
              src={bannerImage}
              sx={{ width: "100%", objectFit: "cover", height: "90vh" }}
            />
          </Grid>
        </Grid>
      </section>
      <Box component="section" py={5}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Products
              </Typography>
            </Grid>
            <Grid xs item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={bannerImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Rs.800 - per Kg
                  </Typography>
                  <Button variant="contained" sx={{ color: "white" }}>
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
