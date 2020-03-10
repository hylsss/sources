<template>
	<view class="">
		<view class="filterbar">
			<view class="filterbar-title">
				<view class="title-ul">
					<!-- 循环 -->
					<view :class="{'title-li':true, 'current': item.isShow}" v-for="(item, index) in barMenus" :key="index">
						<text @click="handerClickMenu(item)">
							{{item.name}}
							<text class="iconfont icon-" v-if="item.isShow">&#xe608;</text>
							<text class="iconfont icon" v-else>&#xe607;</text>
						</text>
						<view class="filterbar-content"  v-if="item.isShow">
							<view class="content-ul">
								<view v-for="(child, number) in item.data" :key="number" :class="{'current': child.selected}" @click="handerClickContent(item, child)">
									{{child.name}}
								</view>
							</view>
							<view class="button-div">
						     <button   @click="handerClear(item)" form-type="reset" class="clear">清空</button>
		                     <button form-type="submit"  @click="search" class="sure">确定</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-filterbar" v-if="isBgFilterbarShow" @click="handerClickMenu"></view>
		</view>
			
	</view>

</template>

<script>
	export default {
		data() {
			return {
				barMenus: [{
						name: "位置",
						value: 1,
						isShow: false,
						multiple:false,
						data: [{
								name: "全部",
								value: 1,
								selected: false
							},
							{
								name: "火炬区",
								value: 2,
								selected: false
							},
							{
								name: "石岐区",
								value: 3,
								selected: false
							},
							{
								name: "东区",
								value: 4,
								selected: false
							},
							{
								name: "三角镇",
								value: 5,
								selected: false
							},
							{
								name: "西区",
								value: 6,
								selected: false
							},
							{
								name: "阜沙镇",
								value: 7,
								selected: false
							},
							{
								name: "港口镇",
								value: 8,
								selected: false
							}
						]
					},
					{
						name: "单价",
						value: 2,
						isShow: false,
						multiple: true,
						data: [{
								name: "全部",
								value: 1,
								selected: false
							},
							{
								name: "10000以下",
								value: 2,
								selected: false
							},
							{
								name: "10000-12000",
								value: 3,
								selected: false
							},
							{
								name: "10000-12000",
								value: 4,
								selected: false
							},
							{
								name: "10000-12000",
								value: 5,
								selected: false
							}
						]
					},
					{
						name: "户型",
						value: 3,
						isShow: false,
						multiple: true,
						data: [{
								name: "一室",
								value: 1,
								selected: false
							},
							{
								name: "两室",
								value: 2,
								selected: false
							},
							{
								name: "三室",
								value: 3,
								selected: false
							},
							{
								name: "四室",
								value: 4,
								selected: false
							}
						]
					},
					{
						name: "更多",
						value: 4,
						isShow: false,
						multiple: false,
						data: [{
								name: "类型",
								value: 1,
								selected: false
							},
							{
								name: "洋房",
								value: 2,
								selected: false
							},
							{
								name: "商铺",
								value: 3,
								selected: false
							}
						]
					}
				]
			};
		},
       
		computed: {
			isBgFilterbarShow:{
				get() {
					let isBgShow = false;
					this.barMenus.forEach(function(currentValue, index, arr) {
						if (currentValue.isShow) {
							isBgShow = true;
						}
					});
					return isBgShow;
				}
			}
		},
		methods: {
			search() {
				this.handerClose();
			},

			handerClose() {
				this.barMenus.forEach(function(currentValue, index, arr) {
					currentValue.isShow = false;
				});
			},

			handerClickMenu(item) {
				if (!item) {
					return;
				}
				this.barMenus.forEach(function(currentValue, index, arr) {
					if (currentValue.value == item.value) {
						currentValue.isShow = !currentValue.isShow;
					} else {
						currentValue.isShow = false;
					}
				});
			},

		  handerClickContent(item, child) {
		      if (!item.multiple) {
		        this.handerClear(item);
		        this.handerClose(item);
		      }
		
		      child.selected = !child.selected;
		    },

			
			handerClear(item) {
			  item.data.forEach(function(currentValue, index, arr) {
			    currentValue.selected = false;
			  });
			}
		}
	};
</script>

<style>

</style>
