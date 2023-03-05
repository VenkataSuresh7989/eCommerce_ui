import { eventBus } from "@/main";
import store from "@/store";

export function displayPageInfo(url,type,chgData)
{
	console.log(url,type,chgData);
	var axios = require('axios');
	var config = (url == "/getProducts") ? 
	{ method: type, maxBodyLength: Infinity, url: store.state.baseURL + url.toString(), headers: { } } : 
	{ method: type, maxBodyLength: Infinity, url: store.state.baseURL + url.toString(), headers: { 'Content-Type': 'application/json' }, data : chgData };

	axios(config)
	.then(function (response) {
		eventBus.$emit("getInfo",response);
	})
	.catch(function (error) {
		console.log(error);
	});
}