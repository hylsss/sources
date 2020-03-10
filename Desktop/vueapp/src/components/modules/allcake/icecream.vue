<template>
  <div class="list-pro-box">
    <div class="cakeBox">
      <div class="pro-list-title">
        <h2>冰淇淋<span>10天生命的意式杰拉朵冰淇淋</span></h2>
      </div>
      <div class="list-box">
        <ul>
          <li v-for="(iceItem, index) in iceList" v-bind:class="{active: index == tabIndex}" v-on:click="cakeListTab(index, iceItem.id)">
            <a :href="iceItem.link" :title="iceItem.nameCn">
              <div class="list-pro-img">
                <img class="lazy" :src="ctximg(iceItem.cakeImg)" :alt="iceItem.nameCn">
              </div>
              <div class="list-content">
                <h3>{{iceItem.name}}<span>{{iceItem.nameCn}}</span></h3>
                <span class="price">{{iceItem.price}}</span>
                <div class="label" v-if="iceItem.isPopular">
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
  name: "icecream",
  data: function() {
    return {
      iceList: [],
      tabIndex: 0,
      selected: 0
    };
  },
  components: { Details },
  computed: {
    detailid: function() {
      return this.selected > 0 ? this.selected : (this.iceList.length > 0 ? this.iceList[0].id : 0);
    }
  },
  created() {
    let vueObject  = this;
    let api = new API();
    api.basicGetData(routeMap.ice, {}).then(response => {
      if (response.data && response.data.error == 0) {
        vueObject.iceList = response.data.data;
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
