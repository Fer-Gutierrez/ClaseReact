import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 300, marginTop: 10 }}>
      <CardMedia
        component="img"
        alt="zapatilla"
        height="140"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body1" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Comprar
        </Button>

        {/* Con la etiqueta Link de react-router-dom llevo a la vista "detalle" */}
        {/* Podemos indicarle el id a traves de backtick dentro de {} 8para indicarle que es código de Js */}
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
