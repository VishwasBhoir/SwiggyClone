import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

const appRouter = createBrowserRouter([
	// path: '', element: <App />
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

export default appRouter;
