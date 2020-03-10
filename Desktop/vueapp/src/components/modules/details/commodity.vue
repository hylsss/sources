<template>
  <div class="wrapForm">
    <form action="javascript:void(0);" method="post">
      <div class="details-box">
        <div id="details-suspension-pop">
          <i class="hide-button"></i>
          <div class="details-suspension">
            <div class="details-suspension-content">
              <p class="details-price">¥{{getCurrencyFormat(details.price)}}</p>
              <div class="suspension-spec-box details-options-fl">
                <img :src="ctximg('images/cicun.jpg')" alt="" class="size-img" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <ul class="details-options">
                  <li class="details-options-size">
                    <i></i>{{details.sizeW}}x{{details.sizeL}}
                  </li>
                  <li class="details-options-laid">
                    <i></i>含{{details.tableware}}套餐具
                  </li>
                  <li class="details-options-unmber">
                    <i></i>{{details.quantity}}
                  </li>
                  <li class="details-options-time">
                    <i></i>{{details.deliveryinfo}}
                  </li>
                </ul>
              </div>
              <div class="extra-box">
                <ul class="details-suspension-size-extra"></ul>
              </div>
              <div class="normal-box">
                <p class="detail-spec-title">商品规格</p>
                <ul class="details-suspension-size">
                  <li v-for="item in details.pounds" v-bind:class="{active: item == order.pounds}" @click="selectPounds(item)">
                    {{item}}磅
                  </li>
                  <li class>更多</li>
                </ul>
                <label class="error" for="pounds"></label>
              </div>
            </div>
          </div>
        </div>
        <div class="select-card">
          <div class="details-options-card">
            <ul class="details-options">
              <li class="details-options-size">
                <i></i>{{details.sizeW}}x{{details.sizeL}}
              </li>
              <li class="details-options-laid">
                <i></i>含{{details.tableware}}套餐具
              </li>
              <li class="details-options-unmber">
                <i></i>{{details.quantity}}
              </li>
              <li class="details-options-time">
                <i></i>{{details.deliveryinfo}}
              </li>
            </ul>
          </div>
          <ul class="store-info">
            <li class="baoxian">
              <i></i>
              <span>保鲜条件</span>
              <div><p>{{details.storage}}</p></div>
            </li>
            <li class="sweetList">
              <i></i>
              <span>参考甜度</span>
              <div>
                <p class="sweet-list">
                  <i v-bind:class="[{active: details.sweety > 0}]"></i>
                  <i v-bind:class="[{active: details.sweety > 1}]"></i>
                  <i v-bind:class="[{active: details.sweety > 2}]"></i>
                  <i v-bind:class="[{active: details.sweety > 3}]"></i>
                  <i v-bind:class="[{active: details.sweety > 4}]"></i>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="distribution">
          <ul class="store-info">
            <li class="peisong">
              <label class="label">提取方式</label>
              <span v-for="item in details.delivery" v-bind:class="{active: item.type == order.delivery}" @click="selectDeliverytype(item.type)">
                {{item.name}}
              </span>
            </li>
            <li class="peisong">
              <label class="label">手机号码</label>
              <input type="text" v-model="order.telephone" @change="validatePhone()" placeholder="请输入手机号码">
              <label class="error" for="telephone"></label>
            </li>
            <li class="peisong">
              <label class="label">祝福语</label>
              <input type="text" v-model="order.message" placeholder="请输入祝福语">
            </li>
            <li class="peisong">
              <label class="label">收货地址</label>
              <textarea v-model="order.address" @change="validateAddress()" placeholder="请输入收货地址"></textarea>
              <label class="error" for="address"></label>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-button detailsButton">
        <a href="javascript:void(0);" class="add-address-button empty-button" @click="submitForm()">立即下单</a>
      </div>
    </form>
  </div>
</template>
<script>
import API from "@/api/API";
import routeMap from "@/api/RouteMap";
import BasicUtils from "@/api/BasicUtils";
import StringUtils from "@/api/StringUtils";

export default {
  name: "commodity",
  data: function() {
    return {
      details: {},
      order: {
        pounds: 0,
        delivery: 0,
        telephone: "",
        message: "",
        address: ""
      }
    };
  },
  computed: {
    storeDetails: function() {
      return this.$store.state.DETAILS.details;
    }
  },
  watch: {
    storeDetails: function(a, b) {
      this.details = a;
    }
  },
  created() {
    document.getElementsByTagName("body")[0].id = "details";
  },
  mounted() {

  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    },
    getCurrencyFormat(money) {
      return StringUtils.getCurrencyFormat(money);
    },
    selectPounds(pound) {
      this.order.pounds = pound;
      jQuery("label.error[for=pounds]").text('');
    },
    selectDeliverytype(type) {
      this.order.delivery = type;
    },
    validatePounds(){ 
      if (this.order.pounds == 0) {
        jQuery("label.error[for=pounds]").text('请选择规格');
        return false;
      }
      jQuery("label.error[for=pounds]").text('');
      return true;
    },
    validatePhone(){ 
      this.order.telephone = this.order.telephone.replace(/\s+/ig, '');
      if (this.order.telephone.length == 0) {
        jQuery("label.error[for=telephone]").text('手机号码不能为空');
        return false;
      }
      if (this.order.telephone.length > 0) {
        if (this.order.telephone.length != 11) {
          jQuery("label.error[for=telephone]").text('请输入正确的手机号码');
          return false;
        }
        if (!/^([0-9]*)$/ig.test(this.order.telephone)) {
          jQuery("label.error[for=telephone]").text('请输入正确的手机号码');
          return false;
        }
      }
      jQuery("label.error[for=telephone]").text('');
      return true;
    },
    validatAddress(){
      this.order.address = this.order.address.replace(/\s+/ig, '');
      if (this.order.address.length == 0) {
        jQuery("label.error[for=address]").text('收货地址不能为空');
        return false;
      }
      jQuery("label.error[for=address]").text('');
      return true;
    },
    validateResult(){
      return this.validatePounds() && this.validatePhone() && this.validatAddress();
    },
    submitForm() {
      let vueObject = this;
      let api = new API();
      if (vueObject.validateResult()) {
        api.basicPostData("", {}).then(response => {
          if (response.data && response.data.error == 0) {

          }
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
};
</script>
