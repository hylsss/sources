<template>
	<view class="aboutus">
		
		<view class="about-top">
			<navigator url="/pages/index/index" class="back">
						  <text class="iconfont">&#xe611;</text>
			</navigator>
			<text class="usercenter">关于我们</text>
			<text class="iconfont menu" @click="visible =!visible">&#xe671;</text>
		</view>
		<image src="../../static/images/about-us.jpg" mode=""></image>
		<view class="about-txt">
			<view class="line">
				<text>关于我们</text>
			</view>
			<view class="about-content">
				Q房网集团是一家以互联网+为主导、以房地产交易为主营业务并涵盖O2O经纪业务、新房电商的大型互联网集团。并已获得“国家高新技术企业”、
				“双软认证”、“价格定点监测单位”及19项软件著作权。
			</view>
			<view class="line">
				<text>联系我们</text>
			</view>
			<view class="about-content">
				<view class="contactus">
					<view class="contact">
						<view class="circle">
							<text class="iconfont">&#xe6ee;</text>
						</view>
						<view class="contact-phone">
							<view>联系电话</view>
							<view>86+13195621478</view>
						</view>
					</view>
					<view class="contact">
						<view class="circle">
							<text class="iconfont">&#xe633;</text>
						</view>
						<view class="contact-phone">
							<view>邮箱</view>
							<view>www.102658963@qq.com</view>
						</view>
					</view>
				</view>
			</view>
			<view class="line">
				<text>办公地址</text>
			</view>
			<view class="about-content">
				<text>中山日升广场</text>
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>

<script>
	import Footer from "@/components/footer.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},components:{Footer}
	}
</script>

<style>

</style>
