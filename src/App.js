import { Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import LikePostList from './components/LikePostList';


function App() {
	return (
		<>
			<Route path="/login" exact component={Login} />
			<Route path="/" exact component={LikePostList} />
		</>
	);
}

export default App;
