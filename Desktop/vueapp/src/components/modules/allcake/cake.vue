<template>
  <div class="list-pro-box">
    <div class="cakeBox">
      <div class="pro-list-title">
        <h2>蛋糕<span>新鲜乳脂奶油蛋糕</span></h2>
      </div>
      <div class="list-box">
        <ul>
          <li v-for="(cakeItem, index) in cakeList" v-bind:class="{active: index == tabIndex}" v-on:click="cakeListTab(index, cakeItem.id)">
            <a :href="cakeItem.link" :title="cakeItem.nameCn">
              <div class="list-pro-img">
                <img class="lazy" :src="ctximg(cakeItem.cakeImg)" :alt="cakeItem.nameCn">
              </div>
              <div class="list-content">
                <h3>{{cakeItem.name}}<span>{{cakeItem.nameCn}}</span></h3>
                <span class="price">{{cakeItem.price}}</span>
                <div class="label" v-if="cakeItem.isPopular">
                  <img :src="ctximg('images/renqi.png')">
                </div>
              </div>
              <i class="go"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Details class="detailsBox"></Details>
  </div>
</template>
<script>
import API from "@/api/API";
import routeMap from "@/api/RouteMap";
import BasicUtils from "@/api/BasicUtils";
import Details from "componentspath/modules/details";

export default {
  name: "cake",
  data: function() {
    return {
      tabIndex: 0,
      cakeList: [],
      selected: 0
    };
  },
  components: { Details },
  computed: {
    detailid: function() {
      return this.selected > 0 ? this.selected : (this.cakeList.length > 0 ? this.cakeList[0].id : 0);
    }
  },
  created() {
    let vueObject  = this;
    let api = new API();
    api.basicGetData(routeMap.cake, {}).then(response => {
      if (response.data && response.data.error == 0) {
        vueObject.cakeList = response.data.data;
        vueObject.$store.commit('resetDetailId', vueObject.detailid);
        vueObject.$store.dispatch("getDetails");
      }
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    },
    cakeListTab(index, id) {
      let vueObject  = this;
      vueObject.tabIndex = index;
      vueObject.selected = id;
      vueObject.$store.commit('resetDetailId', vueObject.detailid);
      vueObject.$store.dispatch("getDetails");
    }
  }
};
</script>
