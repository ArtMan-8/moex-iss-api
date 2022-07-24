import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityGroupCollectionResponse } from "../responseTypes";
import { ESecurityGroups } from "./securityGroups";

export type TGetSecurityGroupCollection = (
	securitygroup: ESecurityGroups,
) => Promise<TAxiosResponse<ISecurityGroupCollectionResponse>>;
