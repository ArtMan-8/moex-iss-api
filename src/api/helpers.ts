import { TAxiosResponse } from "./interfaces";

export const checkError = (data: TAxiosResponse["data"]) => {
	const values: any[] = Object.values(data);

	const isError = values[0]?.columns[0] === "ERROR_MESSAGE";
	if (!isError) return null;

	const errorMessage = values[0]?.data[0][0];
	return errorMessage;
};
