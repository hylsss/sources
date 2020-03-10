<template>
  <div>
    <div class="wrapDetalis">
      <ul class="detailsUl clearfix">
        <li v-for="(detailsName, index) in detailsUl" :class="{active: index == curr}" @click="datialTab(index)">
          {{detailsName.name}}
        </li>
      </ul>
    </div>
    <keep-alive>
      <component :is="datailsView"></component>
    </keep-alive>
  </div>
</template>
<script>
import BasicUtils from "@/api/BasicUtils";
import Commodity from "componentspath/modules/details/commodity";
import Order from "componentspath/modules/details/order";

export default {
  name: "details",
  data: function() {
    return {
      detailsUl: [{ name: "商品详情" }, { name: "商品订单" }],
      datailsView: Commodity,
      curr: 0
    };
  },
  components: { Commodity, Order },
  created() {
    document.getElementsByTagName("body")[0].id = "details";
  },
  mounted() {

  },
  methods: {
    datialTab(index) {
      let vueObject  = this;
      let detalisArray = [Commodity, Order];
      vueObject.curr = index;
      vueObject.datailsView = detalisArray[index];
    },
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>

