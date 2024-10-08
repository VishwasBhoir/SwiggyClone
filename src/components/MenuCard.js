import { MENU_IMG_URL } from "../utils/constants";
import { MdLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AddToCartButton } from "../utils/CustomButtons";

const MenuCard = props => {
	// console.log("menu info", props?.menu?.card?.info);
	const {
		name,
		imageId,
		price,
		defaultPrice,
		offerTags,
		ratings,
		description,
	} = props?.menu?.card?.info;
	// console.log("offer tags", offerTags[0].title);

	return (
		<div className="menu-card">
			<div className="menu-description-div">
				<h2 className="menu-title-text">{name}</h2>
				<div className="menu-offer-div">
					<h3>₹{defaultPrice ? defaultPrice / 100 : price / 100}</h3>
					{offerTags ? (
						<h4 className="offer-tag-text">
							<MdLocalOffer className="offer-icon" />
							{offerTags[0]?.title + " " + offerTags[0]?.subTitle}
						</h4>
					) : null}
				</div>
				{ratings?.aggregatedRating?.rating ? (
					<h4 className="rating-text">
						<FaStar /> {ratings?.aggregatedRating?.rating}
						{`(${ratings?.aggregatedRating?.ratingCountV2})`}
					</h4>
				) : null}
				<p className="description-text">{description}</p>
			</div>
			<div className="menu-img-div">
				<img src={MENU_IMG_URL + imageId} className="menu-img" />
				<AddToCartButton/>
			</div>
		</div>
	);
};
export default MenuCard;
