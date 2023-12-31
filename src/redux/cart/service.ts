import baseService from "../../services/base-service";
import { RequestConfig } from "../../utils/interfaces/request-config";

const baseUrl = "http://localhost:4000";

const getCart = async(data?:any) => {
    
    let requestConfig : RequestConfig = {
        url : `${baseUrl}/cart${data && data.sortBy && data.sortBy.length > 0 ? '?_sort=' + data.sortBy + '&_order=' + data.sortOrder + '&' : '?'}${data && data.pageNo ? '_page=' + data.pageNo + '&_limit=' +  data.pageSize: ''}`,
        method: 'GET',
        body: null
    }
    
    return baseService.sendRequest(requestConfig);
}

const addToCart = async(data:any) => {
    let requestConfig : RequestConfig = {
        url : baseUrl + '/cart',
        method: 'POST',
        body: JSON.stringify(data)
    }
    
    return baseService.sendRequest(requestConfig);
}

const deleteFromCart = async(id:number) => {
    let requestConfig : RequestConfig = {
        url : baseUrl + '/cart/' + id,
        method: 'DELETE',
        body: null
    }
    
    return baseService.sendRequest(requestConfig);
}

const editCart = async(data:any) => {
    let requestConfig : RequestConfig = {
        url : baseUrl + '/cart/' + data.id,
        method: 'PUT',
        body: JSON.stringify(data)
    }

    return baseService.sendRequest(requestConfig);
}

export default {
    getCart,
    addToCart,
    deleteFromCart,
    editCart
};