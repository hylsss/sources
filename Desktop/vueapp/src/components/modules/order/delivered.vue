<template>
  <div>
    <div class="orderList">
      <ul class="order-info">
        <li class="" v-for="deliveredItem in deliveredList">
          <a :title="deliveredItem.nameCn">
            <div class="list-pro-img">
              <img :src="ctximg(deliveredItem.cakeImg)" :alt="deliveredItem.nameCn" class="lazy">
            </div>
            <div class="list-content">
              <h3>{{deliveredItem.name}}<span>{{deliveredItem.nameCn}}</span></h3>
              <span class="price">{{deliveredItem.price}}</span>
              <p class="pei">配送方式:<span>到店提取</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from "@/api/API";
import routeMap from "@/api/RouteMap";
import BasicUtils from "@/api/BasicUtils";

export default {
  name: "delivered",
  data: function() {
    return {
      deliveredList: []
    };
  },
  created() {
    let api = new API();
    api.basicGetData(routeMap.order, {}).then(response => {
      if (response.data && response.data.error == 0) {
        this.deliveredList = response.data.delivered;
      }
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>
