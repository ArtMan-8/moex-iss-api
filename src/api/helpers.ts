export const checkError = (data: any) => {
	const values: any = Object.values(data);

	const isError = values[0].columns[0] === "ERROR_MESSAGE";
	const errorMessage = values[0].data[0][0];

	return isError ? errorMessage : null;
};
