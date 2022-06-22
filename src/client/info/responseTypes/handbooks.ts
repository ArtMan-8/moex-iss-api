import {
	IHandbooksBoardGroupsResponse,
	IHandbooksBoardsResponse,
	IHandbooksDurationsResponse,
	IHandbooksEnginesResponse,
	IHandbooksMarketsResponse,
	IHandbooksSecurityCollectionsResponse,
	IHandbooksSecurityGroupsResponse,
	IHandbooksSecurityTypesResponse,
} from "./handbooks/";

export interface IHandbooksResponse {
	engines: IHandbooksEnginesResponse;
	markets: IHandbooksMarketsResponse;
	boards: IHandbooksBoardsResponse;
	boardgroups: IHandbooksBoardGroupsResponse;
	durations: IHandbooksDurationsResponse;
	securitytypes: IHandbooksSecurityTypesResponse;
	securitygroups: IHandbooksSecurityGroupsResponse;
	securitycollections: IHandbooksSecurityCollectionsResponse;
}
