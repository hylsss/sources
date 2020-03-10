<template>
	<view class="roombtn">
		<button class="btn booking">预约看房</button>
		<button class="btn calling">电话咨询</button>
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

<style lang="less">
  .roombtn{
	      position: fixed;
	      right: 0;
	      bottom: 0;
	      left: 0;
	      z-index: 99999;
	      display: flex;
	      flex-direction: row;
	      justify-content: center;
	      padding: 20upx 30upx;
	      background-color: #fff;
	      box-shadow: 0 -2upx 20upx rgba(0,0,0,.06);
		  .btn{width: 45%;color: #fff;}
		  .booking{
			  background: linear-gradient(270deg,#ff555f,#ff888d);
		  }
		  .calling{
			  background: linear-gradient(270deg,#ffc800,#fd6);
		  }
  }
</style>
