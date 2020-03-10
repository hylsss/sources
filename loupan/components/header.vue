<template>
	<view class="header">
		<view class="search-box">
			<view class="search-left">
				<navigator class="city" >
					<text class="txt">珠海</text>
					<text class="iconfont map" >&#xe613;</text>
				</navigator>
				<view class="text-body">
					<text class="iconfont search">&#xe601;</text>
					<input type="text" value="" placeholder="你想找的小区、商圈">
				</view>
			</view>
			<navigator class="user" url="/pages/login/login">
				<text class="iconfont">&#xe603;</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
		
</style>
