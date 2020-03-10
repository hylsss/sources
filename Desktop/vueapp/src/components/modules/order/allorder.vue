<template>
  <div>
    <div class="orderList">
      <ul class="order-info">
        <li class="" v-for="allorderItem in allorderList">
          <a :title="allorderItem.nameCn">
            <div class="list-pro-img">
              <img :src="ctximg(allorderItem.cakeImg)" :alt="allorderItem.nameCn" class="lazy">
            </div>
            <div class="list-content">
              <h3>{{allorderItem.name}}<span>{{allorderItem.nameCn}}</span></h3>
              <span class="price">{{allorderItem.price}}</span>
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
  name: "allorder",
  data: function() {
    return {
      allorderList: []
    };
  },
  created() {
    let api = new API();
    api.basicGetData(routeMap.order, {}).then(response => {
      if (response.data && response.data.error == 0) {
        this.allorderList = response.data.allorder;
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
