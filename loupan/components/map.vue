<template>
       <view class="room-map">
         <map :latitude="latitude" :longitude="longitude" :markers="covers" id="roommap"></map>
       </view>
</template>
<script>
export default {
    data() {
        return {
            title: 'map',
            latitude: 22.64168,
            longitude: 113.27261,
            covers: [{
                latitude: 22.641,
                longitude: 113.27261
                // iconPath: '../../../static/location.png'
            }, {
                latitude: 22.6444,
                longitude: 113.27261
                // iconPath: '../../../static/location.png'
            }]
        }
    },
    methods: {

    }
}
</script>
<style>
 
	
</style>
