import logo from "./../../assets/VishFoodLogo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [myName, setMyName] = useState("vishwas");

	useEffect(() => {
		console.log("useEffect in header");
	}, [isLogin, myName]);

	const toggleLogin = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className="header">
			<div className="logoContainer">
				<a>
					<img className="logo" src={logo} />
				</a>
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<a href="#">Cart</a>
					</li>{" "}
					<button className="login-btn" onClick={toggleLogin}>
						{!isLogin ? "Login" : "Logout"}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
