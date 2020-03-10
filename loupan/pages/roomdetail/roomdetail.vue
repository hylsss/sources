<template>
	<view class="roomdetail">
	  <view class="roomdetail-top">
	  	<swiper class="scroll" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	  		<swiper-item  v-for="scroll in scrollimg">	
	  				<image :src="scroll.img" mode="" class="scroll-img"></image>
	  		</swiper-item>
	  	</swiper>
	  		<view class="roomdetail-back back">
	  			<navigator url="../index/index">
	  				<text class="iconfont">&#xe611;</text>
	  			</navigator>
	  		</view>
			<view class="roomdetail-back homepage">
	  			<navigator url="../index/index">
	  				<text class="iconfont">&#xe609;</text>
	  			</navigator>
	  		</view>	
	  </view>
	  <view class="roomdetail-content">
	  	<view class="title">
	  		<text class="user-title">华发水郡 5室2厅1厨3卫 278.0m² 毛坯</text>
	  	</view>
		<view class="roomdetail-areas" >
			<view class="areas-item" v-for="(item,index) in  arealist" :key="index">
				<view class="txt-first">
					{{item.money}}
				</view>
				<view class="txt-last">
					{{item.name}}
				</view>
			</view>	
		</view>
		<view class="roomdetail-txt">
			<view>单&nbsp;&nbsp;&nbsp;&nbsp;价:<text>17986元/m²</text></view>
			<view>费用预算:<text>贷款及税费情况请咨询经纪人</text></view>
			<view>朝&nbsp;&nbsp;&nbsp;&nbsp;向:<text>南北</text></view>
			<view>楼&nbsp;&nbsp;&nbsp;&nbsp;层:<text>高层/1层</text></view>
			<view>装&nbsp;&nbsp;&nbsp;&nbsp;修:<text>毛坯</text></view>
			<view>户型结构:<text>平房</text></view>
			<view>房源编号:<text>ZHDM02140488</text></view>
		</view>
		<view class="roomdetail-txt" v-show="showallmsg">
			<view>房屋用途:<text>住宅</text></view>
			<view>房屋年限:<text>满五唯一</text></view>
			<view>抵押信息:<text>抵押</text></view>
			<view>房屋备件:<text>已上传房本照片</text></view>
		</view>
		<view class="checkmore" @click="showallmsg = !showallmsg">
			查看更多信息
		</view>
		<view class="room-map">
			<view class="user-title">地址及周边设施</view>
			<!-- <map></map> -->
			<image src="../../static/images/map.png" mode=""></image>
		</view>
	  </view>
        <view class="detail-footer">
		  <Footer></Footer>
        </view>
	  <room-btn></room-btn>
	</view>
</template>

<script>
	import map from '../../components/map.vue'
	import Footer from '../../components/footer.vue'
	import roomBtn from '../../components/roomBtn.vue'
	export default {
		data() {
			return {
				scrollimg:[
					{img:"/static/images/loupan1.jpg"},
					{img:"/static/images/loupan2.jpg"},
					{img:"/static/images/loupan3.jpg"}
				],
				arealist:[
					{money:"500万",name:"售价"},
					{money:"2室1厅2卫",name:"房型"},
					{money:"278平方",name:"建筑面积"},
				],
				showallmsg:false
			}
		},
	   components:{map,Footer,roomBtn}
	}
</script>

<style>
.detail-footer{
	padding-bottom: 130upx;
}

</style>

