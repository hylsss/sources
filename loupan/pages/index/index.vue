<template>
	<view class="container">
		<Header></Header>
		<view class="index-scroll">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="swiper in swiperlist">
					<view class="swiper-item">
						<image :src="swiper.imgurl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="menuList">
			<navigator class="menuItem" v-for="menu in menulist" url="">
				<image class="menuimg" :src="menu.img" mode=""></image>
				<text class="menutxt">{{menu.txt}}</text>
			</navigator>
		</view>
		<room-price></room-price>
		<room-command></room-command>
		<Footer></Footer>
	</view>
	
</template>

<script>
	import Header from '@/components/header.vue'
	import roomPrice from '@/components/roomprice.vue'
	import roomCommand from '@/components/roomcommand.vue'
	import Footer from '../../components/footer.vue'
	export default {
		data() {
			return {
                menulist:[
					{img:"../../static/images/nav-newhouse.png",txt:"新房"},
					{img:"../../static/images/nav-sale.png",txt:"二手房"},
					{img:"../../static/images/nav-rent.png",txt:"租房"},
					{img:"../../static/images/nav-overseas.png",txt:"找楼盘"},
					{img:"../../static/images/nav-garden.png",txt:"小区"},
				],
				swiperlist:[
					{imgurl:"/static/images/img1.jpg"},
					{imgurl:"/static/images/img2.jpg"},
					{imgurl:"/static/images/img3.jpg"}
				]
			}
		},
		components:{Header,roomPrice,roomCommand,Footer}
			}
</script>

<style>

</style>
