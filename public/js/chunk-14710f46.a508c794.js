(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14710f46"],{"0092":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-skeleton",{attrs:{loading:t.boxloading,animated:""}},[o("template",{slot:"template"},[o("div",{staticClass:"left"},[o("el-skeleton-item",{staticStyle:{width:"100%",height:"600px"},attrs:{variant:"div"}})],1)]),[o("div",{staticClass:"left"},[o("p",[t._v("进出车辆登记表")]),o("div",{staticClass:"carjoinform"},[o("table",{staticClass:"jointable"},[o("tr",[o("td",[t._v("车牌号码：")]),o("td",[o("el-input",{staticStyle:{width:"80px",float:"left"},attrs:{placeholder:"地区号"},model:{value:t.carnumber1,callback:function(e){t.carnumber1=e},expression:"carnumber1"}}),o("span",[t._v("-")]),o("el-input",{staticStyle:{width:"130px"},attrs:{placeholder:"车牌号码"},model:{value:t.carnumber2,callback:function(e){t.carnumber2=e},expression:"carnumber2"}})],1)]),o("tr",[o("td",[t._v("泊车区域：")]),o("td",[o("el-select",{attrs:{placeholder:"请选择停车区域"},model:{value:t.toaddposition,callback:function(e){t.toaddposition=e},expression:"toaddposition"}},t._l(t.positions,(function(e){return o("el-option",{key:e.descration,attrs:{label:e.position,value:e.position}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.position))]),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("￥"+t._s(e.fare))])])})),1)],1)]),o("tr",[o("td",[t._v("车位选择：")]),o("td",[o("el-select",{attrs:{placeholder:"请选择车位"},model:{value:t.postcarnumber,callback:function(e){t.postcarnumber=e},expression:"postcarnumber"}},t._l(t.freeparks,(function(e){return o("el-option",{key:e.CarportNumber,attrs:{label:e.CarportNumber,value:e.CarportNumber}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.CarportNumber))]),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("￥"+t._s(e.CarCost))])])})),1)],1)]),o("tr",[o("td"),o("td",[o("el-button",{attrs:{type:"primary"},on:{click:t.addcarjoin}},[t._v("添加信息")]),o("el-button",[t._v("重置")])],1)])])])])]],2)],1)},s=[],n={watch:{toaddposition:function(t){console.log(t),this.getfreepot()}},created:function(){var t=this;setTimeout((function(){t.boxloading=!1,t.getallpositons()}),1e3)},data:function(){return{boxloading:!0,carnumber:"",carnumber1:"",carnumber2:"",toaddposition:"",positions:[],freeparks:[],postcarnumber:""}},methods:{getallpositons:function(){var t=this;this.$axios("/getposition").then((function(e){console.log(e),t.positions=e.data.lists})).catch((function(t){console.log(t)}))},getfreepot:function(){var t=this;this.postcarnumber="",this.$axios.post("/selectpart",{position:this.toaddposition,haveCar:1}).then((function(e){console.log(e),t.freeparks=e.data})).catch((function(t){console.log(t)}))},checkcarnumber:function(t){console.log(t);var e=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,o=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return 7==t.length?o.test(t):8==t.length&&e.test(t)},addcarjoin:function(){var t=this;this.carnumber=this.carnumber1+this.carnumber2;var e=this.checkcarnumber(this.carnumber);e?this.$axios.post("/addcarjoin",{CarNumber:this.carnumber,position:this.toaddposition,CarportNumber:this.postcarnumber}).then((function(e){console.log(e),1==e.data.code?(t.getfreepot(),t.$message({message:e.data.message,type:"success"})):t.$message({message:e.data.message,type:"error"})})).catch((function(t){console.log(t)})):this.$message({message:"车牌号码不符合规范",type:"warning"})}}},r=n,i=(o("d415"),o("2877")),c=Object(i["a"])(r,a,s,!1,null,null,null);e["default"]=c.exports},8966:function(t,e,o){},d415:function(t,e,o){"use strict";var a=o("8966"),s=o.n(a);s.a}}]);
//# sourceMappingURL=chunk-14710f46.a508c794.js.map