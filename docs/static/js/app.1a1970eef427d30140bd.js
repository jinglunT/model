webpackJsonp([1],{"4WRj":function(t,e){},B0LD:function(t,e){},BfLt:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("yviF"),i=s.n(n),r=(s("hZls"),i.a.initializeApp({apiKey:"AIzaSyBat87rpMCQdMEg4dXQbkURHMDfR_UeaGQ",authDomain:"model-340b0.firebaseapp.com",databaseURL:"https://model-340b0.firebaseio.com",projectId:"model-340b0",storageBucket:"model-340b0.appspot.com",messagingSenderId:"606616504213",appId:"1:606616504213:web:fa153f6ece989ac03c189c",measurementId:"G-CZ3FRV765J"}).database()),o={name:"App",firebase:{chatsTool:r.ref("chatsTool"),chatsWork:r.ref("chatsWork"),chatsTeach:r.ref("chatsTeach")},data:function(){return{chatsTool:void 0,chatsWork:void 0,chatsTeach:void 0}},methods:{submit:function(t,e,s,a){var n={n:t,email:e,t:s,time:(new Date).getTime()};s?(this.$firebaseRefs[a].push(n),window.alert("留言已送出")):window.alert("請輸入留言")}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{attrs:{id:"navbar"}},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"home icon"})]),t._v(" "),s("router-link",{attrs:{to:"/tools"}},[t._v("開箱")]),t._v(" "),s("router-link",{attrs:{to:"/mywork"}},[t._v("作品分享")]),t._v(" "),s("router-link",{attrs:{to:"/teach"}},[t._v("教學")])],1),t._v(" "),s("router-view",{attrs:{chatsTool:t.chatsTool,chatsWork:t.chatsWork,chatsTeach:t.chatsTeach},on:{submit:t.submit}})],1)},staticRenderFns:[]};var m=s("VU/8")(o,c,!1,function(t){s("rUYh")},null,null).exports,l=s("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("vue-headful",{attrs:{title:"首頁"}}),this._v(" "),e("img",{staticClass:"fat-only",attrs:{src:"/static/首頁背景.JPG"}})],1)},staticRenderFns:[]};var d=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"模型與我"}}},u,!1,function(t){s("sloP")},"data-v-595346f6",null).exports,v={name:"Chat",props:["chats"],data:function(){return{msg:"留言版",myName:"訪客",myEmail:"",myText:""}},methods:{submit:function(t,e,s){this.myName="訪客",this.myEmail="",this.myText="",this.$emit("submit",t,e,s)},parseTime:function(t){return new Date(t).toLocaleDateString()}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container left aligned"},[s("hr"),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("回首頁")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"ui comments"},[s("h3",[t._v(" "+t._s(t.msg))]),t._v(" "),t._l(t.chats,function(e){return s("div",{key:e.time,staticClass:"comment"},[s("i",{staticClass:"user icon"}),t._v(" "+t._s(e.n)+" says: "+t._s(e.t)+" -- "+t._s(t.parseTime(e.time))+"\n      ")])}),t._v(" "),s("hr"),t._v(" "),s("form",{staticClass:"ui form"},[s("label",[t._v(" 您的大名: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.myName,expression:"myName"}],attrs:{type:"text"},domProps:{value:t.myName},on:{input:function(e){e.target.composing||(t.myName=e.target.value)}}}),t._v(" "),s("label",[t._v(" Email: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.myEmail,expression:"myEmail"}],attrs:{type:"email"},domProps:{value:t.myEmail},on:{input:function(e){e.target.composing||(t.myEmail=e.target.value)}}}),t._v(" "),s("label",[t._v(" 請留言: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.myText,expression:"myText"}],attrs:{type:"text",placeholder:"您想說什麼？"},domProps:{value:t.myText},on:{input:function(e){e.target.composing||(t.myText=e.target.value)}}}),t._v(" "),s("button",{staticClass:"ui huge green button",on:{click:function(e){return t.submit(t.myName,t.myEmail,t.myText)}}},[t._v("留言")])])],2)],1)},staticRenderFns:[]};var _=s("VU/8")(v,h,!1,function(t){s("B0LD")},"data-v-357f027c",null).exports,p={name:"HelloWorld",props:["chatsTool"],components:{Chat:_},methods:{submit:function(t,e,s){console.log(t),this.$emit("submit",t,e,s,"chatsTool")}},data:function(){return{msg:"RG 1/144 Gundam Exia[開箱]",tools:[{src:"IMG_0867.JPG",name:"盒繪",des:"一張大臉加上本體,一如往常的RG盒繪,印刷技術也棒的無話可說。"},{src:"IMG_0868.JPG",name:"板件",des:"一共只有9片框架,藍色與白色的成型色本身就很好看了,而且在這兩種顏色上還有做個別的深淺分色處裡,讓模型顯得更有層次感。"},{src:"IMG_0869.JPG",name:"電鍍板件",des:"雖然說電鍍是為了增添整個模型的質感,但是在C20與C21零件上卻造成了反效果,讓這2個零件充滿滿滿的玩具感,所以之後一定會洗掉從噴。"},{src:"IMG_9848.JPG",name:"說明書",des:"跟所有的RG規格的鋼彈模型一樣,正面是大臉,背面是介紹貼紙還有塗裝參考。"},{name:"心得",des:"這次的RG能天使,老實說真的是沒有什麼太大的亮點,但是它還是有符合RG規格的標準,擁有精美分色還有細節的刻線"}]}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("vue-headful",{attrs:{title:"RG 1/144 Gundam Exia[開箱]"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"ui grid container"},t._l(t.tools,function(e){return s("div",{key:e.src,staticClass:"sixteen wide column"},[s("div",{staticClass:"content"},[s("div",[e.src?s("img",{staticClass:"huge ui image",attrs:{src:"/static/"+e.src}}):t._e()]),t._v(" "),s("div",{staticClass:"ui header"},[t._v(t._s(e.name))]),t._v(" "),e.des?s("div",{staticClass:"description"},[t._v(t._s(e.des))]):t._e()])])}),0),t._v(" "),s("chat",{attrs:{chats:t.chatsTool},on:{submit:t.submit}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui segment container"},[e("p",[this._v("其實我個人對鋼彈的認知只有限於U.C宇宙(一年戰爭.逆襲的夏亞.星塵回憶與機動戰士鋼彈UC之類的作品)跟鐵血孤兒而已,所以,我對00這個系列是完全陌生的,會想製作這組模型也只是想要接觸其他類型的鋼彈而已,但是,這組RG能天使意外的讓我對00系列產生了感情,同時也開出了一個填不滿的大坑............")])])}]};var g=s("VU/8")(p,f,!1,function(t){s("BfLt")},"data-v-6d160524",null).exports,C={name:"HelloWorld",props:["chatsWork"],components:{Chat:_},methods:{submit:function(t,e,s){console.log(t),this.$emit("submit",t,e,s,"chatsWork")}},data:function(){return{msg:"1/12 Shore Trooper[改造.改色]",tools:[{src:"unnamed (11).jpg",name:"模型本體",des:"這次使用的模型是1/12的Shore Trooper ( 中文直翻該是.....海岸士兵? ) 。"},{src:"unnamed (7).jpg",name:"改造過後",des:"顏色基本上我是整個重新噴過了,身上還加上了一些布料增加真實感。橘色左手是模仿電影《成人世界》中的機器人CHAPPIE。"},{src:"unnamed (5).jpg",name:"頭盔",des:"頭盔的塗裝非常簡單,但是卻也非常耗時;先將頭部透明件取出,之後噴上一層深灰色 ( TAMIYA色號 : XF-24 ) ,等深灰色完全乾燥後,最煩人的部分就來了,畫面中所看到的銀色全部都是一層一層乾掃出來的,而乾掃這個步驟必須要等一層乾了才能進行下一層,所以塗完整顆頭至少會花費掉3~4的時間。"},{src:"unnamed (8).jpg",name:"披肩",des:"披肩的不規則無法直接用剪刀剪出來,用筆刀又不好控制,所以我建議用火燒 ( 用火燒的話一定要用棉質布料,千萬別用人工合成的布來燒 ) 。"}]}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("vue-headful",{attrs:{title:"1/12 Shore Trooper[改造.改色]"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"ui segment container"},[s("router-link",{attrs:{to:"/mywork2"}},[t._v("作品分享")]),t._v(" "),s("p",[t._v("哈囉")])],1),t._v(" "),s("div",{staticClass:"ui grid container"},t._l(t.tools,function(e){return s("div",{key:e.src,staticClass:"sixteen wide column"},[s("div",{staticClass:"content"},[s("div",[e.src?s("img",{staticClass:"huge ui image",attrs:{src:"/static/"+e.src}}):t._e()]),t._v(" "),s("div",{staticClass:"ui header"},[t._v(t._s(e.name))]),t._v(" "),e.des?s("div",{staticClass:"description"},[t._v(t._s(e.des))]):t._e()])])}),0),t._v(" "),s("chat",{attrs:{chats:t.chatsWork},on:{submit:t.submit}})],1)},staticRenderFns:[]};var y=s("VU/8")(C,b,!1,function(t){s("u2KW")},"data-v-7160dae6",null).exports,T={name:"HelloWorld",props:["chatsWork"],components:{Chat:_},methods:{submit:function(t,e,s){console.log(t),this.$emit("submit",t,e,s,"chatsWork")}},data:function(){return{msg:"1/12 Shore Trooper[改造.改色]",tools:[{src:"unnamed (11).jpg",name:"模型本體",des:"這次使用的模型是1/12的Shore Trooper ( 中文直翻該是.....海岸士兵? ) 。"},{src:"unnamed (7).jpg",name:"改造過後",des:"顏色基本上我是整個重新噴過了,身上還加上了一些布料增加真實感。橘色左手是模仿電影《成人世界》中的機器人CHAPPIE。"},{src:"unnamed (5).jpg",name:"頭盔",des:"頭盔的塗裝非常簡單,但是卻也非常耗時;先將頭部透明件取出,之後噴上一層深灰色 ( TAMIYA色號 : XF-24 ) ,等深灰色完全乾燥後,最煩人的部分就來了,畫面中所看到的銀色全部都是一層一層乾掃出來的,而乾掃這個步驟必須要等一層乾了才能進行下一層,所以塗完整顆頭至少會花費掉3~4的時間。"},{src:"unnamed (8).jpg",name:"披肩",des:"披肩的不規則無法直接用剪刀剪出來,用筆刀又不好控制,所以我建議用火燒 ( 用火燒的話一定要用棉質布料,千萬別用人工合成的布來燒 ) 。"}]}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("vue-headful",{attrs:{title:"作品2"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"ui grid container"},t._l(t.tools,function(e){return s("div",{key:e.src,staticClass:"sixteen wide column"},[s("div",{staticClass:"content"},[s("div",[e.src?s("img",{staticClass:"huge ui image",attrs:{src:"/static/"+e.src}}):t._e()]),t._v(" "),s("div",{staticClass:"ui header"},[t._v(t._s(e.name))]),t._v(" "),e.des?s("div",{staticClass:"description"},[t._v(t._s(e.des))]):t._e()])])}),0),t._v(" "),s("chat",{attrs:{chats:t.chatsWork},on:{submit:t.submit}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui segment container"},[e("p",[this._v('這是我第一次嘗試將模型整個改色的作品,這件作品的動機是在看完星際大戰系列電影後才出現的。當時我發現,劇中有很多過目即忘的外星人與賞金獵人上的裝甲其實都是用帝國士兵的裝甲改造而成的。於是,我便有了"製作屬於自己的星戰角色"的這個念頭。')])])}]};var k=s("VU/8")(T,G,!1,function(t){s("4WRj")},"data-v-4708f452",null).exports,x={name:"Teach",props:["chatsTeach"],components:{Chat:_},methods:{submit:function(t,e,s){console.log(t),this.$emit("submit",t,e,s,"chatsTeach")}},data:function(){return{msg:"常用模型工具",teachs:[{src:"IMG_9836.JPG",name:"常用工具",des:"我的常用工具"},{src:"IMG_9840.JPG",name:"模型膠",des:'是一種高濃度的溶劑,可藉由溶解塑膠來黏合模型,圖中分別為"高流動型"(綠蓋)以及"一般型"(白蓋),高流動型的濃度較低,揮發速度較快,一般型則相反'},{src:"IMG_9843.JPG",name:"斜口鉗",des:"再把零件從框架上剪下來時一定會用到,斜口鉗同時也可以對模型做初步的修剪"},{src:"IMG_9848.JPG",name:"筆刀",des:'修剪水口(湯口)必要的工具,但是因為操作起來較為耗時,所以近年來以普遍被"神之手斜口鉗"取代'},{src:"IMG_9851.JPG",name:"手鑽"},{src:"IMG_9856.JPG",name:"鑷子"},{src:"IMG_9857.JPG",name:"噴筆",des:"不用多說,噴漆時一定會用到它,還有,因為環保的關係,非常不建議各位使用噴罐"},{src:"IMG_9859.JPG",name:"防毒面具",des:"噴漆時請務必戴上,因為,抽風機並沒有辦法完全避免我們吸入有害物質,還有,不要以為油漆散發出的氣味沒什麼(油性水性都一樣),長期吸入這些東西真的會對人體造成非常大的損害"}]}}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("vue-headful",{attrs:{title:"常用工具"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("ul",t._l(t.teachs,function(e){return s("li",{key:e.src},[s("h3",[t._v(t._s(e.name)+":")]),t._v(" "),s("img",{attrs:{src:"/static/"+e.src}}),t._v(" "),s("br"),t._v(" "),e.des?s("p",[t._v(t._s(e.des))]):t._e()])}),0),t._v(" "),s("chat",{attrs:{chats:t.chatsTeach},on:{submit:t.submit}})],1)},staticRenderFns:[]};var P=s("VU/8")(x,W,!1,function(t){s("yJCY")},"data-v-73a0010a",null).exports;a.a.use(l.a);var E=new l.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/tools",name:"Tools",component:g},{path:"/mywork",name:"MyWork",component:y},{path:"/mywork2",name:"MyWork2",component:k},{path:"/teach",name:"Teach",component:P}]}),w=s("hnaQ"),I=s("WiKS"),R=s.n(I);a.a.component("vue-headful",R.a),a.a.config.productionTip=!1,a.a.use(w.a),new a.a({el:"#app",router:E,components:{App:m},template:"<App/>"})},rUYh:function(t,e){},sloP:function(t,e){},u2KW:function(t,e){},yJCY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a1970eef427d30140bd.js.map