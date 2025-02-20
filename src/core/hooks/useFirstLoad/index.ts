// -- core
import { useState, useEffect } from "react";

// -- type
import { IModelResponse } from "./type";

const useFirstLoad = <T>(model: Promise<IModelResponse<T>>) => {
	const [ready, setReady] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<boolean>(false);

	const handleFetch = async () => {
		const { data: dataResponse, error: errorResponse } = await model;
		if (errorResponse) {
			setError(errorResponse);
		} else {
			setData(dataResponse);
		}
		setReady(true);
	};

	useEffect(() => {
		handleFetch();
		// eslint-disable-next-line
	}, []);

	return {
		ready,
		data,
		error,
	};
};

export default useFirstLoad;
