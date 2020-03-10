<template>
  <div>
    <div class="nav fl">
      <div class="accorNav">
        <div class="accordion-list">
          <h3>蛋糕类型</h3>
          <ul class="submenu">
            <li v-for="(cakeItem,index) in cakeNav" v-bind:class="{active:index == num}" @click="cakeNav(index)">
              <a>{{cakeItem.name}}</a>
            </li>
          </ul>
        </div>
        <div class="accordion-list">
          <h3><span></span>销售</h3>
          <ul class="submenu">
            <li>
              <a href="#">营业概况</a>
            </li>
            <li>
              <a href="#">销售单据</a>
            </li>
            <li>
              <a href="#">日结记录</a>
            </li>
            <li>
              <a href="#">营业趋势分析</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <component :is="cakeView"></component>
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

export default {
  name: "nav",
  data: function() {
    return {
      num: 0,
      cakeView: Cake,
      cakeNav: [
        { name: "蛋糕" },
        { name: "冰淇淋" },
        { name: "咖啡下午茶" },
        { name: "面包" },
        { name: "常温蛋糕" },
        { name: "设计师礼品" }
      ]
    };
  },
  components: { Cake, Ice, Afternoon, Bread, Temperature, Gift },
  methods: {
    cakeNav(index) {
      let cakeArray = [Cake, Ice, Afternoon, Bread, Temperature, Gift];
      this.num = index;
      this.cakeView = cakeArray[index];
    },
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>
