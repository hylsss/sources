<template>
	<view  class="login">
		<view class="login-top">
			<view class="login-back">
				<navigator url="/pages/index/index" class="back">
							  <text class="iconfont">&#xe611;</text>
				</navigator>
				<text class="usercenter">个人中心</text>
				<text class="iconfont menu" @click="visible =!visible">&#xe671;</text>
			</view>
			<view class="login-user">
			  <view class="user-block">
			  	<view class="user-img">
			  		<image src="../../static/images/user.jpg" mode=""></image>
					<view class="user-name">user</view>
			  	</view>
				<view class="user-record">
					<view class="record-item" v-for="(record,index) in recordlist" :key="index">
						<navigator url="">
							{{record.name}}<text class="iconfont">&#xe63f;</text>
						</navigator>
					</view>
				</view>
				
			  </view>
			
			</view>
		</view>
		<view class="user-follow">
			<view class="user-title">我的关注</view>
			<view class="followlist" url="">
				<navigator class="follow-item">
					<view class="iconfont">&#xe609;</view>
					<view class="">新房</view>
				</navigator>
				<navigator class="follow-item">
					<view class="iconfont">&#xe68c;</view>
					<view class="">二手房</view>
				</navigator>
				<navigator class="follow-item">
					<view class="iconfont">&#xe655;</view>
					<view class="">小区</view>
				</navigator>
				<navigator class="follow-item">
					<view class="iconfont">&#xe610;</view>
					<view class="">楼盘</view>
				</navigator>
			</view>
		</view>
		<view class="user">
			<view class="user-title">我是业主</view>
			<image src="../../static/images/user-assess.png" mode=""></image>
			<view class="usermenu">
				<view class="menuitem">
					<text class="iconfont">&#xe610;</text>
					<text>我要卖房</text>
				</view>	
				<view class="menuitem">
					<text class="iconfont">&#xe610;</text>
					<text>我要出租</text>
				</view>	
				<view class="menuitem">
					<text class="iconfont">&#xe610;</text>
				     <text>我要委托</text>
				</view>
			</view>
		</view>
		<uni-drawer :visible="visible" mode="right" >
			<view class="shademenu">
			  <view class="">
			  	<navigator url="" class="link"><text class="iconfont">&#xe603;</text>登录/注册</navigator>
			  	<navigator url="" class="link"><text class="iconfont">&#xe619;</text>首页</navigator>
			  	<navigator url="" class="link"><text class="iconfont">&#xe655;</text>新房</navigator>
			  	<navigator url="" class="link"><text class="iconfont">&#xe68c;</text>二手房</navigator>
			  	<navigator url="" class="link"><text class="iconfont">&#xe610;</text>楼盘</navigator>	
				<navigator url="/pages/aboutus/aboutus" class="link"><text class="iconfont">&#xe64e;</text>关于我们</navigator>
			  </view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		data() {
			return {
				recordlist:[
				{name:"浏览记录"},
				{name:"我的订阅"},
				{name:"我的预约"}
				],
				visible:false
			
			
			}
		},
		methods:{
		},
		components:{
			uniDrawer
		}
	
			
	}
</script>

<style lang="less">
.shademenu {width: 360upx;
		view{
			display: flex;flex-direction: column;justify-content: center;text-align: left;
		
		.link{font-size: 32upx;color: #666;padding: 30upx 60upx;width: 100%;
		&:first-child{border-bottom: 2upx solid #e6e6e6;padding: 40upx 60upx;}
		}
		text{margin-right: 10upx;font-size:38upx;color:#b2b2b2}
		}
		
	}
	
</style>
