import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import MenuCard from "./MenuCard";
import TopPickCarousel from "./TopPickCarousel";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const [resInfo, setResInfo] = useState(null);
	const [titleCardInfo, setTitleCardInfo] = useState(null);
	const [resMenus, setResMenus] = useState([]);
	const [topPicksData, setTopPicksData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setTitleCardInfo(resInfo?.cards[2]?.card?.card?.info);
		setResMenus(
			resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards
		);
	}, [resInfo]);

	const fetchData = async () => {
		try {
			const data = await fetch(`${MENU_API}${resId}`);
			const jsonData = await data.json();

			setResInfo(jsonData?.data);
			setTopPicksData(
				jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
					?.card?.card?.carousel
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="res-info-body">
			{console.log("Title Card", titleCardInfo)}
			<div className="res-info-container">
				<h1>{titleCardInfo?.name}</h1>

				<div className="res-info-card">
					<div className="res-info-title-div">
						<h2>
							{"⭐ " + titleCardInfo?.avgRating}{" "}
							{" (" + titleCardInfo?.totalRatings + ")"} 💕 ₹
							{titleCardInfo?.costForTwo /100} for two
						</h2>
						<h3>{titleCardInfo?.cuisines.join(", ")}</h3>
						<h3>{titleCardInfo?.sla?.slaString}</h3>
					</div>
				</div>

				<div className="deals-container">
					<h2>Top Picks</h2>
					<TopPickCarousel data={topPicksData} />
				</div>

				<div className="menu-container">
					<h2 className="menu-text">Menu</h2>
					<div>
						{resMenus?.map(menu => (
							<MenuCard menu={menu} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;
