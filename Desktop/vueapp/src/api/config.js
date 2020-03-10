import Qs from 'qs'
// import jQuery from 'jquery'
export default {
    method: 'POST',
    // baseUrl在页面引用设置的，多站点时候可以动态找到
    baseURL: baseUrl,
    transformRequest: [function(data) {
        if (typeof(data) == "string") {
            return data;
        } else {
            // 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
            data.CustData = JSON.stringify(data.CustData);
            // 由于使用的form-data传数据所以要格式化
            data = Qs.stringify(data);
            return data;
        }
    }],
    transformResponse: [function(data) {
        if (typeof(data) == 'string') {
            data = jQuery.parseJSON(data);
        }
        return data;
    }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: {},
    paramsSerializer: function(params) {
        return Qs.stringify(params)
    },
    data: {},
    timeout: 120000,
    withCredentials: true, // default
    responseType: 'json', // default
    onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },
    onDownloadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },
    maxContentLength: 2000000,
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },
    maxRedirects: 5, // default
}