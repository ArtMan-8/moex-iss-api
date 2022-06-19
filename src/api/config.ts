import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from "axios";
import {
	EResponseDataFormat,
	EResponseDataLanguage,
	IAxiosConfig,
} from "./interfaces";

export const API_BASE_URL = "https://iss.moex.com/iss";

export const createAxiosInstance = (config?: IAxiosConfig): AxiosInstance => {
	const dataLanguage = config?.dataLanguage || EResponseDataLanguage.ru;
	const dataFormat = config?.dataFormat || EResponseDataFormat.json;

	const api = axios.create({
		baseURL: API_BASE_URL,
		withCredentials: true,
		params: {
			lang: dataLanguage,
		},
	});

	const setDataFormat = (config: AxiosRequestConfig) => ({
		...config,
		url: `${config.url}.${dataFormat}`,
	});

	api.interceptors.request.use(setDataFormat);

	const onSuccess = (response: AxiosResponse) => response;

	const onError = (err: AxiosError) => {
		console.error(err);
	};

	api.interceptors.response.use(onSuccess, onError);

	return api;
};
