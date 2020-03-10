export default {
    trim(strtext) {
        return (strtext + "").replace(/^\s+/, '').replace(/\s+$/, '');
    },
    equalIgnoreCase(originalStr, compareStr) {
        return this.trim(originalStr).toLowerCase() == this.trim(compareStr).toLowerCase();
    },
    getCurrencyFormat(money) {
        if (typeof(money) != 'undefined') {
            return money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } else {
            return '0.00';
        }
    },
    delAllHtmlTag(htmlStr) {
        return htmlStr.replace(/<[^>]+>|&[^>]+;/ig, "");
    }
}