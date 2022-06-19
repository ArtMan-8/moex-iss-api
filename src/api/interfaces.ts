export enum EResponseDataFormat {
	json = "json",
	csv = "csv",
	html = "html",
	xml = "xml",
}

export enum EResponseDataLanguage {
	ru = "ru",
	en = "en",
}

export interface IAxiosConfig {
	dataLanguage?: keyof typeof EResponseDataLanguage;
	dataFormat?: keyof typeof EResponseDataFormat;
}
