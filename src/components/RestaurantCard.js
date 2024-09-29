import { CDN_URL } from "../utils/constants";

const RestaurantCard = props => {
	const { name, cuisines, avgRating, cloudinaryImageId } = props?.resData?.info;
	const { slaString } = props?.resData?.info?.sla;
	return (
		<div className="res-card">
			<img src={CDN_URL + cloudinaryImageId} className="res-card-img" />
			<h3>{name ? name : "name"}</h3>
			<h4>Cuisines: {cuisines ? cuisines : "cuisine"}</h4>
			<h4>{avgRating ? avgRating : "avgRating"}</h4>
			<h4>{slaString ? slaString : "deliveryTime"}</h4>
		</div>
	);
};
export default RestaurantCard;
