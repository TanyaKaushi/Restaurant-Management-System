//import logo from './logo.svg';
import './App.css';
import { Container, Typography } from "@material-ui/core";
import Order from "./Componenets/Orders";

function App() {
  return (
    <Container maxWidth="md">
		<Typography
			gutterBottom
			variant="h2"
			align="center"
			>
				Restaurant App
		</Typography>	
		<Order></Order>	
	</Container>
  );
}

export default App;
