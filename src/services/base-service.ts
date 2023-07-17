import { RequestConfig } from "../utils/interfaces/request-config";

const sendRequest = async (requestConfig: RequestConfig) => {
    let response = await fetch(requestConfig.url, {
        ...requestConfig,
        headers: {'Content-type': 'application/json'}
    });

    if(!response.ok){
        throw new Error("Something went wrong..");
    }

    response = await response.json();

    return response;
};

export default {
    sendRequest:sendRequest
};