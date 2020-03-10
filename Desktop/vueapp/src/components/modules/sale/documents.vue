<template>
  <div>
    <div class="situationDix">
      销售单据
    </div>
  </div>
</template>
<script>
  import BasicUtils from '@/api/BasicUtils'
  export default {
    name:'documents',
    methods:{
      ctximg(url){
        return BasicUtils.ctximg(url);
      }
    }
  }
</script>
