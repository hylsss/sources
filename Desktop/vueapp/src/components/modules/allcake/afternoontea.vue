<template>
  <div class="list-pro-box">
    <div class="cakeBox">
      <div class="pro-list-title">
        <h2>咖啡<span>挂耳咖啡</span></h2>
      </div>
      <div class="list-box">
        <ul>
          <li v-for="(teaItem, index) in teaList" v-bind:class="{active: index == tabIndex}" v-on:click="cakeListTab(index, teaItem.id)">
            <a :href="teaItem.link" :title="teaItem.nameCn">
              <div class="list-pro-img">
                <img class="lazy" :src="ctximg(teaItem.cakeImg)" :alt="teaItem.nameCn">
              </div>
              <div class="list-content">
                <h3>{{teaItem.name}}<span>{{teaItem.nameCn}}</span></h3>
                <span class="price">{{teaItem.price}}</span>
                <div class="label" v-if="teaItem.isPopular">
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
  name: "afternoontea",
  data: function() {
    return {
      teaList: [],
      tabIndex: 0,
      selected: 0
    };
  },
  components: { Details },
  computed: {
    detailid: function() {
      return this.selected > 0 ? this.selected : (this.teaList.length > 0 ? this.teaList[0].id : 0);
    }
  },
  created() {
    let vueObject  = this;
    let api = new API();
    api.basicGetData(routeMap.tea, {}).then(response => {
      if (response.data && response.data.error == 0) {
        vueObject.teaList = response.data.data;
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
