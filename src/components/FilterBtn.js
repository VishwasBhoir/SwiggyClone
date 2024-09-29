const TopRatedRestaurantFilterBtn = props => {
	const { filterFunction, btnName } = props;

	return (
		<div className="filter">
			<button className="filter-btn" onClick={filterFunction}>
				{btnName}
			</button>
		</div>
	);
};

export default TopRatedRestaurantFilterBtn;
