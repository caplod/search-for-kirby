(function () {function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(r){j(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r,t,n,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void t(u)}o.done?r(s):Promise.resolve(s).then(n,a)}function h(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var c=e.apply(r,t);function i(e){g(c,n,a,i,o,"next",e)}function o(e){g(c,n,a,i,o,"throw",e)}i(void 0)})}}var d={extends:"k-search",data:function(){return{hasIndex:!0,isProcessing:!1}},computed:{rebuild:function(){var e=this.$t("search.index.missing");return this.isProcessing&&(e+="\u2026"),e}},methods:{index:function(){var r=this;return h(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.isProcessing=!0,t.prev=1,t.next=4,r.$api.post("search");case 4:r.$store.dispatch("notification/success",r.$t("search.index.built")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(e);case 10:return t.prev=10,t.next=13,r.search(r.q);case 13:return r.isProcessing=!1,r.hasIndex=!0,t.finish(10);case 16:case"end":return t.stop();}},t,null,[[1,7,10,16]])}))()},search:function(e){var r=this;return h(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.isLoading=!0,t.prev=1,""!==e){t.next=4;break}throw new Error;case 4:return t.next=6,r.$api.get("search",{q:e,select:["id","title","email","name","filename","parent","panelIcon","panelImage"]});case 6:n=t.sent,r.items=n.data.map(function(e){var t={id:e.id,icon:b(b({},e.panelIcon),{},{back:"black",color:"#fff"}),image:b(b({},e.panelImage),{},{back:"pattern",cover:!0})};return e.hasOwnProperty("email")?(t.title=e.name||e.email,t.link=r.$api.users.link(e.id),t.info=e.email,t.icon={back:"black",type:"user"}):e.hasOwnProperty("filename")?(t.title=e.filename,t.link=r.$api.files.link(r.$api.pages.url(e.parent.id),e.filename),t.info=e.id):(t.title=e.title,t.link=r.$api.pages.link(e.id),t.info=e.id),t}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),"error.notFound"===t.t0.key&&(r.hasIndex=!1),r.items=[];case 14:return t.prev=14,r.selected=-1,r.isLoading=!1,r.hasResults=r.items.length>0,t.finish(14);case 19:case"end":return t.stop();}},t,null,[[1,10,14,19]])}))()}}};if(typeof d==="function"){d=d.options}Object.assign(d,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-overlay",{ref:"overlay"},[_c("div",{staticClass:"k-search",attrs:{"role":"search"}},[_c("div",{staticClass:"k-search-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.q,expression:"q"}],ref:"input",attrs:{"placeholder":_vm.$t("search")+" \u2026","aria-label":_vm.$t("search"),"autofocus":true,"type":"text"},domProps:{"value":_vm.q},on:{"input":[function($event){if($event.target.composing){return}_vm.q=$event.target.value},function($event){_vm.hasResults=true}],"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){return null}$event.preventDefault();return _vm.onTab($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}return _vm.onEnter($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){return null}return _vm.close($event)}]}}),_vm._v(" "),_c("k-button",{staticClass:"k-search-close",attrs:{"tooltip":_vm.$t("close"),"icon":_vm.isLoading?"loader":"cancel"},on:{"click":_vm.close}})],1),_vm._v(" "),_vm.q&&(!_vm.hasResults||_vm.items.length)?_c("div",{staticClass:"k-search-results"},[_vm.items.length?_c("ul",{on:{"mouseout":function($event){_vm.selected=-1}}},_vm._l(_vm.items,function(item,itemIndex){return _c("li",{key:item.id,attrs:{"data-selected":_vm.selected===itemIndex},on:{"mouseover":function($event){_vm.selected=itemIndex}}},[_c("k-link",{attrs:{"to":item.link},on:{"click":_vm.close}},[_c("span",{staticClass:"k-search-item-image"},[_vm.imageOptions(item.image)?_c("k-image",_vm._b({},"k-image",_vm.imageOptions(item.image),false)):_c("k-icon",_vm._b({},"k-icon",item.icon,false))],1),_vm._v(" "),_c("span",{staticClass:"k-search-item-info"},[_c("strong",[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c("small",[_vm._v(_vm._s(item.info))])])])],1)}),0):!_vm.hasIndex?_c("p",{staticClass:"k-search-empty k-search-index",on:{"click":_vm.index}},[_vm._v(" "+_vm._s(_vm.rebuild)+" ")]):!_vm.hasResults?_c("p",{staticClass:"k-search-empty"},[_vm._v(" "+_vm._s(_vm.$t("search.results.none"))+" ")]):_vm._e()]):_vm._e()])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("distantnative/search-for-kirby",{components:{"k-search":d}});})();