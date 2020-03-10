/**
 * Created by Think on 2018/5/11.
 */
// import axios from 'axios'
import config from './config'
import jQuery from 'jquery'
import RouteMap from './RouteMap'

class API {
    getStaticDocument(url, param, callback) {
        url = url.replace(/^\/+/, "");
        url = baseUrl + "/" + url;
        config.responseType = 'document';
        param = typeof(param) == "object" ? param : {};
        let promiseReponse = axios.get(url, { params: param }, config);
        promiseReponse.then((response) => {
            callback(response);
        }).catch(err => {
            console.log(err);
        });
    }

    basicPostData(url, param) {
        config.responseType = 'json';
        param = typeof(param) == "object" ? param : {};
        return axios.post(url, param, config);
    }

    basicGetData(url, param) {
        if (!/^(http:|https:|)\/\//ig.test(url)) {
            url = baseUrl + url;
        }
        config.responseType = 'json';
        param = typeof(param) == "object" ? param : {};
        return axios.get(url, { params: param }, config);
    }

}

export default API;