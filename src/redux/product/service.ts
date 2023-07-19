import baseService from "../../services/base-service";
import { RequestConfig } from "../../utils/interfaces/request-config";

const baseUrl = "http://localhost:4000";

const getProductList = async(data:any) => {
    let requestConfig : RequestConfig = {
        url : `${baseUrl}/products${data && data.name && data.name.length > 0 ? '?productName_like='+data.name : ''}${data && data.sortBy && data.sortBy.length > 0 ? '?_sort=' + data.sortBy + '&_order=' + data.sortOrder + '&' : '?'}${data && data.pageNo ? '_page=' + data.pageNo + '&_limit=' +  data.pageSize: ''}`,
        method: 'GET',
        body: null
    }
    return baseService.sendRequest(requestConfig);
}

const addEditProduct = async(data: any) => {
    let requestConfig : RequestConfig = {
        url : `${baseUrl}/products${data.id ? '/'+data.id : ''}`,
        method: data.id ? 'PUT' : 'POST',
        body: JSON.stringify(data)
    }
    
    return baseService.sendRequest(requestConfig);
}

const deleteProduct = async(id:number) => {
    let requestConfig : RequestConfig = {
        url : baseUrl + '/products/' + id,
        method: 'DELETE',
        body: null
    }
    
    return baseService.sendRequest(requestConfig);
}

export default {
    getProductList,
    addEditProduct,
    deleteProduct
};