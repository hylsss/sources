<template>
    <div>
          <table style="margin-top:20px;margin-left:23px;">
            <tr>
            <td>
               用户名:
            </td>
            <td>
                <input type="text" v-model="userinfo.name" name="user.name"/>
            </td>
            </tr>
            <tr>
            <td>
                电话:
            </td>
            <td>
                <input type="text" v-model="userinfo.phone" name="user.phone"/>
            </td>
            </tr>
            <tr>
            <td>
                金额:
            </td>
            <td>
                <input type="text" v-model="userinfo.money"  name="user.money"/>
            </td>
            </tr>
        </table>
        <div class="layui-layer-btn layui-layer-btn-"><a class="layui-layer-btn0"  @click="submitForm()">保存</a></div>
    </div>
</template>
<script>
export default {
    name:"efitFrom",
    data:function(){
        return{
          userinfo: {}
        }
    },
    props:['userinfo'],
    methods:{
        submitForm() {
            var vueObject = this;
            
        }
    }
}
</script>
