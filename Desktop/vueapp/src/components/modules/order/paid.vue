<template>
  <div>
    <div class="orderList">
      <ul class="order-info">
        <li class="" v-for="paidItem in paidList">
          <a :title="paidItem.nameCn">
            <div class="list-pro-img">
              <img :src="ctximg(paidItem.cakeImg)" :alt="paidItem.nameCn" class="lazy">
            </div>
            <div class="list-content">
              <h3>{{paidItem.name}}<span>{{paidItem.nameCn}}</span></h3>
              <span class="price">{{paidItem.price}}</span>
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
  name: "paid",
  data: function() {
    return {
      paidList: []
    };
  },
  created() {
    let api = new API();
    api.basicGetData(routeMap.order, {}).then(response => {
      if (response.data && response.data.error == 0) {
        this.paidList = response.data.paid;
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
