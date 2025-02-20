interface IErrorResponse {
	status: number;
	type: string;
	message: string;
}

export interface IHttpResponse<T> {
	data: T | null;
	ready: boolean;
	error: false | IErrorResponse;
}