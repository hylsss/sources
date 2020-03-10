<template>
  <div class="situationDix">
    <v-table
      is-horizontal-resize
      is-vertical-resize
      :is-loading="isLoading"
      :vertical-resize-offset="60"
      :columns="columns"
      :table-data="tableData"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
      :min-height="100"
      @on-custom-comp="customCompFunc"
      :select-all="selectALL"
      :multiple-sort="false"
      @sort-change="sortChange"
      :select-change="selectChange"
      :select-group-change="selectGroupChange"
      :paging-index="(pageIndex-1)*pageSize"
      style="width: 100%;"
    ></v-table>
    <div class="mt20 mb20 bold"></div>
    <v-pagination
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      :total="totalNum"
      :page-size="10"
      :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
    ></v-pagination>
   <component id="updatecontent" style="display:none" :is="EditView" :userinfo="updateItem" v-if="showEdit"></component>       
     
  </div>
</template>

<script>
import API from "@/api/API";
import routeMap from "@/api/RouteMap";
import BasicUtils from "@/api/BasicUtils";
import EditFrom from 'componentspath/modules/sale/from'
Vue.component("table-operation", {
  template:
    "<span>" +
    '<a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;\n' +
    '<a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>' +
    "</span>",
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    update(rowData,index) {
      let params = { type: "edit", index: this.index, rowData: this.rowData };
      this.$emit("on-custom-comp", params); 
    },
    deleteRow() {
      let params = { type: "delete", index: this.index };
      this.$emit("on-custom-comp", params);
    }
  }
});
Vue.component('table-select',{
        template:"<div>"+
        '<select v-model="rowData.ice" @on-change="select(1,2)">'+
        '<option v-for="item in booleanList" :value="item.id" :key="item.id">{{ item.name }}</option>'+'</select>'+"</div>",
        data:function(){
            return {booleanList:[
                    {
                       id:1,
                        name:"是"
                    },
                    {
                        id:0,
                        name:"否"
                    }
                ]}},
        props:{
            rowData:{
                type:Object
            },
            field:{
                type:String
            },
            index:{
                type:Number
            }
            
        },
        methods:{
            select(i, j) {
                console.log(i*j);
            }
        }
    });
export default {
  name: "situation",
  data: function() {
    return {
      isLoading: true,
      multipleSort: false,
      pageIndex: 1,
      pageSize: 10,
      updateItem: {},
      showEdit: false,
      EditView:EditFrom,
      columns: [
        {
          width: 60,
          titleAlign: "center",
          columnAlign: "center",
          type: "selection",
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "id",
          title: "序号",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          formatter: function(rowData, index, pagingIndex) {
            var currentIndex = index + pagingIndex;
            return currentIndex + 1;
          },
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "name",
          title: "姓名",
          width: 120,
          columnAlign: "center",
          titleAlign: "center",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "date",
          title: "日期",
          width: 80,
          columnAlign: "center",
          titleAlign: "center",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },

        {
          field: "phone",
          title: "电话",
          width: 200,
          columnAlign: "center",
          titleAlign: "center",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "money",
          title: "金额",
          width: 100,
          orderBy: "asc",
          columnAlign: "center",
          titleAlign: "center",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "custome-adv",
          title: "操作",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          componentName: "table-operation",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
        {
          field: "table-select",
          title: "选择",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          componentName: "table-select",
          isResize: true,
          titleCellClassName: "title-cell-class-name-test"
        },
      ],
      saleData: [],
      tableData: []
    };
  },
  computed: {
    totalNum: function() {
      return this.saleData.length;
    }
    
  },
  components:{
    EditFrom
  },
  created() {
    let vueObject = this;
    let api = new API();
    api.basicGetData(routeMap.sale, {}).then(response => {
        if (response.data && response.data.error == 0) {
          vueObject.isLoading = false;
          vueObject.saleData = response.data.data;
          vueObject.getTableData();
        }
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    ctximg(url) {
      return BasicUtils.ctximg(url);
    },
    getTableData() {
      let vueObject = this;
      vueObject.tableData = vueObject.saleData.slice((vueObject.pageIndex - 1) * vueObject.pageSize, vueObject.pageIndex * vueObject.pageSize);
    },
    pageChange(pageIndex) {
      let vueObject = this;
      vueObject.pageIndex = pageIndex;
      vueObject.getTableData();
    },
    pageSizeChange(pageSize) {
      let vueObject = this;
      vueObject.pageIndex = 1;
      vueObject.pageSize = pageSize;
      vueObject.getTableData();
    },
    sortChange(params) {
      let vueObject = this;
      if (params.money.length > 0) {
        vueObject.tableData.sort(function(a, b) {
          if (params.money === "asc") {
            return a.money - b.money;
          } else if (params.money === "desc") {
            return b.money - a.money;
          } else {
            return 0;
          }
        });
      } 
    },
    deleteItem(params) {
      this.$delete(this.tableData, params.index);
    },
    customCompFunc(params) {
      var vueObject = this;
      layui.use(["layer"], function(layer) {
        if (params.type === "delete") {
          layer.open({
            content: "用户将被删除，确定要删除吗？",
            btn: ["确定", "取消"],
            yes: function(index) {
              vueObject.deleteItem(params);
              layer.close(index);
            }
          });
        } else if (params.type === "edit") {
          vueObject.showEdit = true;
           vueObject.updateItem=params.rowData;
            console.log( vueObject.updateItem);
          // alert(`行号：${params.index} 姓名：${params.rowData["name"]}`);
            vueObject.$nextTick(function(){
              layer.open({
                type: 1,
                shade :0,
                moveType:1,
                skin: 'layui-layer-rim',
                area: ['420px', '250px'], 
                content:$("#updatecontent"),
               yes: function (index) {
                  layer.close(index);
               },
               cancel: function () { 
                 
               }
              });
            });
            
           
            
        }
      });
    }
  }
};
</script>
