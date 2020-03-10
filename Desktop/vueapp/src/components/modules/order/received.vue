<template>
  <div>
    <div class="orderList">
      <ul class="order-info">
        <li class="" v-for="receivedItem in receivedList">
          <a :title="receivedItem.nameCn">
            <div class="list-pro-img">
              <img :src="ctximg(receivedItem.cakeImg)" :alt="receivedItem.nameCn" class="lazy">
            </div>
            <div class="list-content">
              <h3>{{receivedItem.name}}<span>{{receivedItem.nameCn}}</span></h3>
              <span class="price">{{receivedItem.price}}</span>
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
  name: "received",
  data: function() {
    return {
      receivedList: []
    };
  },
  created() {
    let api = new API();
    api.basicGetData(routeMap.order, {}).then(response => {
      if (response.data && response.data.error == 0) {
        this.receivedList = response.data.received;
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
