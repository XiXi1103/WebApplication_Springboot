(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41476dd4"],{"2cfd":function(e,t,s){"use strict";var r=s("83fd"),a=s.n(r);a.a},"73cf":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"Register-container",attrs:{"label-position":"left","label-width":"80px"}},[s("h3",{staticClass:"Register_title"},[e._v("注册")]),s("el-form-item",{attrs:{prop:"account",label:"账号"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.RegisterForm.username,callback:function(t){e.$set(e.RegisterForm,"username",t)},expression:"RegisterForm.username"}})],1),s("el-form-item",{attrs:{prop:"checkPass",label:"密码"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入您的密码"},model:{value:e.RegisterForm.password1,callback:function(t){e.$set(e.RegisterForm,"password1",t)},expression:"RegisterForm.password1"}})],1),s("el-form-item",{attrs:{prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请重复输入密码"},model:{value:e.RegisterForm.password2,callback:function(t){e.$set(e.RegisterForm,"password2",t)},expression:"RegisterForm.password2"}})],1),s("el-form-item",{attrs:{prop:"checkPass",label:"邮箱"}},[s("el-input",{staticStyle:{float:"left",width:"160px"},attrs:{type:"email","auto-complete":"off",placeholder:"请输入您的邮箱"},model:{value:e.RegisterForm.email,callback:function(t){e.$set(e.RegisterForm,"email",t)},expression:"RegisterForm.email"}}),s("el-button",{staticStyle:{float:"right","font-size":"5px"},attrs:{type:"primary"},on:{click:e.sendEmail}},[e._v("发送验证码")])],1),s("el-form-item",{attrs:{prop:"checkPass",label:"验证码"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入验证码"},model:{value:e.RegisterForm.code,callback:function(t){e.$set(e.RegisterForm,"code",t)},expression:"RegisterForm.code"}})],1),s("br"),s("el-form-item",{staticStyle:{width:"80%"}},[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.submit}},[e._v("注册")])],1)],1)},a=[],o={data:function(){return{checked:!0,RegisterForm:{username:"",password1:"",password2:"",email:"",code:""},loading:!1}},methods:{submit:function(){var e=this;null!=sessionStorage.getItem("username")||null!=sessionStorage.getItem("userId")?(this.$message({message:"您已登录",type:"warning"}),this.$router.push("/homepage")):this.RegisterForm.password1!==this.RegisterForm.password2?this.$message({message:"两次密码不一致，请重新输入",type:"warning"}):this.$http.post(this.requestUrl+"/register",{username:this.RegisterForm.username,password:this.RegisterForm.password1,email:this.RegisterForm.email,code:this.RegisterForm.code}).then((function(t){t.data.success?(sessionStorage.setItem("username",e.RegisterForm.username),sessionStorage.setItem("userId",t.data.ID),e.$message({message:t.data.msg,type:"success"}),e.$router.push("/homepage")):(e.$message.error({message:t.data.msg,type:"danger"}),e.$router.push("/register"))}))},sendEmail:function(){var e=this;this.$http.get(this.requestUrl+"/sendEmail",{params:{email:this.RegisterForm.email}}).then((function(t){t.data.success?e.$message({message:"已发送，请接收",type:"success"}):e.$message.error("发送失败")}))}}},i=o,l=(s("2cfd"),s("9ca4")),m=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=m.exports},"83fd":function(e,t,s){}}]);
//# sourceMappingURL=chunk-41476dd4.202faafb.js.map