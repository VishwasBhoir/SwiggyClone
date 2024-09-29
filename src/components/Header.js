import logo from "./../../assets/VishFoodLogo.png";
import { useState } from "react";

const Header = () => {
	const [isLogin, setIsLogin] = useState(false);

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
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
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
