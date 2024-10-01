import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	console.log(err);

	return (
		<div className="err-message-container">
			<div className="err-info">
				<h1>{err.status}</h1>
				<h2 >{err.statusText}</h2>
			</div>
		</div>
	);
};

export default Error;
