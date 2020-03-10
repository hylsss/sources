<template>
	<view class="roomprice">
		 <view class="roomtitle">
		 	<text>中山新房楼价</text>
			<text class="iconfont next">&#xe63f;</text>
		 </view>
		 <view class="price">
		 	<view class="priceleft">
		 		<view class="txtleft">
		 			<text>
		 				<text class="money">{{money}}</text>元/㎡
		 			</text>
		 		</view>
				<text class="months">1月均价</text>
		 	</view>
			<view class="priceright">
				<view class="precent" >
					<text>
						<text class="red">{{precent}}</text>%
					</text>
				</view>
				<text class="txtright">环比上月<text class="iconfont trangle">&#xe643;</text></text>
			</view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:"11900",precent:-2.52
			};
		}
	}
</script>

<style>
.red{
	color: #f00;
}
.green{color: ff0;}
</style>
