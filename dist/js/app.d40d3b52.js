(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);v&&v(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"92717f51"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2309:function(t,e,a){},4582:function(t,e,a){"use strict";var s=a("2309"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",{staticClass:"white pa-0"},[t.errors&&t.errors.length>0?a("v-snackbar",{attrs:{value:t.errors&&t.errors.length>0,top:"",color:t.errors[0].type}},[t._v("\n      "+t._s(t.errors[0].title)+": "+t._s(t.errors[0].message)+"\n    ")]):t._e(),a("v-container",{staticClass:"pt-0",staticStyle:{height:"100%","min-height":"100%"},attrs:{fluid:""}},[a("transition",{attrs:{mode:"out-in",name:"fade-transition"}},[a("router-view")],1)],1)],1),a("v-bottom-navigation",{attrs:{color:"indigo darken-2",fixed:""}},[a("v-btn",{attrs:{exact:"",to:"/"}},[a("span",[t._v("Home")]),a("v-icon",[t._v("mdi-home")])],1),a("v-btn",{attrs:{exact:"",to:"/pricing"}},[a("span",[t._v("Pricing")]),a("v-icon",[t._v("mdi-currency-usd")])],1),a("v-btn",{attrs:{exact:"",to:"/our-shows"}},[a("span",[t._v("Our Shows")]),a("v-icon",[t._v("mdi-filmstrip")])],1),a("v-btn",{attrs:{exact:"",to:"/calendar"}},[a("span",[t._v("Calendar")]),a("v-icon",[t._v("mdi-calendar-month-outline")])],1),a("v-btn",{attrs:{exact:"",to:"/constellations"}},[a("span",[t._v("Constellations")]),a("v-icon",[t._v("mdi-weather-night")])],1)],1)],1)},n=[],i={computed:{errors:{get(){return this.$store.getters.errors},set(t){return this.$store.commit("SET_ERRORS",t)}}}},o=i,l=(a("c892"),a("2877")),c=a("6544"),d=a.n(c),v=a("7496"),h=a("b81c"),u=a("8336"),m=a("a523"),p=a("a75b"),g=a("132d"),_=a("2db4"),f=Object(l["a"])(o,r,n,!1,null,"2f33212f",null),w=f.exports;d()(f,{VApp:v["a"],VBottomNavigation:h["a"],VBtn:u["a"],VContainer:m["a"],VContent:p["a"],VIcon:g["a"],VSnackbar:_["a"]});var b=a("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[t.loading?s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})],1)],1):s("v-row",{staticClass:"mb-6",attrs:{align:"start",justify:"center"}},[s("v-col",{staticClass:"pa-0",attrs:{cols:"12",xs:"12"}},[s("v-img",{attrs:{src:a("9956"),"max-height":"150",gradient:"to bottom, rgba(0, 0, 0, .33), rgba(255, 255, 255, 1)"}})],1),s("v-col",{staticClass:"mt-n12",staticStyle:{"z-index":"9"},attrs:{cols:"12",xs:"12"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{src:a("cf05"),"max-width":"32"}})],1),s("div",{staticClass:"text-center"},[s("h2",{staticClass:"title"},[t._v("Upcoming Shows")]),s("h3",{staticClass:"body-2"},[t._v("\n          "+t._s(t.format(t.parse(t.start,"yyyy-MM-dd",new Date),"EEEE, MMMM d"))+"\n          -\n          "+t._s(t.format(t.parse(t.end,"yyyy-MM-dd",new Date),"EEEE, MMMM d"))+"\n        ")])])],1),s("v-col",{attrs:{xs:"12"}},[s("v-row",[s("v-col",{attrs:{xs:"12",md:"8","offset-md":"2"}},t._l(t.schedule,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.events.length>0,expression:"item.events.length > 0"}],key:e.date},[s("v-list",{attrs:{subheader:""}},[s("v-subheader",{staticClass:"pl-2 pr-2 body-2 black--text subtitle-2 font-weight-bold"},[t._v(t._s(t.format(new Date(e.date),"EEEE, MMMM d")))]),t._l(e.events,(function(e){return s("v-list-item",{key:e.id,staticClass:"pl-2 pr-2",attrs:{to:{name:"events.show",params:{id:e.id}}}},[s("v-list-item-avatar",{attrs:{tile:"",size:"64"}},[1!=e.show.id?s("v-img",{attrs:{"aspect-ratio":9/16,src:e.show.cover}}):s("v-img",{attrs:{"aspect-ratio":9/16,src:t.settings.cover}})],1),s("v-list-item-content",[1!=e.show.id?s("v-list-item-title",[t._v("\n                    "+t._s(e.show.name)+"\n                  ")]):s("v-list-item-title",[t._v("\n                    "+t._s(e.memo)+"\n                  ")]),s("v-list-item-subtitle",[t._v("\n                    "+t._s(t.format(new Date(e.start),"h:mm a"))+"\n                    ("+t._s(t.formatDistanceToNow(new Date(e.start),{addSuffix:!0}))+")\n                  ")]),s("v-list-item-subtitle",[s("v-chip",{staticClass:"mr-1",attrs:{label:"",small:"",color:e.type.color,dark:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-bookmark")]),t._v("\n                      "+t._s(e.type.name)+"\n                    ")],1),1!=e.show.id?s("v-chip",{staticClass:"mr-1",attrs:{label:"",small:"",color:"indigo darken-2",dark:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-filmstrip")]),t._v("\n                      "+t._s(e.show.type)+"\n                    ")],1):t._e()],1)],1)],1)}))],2)],1)})),0)],1)],1)],1)],1)},C=[],E=a("2f62"),S=a("b166"),k=a("ef1b"),x=a("2cf3"),V={data:()=>({startDatePicker:!1,endDatePicker:!1,dialog:!1,show_type_filter:"All",event_type_filter:"All"}),computed:{...Object(E["c"])(["schedule","event_types","settings"]),loading:{get(){return this.$store.state.loading},set(t){this.$store.commit("SET_LOADING",t)}},start:{get(){return this.$store.state.start},set(t){this.$store.commit("SET_START",t)}},end:{get(){return this.$store.state.end},set(t){this.$store.commit("SET_END",t)}},formattedStart(){return this.start?Object(S["a"])(new Date(this.start),"EEEE, MMMM d, yyyy"):""},formattedEnd(){return this.end?Object(S["a"])(new Date(this.end),"EEEE, MMMM d, yyyy"):""}},methods:{...Object(E["b"])(["fetchSettings","fetchSchedule","fetchEventTypes"]),allowedStartDates(t){return t==(new Date).toJSON().substr(0,10)||new Date(t)>=new Date&&new Date(t)<new Date(this.end)},allowedEndDates(t){return new Date(t)>new Date(this.start)},format:S["a"],formatDistanceToNow:k["a"],parse:x["a"]},watch:{async start(){await this.fetchSchedule()},async end(){await this.fetchSchedule()}},async created(){this.loading=!0,await this.fetchSettings(),await this.fetchSchedule(),await this.fetchEventTypes(),this.loading=!1}},T=V,$=a("cc20"),O=a("62ad"),j=a("adda"),D=a("8860"),L=a("da13"),A=a("8270"),I=a("5d23"),M=a("490a"),R=a("0fd9"),N=a("e0c7"),P=Object(l["a"])(T,y,C,!1,null,null,null),F=P.exports;d()(P,{VChip:$["a"],VCol:O["a"],VIcon:g["a"],VImg:j["a"],VList:D["a"],VListItem:L["a"],VListItemAvatar:A["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VProgressCircular:M["a"],VRow:R["a"],VSubheader:N["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.event?a("v-row",{attrs:{align:"start",justify:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",xs:"12"}},[a("v-card",{attrs:{flat:"",tile:"",width:"100%",height:"100%"}},[a("v-img",{attrs:{"aspect-ratio":9/16,src:1==t.event.show.id?t.settings.cover:t.event.show.cover,height:"300px",dark:"",gradient:"to top right, rgba(0,0,0,.75), rgba(0,0,0,.25)"}},[a("v-row",{staticClass:"fill-height"},[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",[a("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"white--text pb-0"},[a("v-chip",{attrs:{small:"",label:"",color:"white",outlined:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-calendar-month-outline")]),t._v("\n                "+t._s(t.format(new Date(t.event.start),"EEEE, MMMM d '@' h:mm a "))+"\n              ")],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"white--text pt-0 pb-0 align-end"},[1!=t.event.show.id?a("div",{staticClass:"headline"},[t._v(t._s(t.event.show.name))]):a("div",{staticClass:"headline"},[t._v(t._s(t.event.memo))])])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"pt-1 align-end"},[a("v-chip",{attrs:{label:"",small:"",dark:"",color:t.event.color}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-bookmark")]),t._v("\n                "+t._s(t.event.type)+"\n              ")],1),1!=t.event.show.id?a("v-chip",{staticClass:"ml-2",attrs:{label:"",small:"",dark:"",color:"indigo darken-2"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-filmstrip")]),t._v("\n                "+t._s(t.event.show.type)+"\n              ")],1):t._e(),1!=t.event.show.id?a("v-chip",{staticClass:"ml-2",attrs:{label:"",small:"",dark:"",color:"indigo darken-2"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-clock-outline")]),t._v("\n                "+t._s(t.event.show.duration)+" minutes\n              ")],1):t._e()],1)],1)],1)],1)],1)],1),a("v-col",{staticClass:"mb-12",attrs:{cols:"12",xs:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[a("h1",{staticClass:"title"},[t._v("Pricing")]),a("br"),t._l(t.event.allowedTickets,(function(e){return a("v-chip",{directives:[{name:"show",rawName:"v-show",value:"1"==e.public,expression:"ticket.public == '1'"}],key:e.id,staticClass:"mr-1",attrs:{small:"",outlined:"",color:"indigo darken-2"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-ticket")]),t._v("\n            "+t._s(e.name)+" $ "+t._s(parseFloat(e.price).toFixed(2))+"\n        ")],1)})),a("br"),a("br"),a("h1",{staticClass:"title"},[t._v("Description")]),a("br"),1!=t.event.show.id?a("span",{staticClass:"text--primary",domProps:{innerHTML:t._s(t.marked(t.event.show.description))}}):a("span",{staticClass:"text--primary",domProps:{innerHTML:t._s(t.marked(t.event.memo))}})],2)],1)],1)],1):t._e()},B=[],G=a("bc3a"),U=a.n(G),H=a("0e54"),W=a.n(H),z={data:()=>({event:null,dialog:!1,notifications:!1,sound:!0,widgets:!1,isLoading:!0}),methods:{async fetchEvent(){try{let t=await U.a.get(`${this.$API_URL}/api/event/${this.$route.params.id}`);Object.assign(this,{event:t.data})}catch(t){alert(`Error on fetchEvent: ${t.message}`)}},format:S["a"],marked:W.a},async created(){this.isLoading=await!0,await this.fetchEvent(),this.settings||await this.$store.dispatch("fetchSettings"),this.isLoading=await!1},computed:{settings(){return this.$store.state.settings}}},Y=z,q=(a("c92d"),a("b0af")),K=a("99d9"),Q=Object(l["a"])(Y,J,B,!1,null,null,null),X=Q.exports;d()(Q,{VBtn:u["a"],VCard:q["a"],VCardTitle:K["d"],VChip:$["a"],VCol:O["a"],VIcon:g["a"],VImg:j["a"],VRow:R["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pricing"}},[t.loading?a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})],1)],1):a("v-row",{attrs:{align:"start",justify:"center"}},[a("v-col",{staticClass:"pb-8",attrs:{cols:"12",xs:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",md:"8","offset-md":"2"}},t._l(t.event_types,(function(e){return a("v-card",{key:e.id,staticClass:"mx-auto mb-2",attrs:{color:e.color,dark:""}},[a("v-card-title",[a("v-icon",{attrs:{color:"white",left:""}},[t._v("mdi-bookmark")]),t._v(" "+t._s(e.name)+"\n            ")],1),a("v-card-text",[t._v("\n              "+t._s(e.description)+"\n              "),a("br"),a("br"),t._l(e.allowed_tickets,(function(e){return a("v-chip",{directives:[{name:"show",rawName:"v-show",value:"1"==e.public,expression:"ticket.public == '1'"}],key:e.id,staticClass:"mr-1",attrs:{small:"",outlined:"",color:"white"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-ticket")]),t._v("\n                $ "+t._s(parseFloat(e.price).toFixed(2))+" / "+t._s(e.name)+" \n              ")],1)}))],2)],1)})),1)],1)],1)],1)],1)},tt=[],et={computed:{event_types(){return this.$store.getters.event_types},loading:{get(){return this.$store.state.loading},set(t){this.$store.commit("SET_LOADING",t)}}},async created(){this.loading=!0,await this.$store.dispatch("fetchEventTypes"),this.loading=!1}},at=et,st=Object(l["a"])(at,Z,tt,!1,null,null,null),rt=st.exports;d()(st,{VCard:q["a"],VCardText:K["c"],VCardTitle:K["d"],VChip:$["a"],VCol:O["a"],VIcon:g["a"],VProgressCircular:M["a"],VRow:R["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"our-shows"}},[t.loading?a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})],1)],1):a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",md:"8","offset-md":"2"}},[a("v-app-bar",{staticClass:"elevation-0",attrs:{color:"white",app:"","hide-on-scroll":""}},[a("v-text-field",{attrs:{"solo-inverted":"",flat:"","hide-details":"",label:"Search"}})],1),a("v-row",{staticClass:"px-1 my-12"},[a("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[a("v-chip-group",{attrs:{column:"","active-class":"indigo--text text--darken-4",mandatory:""}},t._l(t.options,(function(e){return a("v-chip",{key:e.value,attrs:{outlined:""},on:{click:function(a){a.preventDefault(),t.filter=e.value}}},[t._v(t._s(e.text))])})),1),a("v-subheader",{staticClass:"float-right"},[t._v("\n            Showing "+t._s(t.shows.length)+" of "+t._s(t.total)+"\n            "+t._s(1==t.shows.length?"show":"shows")+"\n          ")])],1),t._l(t.shows,(function(e){return a("v-col",{key:e.id,staticClass:"pa-1",attrs:{cols:"4",xs:"4",md:"4"}},[a("v-card",{staticClass:"mx-auto"},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.cover,"aspect-ratio":10/14},on:{click:function(a){return t.$router.push({name:"our-shows.show",params:{id:e.id}})}}})],1)],1)})),a("observer",{on:{intersect:t.handleIntersect}})],2)],1)],1)],1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"observer"})},lt=[],ct={data:()=>({observer:null}),mounted(){this.observer=new IntersectionObserver(([t])=>{t&&t.isIntersecting&&this.$emit("intersect")}),this.observer.observe(this.$el)}},dt=ct,vt=Object(l["a"])(dt,ot,lt,!1,null,null,null),ht=vt.exports,ut={components:{Observer:ht},data:()=>({options:[{text:"All",value:null},{text:"Planetarium",value:"Planetarium"},{text:"Laser Light",value:"Laser Light"}]}),computed:{filter:{get(){return this.$store.state.shows.filter},set(t){return this.$store.commit("shows/SET_FILTER",t)}},shows(){return this.filter?this.$store.state.shows.shows.filter(t=>t.type==this.filter):this.$store.state.shows.shows},total(){return this.$store.state.shows.total},current_page(){return this.$store.state.shows.current_page},loading:{get(){return this.$store.state.loading},set(t){this.$store.commit("SET_LOADING",t)}}},methods:{async handleIntersect(){await this.$store.dispatch("shows/fetchShows")}},async created(){this.loading=!0,await this.$store.dispatch("shows/fetchShows"),this.loading=!1}},mt=ut,pt=a("40dc"),gt=a("ef9a"),_t=a("8654"),ft=Object(l["a"])(mt,nt,it,!1,null,null,null),wt=ft.exports;d()(ft,{VAppBar:pt["a"],VCard:q["a"],VChip:$["a"],VChipGroup:gt["a"],VCol:O["a"],VImg:j["a"],VProgressCircular:M["a"],VRow:R["a"],VSubheader:N["a"],VTextField:_t["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-row",{staticClass:"mb-8",attrs:{align:"center",justify:"center"}},[a("v-card",{attrs:{flat:"",tile:"",width:"100%",height:"100%"}},[a("v-img",{attrs:{"aspect-ratio":9/16,src:t.show.cover,height:"400px",dark:"",gradient:"to top right, rgba(0,0,0,.75), rgba(0,0,0,.25)"}},[a("v-row",{staticClass:"fill-height"},[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",[a("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-list-item",{staticClass:"mb-0"},[a("v-list-item-avatar",{staticStyle:{height:"inherit !important"},attrs:{size:"128",tile:""}},[a("v-img",{attrs:{src:t.show.cover}})],1)],1),a("v-list-item",{staticClass:"pt-0",attrs:{"two-line":""}},[a("v-list-item-content",{staticClass:"align-self-start pt-0"},[a("v-list-item-content",{staticClass:"align-self-start"},[a("v-list-item-title",{staticClass:"headline white--text",domProps:{textContent:t._s(t.show.name)}})],1),a("v-list-item-subtitle",[a("v-chip",{attrs:{label:"",small:"",dark:"",color:"indigo darken-2"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-bookmark")]),t._v("\n                    "+t._s(t.show.type)+"\n                  ")],1),a("v-chip",{staticClass:"ml-2",attrs:{label:"",small:"",dark:"",color:"indigo darken-2"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-clock-outline")]),t._v("\n                    "+t._s(t.show.duration)+" minutes\n                  ")],1)],1)],1)],1)],1)],1)],1)],1),a("v-col",[a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",md:"8","offset-md":"2"}},[t.show.description?a("div",{staticClass:"body-2",domProps:{innerHTML:t._s(t.marked(t.show.description))}}):t._e()])],1)],1)],1):t._e()},yt=[],Ct={data:()=>({show:[],isLoading:!0}),async created(){this.isLoading=!0,await this.fetchShow(),this.isLoading=!1},methods:{async fetchShow(){try{const t=await U.a.get(`${this.$API_URL}/api/shows/${this.$route.params.id}`);Object.assign(this,{show:t.data})}catch(t){this.$store.commit("SET_ERRORS",{title:"Error in fetchShow",message:t.message,type:"error"})}},marked:W.a}},Et=Ct,St=(a("4582"),Object(l["a"])(Et,bt,yt,!1,null,null,null)),kt=St.exports;d()(St,{VBtn:u["a"],VCard:q["a"],VCardTitle:K["d"],VChip:$["a"],VCol:O["a"],VIcon:g["a"],VImg:j["a"],VListItem:L["a"],VListItemAvatar:A["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VRow:R["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"calendar"}},[t.loading?a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})],1)],1):a("v-row",{staticClass:"fill-height mb-8"},[a("v-app-bar",{staticClass:"elevation-0",attrs:{dark:"",color:"#003E7E",fixed:""}},[a("v-btn",{attrs:{fab:"",icon:"",small:""},on:{click:t.setToday}},[a("v-icon",[t._v("mdi-calendar")])],1),a("v-btn",{attrs:{fab:"",icon:"",small:""},on:{click:t.prev}},[a("v-icon",[t._v("mdi-chevron-left")])],1),a("v-btn",{attrs:{fab:"",icon:"",small:""},on:{click:t.next}},[a("v-icon",[t._v("mdi-chevron-right")])],1),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"text-none",attrs:{outlined:""}},s),[t._v("\n            "+t._s(t.calendar_type)+"\n            "),a("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-down")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.toggleViewType("day")}}},[a("v-list-item-title",[t._v("Day")])],1),a("v-list-item",{on:{click:function(e){return t.toggleViewType("week")}}},[a("v-list-item-title",[t._v("Week")])],1)],1)],1)],1),a("v-col",{staticClass:"mt-12"},[a("v-row",[t._l(t.calendar_events,(function(e,s){return a("v-col",{key:e.id,attrs:{cols:"12",xs:"12",md:"8","offset-md":"2"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:0==s||t.calendar_events.length>0&&void 0!=t.calendar_events[s-1]&&e.start.split(" ")[0]!=t.calendar_events[s-1].start.split(" ")[0],expression:"\n              i == 0 ||\n                (calendar_events.length > 0 &&\n                  calendar_events[i - 1] != undefined &&\n                  calendar_event.start.split(' ')[0] !=\n                    calendar_events[i - 1].start.split(' ')[0])\n            "}]},[t._v("\n            "+t._s(t.format(new Date(e.start.replace(" ","T")),"EEEE, MMMM d, yyyy"))+"\n          ")]),a("v-card",{attrs:{color:e.color,dark:"",to:{name:"events.show",params:{id:e.id}}}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"subtitle-2"},[t._v(t._s(e.show.name))]),a("v-card-subtitle",[t._v(t._s(t.format(new Date(e.start.replace(" ","T")),"h:mm a"))+"\n                  ("+t._s(t.formatDistanceToNow(new Date(e.start.replace(" ","T")),{addSuffix:!0}))+")\n                ")])],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"128",tile:""}},[a("v-img",{attrs:{src:e.show.cover}})],1)],1)])],1)})),a("v-col",{attrs:{cols:"12",xs:"12",md:"8","offset-md":"2"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:0==t.calendar_events.length,expression:"calendar_events.length == 0"}]},[t._v("\n            "+t._s(t.format(new Date(t.calendar_start),"EEEE, MMMM d, yyyy"))+"\n          ")]),a("v-alert",{directives:[{name:"show",rawName:"v-show",value:0==t.calendar_events.length,expression:"calendar_events.length == 0"}],attrs:{type:"error"}},[t._v("\n            There are no public events going on this "+t._s(t.calendar_type)+".\n          ")])],1)],2)],1)],1)],1)},Vt=[],Tt=a("5dea"),$t=a("f7f1"),Ot=a("af8b"),jt=a("92c8"),Dt=a("fc4c"),Lt={data:()=>({day:null}),computed:{events(){return this.$store.state.calendar_events},loading:{get(){return this.$store.state.loading},set(t){this.$store.commit("SET_LOADING",t)}},calendar_start:{set(t){this.$store.commit("SET_CALENDAR_START",t)},get(){return this.$store.state.calendar_start}},calendar_end:{set(t){this.$store.commit("SET_CALENDAR_END",t)},get(){return this.$store.state.calendar_end}},calendar_type:{set(t){this.$store.commit("SET_CALENDAR_TYPE",t)},get(){return this.$store.state.calendar_type}},calendar_events(){return this.$store.state.calendar_events},settings(){return this.$store.state.settings}},methods:{getEventColor(t){return t.color},async prev(){this.calendar_start=Object(Tt["a"])(this.calendar_start,1),this.calendar_end=new Date(this.calendar_start),await this.$store.dispatch("fetchCalendarEvents")},async next(){"day"==this.calendar_type?(this.calendar_start=Object($t["a"])(this.calendar_start,1),this.calendar_end=new Date(this.calendar_start)):"week"==this.calendar_type&&(this.calendar_start=Object(Ot["a"])(this.calendar_start,1),this.calendar_start=Object(jt["a"])(this.calendar_start,0),this.calendar_end=Object(jt["a"])(this.calendar_start,6)),await this.$store.dispatch("fetchCalendarEvents")},async setToday(){this.calendar_type="day",this.calendar_start=new Date,this.calendar_end=new Date,await this.$store.dispatch("fetchCalendarEvents")},viewDay({date:t}){this.calendar_start=t,this.calendar_type="day"},toggleViewType(t){this.calendar_type=t,"day"==t?this.calendar_end=this.calendar_start:"week"==t&&(this.calendar_start=Object(jt["a"])(this.calendar_start,0),this.calendar_end=Object(jt["a"])(this.calendar_start,6)),this.$store.dispatch("fetchCalendarEvents")},format:S["a"],formatDistanceToNow:k["a"],addWeeks:Ot["a"],subWeeks:Dt["a"]},async created(){this.loading=!0,await this.$store.dispatch("fetchSettings"),await this.$store.dispatch("fetchCalendarEvents"),this.loading=!1},async updated(){}},At=Lt,It=a("0798"),Mt=a("8212"),Rt=a("e449"),Nt=a("2fa4"),Pt=Object(l["a"])(At,xt,Vt,!1,null,null,null),Ft=Pt.exports;d()(Pt,{VAlert:It["a"],VAppBar:pt["a"],VAvatar:Mt["a"],VBtn:u["a"],VCard:q["a"],VCardSubtitle:K["b"],VCardTitle:K["d"],VCol:O["a"],VIcon:g["a"],VImg:j["a"],VList:D["a"],VListItem:L["a"],VListItemTitle:I["c"],VMenu:Rt["a"],VProgressCircular:M["a"],VRow:R["a"],VSpacer:Nt["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"constellations"}},[t.loading?a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo darken-2"}})],1)],1):a("v-row",{staticClass:"mb-6",attrs:{align:"start",justify:"center"}},[a("v-app-bar",{staticClass:"elevation-0",attrs:{color:"white",app:"","hide-on-scroll":""}},[a("v-text-field",{attrs:{"solo-inverted":"",flat:"","hide-details":"",label:"Search"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{staticClass:"px-0 mt-12",attrs:{cols:"12"}},[a("v-subheader",[t._v("\n        "+t._s(t.filteredConstellations.length)+" "+t._s(1==t.filteredConstellations.length?"constellation":"constellations")+"\n        "),""!=t.season?a("v-chip",{staticClass:"ml-2",attrs:{small:"",outlined:""}},[t._v(t._s(t.season))]):t._e(),""!=t.month?a("v-chip",{staticClass:"ml-2",attrs:{small:"",outlined:""}},[t._v(t._s(t.month))]):t._e()],1),a("v-list",{attrs:{"two-line":""}},[a("v-list-item-group",[t._l(t.filteredConstellations,(function(e,s){return[0===s?a("v-divider",{key:s}):t._e(),a("v-list-item",{key:e.id,attrs:{to:{name:"constellations.show",params:{id:e.id}}}},[a("v-list-item-avatar",[a("v-icon",{attrs:{color:"indigo darken-4"}},[t._v("mdi-star")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",[a("v-chip",{staticClass:"indigo darken-4 indigo--text text--darken-4 ma-2 ml-0",attrs:{small:"",label:"",outlined:""}},[t._v("\n                    "+t._s(e.month)+"\n                  ")]),a("v-chip",{staticClass:"indigo darken-4",attrs:{small:"",label:"",dark:""}},[t._v("\n                    "+t._s(e.season)+"\n                  ")])],1)],1),a("v-list-item-action",[a("v-icon",[t._v("\n                  mdi-information-outline\n                ")])],1)],1),s+1<t.constellations.length?a("v-divider",{key:s+1}):t._e()]}))],2)],1)],1),a("v-col",[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mb-12",attrs:{color:"indigo darken-4",fixed:"",fab:"",dark:"",bottom:"",right:""}},s),[a("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline indigo--text text--darken-4"},[t._v("Filter Constellations")])]),a("v-card-text",[a("v-container",{staticClass:"pa-0"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"subheading"},[t._v("Season")]),a("v-chip-group",{attrs:{mandatory:"",column:"","active-class":"indigo--text text--darken-4"},model:{value:t.season,callback:function(e){t.season=e},expression:"season"}},t._l(t.seasons,(function(e){return a("v-chip",{key:e.value,attrs:{filter:"",outlined:"",value:e.value}},[t._v("\n                      "+t._s(e.text)+"\n                    ")])})),1)],1),a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"subheading"},[t._v("Month")]),a("v-chip-group",{attrs:{mandatory:"",column:"","active-class":"indigo--text text--darken-4"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},t._l(t.months,(function(e){return a("v-chip",{key:e.value,attrs:{filter:"",outlined:"",value:e.value}},[t._v("\n                      "+t._s(e.text)+"\n                    ")])})),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo darken-4",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              OK\n            ")])],1)],1)],1)],1)],1)],1)},Bt=[],Gt={data:()=>({dialog:!1,name:"",season:"",month:"",seasons:[{text:"All Seasons",value:"",key:"All"},{text:"Spring",value:"Spring",key:"Spring"},{text:"Summer",value:"Summer",key:"Summer"},{text:"Fall",value:"Fall",key:"Fall"},{text:"Winter",value:"Winter",key:"Winter"}],months:[{text:"All Months",value:"",key:"All"},{text:"January",value:"January",key:"January"},{text:"February",value:"February",key:"February"},{text:"March",value:"March",key:"March"},{text:"April",value:"April",key:"April"},{text:"May",value:"May",key:"May"},{text:"June",value:"June",key:"June"},{text:"July",value:"July",key:"July"},{text:"August",value:"August",key:"August"},{text:"September",value:"September",key:"Semptember"},{text:"October",value:"October",key:"October"},{text:"November",value:"November",key:"November"},{text:"December",value:"December",key:"December"}]}),async mounted(){this.loading=!0,await this.$store.dispatch("fetchConstellations"),this.loading=!1},computed:{filteredConstellations(){let t=this.constellations;return""!=this.month&&(t=t.filter(t=>t.month==this.month)),""!=this.season&&(t=t.filter(t=>t.season==this.season)),""!=this.name&&(t=t.filter(t=>t.title.toLowerCase().includes(this.name.toLowerCase()))),t},constellations(){return this.$store.state.constellations},loading:{get(){return this.$store.state.loading},set(t){this.$store.commit("SET_LOADING",t)}}}},Ut=Gt,Ht=a("169a"),Wt=a("ce7e"),zt=a("1800"),Yt=a("1baa"),qt=Object(l["a"])(Ut,Jt,Bt,!1,null,null,null),Kt=qt.exports;d()(qt,{VAppBar:pt["a"],VBtn:u["a"],VCard:q["a"],VCardActions:K["a"],VCardText:K["c"],VCardTitle:K["d"],VChip:$["a"],VChipGroup:gt["a"],VCol:O["a"],VContainer:m["a"],VDialog:Ht["a"],VDivider:Wt["a"],VIcon:g["a"],VList:D["a"],VListItem:L["a"],VListItemAction:zt["a"],VListItemAvatar:A["a"],VListItemContent:I["a"],VListItemGroup:Yt["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VProgressCircular:M["a"],VRow:R["a"],VSpacer:Nt["a"],VSubheader:N["a"],VTextField:_t["a"]});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.constellation?a("v-row",{staticClass:"full-height",attrs:{align:"start",justify:"center"}},[a("v-app-bar",{staticClass:"elevation-0",attrs:{app:"",color:"transparent"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"12",xs:"12"}},[a("v-card",[a("v-img",{attrs:{contain:"","aspect-ratio":9/16,src:t.constellation.image,dark:""}})],1)],1)],1):t._e()},Xt=[],Zt={data:()=>({constellation:null}),async mounted(){try{const t=await U.a.get("/constellations.json"),e=t.data.data.items.find(t=>t.id==this.$route.params.id);Object.assign(this,{constellation:e})}catch(t){alert(`Error in fetchConstellation: ${t.message}`)}}},te=Zt,ee=Object(l["a"])(te,Qt,Xt,!1,null,null,null),ae=ee.exports;d()(ee,{VAppBar:pt["a"],VBtn:u["a"],VCard:q["a"],VCol:O["a"],VIcon:g["a"],VImg:j["a"],VRow:R["a"]}),s["a"].use(b["a"]);var se=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"/events/:id",name:"events.show",component:X},{path:"/pricing",name:"pricing",component:rt},{path:"/our-shows",name:"our-shows",component:wt},{path:"/our-shows/:id",name:"our-shows.show",component:kt},{path:"/calendar",name:"calendar",component:Ft},{path:"/constellations",name:"constellations",component:Kt},{path:"/constellations/:id",name:"constellations.show",component:ae}]});const re="https://astral.ctcd.org";var ne={state:{shows:[],page:1,filter:null,total:null,current_page:1},mutations:{SET_SHOWS(t,e){Object.assign(t,{shows:t.page<3?e.data:[...t.shows,...e.data],total:e.total,current_page:e.current_page})},SET_FILTER(t,e){Object.assign(t,{filter:e})},SET_PAGE(t,e){Object.assign(t,{page:e})}},actions:{async fetchShows({commit:t,state:e}){try{const a=new URL("/api/public/shows?paginate=9",re),s=new URLSearchParams(a.search);s.set("page",e.page++),a.search=s.toString();const r=await fetch(a.toString());t("SET_SHOWS",await r.json())}catch(a){t("SET_ERRORS",{title:"Error on fetchShows",message:a.message,type:"error"}),alert(`Error on fetchShows: ${a.message}`)}}},getters:{}};s["a"].use(E["a"]);const ie="https://astral.ctcd.org";var oe=new E["a"].Store({modules:{shows:{namespaced:!0,...ne}},state:{loading:!0,start:(new Date).toJSON().substr(0,10),end:new Date(Object($t["a"])(new Date,7)).toJSON().substr(0,10),calendar_events:[],calendar_start:new Date,calendar_end:new Date,calendar_type:"day",settings:[],schedule:[],event_types:[],errors:[],constellations:[]},mutations:{SET_LOADING(t,e){Object.assign(t,{loading:e})},SET_START(t,e){Object.assign(t,{start:e})},SET_END(t,e){Object.assign(t,{end:e})},SET_SETTINGS(t,e){Object.assign(t,{settings:e})},SET_SCHEDULE(t,e){Object.assign(t,{schedule:e})},SET_EVENT_TYPES(t,e){Object.assign(t,{event_types:e})},SET_CALENDAR_EVENTS(t,e){Object.assign(t,{calendar_events:e})},SET_ERRORS(t,e){t.errors.push(e)},SET_CONSTELLATIONS(t,e){Object.assign(t,{constellations:e})},SET_CALENDAR_START(t,e){Object.assign(t,{calendar_start:e})},SET_CALENDAR_END(t,e){Object.assign(t,{calendar_end:e})},SET_CALENDAR_TYPE(t,e){Object.assign(t,{calendar_type:e})}},actions:{async fetchSettings({commit:t}){try{let e=await U.a.get(`${ie}/api/settings`);"/"==e.data.logo[0]?Object.assign(e.data,{logo:`${ie}${e.data.logo}`}):Object.assign(e.data,{logo:`${ie}/storage/${e.data.logo}`}),"/"==e.data.cover[0]?Object.assign(e.data,{cover:`${ie}${e.data.cover}`}):Object.assign(e.data,{cover:`${ie}/storage/${e.data.cover}`}),t("SET_SETTINGS",e.data)}catch(e){t("SET_ERRORS",{title:"Error on fetchSettings",message:e.message,type:"error"})}},async fetchSchedule({commit:t,state:e}){let a=new Date(e.start),s=new Date(e.end);a=a.toJSON().substr(0,10),s=s.toJSON().substr(0,10);try{const e=await U.a.get(`${ie}/api/events/by-date?start=${a}&end=${s}`);t("SET_SCHEDULE",e.data.data)}catch(r){t("SET_ERRORS",{title:"Error on fetchEvents",message:r.message,type:"error"})}},async fetchEventTypes({commit:t}){try{const e=await U.a.get(`${ie}/api/event-types?public`);t("SET_EVENT_TYPES",e.data)}catch(e){t("SET_ERRORS",{title:"Error on fetchEventTypes",message:e.message,type:"error"})}},async fetchCalendarEvents({commit:t,state:e}){const a=e.calendar_start.toISOString().substr(0,10),s=e.calendar_end.toISOString().substr(0,10);try{const e=await U.a.get(`${ie}/api/events?start=${a}&end=${s}&public=1`);t("SET_CALENDAR_EVENTS",e.data)}catch(r){t("SET_ERRORS",{title:"Error on fetchCalendarEvents",message:r.message,type:"error"})}},async fetchConstellations({commit:t}){try{const e=await U.a.get("/constellations.json");t("SET_CONSTELLATIONS",e.data.data.items)}catch(e){alert(`Unable to fetch constellations: ${e.message}`)}}},getters:{start:t=>t.start,end:t=>t.end,settings:t=>t.settings,schedule:t=>t.schedule,event_types:t=>t.event_types,shows:t=>t.shows,calendar_events:t=>t.calendar_events,errors:t=>t.errors}}),le=a("9483");Object(le["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var ce=a("f309");s["a"].use(ce["a"]);var de=new ce["a"]({icons:{iconfont:"mdi"}});a("d5e8"),a("5363");s["a"].config.productionTip=!1,s["a"].prototype.$API_URL=re,new s["a"]({router:se,store:oe,vuetify:de,render:t=>t(w)}).$mount("#app")},"5dcd":function(t,e,a){},9956:function(t,e,a){t.exports=a.p+"img/cover.3f685c0d.jpg"},c892:function(t,e,a){"use strict";var s=a("d2bb"),r=a.n(s);r.a},c92d:function(t,e,a){"use strict";var s=a("5dcd"),r=a.n(s);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.94835b9c.png"},d2bb:function(t,e,a){}});
//# sourceMappingURL=app.d40d3b52.js.map