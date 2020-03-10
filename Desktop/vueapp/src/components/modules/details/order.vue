<template>
  <div>
    <div class="orderBox">
      <div class="order-menu">
        <ul id="header_nav" class="clearfix">
          <li v-for="(orderName, index) in order" v-bind:class="{active: index == curr}" v-on:click="ordertab(index)">
            <a>{{orderName.name}}</a>
          </li>
        </ul>
      </div>
      <component :is="orderView"></component>
    </div>
  </div>
</template>
<script>
import BasicUtils from "@/api/BasicUtils";
import Allorder from "componentspath/modules/order/allorder";
import Delivered from "componentspath/modules/order/delivered";
import Paid from "componentspath/modules/order/paid";
import Received from "componentspath/modules/order/received";
export default {
  name: "order",
  data: function() {
    return {
      orderView: Allorder,
      curr: 0,
      order: [
        { name: "全部" },
        { name: "待付款" },
        { name: "待发货" },
        { name: "待收货" }
      ]
    };
  },
  components: { Allorder, Paid, Delivered, Received },
  methods: {
    ordertab(index) {
      let orderArray = [Allorder, Paid, Delivered, Received];
      this.curr = index;
      this.orderView = orderArray[index];
    },
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>
