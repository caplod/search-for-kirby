(function () {var b={methods:{build:function(){this.$api.post("search")}}};if(typeof b==="function"){b=b.options}Object.assign(b,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"k-section-header"},[_c("k-headline",[_vm._v("Algolia")])],1),_vm._v(" "),_c("k-button",{attrs:{"icon":"wand"},on:{"click":_vm.build}},[_vm._v(" Re-build index ")])],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var e={methods:{thumb:function(e){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"list";if(!e||"icon"===e)return!1;var i=null,t=null;if(e.list?(i=e[m].url,t=e[m].srcset):(i=e.url,t=e.srcset),!i)return!1;var a={src:i,srcset:t,back:e.back||"black",cover:e.cover};if("cards"===m)switch(a.ratio=e.ratio||"3/2",width){case"1/2":case"2/4":a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 44em, 27em";case"1/3":a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 29.333em, 27em";case"1/4":a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 22em, 27em";case"2/3":a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 27em, 27em";case"3/4":a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 66em, 27em";default:a.sizes="(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 88em, 27em";}return a}}};var a={extends:"k-search",mixins:[e],data:function(){return{items:[],q:null,selected:-1,pagination:{page:1}}},methods:{search:function(e){var a=this;this.$api.get("search",{q:e,page:this.pagination.page,select:["id","title","email","name","filename","link","avatar","panelIcon","panelImage"]}).then(function(e){a.items=e.data.map(function(e){var t;return e.hasOwnProperty("email")?((t=a.map_users(e)).icon={type:"user"},t.image=e.avatar?e.avatar:null):e.hasOwnProperty("filename")?((t=a.map_files(e)).icon=e.panelIcon,t.image=e.panelImage):(t=a.map_pages(e)).icon=e.panelIcon,t}),a.pagination=e.pagination,a.selected=-1}).catch(function(e){console.log(e),a.items=[],a.selected=-1})},onAll:function(){this.$router.push({path:"/plugins/search",query:{q:this.q}}),this.$store.dispatch("search",!1)}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-search",attrs:{"role":"search"},on:{"click":_vm.close}},[_c("div",{staticClass:"k-search-box",on:{"click":function($event){$event.stopPropagation()}}},[_c("div",{staticClass:"k-search-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.q,expression:"q"}],ref:"input",attrs:{"placeholder":_vm.$t("search")+" \u2026","aria-label":"$t('search')","type":"text"},domProps:{"value":_vm.q},on:{"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.down($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.up($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){return null}$event.preventDefault();return _vm.tab($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}return _vm.enter($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){return null}return _vm.close($event)}],"input":function($event){if($event.target.composing){return}_vm.q=$event.target.value}}}),_vm._v(" "),_c("k-button",{staticClass:"k-search-close",attrs:{"tooltip":_vm.$t("close"),"icon":"cancel"},on:{"click":_vm.close}})],1),_vm._v(" "),_c("ul",_vm._l(_vm.items.slice(0,10),function(item,itemIndex){return _c("li",{key:item.id,attrs:{"data-selected":_vm.selected===itemIndex},on:{"mouseover":function($event){_vm.selected=itemIndex}}},[_c("k-link",{attrs:{"to":item.link},on:{"click":function($event){return _vm.click(itemIndex)}}},[_vm.thumb(item.image)?_c("k-image",_vm._b({},"k-image",_vm.thumb(item.image),false)):_c("k-icon",_vm._b({},"k-icon",item.icon,false)),_vm._v(" "),_c("div",[_c("strong",[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c("small",[_vm._v(_vm._s(item.info))])])],1)],1)}),0),_vm._v(" "),_vm.pagination.total>_vm.items.length?_c("div",{staticClass:"k-search-more"},[_c("k-button",{on:{"click":_vm.onAll}},[_vm._v(" "+_vm._s(_vm.$t("search.all"))+" ")])],1):_vm._e()])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={extends:a,watch:{"$route.query.q":{handler:function(e){this.q=e},immediate:!0}},computed:{listItems:function(){return this.items.map(function(e){return f({},e,{text:e.title})})}},methods:{paginate:function(e){this.pagination=e,this.search(this.q)}}};if(typeof c==="function"){c=c.options}Object.assign(c,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-view",{staticClass:"k-search-view"},[_c("k-header",{nativeOn:{"click":function($event){return _vm.$store.dispatch("search",true)}}},[_vm._v(" "+_vm._s(_vm.$t("view.search"))+": "),_c("span",{ref:"input",staticClass:"k-search-view-term"},[_vm._v(_vm._s(_vm.q))])]),_vm._v(" "),_c("k-collection",{attrs:{"layout":"list","items":_vm.listItems,"pagination":_vm.pagination},on:{"paginate":_vm.paginate}})],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("distantnative/search-for-kirby",{sections:{search:b},views:{search:{menu:!1,icon:"search",component:c}},components:{"k-search":a}});})();