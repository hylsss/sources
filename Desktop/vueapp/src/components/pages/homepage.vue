<template>
  <div id="content">
    <div class="nav fl">
      <div class="accorNav">
        <div class="accordion-list">
          <h3>蛋糕类型</h3>
          <ul class="submenu">
            <li v-for="(cakeItem, index) in cakeNav" v-bind:class="{active: index == curr}" v-on:click="cakeTab(index)">
              <a>{{cakeItem.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <component :is="pageView"></component>
  </div>
</template>

<script>
import BasicUtils from "@/api/BasicUtils";
import Cake from "componentspath/modules/allcake/cake";
import Bread from "componentspath/modules/allcake/bread";
import Afternoon from "componentspath/modules/allcake/afternoontea";
import Gift from "componentspath/modules/allcake/gift";
import Ice from "componentspath/modules/allcake/icecream";
import Temperature from "componentspath/modules/allcake/temperature";
import Details from "componentspath/modules/details";
import Documents from "componentspath/modules/sale/documents";
import Situation from "componentspath/modules/sale/situation";
import Managesales from "componentspath/modules/sale/managesales";
import Store from "componentspath/modules/sale/store";
export default {
  name: "HomePage",
  data: function() {
    return {
      cakedetails: Details,
      curr: 0,
      pageView: Cake,
      cakeNav: [
        { name: "蛋糕" },
        { name: "冰淇淋" },
        { name: "咖啡下午茶" },
        { name: "面包" },
        { name: "常温蛋糕" },
        { name: "设计师礼品" },
        { name: "营业概况" },
        { name: "销售单据" },
        { name: "管理销售" },
        { name: "管理门店" }
      ]
    };
  },
  components: { Cake, Ice, Afternoon, Bread, Temperature, Gift, Details, Documents, Situation, Managesales, Store },
  methods: {
    cakeTab(index) {
      let cakeArray = [Cake, Ice, Afternoon, Bread, Temperature, Gift, Situation, Documents, Managesales, Store];
      this.curr = index;
      this.pageView = cakeArray[index];
    },
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>

