(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0782260"],{"159b":function(t,s,a){var i=a("da84"),e=a("fdbc"),c=a("17c2"),l=a("9112");for(var o in e){var r=i[o],n=r&&r.prototype;if(n&&n.forEach!==c)try{l(n,"forEach",c)}catch(h){n.forEach=c}}},"17c2":function(t,s,a){"use strict";var i=a("b727").forEach,e=a("a640"),c=a("ae40"),l=e("forEach"),o=c("forEach");t.exports=l&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,s,a){"use strict";var i=a("23e7"),e=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},"4c0a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h3",{staticClass:"mytitle"},[t._v("基本用法")]),a("div",{staticClass:"demo-block"},[a("div",{staticClass:"showimg"},[a("div",{staticClass:"block"},[a("span",{staticClass:"showtitle"},[t._v("fill")]),a("fan-image",{staticStyle:{width:"80%",height:"100px"},attrs:{fit:"fill",src:t.mysrc}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"showtitle"},[t._v("contain")]),a("fan-image",{staticStyle:{width:"80%",height:"100px"},attrs:{fit:"contain",src:t.mysrc}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"showtitle"},[t._v("cover")]),a("fan-image",{staticStyle:{width:"80%",height:"100px"},attrs:{fit:"cover",src:t.mysrc}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"showtitle"},[t._v("none")]),a("fan-image",{staticStyle:{width:"80%",height:"100px"},attrs:{fit:"none",src:t.mysrc}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"showtitle"},[t._v("scale-down")]),a("fan-image",{staticStyle:{width:"80%",height:"100px"},attrs:{fit:"scale-down",src:t.mysrc}})],1)])]),a("h3",{staticClass:"mytitle"},[t._v("加载时内容 ")]),a("div",{staticClass:"demo-block"},[a("div",{staticClass:"showimg"},[a("div",{staticClass:"block-error"},[a("span",{staticClass:"showtitle"},[t._v("默认")]),a("fan-image",{staticStyle:{width:"100%",height:"200px"},attrs:{src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"}})],1),a("div",{staticClass:"block-error"},[a("span",{staticClass:"showtitle"},[t._v("自定义")]),a("fan-image",{staticStyle:{width:"100%",height:"200px"},attrs:{src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"}},[a("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 我把默认插槽替换了 ")])])],1)])]),a("h3",{staticClass:"mytitle"},[t._v("加载失败")]),a("div",{staticClass:"demo-block"},[a("div",{staticClass:"showimg"},[a("div",{staticClass:"block-error"},[a("span",{staticClass:"showtitle"},[t._v("默认")]),a("fan-image",{staticStyle:{width:"100%",height:"200px"},on:{error:t.geterror}})],1),a("div",{staticClass:"block-error"},[a("span",{staticClass:"showtitle"},[t._v("自定义")]),a("fan-image",{staticStyle:{width:"100%",height:"200px"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1)])])])},e=[],c=(a("4160"),a("159b"),{data:function(){return{mysrc:"http://139.196.87.221:3000/imgs/1625799551444_u=3572837379,4046716905&fm=26&fmt=auto&gp=0.jpg",selectval:"",selectval2:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"}]}},methods:{geterror:function(t){console.log(t)},getindex:function(){var t=this;this.options.forEach((function(s){t.selectval==s.value||t.selectval2==s.value?s.disabled=!0:s.disabled=!1}))}}}),l=c,o=(a("9614"),a("2877")),r=Object(o["a"])(l,i,e,!1,null,"7c2c7945",null);s["default"]=r.exports},9614:function(t,s,a){"use strict";var i=a("e404"),e=a.n(i);e.a},a640:function(t,s,a){"use strict";var i=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&i((function(){a.call(null,s||function(){throw 1},1)}))}},e404:function(t,s,a){},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);