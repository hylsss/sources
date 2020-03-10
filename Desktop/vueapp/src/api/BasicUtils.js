// import jCookie from 'js-cookie'

export default {
    ctximg(url) {
        if (!url || url == "" || url.length == 0) { return ""; }
        if (/^(http(s)*\:)/ig.test(url)) {
            return url;
        } else {
            let replaceFolder = "pub"
            if (typeof(sitePrefixed) == "string") {
                if (sitePrefixed.length > 0) {
                    replaceFolder = sitePrefixed;
                }
            }
            url = url.replace(/\@(folder)/ig, replaceFolder);
            url = url.replace(/(\/|\\)+/ig, '/');
            url = url.replace(/^\/+/, "");
            url = ctxImg + "/" + url;
            return url;
        }
    },
    getUserToken(token = null) {
        if (token == null) {
            token = sessionStorage.getItem("userToken");
            if (token == null) {
                token = jCookie.get("token");
            }
        }
        return token;
    }
}