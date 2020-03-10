import API from "@/api/API";
import routeMap from "@/api/RouteMap";

export default {
    state: {
        detailid: 0,
        details: {}
    },
    mutations: {
        resetDetailId(state, params) {
            state.detailid = params;
            return true;
        },
        resetDetailContent(state, params) {
            state.details = params;
            return true;
        }
    },
    actions: {
        getDetails(context) {
            let api = new API();
            api.basicGetData(routeMap.details, {id: context.state.detailid}).then(response => {
                let details = response.data.data;
                context.commit("resetDetailContent", details);
            }).catch(error => {
                console.log(error);
            });
        }
    }
}