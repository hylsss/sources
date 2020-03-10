<script>
	export default {
		// onLaunch: function() {
		// 	console.log('App Launch')
		// },
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
	}
</script>

<style lang="less">
	/* 每个页面公共css */
	@font-face {
		font-family: 'iconfont';
		src: url('static/fonts/iconfont.ttf') format('truetype');
	}
	.iconfont {
		font-family: 'iconfont';
	}
	
	.user-title{
		font-size: 36upx;font-weight: 800;color: #333;
	}
	.more-top{
		 padding:60upx 20upx 20upx 20upx;border-bottom: 2upx solid #e5e5e5;
		 .back{float: left;color: #999;font-size:28upx;
		    text{margin-right: 8upx;font-size:32upx;}
		 }
		 .searchicon{float: right;padding-right: 10upx;color: #999;}
	}
	.clearfix{clear:both;}
	
	//header
	.header {
			padding: 60upx 20upx 20upx 20upx;
			background-color: #fff;
			.search-box {
			 display: flex;flex-direction: row;height: 90upx;align-items: center;
			 .search-left{
				 display: flex;flex-direction:row;border: 2upx solid #eaeaea;width: 90%;padding:15upx 8upx;border-radius: 8upx;
				 box-shadow: 0 2upx 6upx 2upx hsla(0,9%,77%,.14);
			   }
			}
			.city {border-right: 2upx solid #eee;width: 20%;padding-right: 20upx;
				.txt {
					display: block;font-size:28upx;color: #333;float: left;margin: 0 5upx;line-height: 2;
				}
				.map{font-size: 48upx;font-weight: 700;}
			}
			.text-body{
				display: flex;flex-direction: row;margin-left: 20upx;align-items: center;;
				.search{margin-right: 10upx;color: #999;}
				.uni-input-placeholder{
				  color: #ccc;font-size: 26upx}
			}
		}
		.user{font-size: 48upx;margin-left: 10upx;color: #888}
	
	// footer
	.footer{padding-top:20upx;background: #f1f1f1;
		  .footer-top{
			  padding: 15px;font-size: 28upx;color: #333;border-bottom: 2upx solid #f0f0f0;background: #fff;
		  }
		  .footer-bottom{background: #fff;padding-bottom: 20upx;
			  .footer-menu{padding: 30upx 20upx;display: flex;flex-direction: row;text-align: center;
			 text{font-size: 28upx;flex-grow: 1;}
			  }
			  .footer-txt{color: #ccc;font-size: 24upx;text-align: center;
			  .txt-top{margin-top: 10upx;}
			  }   
		  }
	}
	//roomcommand
	.roomcommand{padding: 0 20upx;
		  .more{color: #999;font-size: 28upx;float: right;}
		  .morehover{color: #f00;}
		  .content{padding:30upx 0 20upx 0;border-bottom: 2upx solid #ededed;
		   .item{
			   display: flex;flex-direction: row;
		   }
		   image{width: 220upx;height: 180upx;}
		   .detail{margin-left: 32upx;width: 64%;
		     .detailtitle{font-size: 30upx;font-weight: 700;}
			 .money{font-size: 32upx;color: #f00;padding-top: 8upx;}
			 .town{width:100%;color: #989898;font-size:26upx;margin-top: 6upx;overflow: hidden;text-overflow: ellipsis;white-space:nowrap;}
		    }	 
		  }
		  // .contentitem:last-child{border:none}
	}
	//roomlist
	.roomList{padding:60upx 20upx 0 20upx;
		  .contentitem{padding:30upx 0 20upx 0;display: flex;flex-direction: row;border-bottom: 2upx solid #ededed;
		   image{width: 220upx;height: 180upx;}
		   .detail{margin-left: 32upx;width: 64%;
		     .detailtitle{font-size: 30upx;font-weight: 700;}
			 .money{font-size: 32upx;color: #f00;padding-top: 8upx;}
			 .town{width:100%;color: #989898;font-size:26upx;margin-top: 6upx;overflow: hidden;text-overflow: ellipsis;white-space:nowrap;}
		    }	 
		  }
		  // .contentitem:last-child{border:none}
	}
	//roomprice
	.roomprice{
		padding: 30upx 20upx 0 20upx;
		.next{float:right;color: #999;}
		.price{
			padding: 32upx 22upx;display: flex;flex-direction: row;
			text{font-size: 24upx;color: #999;}
			.priceleft{width: 50%;
				.txtleft{padding: 10upx 0 20upx 0;
					.money{
						margin-right: 10upx;font-size: 48upx;font-weight: 800;color: #000;
					}
				} 
				.months{text-align: center;}
			}
			.priceright{
				text{color: #f00;}
				.precent{padding: 10upx 0 20upx 0;
					.red{
						font-size: 48upx;font-weight: 800;
					}
				}
				.txtright{color: #999;
				  .trangle{font-size: 28upx;}
				}
			}
		}	
	}
	
	// selected
	.filterbar {
			position: absolute;z-index: 2;left: 0;top: 144upx;width: 100%;background-color: #fff;height: 40upx;
			.bg-filterbar {
				position: fixed;width: 100%;height: 100%;background-color: black;opacity: 0.2;z-index: 1;left: 0;top:184upx;
			}
		
			.filterbar-title {
				width: 100%;
				.title-ul {
					height:45upx;margin-bottom:16upx;border-bottom: 1px solid #eee;
				}
		
				 .title-li {
					width: 24%;float: left;text-align: center;font-size: 28upx;color: #999;
		           .icon{margin-left: 10upx;}
					.filterbar-content {
						position: absolute;left: 0;width: 100%;padding: 16upx;background-color: #fff;z-index: 2;top: 40upx;box-sizing: border-box;
					}
		
					.content-ul view {
						text-align: left;color: #111;font-weight: 400;padding: 20upx 0 0 20upx;
					}
		
					.content-ul .current {
						color: #fd321d;
					}
				}
		
				view .current {
					color: #fd321d;font-weight: 400;
				}
		
				view:after {
					content: "";display: block;clear: both;
				}
		
				.content-ul .van-icon {
					float: right;
					margin-right: 80upx;
				}
			}
		
			.button-div {
				margin-top: 40upx;text-align: center;display: flex;flex-direction: row;justify-content: center;
				button {
					width:30%;
				}
				.clear{}
				.sure{}
			}
		}

//index
	.index-scroll{
		width: 100%;height: 290upx;margin-top:8upx;
		swiper{width: 100%;height:290upx;}
		.swiper-item{width: 100%;height: 100%;
			image{width: 95%;height:290upx;margin:5upx 10upx 10upx 10upx;border-radius:10upx; }
		}
	}
	.menuList{padding: 0 20upx;
		display: flex;flex-direction: row;margin-top: 20upx;
		.menuItem{flex-grow: 1;text-align: center;
			.menuimg{
				width:100upx;height: 100upx;
			}
			.menutxt{display: block;font-size: 28upx;color: #666;}
		}
	}
	//login
	.login{
		 .login-top{background:url(static/images/user-center-bg.png) no-repeat;background-size: cover;height: 290upx;position: relative;}
		 .login-back{
			 padding:40upx 20upx 20upx 20upx;display: flex;flex-direction: row;justify-content: space-between;align-items: center;
			 text{color: #fff;font-size:48upx;}
			 .back{float: left;color: #999;font-size:32upx;
			    text{margin-right: 6upx;font-size:32upx;}
			 }
			 .usercenter{font-size:32upx;font-weight: 600;}
		 }
		 .login-user{padding: 30upx 20upx 30upx 50upx; 
			 .user-img{
				 position: absolute;top: -60upx;left: 50%;z-index: 10;-webkit-transform: translate(-50%);transform: translate(-50%);
				 image{ width: 120upx;height: 120upx;border-radius: 60upx;}
				 .user-name{text-align: center;color: #999;}
			 }
			 .user-block{
				 position: relative;top:50upx;padding: 120upx 0 72upx;background-color: #fff;box-shadow: 0 4upx 26upx 6upx rgba(7,0,0,.05);border-radius: 10upx;
			   .user-record{
				   padding:20upx 30upx 0 30upx;display:flex;flex-direction: row;justify-content: space-between;
				   .record-item{
					   font-size: 32upx;color: #666;
					   text{margin-left: 8upx;}
				   }
			   }
			 } 
		 }
		 .user-follow{padding: 200upx 32upx 20upx;
		 	
			.followlist{padding: 20upx 40upx 0 40upx;display: flex;flex-direction: row;justify-content: space-between;
			    .follow-item{
					color: #a5a491;font-size: 32upx;
				}      
			         .iconfont{
				       text-align: center;font-size:48upx;margin-bottom: 8upx;
			  }
			}
		 }
	    .user{
			  padding:40upx 30upx 0 30upx;
			  image{margin: 32upx 0;width:100%; height:200upx}
			  .usermenu{padding-top: 20upx;
				  display: flex;flex-direction: row;justify-content: space-between;
				  text{font-size: 32upx;color: #666;}
				  .iconfont{font-size: 48upx;color:#999;}
				  .menuitem{
					 padding:0 20upx; height: 100upx;line-height:100upx;background: #f5f5f5;border: 2upx solid #eaeaea;border-radius: 4upx;
				  }
			  }
		 }
		 
	}
	//roomdetail
	.scroll{height: 500upx;
		 image{width: 100%;height: 100%;}
	}
	.roomdetail-top{
		 .roomdetail-back{
			 position: absolute;top: 20upx;z-index: 10;display: flex;align-items: center;justify-content: center;width: 80upx;
			 height: 80upx;color: #fff;line-height: 1;background-color: rgba(0,0,0,.8);border-radius: 8upx;
		 }
		 .back{left: 20upx;}
		 .homepage{right: 20upx;}
	}
	.roomdetail-content{padding: 30upx 20upx 0 20upx;
	  .title{width:100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;border-bottom: 2upx solid #e6e6e6; padding-bottom: 40upx;}
	  .roomdetail-areas{padding: 30upx;display: flex;flex-direction: row;justify-content: space-between;border-bottom: 2upx solid #e6e6e6;
	      .areas-item{text-align: center;border-right: 2upx solid #e6e6e6;padding-right: 40upx;
		     .txt-first{color: #f00;font-size: 32upx;font-weight: 600;}
			 .txt-last{
				 color: #999;font-size: 28upx;margin-top: 8upx;
			 }
			 &:last-child{border-right: 0;}
		   }
	  }
	  .roomdetail-txt{
		   font-size: 28upx;color: #999;padding:0 20upx 0 20upx;
		   view{padding: 16upx 0;}
		   text{margin-left: 6upx;color: #666;}
	  }
	  .checkmore{
	  margin height: 80upx;line-height:80upx;text-align:center;margin-top: 32upx;font-size: 28upx;color: #6789b2;background-color: #f5f5f5;		   
	  }
	  .room-map{
		   padding:30upx 0;
		   image{width: 100%;height: 300upx;}
	  }
	}
	//aboutus
	.aboutus{
		.about-top{
			padding:50upx 20upx 20upx 20upx;display:flex;flex-direction: row;justify-content:space-between;background:#ffc600;
			text{color: #fff;}
		}
		image{width: 100%;height: 360upx;}
		.about-txt{
			.line{margin-left: 15px;padding: 0 10px;border-left: 3px solid #333;
			 text{color: #666;font-size:30upx;}
			}
			.about-content{
				display: block;padding: 30upx;font-size: 28upx;color: #333;line-height: 1.8;
				.contactus{
					display: flex;flex-direction: column;
					.contact{display: flex;flex-direction:row;align-items: center;margin:20upx;
						.circle{
							    width: 80upx;height: 80upx;margin-right: 30upx;font-size: 24px;color: #333;border-radius: 50%;background-color: #eee;align-items: center;
						        text{text-align: center;margin-left: 16upx;}
						}
						.contact-phone{
							font-weight: 600;
						}
					}
				}
			}
		}
	}
	
	
	
	
	
</style>
