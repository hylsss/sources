<template>
	<view class="roomList">
		<view class="list-content" >
			<view  v-for="(command,index) in  commandlist" :key="index">
				<navigator :url="command.url" class="contentitem">
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
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"},
					{img:"../../static/images/15664754192620_400x300.jpg",name:"龙光玖龙湾",money:"15000",town:"小榄镇",content:"97-115㎡住宅在售 均价约13500元/㎡",url:"/pages/roomdetail/roomdetail"}
				]
			};
		}
	}
</script>

<style>
	
	
</style>

