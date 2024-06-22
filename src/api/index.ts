import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import {
	EResponseDataFormat,
	EResponseDataLanguage,
	IMoexConfig,
} from "../client/interfaces";
import { API_BASE_URL } from "./constants";
import { checkError } from "./helpers";
import { TAxiosResponse } from "./interfaces";

export const createAxiosInstance = (config?: IMoexConfig): AxiosInstance => {
	const dataLanguage = config?.dataLanguage || EResponseDataLanguage.ru;
	const dataFormat = config?.dataFormat || EResponseDataFormat.json;

	const api = axios.create({
		baseURL: API_BASE_URL,
		withCredentials: true,
		params: {
			lang: dataLanguage,
		},
	});

	const setDataFormat = (config: AxiosRequestConfig) => {
		if (config.data != null && config.data.do_not_mutate_request) {
			return config;
		}

		return {
			...config,
			url: `${config.url}.${dataFormat}`,
		};
	};

	api.interceptors.request.use(setDataFormat);

	const onSuccess = (response: TAxiosResponse) => {
		const error = checkError(response.data);
		response.issError = error;
		return response;
	};

	const onError = (err: AxiosError) => {
		console.error(err);
	};

	api.interceptors.response.use(onSuccess, onError);

	return api;
};
