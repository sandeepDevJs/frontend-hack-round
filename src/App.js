import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
function App() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Route exact path="/" component={HomeScreen} />
			</Container>
		</Router>
	);
}

export default App;
