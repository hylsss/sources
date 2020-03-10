<template>
	<view class="morerooms">
		<more-top></more-top>
		<room-list></room-list>
		<Selected></Selected>
	</view>
</template>

<script>
	import moreTop from '@/components/moretop.vue'
	import roomList from '@/components/roomlist.vue'
	import Selected from '@/components/selected.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{moreTop,roomList,Selected}
	}
</script>

<style>

</style>
