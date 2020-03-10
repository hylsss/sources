<template>
  <div>
    <div class="login-div">
      <ul class="login-title">
        <li v-for="(tab, index) in tabs" v-bind:class="[{ 'active': index == curr }]" @click="tabSwitch(index, tab.type)">
          {{tab.name}}
        </li>
      </ul>
      <div class="login-box clearfix">
        <div class="con">
          <form action="javascript:void(0);" method="post">
            <ul class="login-input">
              <li>
                <div>
                  <input type="text" v-model="user.acctid" @change="validateUserId()" placeholder="用户名/邮箱地址">
                  <label class="error" for="acctid"></label>
                </div>
              </li>
              <li>
                <div>
                  <input type="password" v-model="user.acctpwd" @change="validateUserPwd()" placeholder="填写密码">
                  <label class="error" for="acctpwd"></label>
                </div>
              </li>
              <a href="javascript:void(0);" class="button-submit" @click="submitForm()">登录</a>
              <div class="remember-me">
                <input type="checkbox" name="rememberMe" v-model="rememberMe">记住账号
                <router-link :to="{name:'register'}">忘记密码</router-link>
              </div>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import API from "@/api/API";
import routeMap from "@/api/RouteMap";
import BasicUtils from "@/api/BasicUtils";

export default {
  name: "login",
  data: function() {
    let tabs = [
      { type: "sales", name: "销售登录" },
      { type: "store", name: "门店登录" }
    ]
    return { 
      tabs: tabs,
      curr: 0,
      loginType: "sales",
      user: {
        acctid: "",
        acctpwd: ""
      },
      rememberMe: true
    };
  },
  created() {
    document.getElementsByTagName("body")[0].id = "login";
  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    },
    tabSwitch(index, type) {
      let vueObject  = this;
      vueObject.$data.curr = index;
      vueObject.$data.loginType = type;
    },
    validateUserId(){
      this.user.acctid = this.user.acctid.replace(/\s+/ig, '');
      if (this.user.acctid.length == 0) {
        jQuery("label.error[for=acctid]").text('请输入账号');
        return false;
      }
      jQuery("label.error[for=acctid]").text('');
      return true;
    },
    validateUserPwd(){
      this.user.acctpwd = this.user.acctpwd.replace(/\s+/ig, '');
      if (this.user.acctpwd.length == 0) {
        jQuery("label.error[for=acctpwd]").text('请输入密码');
        return false;
      }
      jQuery("label.error[for=acctpwd]").text('');
      return true;
    },
    validateResult(){
      return this.validateUserId() && this.validateUserPwd();
    },
    submitForm() {
      let vueObject = this;
      let api = new API();
      if (vueObject.validateResult()) {
        /* api.basicPostData("", {}).then(response => {
          if (response.data && response.data.error == 0) {

          }
        }).catch(error => {
          console.log(error);
        }); */
        vueObject.$router.push({ name: "HomePage" });
      }
    }
  }
};
</script>
