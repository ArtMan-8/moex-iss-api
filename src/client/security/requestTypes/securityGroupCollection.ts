import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityGroupCollectionResponse } from "../responseTypes";
import { ESecurityGroups } from "./securityGroups";

export interface IGetSecurityGroupCollectionArgs {
	securitygroup: ESecurityGroups;
	collection?: string;
}

export type TGetSecurityGroupCollection = (
	args: IGetSecurityGroupCollectionArgs,
) => Promise<TAxiosResponse<ISecurityGroupCollectionResponse>>;
