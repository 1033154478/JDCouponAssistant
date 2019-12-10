"use strict";var a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function r(a,s,c){function u(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=s[t]={exports:{}};a[t][0].call(i.exports,function(e){return u(a[t][1][e]||e)},i,i.exports,r,a,s,c)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=(a(i,[{key:"get",value:function(){this.couponList=[];for(var e=window.__react_data__.activityData.floorList,t=0;t<e.length;t++){var n=e[t];if("free_coupon"==n.template||"finance_coupon"==n.template)for(var o=0;o<n.couponList.length;o++){var i=n.couponList[o],r=i.scene,a=i.args||i.cpId,s=i.jsonSrv?JSON.parse(i.jsonSrv).cid:"",c=i.discount,u=i.picUrl||i.picture,l=i.status,d=i.limit+","+i.scope;this.couponList.push({discount:c,details:d,scene:r,args:a,status:l,couponbatch:s,picUrl:u,flag:!1})}}this.list()}},{key:"list",value:function(){var o=this,i=document.createElement("div");i.innerHTML="<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>请先点击列表项选择领取的券</p>",i.setAttribute("style","display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");for(var e=function(e){var n=o.couponList[e],t=document.createElement("div");t.setAttribute("style","display:flex;flex-direction:row;padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"),t.setAttribute("data-item","coupon"),"1"==n.scene?t.innerHTML='<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="'+n.picUrl+'" />\n                <div">\n                    <p style="user-select: none;pointer-events:none;margin-bottom:10px">状态：'+("0"==n.status?"可领取":"1"==n.status?"已领取":"已领光")+"<br/>说明："+n.details+'</p>\n                    <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a href=\'https://so.m.jd.com/list/couponSearch.action?couponbatch='+n.couponbatch+'\' target="_blank" style="color: #fff;text-decoration: none;">可用商品</a>\n                    </button>\n                    <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a href=\'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"'+o.couponParams.activityId+'","scene":'+n.scene+',"args":"'+n.args+'"}&client=wh5\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                    </button>\n                </div>':"3"==n.scene&&(t.innerHTML='<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="'+n.picUrl+'" />\n                <div">\n                <p style="user-select: none;pointer-events:none;margin-bottom:10px">状态：'+("0"==n.status?"可领取":"1"==n.status?"已领取":"已领光")+'</p>\n                <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                    <a href=\'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"'+o.couponParams.activityId+'","scene":'+n.scene+',"actKey":"'+n.args+'"}&client=wh5\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                </button>\n                </div>'),i.appendChild(t),t.addEventListener("click",function(e){var t=e.target;t.getAttribute("data-item")&&(n.flag?t.style.border="1px solid gray":t.style.border="1px solid red",n.flag=!n.flag)})},t=0;t<this.couponList.length;t++)e(t);this.container.appendChild(i)}},{key:"send",value:function(){var o=this;this.outputTextarea.style.display="block";for(var e=function(t){var e=o.couponList[t],n="";"1"==e.scene?n='https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"'+o.couponParams.activityId+'","scene":'+e.scene+',"args":"'+e.args+'"}&client=wh5':"3"==e.scene&&(n='https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"'+o.couponParams.activityId+'","scene":'+e.scene+',"actKey":"'+e.args+'"}&client=wh5'),e.flag&&fetch(n,{credentials:"include"}).then(function(e){return e.json()}).then(function(e){e.errmsg?o.outputTextarea.value="第"+(t+1)+"张 领券结果:"+e.errmsg+"\n"+o.outputTextarea.value:o.outputTextarea.value="第"+(t+1)+"张 领券结果:"+e.subCodeMsg+"\n"+o.outputTextarea.value})},t=0;t<this.couponList.length;t++)e(t)}}]),i);function i(e,t,n){s(this,i),this.url="https://api.m.jd.com/client.action?functionId=newBabelAwardCollection",this.couponList=[],this.couponParams=e,this.container=t,this.outputTextarea=n}n.default=o},{}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e("../utils/utils"),i=(a(r,[{key:"get",value:function(){var e=this.detailurl.replace("{pid}",this.couponParams.pid);o.default.createJsonp(e,!0)}},{key:"jsonp",value:function(e){console.log(e);var t=JSON.parse(e.data),n=t.data;n?(this.couponList=[],t.success?(this.couponList.push({pid:n.productId,title:n.name,detail:n.description,imgUrl:n.imgUrl}),this.list()):alert("请检查该页面优惠券的有效性！")):this.outputTextarea.value="领券结果:"+e.data+"\n"+this.outputTextarea.value}},{key:"list",value:function(){var e=this,t=document.createElement("div");t.innerHTML="<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3>",t.setAttribute("style","display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");for(var n=0;n<this.couponList.length;n++){var o=this.couponList[n],i=document.createElement("div");i.setAttribute("style","display:flex;flex-direction:row;padding:10px 0;border-bottom:1px solid #999"),i.innerHTML='<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="'+o.imgUrl+'" />\n                <div>\n                    <h3 style="margin-bottom:10px">'+o.title+'</h3><p style="margin-bottom:10px">'+o.detail+'</p>\n                    <button class="receive" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a style="color: #fff;text-decoration: none;">直接领取</a>\n                    </button>\n                </div>',t.appendChild(i)}this.container.appendChild(t),document.querySelector(".receive").addEventListener("click",function(){e.send()})}},{key:"send",value:function(){this.outputTextarea.style.display="block";for(var e=0;e<this.couponList.length;e++){var t=this.couponList[e],n=this.url.replace("{pid}",t.pid);o.default.createJsonp(n,!0)}}}]),r);function r(e,t,n){s(this,r),this.url="https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=",this.detailurl="https://vip.jr.jd.com/goldcoin/product/{pid}?callback=",this.couponList=[],this.couponParams=e,this.container=t,this.outputTextarea=n,window.addEventListener("message",this.jsonp.bind(this),!1)}n.default=i},{"../utils/utils":6}],3:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=(a(i,[{key:"get",value:function(){var d=this;this.couponList=[],fetch(this.detailurl,{credentials:"include"}).then(function(e){return e.json()}).then(function(e){for(var t=e.rs.wholeCategoryCoupon,n=0;n<t.length;n++){var o=t[n],i=o.giftAmount,r=o.discount,a=o.quota,s=o.couponState,c=o.activtyId,u=o.limitStr,l=o.hour;d.couponList.push({giftAmount:i,activityId:c,discount:r,quota:a,hour:l,limitStr:u,couponState:s,flag:!1})}d.list()})}},{key:"list",value:function(){var o=this,i=document.createElement("div");i.innerHTML="<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>点击列表项选择要领取的券</p>",i.setAttribute("style","display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");for(var e=function(e){var n=o.couponList[e],t=document.createElement("div");t.setAttribute("style","text-align:left;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"),t.setAttribute("data-item","coupon"),t.innerHTML='<h3 style="user-select: none;pointer-events:none;">折扣：'+n.quota+"-"+n.discount+'</h3>\n                                    <p style="margin-bottom:10px;user-select: none;pointer-events:none;">状态：'+(1==n.couponState?"可领取":6==n.couponState?"已领光":"不可领取")+"<br/>说明："+n.limitStr+"<br/>兑换礼金："+n.giftAmount+"<br/>领取时间："+(n.hour||"现在可领")+'</p>\n                                    <button class="receive" data-id='+e+' style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">直接领取</button>',i.appendChild(t),t.addEventListener("click",function(e){var t=e.target;t.getAttribute("data-item")?(n.flag?t.style.border="1px solid gray":t.style.border="1px solid red",n.flag=!n.flag):t.getAttribute("data-id")&&o.singleSend(+t.getAttribute("data-id"))},!1)},t=0;t<this.couponList.length;t++)e(t);this.container.appendChild(i)}},{key:"send",value:function(){var o=this;this.outputTextarea.style.display="block";for(var e=function(e){var t=o.couponList[e],n=o.url.replace("{activityId}",t.activityId);t.flag&&fetch(n,{credentials:"include"}).then(function(e){return e.json()}).then(function(e){o.outputTextarea.value=t.quota+"-"+t.discount+" 领券结果:"+e.msg+"\n"+o.outputTextarea.value})},t=0;t<this.couponList.length;t++)e(t)}},{key:"singleSend",value:function(e){var t=this;this.outputTextarea.style.display="block";var n=this.couponList[e],o=this.url.replace("{activityId}",n.activityId);fetch(o,{credentials:"include"}).then(function(e){return e.json()}).then(function(e){t.outputTextarea.value=n.quota+"-"+n.discount+" 领券结果:"+e.msg+"\n"+t.outputTextarea.value})}}]),i);function i(e,t,n){s(this,i),this.url="https://rsp.jd.com/coupon/receiveDayCoupon/v1?locationCode=10002&lt=m&an=plus.mobile&getType=1&discount=10&couponKey=&platform=3&eventId=MPlusCoupon_Get&eid=&fp=&getType=1&activityId={activityId}",this.detailurl="https://rsp.jd.com/coupon/dayCouponList/v1/?lt=m&an=plus.mobile&couponType=0_1",this.couponList=[],this.couponParams=e,this.container=t,this.outputTextarea=n}n.default=o},{}],4:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=(a(i,[{key:"get",value:function(){var n=this;this.couponList=[];var e=this.detailurl.replace("{couponBusinessId}",this.couponParams.couponBusinessId);fetch(e).then(function(e){return e.json()}).then(function(e){var t=JSON.parse(e.data).baiCouponInfo;e.isSuccess?(n.couponList.push({couponBusinessId:JSON.parse(e.data).baiCouponDetailsNext.couponBusinessId,platform:t.platform,title:t.title,detail:t.detail}),n.list()):alert("请检查该页面优惠券的有效性！")})}},{key:"list",value:function(){var e=document.createElement("div");e.innerHTML="<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3>",e.setAttribute("style","display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");for(var t=0;t<this.couponList.length;t++){var n=this.couponList[t],o=document.createElement("div");o.setAttribute("style","padding:10px 0;border-bottom:1px solid #999"),o.innerHTML="<h3>"+n.title+"</h3><p>"+n.detail+"</p><p>可用范围："+n.platform+'</p>\n                                <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                                    <a href=\'http://opencredit.jd.com/act/get/coupon?couponBusinessId='+n.couponBusinessId+'&actId=004\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                                </button>',e.appendChild(o)}this.container.appendChild(e)}},{key:"send",value:function(){var o=this;this.outputTextarea.style.display="block";for(var e=function(t){var e=o.couponList[t],n=o.url.replace("{couponBusinessId}",e.couponBusinessId);fetch(n).then(function(e){return e.json()}).then(function(e){e.isSuccess?o.outputTextarea.value="第"+(t+1)+"张 领券结果:领取成功！}\n"+o.outputTextarea.value:o.outputTextarea.value="第"+(t+1)+"张 领券结果:领取失败！\n"+o.outputTextarea.value})},t=0;t<this.couponList.length;t++)e(t)}}]),i);function i(e,t,n){s(this,i),this.url="https://opencredit.jd.com/act/get/coupon?couponBusinessId={couponBusinessId}&actId=004",this.detailurl="http://opencredit.jd.com/act/get/couponInfo?couponBusinessId={couponBusinessId}",this.couponList=[],this.couponParams=e,this.container=t,this.outputTextarea=n}n.default=o},{}],5:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o,i,r=e("./coupons/newBabelAwardCollection"),a=e("./utils/utils"),s=e("./coupons/whtieCoupon"),c=e("./coupons/purchase"),u=e("./coupons/receiveDayCoupon");(i=o=o||{})[i.none=0]="none",i[i.receiveCoupons=1]="receiveCoupons",i.newBabelAwardCollection="newBabelAwardCollection",i.whiteCoupon="whiteCoupon",i.purchase="purchase",i.receiveDayCoupon="receiveDayCoupon";var l=void 0,d=window.location.href,p=!1,h=0,f=500,v=window.setInterval(B,f),m=void 0,b=void 0,g=document.createElement("div"),y=document.createElement("div"),x=document.createElement("div"),w=document.createElement("div"),k=document.createElement("input"),L=document.createElement("button"),C=document.createElement("div"),T=document.createElement("input"),I=document.createElement("div"),A=document.createElement("button"),j=document.createElement("button"),E=document.createElement("textarea"),M=document.createElement("div"),_=document.createElement("div");function B(){fetch("https://api.m.jd.com/client.action?functionId=babelActivityGetShareInfo&client=wh5").then(function(e){return e.json()}).then(function(e){m=a.default.formatDate(e.time),b=new Date(+e.time).toLocaleString()+":"+m.substr(-3,3),x.innerHTML="京东时间："+b+"<br/>当前获取时间的间隔频率："+f+"毫秒",p&&h<=+m&&(E.value+="当前时间："+b+"\n",p=!p,l&&l.send(E))})}Object.assign(window,{getLoginMsg:function(e){e.base.nickname&&(_.innerHTML="当前帐号："+e.base.nickname)}});var S;!function(e){var t={};switch(e){case o.none:break;case o.newBabelAwardCollection:t=d.match(/active\/(\S*)\/index/)[1],l=new r.default({activityId:t},g,E);break;case o.whiteCoupon:t=a.default.GetQueryString("couponBusinessId"),l=new s.default({couponBusinessId:t},g,E);break;case o.purchase:t=a.default.GetQueryString("pid"),l=new c.default({pid:t},g,E);break;case o.receiveDayCoupon:l=new u.default(null,g,E)}l&&(document.body.innerHTML="",document.body.style.backgroundColor="#ffffff",document.body.style.textAlign="center",document.body.style.maxWidth="100vw",g.setAttribute("style","border: 1px solid #000;padding: 5px;margin: 5px;"),y.innerHTML='<h2>京东领券助手V0.2</h2>\n                        <h3>author:krapnik</h3>\n                        <div style="display: flex;flex-direction: row;justify-content: center;">\n                        <iframe src="https://ghbtns.com/github-btn.html?user=krapnikkk&repo=JDCouponAssistant&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="21px"></iframe>\n                        <a href="tencent://message/?uin=708873725Menu=yes" target="_blank" title="发起QQ聊天"><img src="http://bizapp.qq.com/webimg/01_online.gif" alt="QQ" style="margin:0px;"></a>\n                        </div>',M.setAttribute("style","border: 1px solid #000;"),M.innerHTML="<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;padding: 0 37.5vw 5px;'>操作区</h3>",_.innerHTML="当前帐号：未登录",k.type="text",k.placeholder="请输入获取时间的刷新频率【毫秒】",k.setAttribute("style","width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;"),L.innerHTML="重置频率",L.setAttribute("style","width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;"),L.addEventListener("click",function(){var e=Math.trunc(+k.value);if(!f)return alert("请检查输入的刷新频率是否有误！(只能为大于0的数字)"),!1;f=e,window.clearInterval(v),v=window.setInterval(B,f)}),T.type="text",T.placeholder="定时领券时间【格式:9:59:59:950】",T.setAttribute("style","width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px;"),j.innerHTML="定时全部领取",j.addEventListener("click",function(){var e=a.default.formateTime(T.value);if(!e||e<0)return alert("请检查定时领券时间的格式是否有误！"),!1;p=!p,h=e,T.disabled=p,j.innerHTML=p?"取消全部领取":"定时全部领取"}),A.addEventListener("click",function(){l&&l.send(E)}),j.setAttribute("style","width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;"),A.innerHTML="一键全部领取",A.setAttribute("style","width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;"),E.setAttribute("style","width: 90vw;height: 40vw;border: 1px solid #868686;border-radius: 10px;overflow-y: scroll;margin:5px auto;display:none"),E.setAttribute("disabled","disabled"),document.body.append(g),g.append(y),g.append(M),M.append(_),M.append(w),w.append(x),w.append(k),w.append(L),M.append(C),C.append(T),C.append(I),I.append(A),I.append(j),M.append(E),a.default.createJsonp("https://wq.jd.com/user/info/QueryJDUserInfo?sceneid=11110&sceneval=2&g_login_type=1&callback=getLoginMsg"),l.get())}((S=o.none,window.location.host.includes("jd.com")&&(window.__react_data__?S=o.newBabelAwardCollection:window.Queries?S=o.whiteCoupon:d.includes("gcmall/index.html#/details?pid=")?S=o.purchase:d.includes("plus.m.jd.com/coupon/")&&(S=o.receiveDayCoupon)),S)),console.clear(),window.console&&(console.group("%c京东领券助手","color:#009a61; font-size: 28px; font-weight: 200"),console.log("%c本插件仅供学习交流使用\n作者:krapnik \ngithub:https://github.com/krapnikkk/JDCouponAssistant","color:#009a61"),console.groupEnd()),function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?d86d4ff3f6d089df2b41eb0735194c0d";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()},{"./coupons/newBabelAwardCollection":1,"./coupons/purchase":2,"./coupons/receiveDayCoupon":3,"./coupons/whtieCoupon":4,"./utils/utils":6}],6:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),window.jsonpBind=function(e){o.jsonpBind(JSON.stringify(e))};var o=(a(i,null,[{key:"formateDate",value:function(e){var t=new Date(+e),n=t.getHours(),o=t.getMinutes(),i=t.getSeconds(),r=t.getMilliseconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),r<10?r="00"+r:r<100&&10<=r&&(r="0"+r),n+""+o+i+r}},{key:"obtainLocal",value:function(e){return e.replace(/(?:(?:^|.*;\s*)3AB9D23F7A4B3C9B\s*=\s*([^;]*).*$)|^.*$/,"$1")}},{key:"getCookie",value:function(){return document.cookie}},{key:"formatDate",value:function(e){var t=new Date(+e),n=t.getHours(),o=t.getMinutes(),i=t.getSeconds(),r=t.getMilliseconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),r<10?r="00"+r:r<100&&10<=r&&(r="0"+r),n+""+o+i+r}},{key:"GetQueryString",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);if(!n){var o=window.location.hash;n=o.substr(o.indexOf("?")+1,o.length-o.indexOf("?")).match(t)}return null!=n?n[2]:""}},{key:"getQueryStringByName",value:function(e){e=e.replace(/#.*/,"");var t=/\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(e);return t?decodeURIComponent(t[0]):""}},{key:"formateTime",value:function(e){return Math.trunc(+e.replace(/[:|：]+/gi,""))}},{key:"createJsonp",value:function(e,t){var n=1<arguments.length&&void 0!==t&&t,o=document.createElement("script");n&&(e+="jsonpBind"),document.getElementsByTagName("head")[0].appendChild(o),o.setAttribute("src",e)}},{key:"jsonpBind",value:function(e){postMessage(e,"*")}}]),i);function i(){s(this,i)}n.default=o},{}]},{},[5]);