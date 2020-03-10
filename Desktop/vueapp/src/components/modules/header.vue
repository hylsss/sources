<template>
  <div>
    <div>
      <a href="javascript:void(0);" class="city">
        <span></span>广州
      </a>
      <a href="/" class="header-center">
        <img :src="ctximg('images/logo.png')" alt class="title-logo">
      </a>
      <!--<div class="right-cart-city">-->
      <!--<a href="javascript:void(0);" class="top-message"></a>-->
      <!--<a href="javascript:void(0);" class="top-cart cart-count-icon"><i></i><span>1</span></a>-->
      <!--</div>-->
      <div class="right-login">
        <router-link :to="{name:'login'}" class="top-login"><i></i>登录</router-link>&nbsp;|&nbsp;&nbsp;
        <router-link :to="{name:'register'}" class="top-register"><i></i>注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BasicUtils from "@/api/BasicUtils";

export default {
  name: "header",
  data: function() {
    return {};
  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    }
  }
};
</script>
