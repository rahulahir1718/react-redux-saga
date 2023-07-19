import { RequestConfig } from "../utils/interfaces/request-config";

const sendRequest = async (requestConfig: RequestConfig) => {
    let response = await fetch(requestConfig.url, {
        ...requestConfig,
        headers: {'Content-type': 'application/json'}
    });

    if(!response.ok){
        throw new Error("Something went wrong..");
    }

    let headers = response.headers;
    let data = await response.json();

    return {data, headers};
};

export default {
    sendRequest:sendRequest
};