import { Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";


function App() {
	return (
		<>
			<Route path="/login" exact component={Login} />
		</>
	);
}

export default App;
