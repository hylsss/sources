<template>
  <div class="list-pro-box">
    <div class="cakeBox">
      <div class="pro-list-title">
        <h2>常温蛋糕<span>方便携带，恰到好处的满足</span></h2>
      </div>
      <div class="list-box">
        <ul>
          <li v-for="(temItem, index) in temList" v-bind:class="{active: index == tabIndex}" v-on:click="cakeListTab(index, temItem.id)">
            <a :href="temItem.link" :title="temItem.nameCn">
              <div class="list-pro-img">
                <img class="lazy" :src="ctximg(temItem.cakeImg)" :alt="temItem.nameCn">
              </div>
              <div class="list-content">
                <h3>{{temItem.name}}<span>{{temItem.nameCn}}</span></h3>
                <span class="price">{{temItem.price}}</span>
                <div class="label" v-if="temItem.isPopular">
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
  name: "temperature",
  data: function() {
    return {
      temList: [],
      tabIndex: 0,
      selected: 0
    };
  },
  components: { Details },
  computed: {
    detailid: function() {
      return this.selected > 0 ? this.selected : (this.temList.length > 0 ? this.temList[0].id : 0);
    }
  },
  created() {
    let vueObject  = this;
    let api = new API();
    api.basicGetData(routeMap.tempte, {}).then(response => {
      if (response.data && response.data.error == 0) {
        vueObject.temList = response.data.data;
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
    cakeListTab: function(index, id) {
      let vueObject  = this;
      vueObject.tabIndex = index;
      vueObject.selected = id;
      vueObject.$store.commit('resetDetailId', vueObject.detailid);
      vueObject.$store.dispatch("getDetails");
    }
  }
};
</script>
