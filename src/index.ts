export { default as MoexClient } from "./client";

import MoexClient from "./client";

const moexClient = new MoexClient();

(async () => {
	const response = await moexClient.info.getHandbooks();

	const a = response.data;
	console.log(a);
})();
