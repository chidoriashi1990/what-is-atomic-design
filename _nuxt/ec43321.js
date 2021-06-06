(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4,5],{407:function(e,t,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("4795b8e6",content,!0,{sourceMap:!1})},408:function(e,t,n){"use strict";n(407)},409:function(e,t,n){var r=n(18)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap);"]),r.push([e.i,'div.title-style[data-v-f67c818a]{font-family:"Noto Sans JP",sans-serif;font-weight:700;font-size:2.125rem}',""]),e.exports=r},410:function(e,t,n){"use strict";n.r(t);var r={name:"ProfileCard",props:{profileImage:{type:String,required:!0},actionButtons:{type:Array,required:!0}}},l=n(59),o=n(70),m=n.n(o),v=n(405),d=n(196),c=n(87),f=n(400),h=n(406),_=n(194),y=n(266),x=n(401),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"d-flex justify-space-between mb-6",attrs:{flat:""}},[n("v-card",{attrs:{width:"500px"}},[n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"4"}},[n("v-card",{staticClass:"px-1",attrs:{elevation:"0"}},[n("v-img",{attrs:{src:e.profileImage,alt:"Profile image","aspect-ratio":1,width:"180"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-card-title",{staticClass:"headline font-weight-bold"},[e._v("\n            "+e._s(e.$t("name"))+"\n          ")]),e._v(" "),n("v-card-text",[e._v(" "+e._s(e.$t("profession"))+" ")]),e._v(" "),n("v-card-actions",e._l(e.actionButtons,(function(button){return n("div",{key:button.icon},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:"",dark:"",href:button.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[e._v(e._s(button.icon))])],1)],1)})),0)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:d.a,VCardActions:c.a,VCardText:c.b,VCardTitle:c.c,VCol:f.a,VContainer:h.a,VIcon:_.a,VImg:y.a,VRow:x.a})},411:function(e,t,n){"use strict";n.r(t);var r={name:"SectionCard",props:{title:{type:String,required:!1,default:""}},data:function(){return{}}},l=(n(408),n(59)),o=n(70),m=n.n(o),v=n(196),d=n(87),c=n(406),f=n(401),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-card",{staticClass:"pa-3 mx-auto",attrs:{"min-width":"500","max-width":"500"}},[n("v-card",{staticClass:"d-flex justify-center",attrs:{flat:"",tile:""}},[n("v-card-title",[n("div",{staticClass:"title-style"},[e._v("\n            "+e._s(e.title)+"\n          ")])])],1),e._v(" "),n("v-card",{staticClass:"d-flex justify-center",attrs:{flat:"",tile:""}},[n("v-card",{attrs:{color:"black",height:"10",width:"150",flat:"",tile:""}})],1),e._v(" "),n("v-card-text",[e._t("text")],2)],1)],1)],1)}),[],!1,null,"f67c818a",null);t.default=component.exports;m()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VContainer:c.a,VRow:f.a})},412:function(e,t,n){"use strict";n.r(t);var r={name:"DarkModeSwitch",data:function(){return{switchValue:!1}},created:function(){var e=localStorage.getItem("darkmode");null===e?this.checkDarkMode():this.switchValue=JSON.parse(e.toLowerCase()),this.clickSwitch()},methods:{clickSwitch:function(){localStorage.setItem("darkmode",this.switchValue),this.$emit("darkMode",this.switchValue)},checkDarkMode:function(){!0===window.matchMedia("(prefers-color-scheme: dark)").matches?this.switchValue=!0:this.switchValue=!1}}},l=n(59),o=n(70),m=n.n(o),v=n(405),d=n(196),c=n(87),f=n(194),h=n(433),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"d-inline-flex px-8 py-2",attrs:{dark:e.switchValue,rounded:"xl",elevation:"0",outlined:"","min-width":"242","min-height":"106"}},[n("v-card-actions",[n("v-switch",{attrs:{inset:"",color:"purple"},on:{click:e.clickSwitch},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}}),e._v(" "),n("v-btn",{staticClass:"ml-8",attrs:{fab:"","x-large":"",elevation:"0",ripple:!1}},[n("v-icon",{attrs:{fab:"",color:"yellow darken-1"}},[e._v(" mdi-weather-night ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:d.a,VCardActions:c.a,VIcon:f.a,VSwitch:h.a})},426:function(e,t,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("7132a15d",content,!0,{sourceMap:!1})},427:function(e,t,n){var r=n(18)(!1);r.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=r},428:function(e,t,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("56407fa2",content,!0,{sourceMap:!1})},429:function(e,t,n){var r=n(18)(!1);r.push([e.i,'.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{position:relative;height:100%;flex:1 1 auto}.v-timeline-item__divider{position:relative;min-width:96px;display:flex;align-items:center;justify-content:center}.v-timeline-item__dot{z-index:2;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{border-radius:50%;display:flex;justify-content:center;align-items:center}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):before{content:"";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:before{top:12px}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{right:auto;left:calc(50% - 1px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{right:47px;left:auto}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{right:auto;left:47px}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}',""]),e.exports=r},434:function(e,t,n){"use strict";n.r(t);var r=n(256),l=n(410),o=n(411),m=n(412),v={components:{ProfileDesktop:r.a,ProfileCard:l.default,SectionCard:o.default,DarkModeSwitch:m.default},data:function(){return{profileImage:"https://avatars.githubusercontent.com/u/3616178?v=4",socialData:[{icon:"mdi-email",href:"mailto:chidoriashi00918@gmail.com"},{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/"},{icon:"mdi-facebook",href:"https://www.facebook.com/YuM1909"},{icon:"mdi-twitter",href:"https://twitter.com/MiyakawaYusuke"},{icon:"mdi-github",href:"https://github.com/chidoriashi1990"}],timeline:[{yyyymm:"2014-04",icon:"mdi-domain",title:"work.history.domain01.title",contents:["work.history.domain01.contents.content01"]},{yyyymm:"2013-03",icon:"mdi-school",title:"work.history.university.title",contents:["work.history.university.contents.content01"]}]}},methods:{darkModeSwitch:function(e){this.$vuetify.theme.dark=e}}},d=n(59),c=n(70),f=n.n(c),h=n(196),_=n(87),y=(n(7),n(5),n(9),n(12),n(8),n(13),n(2)),x=(n(426),n(29));function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=x.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:k({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:k({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}}),C=n(194),j=(n(268),n(0)),V=Object(j.e)("spacer","div","v-spacer"),D=(n(428),n(6));function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var P=Object(D.a)(x.a).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),$=(n(202),n(125)),B=n(39);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=Object(D.a)(B.a,x.a).extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement($.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",M({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:M({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("profile-desktop",{scopedSlots:e._u([{key:"main",fn:function(){return[n("profile-card",{staticClass:"mb-12",attrs:{"profile-image":e.profileImage,"action-buttons":e.socialData}}),e._v(" "),n("section-card",{staticClass:"mb-12",attrs:{id:"about",title:"about"},scopedSlots:e._u([{key:"text",fn:function(){return[n("v-card",{attrs:{flat:""}},[n("v-card-actions",[n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-format-quote-open")])],1)],1),e._v(" "),n("div",{staticClass:"mx-8"},[n("p",{staticClass:"font-weight-bold text-subtitle-1 text--primary"},[e._v("\n            "+e._s(e.$t("about-sub-title"))+"\n          ")]),e._v(" "),n("p",{staticClass:"body-2 text--primary"},[e._v("\n            "+e._s(e.$t("about"))+"\n          ")])]),e._v(" "),n("v-card",{attrs:{flat:""}},[n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-icon",{attrs:{"x-large":""}},[e._v("mdi-format-quote-close")])],1)],1)]},proxy:!0}])}),e._v(" "),n("section-card",{staticClass:"mb-12",attrs:{id:"works",title:"works"},scopedSlots:e._u([{key:"text",fn:function(){return[n("p",{staticClass:"text-h6"},[e._v("\n          "+e._s(e.$t("work.sub-titile-1"))+"\n        ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-timeline",{attrs:{dense:""}},e._l(e.timeline,(function(t,i){return n("v-timeline-item",{key:i,attrs:{color:"transparent",large:""},scopedSlots:e._u([{key:"icon",fn:function(){return[n("v-icon",{attrs:{large:""}},[e._v(e._s(t.icon))])]},proxy:!0}],null,!0)},[e._v(" "),n("v-card",[n("v-card-text",[n("div",[e._v(e._s(t.yyyymm))]),e._v(" "),n("div",{staticClass:"text-subtitle-1 text--primary"},[e._v("\n                  "+e._s(e.$t(t.title))+"\n                ")]),e._v(" "),e._l(t.contents,(function(content,t){return n("div",{key:t,staticClass:"text--primary"},[e._v("\n                  "+e._s(e.$t(content+".text"))+"\n                ")])}))],2)],1)],1)})),1)]},proxy:!0}])})]},proxy:!0},{key:"right-side",fn:function(){return[n("dark-mode-switch",{on:{darkMode:e.darkModeSwitch}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCard:h.a,VCardActions:_.a,VCardText:_.b,VDivider:O,VIcon:C.a,VSpacer:V,VTimeline:P,VTimelineItem:E})}}]);