<template>
	<view class="roomcommand">
		<view class="list-title">
			<text class="user-title">楼盘推荐</text>
			<navigator url="/pages/morerooms/morerooms" class="more" hover-class="morehover">
				更多<text class="iconfont">&#xe63f;</text>
			</navigator>
		</view>
		<view class="list-content">
			<view class="content" v-for="command in  commandlist" >
			<navigator :url="command.url" class="item">
					<image :src="command.img" mode=""></image>
					<view class="detail">
						<view class="detailtitle">{{command.name}}</view>
						<view class="money">{{command.money}}<text>元/㎡</text></view>
						<view class="town">{{command.town}}</view>
						<view class="town">{{command.content}}</view>
				</view>
			</navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commandlist:[
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"}
				]
			};
		}
	}
</script>

<style >
 
</style>
