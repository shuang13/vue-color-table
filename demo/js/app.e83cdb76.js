(function(t){function i(i){for(var a,s,r=i[0],l=i[1],h=i[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(i);while(u.length)u.shift()();return o.push.apply(o,h||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/vue-color-table/demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var h=0;h<r.length;h++)i(r[h]);var c=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"35b0":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".ui-vct-ib{display:inline-block}.ui-vct-btn{margin:0 5px}.vct .el-dialog__header{padding-top:10px;padding-left:10px;padding-right:10px}.vct .el-dialog__header .el-dialog__title{font-size:14px}.vct .el-dialog__header .el-dialog__headerbtn{top:10px}.vct .el-dialog__body,.vct .el-dialog__footer{padding:10px}.vct_dialog *{font-size:12px}.vct_dialog input{outline:1px}.vct_dialog_content{width:100%;height:500px;border:1px solid #ccc}.vct_dialog_content_left{float:left;margin-right:2px;width:35%;height:100%}.vct_dialog_content_left_table{width:100%;height:90%}.vct_dialog_content_left_handle{display:flex;align-items:center;height:10%}.vct_dialog_content_left_handle_input-box{margin-left:10px}.vct_dialog_content_left_handle_input-box_value{width:100px}.vct_dialog_content_mid{float:left;margin-right:2px;width:50%;height:100%;border-left:1px solid #ccc;border-right:1px solid #ccc}.vct_dialog_content_mid_opacity-chart{width:100%;height:35%}.vct_dialog_content_mid_lut-color-table{width:100%;height:55%}.vct_dialog_content_mid_lut-color-table_color-picker{margin-top:10px}.vct_dialog_content_mid_handle{display:flex;width:100%;height:10%;align-items:center}.vct_dialog_content_mid_handle_input-interpolation{margin-left:10px;width:30px}.vct_dialog_content_right{float:left;width:13%;height:100%;min-width:70px;min-height:500px}.vct_dialog_content_right_color-bar{float:right}",""]),t.exports=i},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"demo"},[e("h1",[t._v("vue-color-table")]),e("VueColorTable",{attrs:{minMax:t.range},model:{value:t.colors,callback:function(i){t.colors=i},expression:"colors"}}),e("p",[t._v("name:"+t._s(t.colors.name))]),e("p",[t._v("colorList:"+t._s(t.colors.colors))])],1)},o=[],s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vct"},[e("div",{staticClass:"vct_trigger",style:Object.assign({},t.triggerStyle,{background:t.parseBgcolorTemplate(t.value)}),on:{click:t.handleTrigger}}),e("el-dialog",{staticClass:"vct_dialog",attrs:{title:"颜色方案",visible:t.dialogVisible,width:"780px",height:"550px"},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("div",{staticClass:"vct_dialog_content"},[e("div",{staticClass:"vct_dialog_content_left"},[e("div",{staticClass:"vct_dialog_content_left_table"},[e("el-table",{ref:"leftTable",attrs:{height:"100%",fixed:"","highlight-current-row":"",data:t.lutData,border:"","header-cell-style":{padding:0},"cell-style":{padding:0}},on:{"row-click":t.handleRowClick}},[e("el-table-column",{attrs:{prop:"name",label:"方案名称"}}),e("el-table-column",{attrs:{label:"色表"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{style:t.setBgStyleByColorArr(i.$index)})]}}])})],1)],1),e("div",{staticClass:"vct_dialog_content_left_handle"},[e("div",{staticClass:"vct_dialog_content_left_handle_input-box  ui-vct-ib"},[e("span",{staticClass:"vct_dialog_content_left_handle_input-box_text"},[t._v("名称：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentName,expression:"currentName"}],staticClass:"vct_dialog_content_left_handle_input-box_value",attrs:{type:"text"},domProps:{value:t.currentName},on:{input:function(i){i.target.composing||(t.currentName=i.target.value)}}})]),e("div",{staticClass:"vct_dialog_content_left_handle_btn  ui-vct-ib"},[e("button",{staticClass:"vct_dialog_content_left_handle_btn_save ui-vct-btn",on:{click:t.handleBtnSave}},[t._v("保存")]),e("button",{staticClass:"vct_dialog_content_left_handle_btn_delete ui-vct-btn",on:{click:t.handleBtnDelete}},[t._v("删除")])])])]),e("div",{staticClass:"vct_dialog_content_mid"},[e("div",{staticClass:"vct_dialog_content_mid_opacity-chart",on:{mouseup:t.parseOpacityToLutItem}},[e("canvas",{staticClass:"vct_dialog_content_mid_opacity-chart_canvas",attrs:{width:"360px",height:"170px"}})]),e("div",{staticClass:"vct_dialog_content_mid_lut-color-table"},[e("el-table",{attrs:{data:t.lutItem,height:"100%",fixed:"",border:"","header-cell-style":{padding:0},"cell-style":{padding:0}},on:{select:t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",label:"状态",width:"55"}}),e("el-table-column",{attrs:{label:"颜色"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-color-picker",{staticClass:"vct_dialog_content_mid_lut-color-table_color-picker",attrs:{"show-alpha":""},on:{change:t.handleColorPickerChange},model:{value:t.lutItem[i.$index].color,callback:function(e){t.$set(t.lutItem[i.$index],"color",e)},expression:"lutItem[scope.$index].color"}})]}}])}),e("el-table-column",{attrs:{prop:"value",label:"真实值",formatter:t.colorValueformatter}})],1)],1),e("div",{staticClass:"vct_dialog_content_mid_handle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ipNum,expression:"ipNum"}],staticClass:"vct_dialog_content_mid_handle_input-interpolation",attrs:{type:"number",value:"1",oninput:"if(value<1)value=1"},domProps:{value:t.ipNum},on:{input:function(i){i.target.composing||(t.ipNum=i.target.value)}}}),e("div",{staticClass:"vct_dialog_content_mid_handle_btn ui-vct-ib"},[e("button",{staticClass:"vct_dialog_content_mid_handle_btn_interpolation ui-vct-btn",on:{click:t.handleBtnInterpolation}},[t._v("插值")]),e("button",{staticClass:"vct_dialog_content_mid_handle_btn_delete ui-vct-btn",on:{click:t.handleBtnRemove}},[t._v("删除")])])])]),e("div",{staticClass:"vct_dialog_content_right"},[e("canvas",{staticClass:"vct_dialog_content_right_color-bar",attrs:{width:"67px",height:"500px"}})])]),e("div",{staticClass:"vct_dialog_footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"vct_dialog_footer_btn-cancel ui-vct-btn",on:{click:t.handleBtnCancel}},[t._v("取 消")]),e("button",{staticClass:"vct_dialog_footer_btn-ok ui-vct-btn",on:{click:t.handleBtnOk}},[t._v("确 定")])])])],1)},r=[],l=(e("b0c0"),e("a9e3"),e("159b"),e("a434"),e("ac1f"),e("1276"),e("a15b"),e("b680"),e("3835"));e("466d"),e("d81d"),e("99af"),e("d3b7"),e("25f0"),e("fb6a");function h(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}function c(t){return/^rgba?/.test(t)}function d(t){var i=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/).splice(1);return i.map((function(t){return Number(t)}))}function u(t){return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}function g(t,i,e){var a=(t<<16|i<<8|e).toString(16);return"#"+new Array(Math.abs(a.length-7)).join("0")+a}function p(t){for(var i=[],e=1;e<7;e+=2)i.push(parseInt("0x"+t.slice(e,e+2)));return i}function y(t,i){for(var e=[],a=1;a<7;a+=2)e.push(parseInt("0x"+t.slice(a,a+2)));return e.push(i),e}function f(t,i,e){var a,n;if(h(t))a=p(t);else{if(!c(t))return;a=d(t)}if(h(i))n=p(i);else{if(!c(i))return;n=d(i)}for(var o=(n[0]-a[0])/e,s=(n[1]-a[1])/e,r=(n[2]-a[2])/e,l=[],u=0;u<e;u++)l.push(g(parseInt(o*u+a[0]),parseInt(s*u+a[1]),parseInt(r*u+a[2])));return l}function x(t,i){for(var e=0;e<t.length;e++)if(t[e].name===i)return e;return-1}function v(t,i,e,a){var n=i[1]-i[0],o=e[1]-e[0];if(0===n)return 0===o?e[0]:(e[0]+e[1])/2;if(a)if(n>0){if(t<=i[0])return e[0];if(t>=i[1])return e[1]}else{if(t>=i[0])return e[0];if(t<=i[1])return e[1]}else{if(t===i[0])return e[0];if(t===i[1])return e[1]}return(t-i[0])/n*o+e[0]}var _={isHex:h,isRgb:c,rgbStringToArr:d,rgbaArrToString:u,rgbToHex:g,hexToRgb:p,hexToRgba:y,gradient:f,getIndexByObjName:x,linearMap:v},m={LINE:{lineWidth:1},TEXT:{fillStyle:"#000",fontSize:"12px"},RECT:{},LINE_BY_MOUSE:{strokeStyle:"blue",lineJoin:"round",lineWidth:1}};function b(t){this.canvas=t,this.ctx=t.getContext("2d"),this.halfPixel=.5,this.utils=_,this.clickX=Array(100),this.clickY=Array(100),this.clickDrag=Array(100)}b.prototype={drawText:function(t){var i=0,e=6,a=t.style||{};for(var n in this.ctx.beginPath(),m.TEXT)this.ctx[n]=m.TEXT[n];for(var o in a)this.ctx[o]=a[o];this.ctx.fillText(t.str,t.x+i,t.y+e),this.ctx.closePath()},drawLine:function(t){var i=t.style||{};for(var e in this.ctx.beginPath(),m.LINE)this.ctx[e]=m.LINE[e];for(var a in i)this.ctx[a]=i[a];this.subPixel(this.ctx.lineWidth),this.ctx.moveTo(t.x1,t.y1+this.halfPixel),this.ctx.lineTo(t.x2,t.y2+this.halfPixel),this.ctx.stroke(),this.ctx.closePath()},drawRect:function(t){this.ctx.beginPath(),this.subPixel(t.style.lineWidth),t.style.fillStyle&&(this.ctx.fillStyle=t.style.fillStyle,this.ctx.fillRect(t.x+this.halfPixel,t.y+this.halfPixel,t.width,t.height)),t.style.lineWidth&&(this.ctx.lineWidth=t.style.lineWidth,this.ctx.strokeStyle="#000",this.ctx.strokeRect(t.x+this.halfPixel,t.y+this.halfPixel,t.width,t.height)),this.ctx.closePath()},createLinearGradient:function(t,i,e,a){return this.ctx.createLinearGradient(t,i,e,a)},subPixel:function(t){this.halfPixel=t%2==1?.5:0},addClick:function(t,i,e){this.clickX.push(t),this.clickY.push(i),this.clickDrag.push(e)},reDrawLineByMouse:function(t){var i=t||{},e=i.style||{};for(var a in m.LINE_BY_MOUSE)this.ctx[a]=m.LINE_BY_MOUSE[a];for(var n in e)this.ctx[n]=e[n];for(var o=0;o<this.clickX.length;o++)this.ctx.beginPath(),this.clickDrag[o]&&o?this.ctx.moveTo(this.clickX[o-1],this.clickY[o-1]):this.ctx.moveTo(this.clickX[o]-1,this.clickY[o]),this.ctx.lineTo(this.clickX[o],this.clickY[o]),this.ctx.closePath(),this.ctx.stroke()},clearLineByMouse:function(){this.clickX.splice(0),this.clickY.splice(0),this.clickDrag.splice(0)},clear:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.clearLineByMouse()}};var B=b;function w(t,i){this.zp=new B(t),this.opts=i,this.Boundary={x:0,y:10,width:67,height:t.height-20},this.scaleCount=100,this.axisTextInterval=100,this.axisBoundary={x:this.Boundary.x,y:this.Boundary.y,width:40,height:this.Boundary.height},this.axisTextBoundary={x:this.axisBoundary.x,y:this.axisBoundary.y,width:20,height:this.axisBoundary.height},this.axisScaleBoundary={x:this.axisTextBoundary.x,y:this.axisTextBoundary.y,width:10,height:this.axisBoundary.height},this.barBoundary={x:this.axisBoundary.x+this.axisBoundary.width,y:this.axisBoundary.y,width:20,height:this.Boundary.height}}w.prototype={drawAxis:function(){this.drawAxisScale(),this.drawAxisText()},drawBar:function(){var t=this.zp.createLinearGradient(this.barBoundary.x,this.barBoundary.y,this.barBoundary.x,this.barBoundary.y+this.barBoundary.height);this.opts.data.forEach((function(i){t.addColorStop(i.value,i.color)})),this.zp.drawRect({x:this.barBoundary.x,y:this.barBoundary.y,width:this.barBoundary.width,height:this.barBoundary.height,style:{lineWidth:1,fillStyle:t}})},drawAxisText:function(){for(var t=Object(l["a"])(this.opts.minMax,2),i=t[0],e=t[1],a=e-i,n=a/this.axisTextInterval,o=[this.axisTextBoundary.x,this.axisTextBoundary.y],s=o[0],r=o[1],h=0;h<=n;h++)this.zp.drawText({x:s,y:r+h*this.axisTextBoundary.height/n,str:parseInt(i+h*this.axisTextInterval)})},drawAxisScale:function(){for(var t,i=Object(l["a"])(this.opts.minMax,2),e=i[0],a=i[1],n=a-e,o=n/this.axisTextInterval,s=[this.barBoundary.x,this.barBoundary.y],r=s[0],h=s[1],c=3,d=6,u=this.scaleCount,g=0;g<=u;g++)t=g%(u/o)==0?d:c,this.zp.drawLine({x1:r,y1:h+g*this.axisScaleBoundary.height/u,x2:r-t,y2:h+g*this.axisScaleBoundary.height/this.scaleCount})},render:function(){this.drawBar(),this.drawAxis()},refresh:function(t){this.opts=t,this.clear(),this.render()},clear:function(){this.zp.clear()},destroyed:function(){},init:function(){this.clear(),this.render()}};var C,I=w;function T(t,i){this.zp=new B(t),this.canvas=t,this.opts=i,this.scaleCount=5,this.axisTextInterval=.2,this.drawLineByMouseFlag=i.drawLineByMouse,this.opacityList=[],this.opacityPointY=[],this.colorPostion=[],this.paintFlag=!1,this.left=this.canvas.getBoundingClientRect().left,this.top=this.canvas.getBoundingClientRect().top+20,this.Boundary={x:10,y:10,width:340,height:150},this.axisBoundary={x:this.Boundary.x+10,y:this.Boundary.y,width:30,height:this.Boundary.height},this.axisTextBoundary={x:this.axisBoundary.x,y:this.axisBoundary.y,width:20,height:this.axisBoundary.height,marginLeft:0,marginRight:0},this.axisScaleBoundary={x:this.axisTextBoundary.x,y:this.axisTextBoundary.y,width:10,height:this.axisBoundary.height,marginLeft:10,marginRight:0},this.gridBoundary={x:this.axisBoundary.x+this.axisBoundary.width,y:this.Boundary.y,width:this.Boundary.width-this.axisBoundary.width,height:this.Boundary.height}}T.prototype={drawAxis:function(){this.drawAxisScale(),this.drawAxisText()},drawGrid:function(){this.zp.drawRect({x:this.gridBoundary.x,y:this.gridBoundary.y,width:this.gridBoundary.width,height:this.gridBoundary.height,style:{lineWidth:1}});for(var t=0,i=0;i<this.opts.data.length-1;i++)for(var e=parseInt(100*(this.opts.data[i+1].value-this.opts.data[i].value)),a=this.zp.utils.gradient(this.opts.data[i].color,this.opts.data[i+1].color,e),n=0;n<e;n++){var o=this.zp.createLinearGradient(this.gridBoundary.x,this.gridBoundary.y,this.gridBoundary.x,this.gridBoundary.y+this.gridBoundary.height);o.addColorStop(1,this.zp.utils.rgbaArrToString(this.zp.utils.hexToRgba(a[n],0))),o.addColorStop(0,this.zp.utils.rgbaArrToString(this.zp.utils.hexToRgba(a[n],1))),this.zp.drawRect({x:this.gridBoundary.x+t,y:this.gridBoundary.y,width:this.gridBoundary.width/100,height:this.gridBoundary.height,style:{lineWidth:0,fillStyle:o}}),t+=this.gridBoundary.width/100,i==this.opts.data.length-2&&n==e-1&&this.zp.drawRect({x:this.gridBoundary.x+t,y:this.gridBoundary.y,width:this.gridBoundary.width/100,height:this.gridBoundary.height,style:{lineWidth:0,fillStyle:o}})}},initDrawOpacityLine:function(){this.opacityList=[],this.opacityPointY=[],this.colorPostion=[];for(var t=0;t<this.opts.data.length;t++)this.zp.utils.isRgb(this.opts.data[t].color)&&!isNaN(this.zp.utils.rgbStringToArr(this.opts.data[t].color)[3])?this.opacityList.push(this.zp.utils.rgbStringToArr(this.opts.data[t].color)[3]):(this.zp.utils.isHex(this.opts.data[t].color)||this.zp.utils.isRgb(this.opts.data[t].color)&&isNaN(this.zp.utils.rgbStringToArr(this.opts.data[t].color)[3]))&&this.opacityList.push(1);for(var i=0;i<this.opts.data.length-1;i++)for(var e=parseInt((100*(this.opts.data[i+1].value-this.opts.data[i].value)).toFixed(0)),a=0;a<e;a++)0==a?(this.colorPostion.push(this.opacityPointY.length),this.opacityPointY.push(this.opacityList[i])):this.opacityPointY.push(1);this.colorPostion.push(this.opacityPointY.length-1),this.opacityPointY[this.opacityPointY.length-1]=this.opacityList[this.opts.data.length-1],this.drawOpacityLine()},drawOpacityLine:function(){for(var t=0;t<this.opacityPointY.length;t++){var i=this.dataToPoint(t,[0,100],[this.gridBoundary.x+2,this.gridBoundary.x+2+this.gridBoundary.width]),e=this.dataToPoint(this.opacityPointY[t],[1,0],[this.gridBoundary.y,this.gridBoundary.y+this.gridBoundary.height]);this.zp.addClick(i,e,!0),this.zp.reDrawLineByMouse()}},drawAxisText:function(){for(var t=Object(l["a"])(this.opts.minMax,2),i=t[0],e=t[1],a=e-i,n=a/this.axisTextInterval,o=[this.axisTextBoundary.x,this.axisTextBoundary.y],s=o[0],r=o[1],h=0;h<=n;h++)this.zp.drawText({x:s,y:r+h*this.axisTextBoundary.height/n,str:(e-h*this.axisTextInterval).toFixed(1),style:{fillStyle:"red"}})},drawAxisScale:function(){for(var t,i=Object(l["a"])(this.opts.minMax,2),e=i[0],a=i[1],n=a-e,o=n/this.axisTextInterval,s=[this.gridBoundary.x,this.gridBoundary.y],r=s[0],h=s[1],c=3,d=6,u=this.scaleCount,g=0;g<=u;g++)t=g%(u/o)==0?d:c,this.zp.drawLine({x1:r,y1:h+g*this.axisScaleBoundary.height/u,x2:r-t,y2:h+g*this.axisScaleBoundary.height/this.scaleCount})},handleMousedown:function(t){var i=t.pageX-C.left,e=t.pageY-C.top;i>C.gridBoundary.x&&e>C.gridBoundary.y&&i<C.gridBoundary.x+C.gridBoundary.width&&e<C.gridBoundary.y+C.gridBoundary.height&&(C.paintFlag=!0,C.zp.addClick(i,e,!1),C.zp.reDrawLineByMouse())},handleMousemove:function(t){t.preventDefault();var i=t.pageX-C.left,e=t.pageY-C.top;C.paintFlag&&i>C.gridBoundary.x&&e>C.gridBoundary.y&&i<C.gridBoundary.x+C.gridBoundary.width&&e<C.gridBoundary.y+C.gridBoundary.height&&(C.zp.addClick(i,e,!0),C.zp.reDrawLineByMouse())},handleMouseup:function(t){t.preventDefault();for(var i=99;i<C.zp.clickX.length;i++)for(var e=parseInt(C.pointToData(C.zp.clickX[i],[C.gridBoundary.x,C.gridBoundary.x+C.gridBoundary.width],[0,100])),a=Number(C.pointToData(C.zp.clickY[i],[C.gridBoundary.y,C.gridBoundary.y+C.gridBoundary.height],[1,0]).toFixed(2)),n=0;n<C.colorPostion.length;n++)e>=C.colorPostion[n]&&e<C.colorPostion[n]+5&&(C.opacityPointY[C.colorPostion[n]]=a);for(var o=0;o<C.colorPostion.length;o++)C.opacityList[o]=C.opacityPointY[C.colorPostion[o]];C.clear(),C.drawGrid(),C.drawAxis(),C.drawOpacityLine(),C.paintFlag=!1},handleMouseleave:function(t){t.preventDefault();for(var i=99;i<C.zp.clickX.length;i++)for(var e=parseInt(C.pointToData(C.zp.clickX[i],[C.gridBoundary.x,C.gridBoundary.x+C.gridBoundary.width],[0,100])),a=Number(C.pointToData(C.zp.clickY[i],[C.gridBoundary.y,C.gridBoundary.y+C.gridBoundary.height],[1,0]).toFixed(2)),n=0;n<C.colorPostion.length;n++)e>=C.colorPostion[n]&&e<C.colorPostion[n]+5&&(C.opacityPointY[C.colorPostion[n]]=a);for(var o=0;o<C.colorPostion.length;o++)C.opacityList[o]=C.opacityPointY[C.colorPostion[o]];C.clear(),C.drawGrid(),C.drawAxis(),C.drawOpacityLine(),C.paintFlag=!1},drawLineByMouse:function(){C=this,this.canvas.addEventListener("mousedown",this.handleMousedown,!1),this.canvas.addEventListener("mousemove",this.handleMousemove,!1),this.canvas.addEventListener("mouseup",this.handleMouseup,!1),this.canvas.addEventListener("mouseleave",this.handleMouseleave,!1)},addEvent:function(){this.drawLineByMouseFlag&&this.drawLineByMouse()},removeEvent:function(){this.canvas.removeEventListener("mousedown",this.handleMousedown),this.canvas.removeEventListener("mousemove",this.handleMousemove),this.canvas.removeEventListener("mouseup",this.handleMouseup),this.canvas.removeEventListener("mouseleave",this.handleMouseleave)},dataToPoint:function(t,i,e){return this.zp.utils.linearMap(t,i,e)},pointToData:function(t,i,e){return this.zp.utils.linearMap(t,i,e)},render:function(){this.drawGrid(),this.drawAxis(),this.initDrawOpacityLine()},refresh:function(t){this.opts=t,this.clear(),this.render()},destroy:function(){this.removeEvent(),this.zp=null,this.canvas=null},clear:function(){this.zp.clear()},init:function(){this.clear(),this.render(),this.addEvent()}};var L=T,k={rainbow:[[0,"rgba(0, 0, 255, 1.0)"],[.2,"rgba(0, 255, 255, 1.0)"],[.5,"rgba(0, 255, 0, 0.5)"],[.8,"rgba(255, 255, 0, 1.0)"],[1,"rgba(255, 0, 0, 1.0)"]],cooltowarm:[[0,"#3C4EC2"],[.2,"#9BBCFF"],[.5,"#DCDCDC"],[.8,"#F6A385"],[1,"#B40426"]],blackbody:[[0,"#000000"],[.2,"#780000"],[.5,"#E63200"],[.8,"#FFFF00"],[1,"#FFFFFF"]],grayscale:[[0,"#000000"],[.2,"#404040"],[.5,"#7F7F80"],[.8,"#BFBFBF"],[1,"#FFFFFF"]],rainbow2:[[0,"#000000"],[.2,"#404040"],[.5,"#7F7F80"],[1,"#BFBFBF"]]},P={props:{value:{type:Object,default:function(){return{name:"rainbow",colors:k["rainbow"]}}},minMax:{type:Array,default:function(){return[0,1]}}},watch:{dialogVisible:function(t){t||(this.destroyColorBar(),this.destroyOpacityChart())}},computed:{newVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{currentName:this.value.name,currentIndex:Number,ipNum:1,dialogVisible:!1,triggerStyle:{width:"100px",height:"25px"},tableHeaderStyle:{padding:0},tableCellStyle:{padding:0},lutData:this.parseTableData(k),lutItem:null,selectIndex:[],cb:null,oc:null}},created:function(){this.value.name||(this.value["name"]="rainbow",this.value["colors"]=k["rainbow"],this.currentName="rainbow")},destroyed:function(){},mounted:function(){},methods:{colorValueformatter:function(t){return t.value*(this.minMax[1]-this.minMax[0])+this.minMax[0]},setBgStyleByColor:function(t){return{width:"100%",height:"25px",background:this.lutItem[t].color}},setBgStyleByColorArr:function(t){return{width:"100%",height:"25px",background:this.parseBgcolorTemplate(this.lutData[t])}},parseTableData:function(t){var i=[];for(var e in t)i.push({name:e,colors:t[e]});return i},parseBgcolorTemplate:function(t){var i="";return t.colors.forEach((function(t){i+=","+t[1]+" "+100*t[0]+"%"})),"linear-gradient(to right ".concat(i,")")},setLutTableActive:function(t){0==this.lutData.length||t>=this.lutData.length?this.lutItem=[]:(this.lutItem=this.parseLutItem(this.lutData[t].colors),this.$refs.leftTable.setCurrentRow(this.lutData[t]))},parseLutItem:function(t){var i,e=this,a=[];return t.forEach((function(t){_.isHex(t[1])?i=_.rgbaArrToString(_.hexToRgba(t[1],1)):_.isRgb(t[1])?i=t[1]:e.$message({showClose:!0,message:"颜色设置错误！",type:"error"}),a.push({value:t[0],color:i})})),a},addLutItem:function(t){this.currentIndex=this.lutData.length,this.modifyLutItem(this.currentIndex,t),this.setLutTableActive(this.currentIndex),this.$message({showClose:!0,message:"保存成功！",type:"success"})},deleteLutItem:function(t){if(0==this.lutData.length)return this.$message({showClose:!0,message:"当前颜色方案为空！",type:"warning"});this.lutData.splice(t,1)},modifyLutItem:function(t,i){var e=[];i.forEach((function(t){e.push([t.value,t.color])})),this.$set(this.lutData,t,{name:this.currentName,colors:e}),this.$message({showClose:!0,message:"保存成功！",type:"success"})},deleteColorItem:function(t){for(var i=t.length-1;i>=0;i--)this.lutItem.splice(t[i],1)},addColorItem:function(t){this.lutItem.splice(this.selectIndex[0]+1,this.selectIndex[1]-this.selectIndex[0]-1),this.selectIndex[1]=this.selectIndex[0]+1;for(var i=t.length-1;i>=0;i--)this.lutItem.splice(this.selectIndex[0]+1,0,t[i]),this.selectIndex[1]++},modifyColorItem:function(t,i){var e=[];i.forEach((function(t){e.push([t.value,t.color])})),this.$set(this.lutData,t,{name:this.currentName,colors:e})},handleTrigger:function(){var t=this;this.dialogVisible=!0,this.currentIndex=_.getIndexByObjName(this.lutData,this.value.name),this.$nextTick((function(){t.setLutTableActive(t.currentIndex),t.initColorBar(),t.initOpacityChart()}))},handleRowClick:function(t){this.currentIndex=_.getIndexByObjName(this.lutData,t.name),this.currentName=this.lutData[this.currentIndex].name,this.setLutTableActive(this.currentIndex),this.refreshColorBar(),this.refreshOpacityChart()},parseOpacityToLutItem:function(){for(var t=0;t<this.lutItem.length;t++){var i=this.lutItem[t].color.split(",");i[3]="".concat(this.oc.opacityList[t],")"),this.lutItem[t].color=i.join(",")}this.handleColorPickerChange()},handleBtnSave:function(){if(!this.currentName)return this.$message({showClose:!0,message:"名称为空！",type:"warning"});var t=_.getIndexByObjName(this.lutData,this.currentName);t<0?this.addLutItem(this.lutItem):this.modifyLutItem(t,this.lutItem)},handleBtnDelete:function(){this.deleteLutItem(this.currentIndex),this.setLutTableActive(0)},handleBtnOk:function(){this.dialogVisible=!1,this.newVal=this.lutData[this.currentIndex]},handleBtnCancel:function(){this.dialogVisible=!1},handleSelectionChange:function(t){var i=this,e=[];t.forEach((function(t){i.lutItem.forEach((function(i,a){t.value==i.value&&e.push(a)}))})),this.selectIndex=e.sort()},handleBtnInterpolation:function(){if(2!=this.selectIndex.length)return this.$message({showClose:!0,message:"只能在两个颜色滑块之间插值！",type:"warning"});for(var t=[],i=parseInt(this.ipNum),e=i+1,a=this.lutItem[this.selectIndex[0]].value,n=this.lutItem[this.selectIndex[1]].value,o=n-a,s=_.gradient(this.lutItem[this.selectIndex[0]].color,this.lutItem[this.selectIndex[1]].color,e),r=1;r<e;r++)t.push({value:(a+o*r/e).toFixed(2),color:_.rgbaArrToString(_.hexToRgba(s[r],1))});this.addColorItem(t),this.refreshColorBar(),this.refreshOpacityChart()},handleBtnRemove:function(){if(0==this.selectIndex.length||0===this.selectIndex[0]||-1!=this.selectIndex.indexOf(this.lutItem.length-1))return this.$message({showClose:!0,message:"首尾颜色滑块不能移除！",type:"warning"});this.deleteColorItem(this.selectIndex),this.refreshColorBar(),this.refreshOpacityChart()},handleColorPickerChange:function(){this.refreshColorBar(),this.refreshOpacityChart()},initColorBar:function(){var t={data:this.lutItem,minMax:this.minMax};this.cb=new I(document.querySelector(".vct_dialog_content_right_color-bar"),t),this.cb.init()},refreshColorBar:function(){var t={data:this.lutItem,minMax:this.minMax};this.cb.refresh(t)},destroyColorBar:function(){this.cb.destroyed(),this.cb=null},initOpacityChart:function(){var t={data:this.lutItem,minMax:[0,1],drawLineByMouse:!0};this.oc=new L(document.querySelector(".vct_dialog_content_mid_opacity-chart_canvas"),t),this.oc.init()},refreshOpacityChart:function(){var t={data:this.lutItem,minMax:[0,1]};this.oc.refresh(t)},destroyOpacityChart:function(){this.oc.destroy(),this.oc=null}}},S=P,M=(e("79cc"),e("2877")),O=Object(M["a"])(S,s,r,!1,null,null,null),z=O.exports,D={name:"App",components:{VueColorTable:z},data:function(){return{range:[-500,500],colors:{}}}},F=D,A=Object(M["a"])(F,n,o,!1,null,null,null),N=A.exports,E=e("5c96");e("0fae");a["default"].config.productionTip=!1,a["default"].prototype.$message=E["Message"],a["default"].use(E["Dialog"]),a["default"].use(E["Table"]),a["default"].use(E["TableColumn"]),a["default"].use(E["ColorPicker"]),new a["default"]({render:function(t){return t(N)}}).$mount("#app")},"79cc":function(t,i,e){"use strict";e("e7ce")},e7ce:function(t,i,e){var a=e("35b0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("e9c01a30",a,!0,{sourceMap:!1,shadowMode:!1})}});