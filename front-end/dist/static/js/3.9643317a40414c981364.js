webpackJsonp([3],{483:function(t,e,a){var l=a(186)(a(494),a(506),null,null);t.exports=l.exports},494:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list",data:function(){return{tableData:[],cur_page:1,multipleSelection:[],select_word:"",is_search:!1,roles:[{val:"1",txt:"普通用户"},{val:"10",txt:"管理员"},{val:"100",txt:"超级管理员"}],curRow:null,load:!1}},methods:{fetchList:function(){var t=this;this.load=!0,this.func.ajaxGet(this.api.userList,function(e){t.tableData=e.data.users,t.load=!1})},handleCurrentChange:function(t){this.cur_page=t,this.getData()},search:function(){this.is_search=!0},handleDelete:function(t){var e=this;this.func.ajaxPost(this.api.userDelete,{id:t.id},function(a){if(200===a.data.code){var l=e.tableData.indexOf(t);e.tableData.splice(l,1),e.$message.success("删除成功")}})},changeRole:function(t){var e=this;this.func.ajaxPost(this.api.userChangeRole,{change_role:t,id:this.curRow.id},function(t){200===t.data.code&&(e.$message.success("成功"),e.fetchList())})},deleteMulti:function(){var t=this,e=this.multipleSelection,a=e.map(function(t){return t.id});this.func.ajaxPost(this.api.userDeleteMulti,{id:a},function(a){200===a.data.code&&(t.$message.success("删除成功"),e.forEach(function(e){var a=t.tableData.indexOf(e);t.tableData.splice(a,1)}))})},handleSelectionChange:function(t){this.multipleSelection=t}},created:function(){this.fetchList()}}},506:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-list"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("用户管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("用户列表")])],1)],1),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"筛选手机号码"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("router-link",{attrs:{to:"/user-form"}},[a("el-button",{attrs:{type:"success"}},[t._v("新增会员")])],1),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.deleteMulti}},[t._v("批量删除")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.load,expression:"load"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{width:"160",label:"添加日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-icon",{attrs:{name:"time"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.create_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"权限"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.role)+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{trigger:"click"},on:{command:t.changeRole}},[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.curRow=e.row}}},[t._v("\n                            修改权限"),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{slot:"dropdown"},t._l(t.roles,function(l){return a("el-dropdown-item",{key:l.val,attrs:{command:l.val,disabled:e.row.role==l.txt}},[t._v(t._s(l.txt)+"\n                            ")])}))],1),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除用户\n                    ")])]}}])})],1)],1)},staticRenderFns:[]}}});