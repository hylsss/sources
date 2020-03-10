/**
 * Created by Think on 2018/5/13.
 */

import jQuery from 'jquery'

let routeMap = {
  cake: "/cache/cake",
  tea: "/cache/teaList",
  bread: "/cache/bread",
  gift: "/cache/gift",
  ice: "/cache/ice",
  tempte: "/cache/tempte",
  order: "/cache/order",
  sale: "/cache/sale",
  details: "/cache/details"
}

let devRouteMap = {

}

let proRouteMap = {

}

if (process.env.NODE_ENV === 'development') {
    routeMap = jQuery.extend(routeMap, devRouteMap);
} else {
    routeMap = jQuery.extend(routeMap, proRouteMap);
}

export default routeMap
