<template>
  <div class="list-pro-box">
    <div class="cakeBox">
      <div class="pro-list-title">
        <h2>面包<span>面包</span></h2>
      </div>
      <div class="list-box">
        <ul>
          <li v-for="(breadItem, index) in breadList" v-bind:class="{active: index == tabIndex}" v-on:click="cakeListTab(index, breadItem.id)">
            <a :href="breadItem.link" :title="breadItem.nameCn">
              <div class="list-pro-img">
                <img class="lazy" :src="ctximg(breadItem.cakeImg)" :alt="breadItem.nameCn">
              </div>
              <div class="list-content">
                <h3>{{breadItem.name}}<span>{{breadItem.nameCn}}</span></h3>
                <span class="price">{{breadItem.price}}</span>
                <div class="label" v-if="breadItem.isPopular">
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
  name: "bread",
  data: function() {
    return {
      breadList: [],
      tabIndex: 0,
      selected: 0
    };
  },
  components: { Details },
  computed: {
    detailid: function() {
      return this.selected > 0 ? this.selected : (this.breadList.length > 0 ? this.breadList[0].id : 0);
    }
  },
  created() {
    let vueObject  = this;
    let api = new API();
    api.basicGetData(routeMap.bread, {}).then(response => {
      if (response.data && response.data.error == 0) {
        vueObject.breadList = response.data.data;
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
