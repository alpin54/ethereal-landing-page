// -- core
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// -- type
import { IHttpResponse } from "./type";

// -- httpRequest
const httpRequest = async <T>(
	param: AxiosRequestConfig
): Promise<IHttpResponse<T>> => {
	let config: AxiosRequestConfig = { ...param };

	if (param.headers && param.headers.token) {
		config = {
			...param,
			headers: {
				...param.headers,
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		};
	}

	return await axios(config)
		.then((response: AxiosResponse<T>) => {
			return { data: response.data, ready: true, error: false as const };
		})
		.catch((error) => {
			if (error.response !== undefined) {
				return {
					data: null,
					ready: false,
					error: {
						status: error.response.status,
						type: error.name,
						message: error.message,
					},
				};
			} else {
				return {
					data: null,
					ready: false,
					error: {
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					},
				};
			}
		});
};

export default httpRequest;
