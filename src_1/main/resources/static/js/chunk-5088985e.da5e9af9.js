(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5088985e"],{"0a21":function(t,e,s){"use strict";var o=s("7c95"),i=s.n(o);i.a},"5ca2":function(t,e,s){},"716f":function(t,e,s){"use strict";var o=s("cb13"),i=s.n(o);i.a},"7c95":function(t,e,s){},"7ee5":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-aside",{attrs:{width:"15%"}},[s("el-row",{staticClass:"tac"},[s("el-col",[s("br"),s("br"),s("el-button",{staticStyle:{"margin-left":"5%",width:"60%"},attrs:{type:"success",icon:"el-icon-edit"},nativeOn:{click:function(e){return t.GotoMarkDown(e)}}},[t._v("新建文档")]),s("br"),s("br"),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":t.$route.path},on:{open:t.handleOpen,close:t.handleClose}},[s("el-menu-item",{attrs:{index:"/homepage"}},[s("i",{staticClass:"el-icon-document"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("最近使用")])]),s("el-menu-item",{attrs:{index:"/Mycreate"}},[s("i",{staticClass:"el-icon-document"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的文档")])]),s("el-menu-item",{attrs:{index:"/mycollection"}},[s("i",{staticClass:"el-icon-menu"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的收藏")])]),s("el-menu-item",{attrs:{index:"/RecycleBin"}},[s("i",{staticClass:"el-icon-document"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 回 收 站 ")])])],1)],1)],1)],1)},i=[],n={methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},r=n,a=(s("0a21"),s("9ca4")),c=Object(a["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},9453:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("el-container",{staticStyle:{height:"100%"},attrs:{direction:"vertical"}},[o("el-header",[o("Topbar")],1),o("el-container",[o("Asidebar"),o("el-container",[o("el-main",[o("div",{staticClass:"block",staticStyle:{"line-height":"normal"}},[o("el-timeline",t._l(this.res.pageList,(function(e){return o("el-timeline-item",{key:e.date,attrs:{timestamp:e.dates,placement:"top"}},[o("el-row",{attrs:{gutter:14}},t._l(e.pageList,(function(e){return o("el-col",{key:e.id,attrs:{span:12}},[o("el-card",{staticStyle:{"margin-bottom":"10px"},attrs:{shadow:"hover","body-style":{padding:"0px"}},nativeOn:{click:function(s){return t.viewmk(e.id)}}},[o("el-image",{staticStyle:{width:"50px",height:"50px",float:"left","margin-left":"10px"},attrs:{src:s("ec92"),fit:t.fit}}),o("el-dropdown",{staticStyle:{float:"right","margin-top":"-15px","margin-right":"5px"}},[o("el-button",{staticStyle:{"border-color":"white"}},[o("i",{staticClass:"el-icon-more"})]),o("el-dropdown-menu",{staticStyle:{float:"right"},attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{nativeOn:{click:function(s){return t.recover(e.id)}}},[t._v("还原")]),o("el-dropdown-item",{staticStyle:{color:"red"},nativeOn:{click:function(s){return t.deleteCompletely(e.id)}}},[t._v("彻底删除")])],1)],1),o("h4",[t._v(t._s(e.title))]),o("p",[t._v(t._s(e.dates))])],1)],1)})),1)],1)})),1)],1)])],1)],1)],1)],1)},i=[],n=s("ddc0"),r=s("7ee5"),a={data:function(){return{res:{pageList:[]},dialogVisible:!1}},created:function(){sessionStorage.setItem("type",3),this.getDelPage(this.res)},components:{Topbar:n["a"],Asidebar:r["a"]},methods:{load:function(){this.count+=2},recover:function(t){var e=this;this.$http.get(this.requestUrl+"/recoverDoc",{params:{userId:sessionStorage.getItem("userId"),docId:t}}).then((function(t){t.data.success?(e.$message({message:"恢复成功",type:"success"}),location.reload()):e.$message.error("恢复失败！请重试")}))},deleteCompletely:function(t){var e=this;this.$http.get(this.requestUrl+"/delDocCompletely",{params:{userId:sessionStorage.getItem("userId"),docId:t}}).then((function(t){t.data.success?(e.$message({message:"删除成功",type:"success"}),location.reload()):e.$message.error("删除失败！请重试")}))},catwriter:function(t){this.docId=t,this.getWriter(t,this.res),this.dialogVisible=!0}}},c=a,l=(s("d319"),s("9ca4")),u=Object(l["a"])(c,o,i,!1,null,null,null);e["default"]=u.exports},cb13:function(t,e,s){},d319:function(t,e,s){"use strict";var o=s("5ca2"),i=s.n(o);i.a},ddc0:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-menu",{staticClass:"el-menu-demo",attrs:{router:"","default-active":t.$route.path,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{staticStyle:{"font-weight":"bold"}},[t._v("金刚石文档")]),s("el-menu-item",{attrs:{index:"/homepage"}},[t._v("我的工作台")]),s("el-menu-item",{attrs:{index:"/groupspace"}},[t._v("团队空间")]),s("el-menu-item",{attrs:{index:"/Template"}},[t._v("模板")]),s("el-submenu",{staticStyle:{float:"right"},attrs:{index:"4"}},[s("template",{slot:"title"},[t._v(t._s(t.username))]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.isshow,expression:"!isshow"}],on:{click:function(e){return t.GotoPersonalInfo(t.id)}}},[t._v("个人信息")]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.isshow,expression:"!isshow"}],on:{click:t.logout}},[t._v("退出登录")]),s("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],on:{click:t.GotoLogin}},[t._v("登录/注册")])],2),s("el-menu-item",{staticStyle:{float:"right"}},[s("el-dropdown",{staticClass:"project-container"},[s("el-button",{staticStyle:{"background-color":"white","border-color":"white","padding-right":"0"},attrs:{type:"primary"}},[s("i",{staticClass:"el-icon-bell"}),0!==t.numberOfUnreadMessages?s("el-badge",{staticClass:"item",staticStyle:{top:"-10px"},attrs:{value:t.numberOfUnreadMessages}}):t._e()],1),s("el-dropdown-menu",{staticClass:"project-dropdown",staticStyle:{"overflow-y":"auto",height:"auto"},attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.notificationList,(function(e){return s("el-dropdown-item",{key:e.id},[e.status?t._e():s("i",{staticClass:"el-icon-message-solid"}),1===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),2===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),3===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.confirmDocInvitationPopout(e)}}},[t._v(t._s(e.msg))]):t._e(),4===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),5===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),6===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),7===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),11===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),12===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),21===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.confirmGroupInvitationPopout(e)}}},[t._v(t._s(e.msg))]):t._e(),22===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),23===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),24===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),31===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e(),32===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),41===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.read(e)}}},[t._v(t._s(e.msg))]):t._e(),42===e.category?s("el-button",{staticStyle:{border:"white"},on:{click:function(s){return t.goToNotification(e)}}},[t._v(t._s(e.msg))]):t._e()],1)})),1)],1)],1),s("el-menu-item",{staticStyle:{float:"right","margin-right":"50px"}},[s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),s("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1)],1)],1)},i=[],n={data:function(){return{id:sessionStorage.getItem("userId"),navList:[],username:"游客",passwd:"",email:"",phone_num:"",create_time:"",isshow:!0,status:"退出登录",text:"",type:sessionStorage.getItem("type"),pageList:[],groupList:[],notificationList:[],drawer:!1,direction:"rtl",count:0,visible:!1,numberOfUnreadMessages:0}},methods:{handleSelect:function(t,e){console.log(t,e)},CreateTeam:function(){},logout:function(){this.username="游客",this.status="登录",this.isshow=!1,this.$router.push({path:"/"}),location.reload(),sessionStorage.clear()},GotoLogin:function(){this.$router.push({path:"/login"})},getNotification:function(){var t=this;this.$http.get(this.requestUrl+"/getNotification",{params:{userId:sessionStorage.getItem("userId")}}).then((function(e){console.log(e.data),t.notificationList=e.data;for(var s=0;s<t.notificationList.length;s++){if(t.notificationList[s].status)break;t.numberOfUnreadMessages++}}))},goToNotification:function(t){this.viewmk(t.objectID),this.read(t)},GotoGroupDoc:function(t){sessionStorage.setItem("groupid",t),this.$router.push({path:"/groupdoc"})},search:function(){sessionStorage.setItem("text",this.text),this.$router.push({path:"/searchres"})},confirmGroupInvitationPopout:function(t){var e=this;t.status?this.$message({message:"已读："+t.msg,type:"success"}):this.$confirm(t.msg,"邀请",{confirmButtonText:"同意",cancelButtonText:"拒绝",type:"info"}).then((function(){e.confirmGroupInvitation(t,!0)?(e.$message({type:"success",message:"加入团队成功!"}),t.status=!0,e.numberOfUnreadMessages--):e.$message.error("加入团队失败！请重试")})).catch((function(){e.confirmGroupInvitation(t,!1)?(e.$message({type:"warning",message:"已拒绝加入团队！"}),t.status=!0,e.numberOfUnreadMessages--):e.$message.error("拒绝加入团队失败！请重试")}))},confirmGroupInvitation:function(t,e){return this.$http.get(this.requestUrl+"/confirmGroupInvitation",{params:{userId:sessionStorage.getItem("userId"),groupId:t.objectID,userResponse:e,noticeId:t.id}}).then((function(t){return console.log(t.data),!0})),!0},confirmDocInvitationPopout:function(t){var e=this;t.status?this.$message({message:"已读："+t.msg,type:"success"}):this.$confirm(t.msg,"邀请",{confirmButtonText:"同意",cancelButtonText:"拒绝",type:"info"}).then((function(){e.confirmDocInvitation(t,!0)?(e.$message({type:"success",message:"加入协作文档成功！"}),t.status=!0,e.numberOfUnreadMessages--):e.$message.error("加入协作文档失败！请重试")})).catch((function(){e.confirmDocInvitation(t,!1)?(e.$message({type:"warning",message:"已拒绝加入协作文档！"}),t.status=!0,e.numberOfUnreadMessages--):e.$message.error("拒绝加入协作文档失败！请重试")}))},confirmDocInvitation:function(t,e){return this.$http.get(this.requestUrl+"/confirmDocInvitation",{params:{userId:sessionStorage.getItem("userId"),groupId:t.objectID,userResponse:e,noticeId:t.id}}).then((function(t){return console.log(t.data),!0})),!0},read:function(t){var e=this;this.$http.get(this.requestUrl+"/readNotifications",{params:{userId:sessionStorage.getItem("userId"),notificationID:t.id}}).then((function(s){e.$message({message:"已读："+t.msg,type:"success"}),console.log(s.data),t.status=!0,e.numberOfUnreadMessages--}))},findNotificationById:function(t){for(var e=0;e<this.notificationList.length;e++)if(this.notificationList[e].id==t)return this.notificationList[e];return-1}},created:function(){null!=sessionStorage.getItem("username")?(this.isshow=!1,this.username=sessionStorage.getItem("username")):this.isshow=!0,this.getNotification()}},r=n,a=(s("716f"),s("9ca4")),c=Object(a["a"])(r,o,i,!1,null,"17fc1bc6",null);e["a"]=c.exports},ec92:function(t,e,s){t.exports=s.p+"img/document-gray.90db57f4.png"}}]);
//# sourceMappingURL=chunk-5088985e.da5e9af9.js.map