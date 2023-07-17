import baseService from "../../services/base-service";
import { RequestConfig } from "../../utils/interfaces/request-config";

const baseUrl = "http://localhost:4000";

const getProductList = async(data:any) => {
    let requestConfig : RequestConfig = {
        url : `${baseUrl}/products${data && data.name && data.name.length > 0 ? '?productName_like='+data.name : ''}`,
        method: 'GET',
        body: null
    }
    
    return baseService.sendRequest(requestConfig);
}

export default {
    getProductList
};