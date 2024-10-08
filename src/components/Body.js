import RestaurantCard from "./RestaurantCard";
import FilterBtn from "./FilterBtn";
import { useState, useEffect } from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from "react-router-dom";

const Body = () => {
	const [allRes, setAllRes] = useState([]);
	const [restaurants, setRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	// console.log(searchText);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1525562&lng=73.2426251&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const data = await response.json();

			setAllRes(
				data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || []
			);

			setRestaurants(
				data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || []
			);
		} catch (error) {
			console.log(error);
		}
	};

	const filterTopRestaurants = () => {
		const topRes = restaurants.filter(res => res.info.avgRating >= 4.2);
		setRestaurants(topRes);
	};

	const viewAllRes = () => {
		setRestaurants(allRes);
	};

	const handleSearch = event => {
		setSearchText(event.target.value);
		// console.log("searchText", searchText);
		// console.log("AllRes", allRes);
		const searchedRes = allRes.filter(res =>
			res.info.name.toLowerCase().includes(searchText.toLowerCase())
		);
		searchText.length === 0
			? setRestaurants(searchedRes)
			: setRestaurants(allRes);
	};

	return (
		<div className="bodyOuter">
			<div className="body">
				<div className="filter-div">
					<div className="search">
						<input
							type="text"
							className="search-input"
							placeholder="search"
							onChange={handleSearch}
							value={searchText}
						/>
						<button className="search-btn">Search 🔍</button>
					</div>
					<div className="filter-btn-div">
						<h3 className="sort-by-text">Sort by:</h3>
						<FilterBtn filterFunction={viewAllRes} btnName="View All" />
						<FilterBtn
							filterFunction={filterTopRestaurants}
							btnName="Top Rated Restaurants"
						/>
					</div>
				</div>

				{!restaurants.length ? (
					<div>
						<ShimmerPostList
							postStyle="STYLE_THREE"
							col={4}
							row={3}
							gap={30}
							className="res-shimmer"
						/>
					</div>
				) : (
					<div className="res-container">
						{restaurants.map(restaurant => (
							<Link
								className="link-item"
								to={`restaurant/${restaurant?.info?.id}`}
								key={restaurant?.info?.id}
							>
								<RestaurantCard resData={restaurant} />
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
export default Body;
