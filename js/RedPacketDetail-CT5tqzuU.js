import{u as c,g as o,f as l,_ as u}from"./common-Col06hry.js";import"./vendor-DEYvKW2P.js";const d=""+new URL("../assets/money-detail-bg-DPUwFlp3.png",import.meta.url).href,n=e=>(Vue.pushScopeId("data-v-eab4f484"),e=e(),Vue.popScopeId(),e),i={id:"RedPacketDetail"},V={class:"content"},_={class:"wrapper"},p=["src"],m={class:"belong"},f=n(()=>Vue.createElementVNode("div",{class:"password"},"大吉大利",-1)),g=n(()=>Vue.createElementVNode("span",{class:"money"},"0.01元",-1)),h=n(()=>Vue.createElementVNode("img",{src:d,alt:"",class:"bg"},null,-1)),k=Vue.defineComponent({name:"RedPacketDetail",__name:"RedPacketDetail",props:{modelValue:{type:Boolean,default(){return!1}}},setup(e){const a=c();return(E,t)=>{const r=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",i,[Vue.createVNode(r,{mode:"light"},{right:Vue.withCtx(()=>[Vue.createElementVNode("span",{onClick:t[0]||(t[0]=(...s)=>Vue.unref(o)&&Vue.unref(o)(...s)),class:"f14",style:{color:"rgb(193, 135, 79)"}},"红包记录")]),_:1}),Vue.createElementVNode("div",V,[Vue.createElementVNode("div",_,[Vue.createElementVNode("img",{src:Vue.unref(l)(Vue.unref(a).userinfo.cover_url[0].url_list[0]),alt:"",class:"avatar"},null,8,p),Vue.createElementVNode("span",m,Vue.toDisplayString(Vue.unref(a).userinfo.nickname)+"的红包",1),f,g,Vue.createElementVNode("span",{class:"notice",onClick:t[1]||(t[1]=(...s)=>Vue.unref(o)&&Vue.unref(o)(...s))},"已存入我的零钱，可直接使用>")]),h])])}}}),b=u(k,[["__scopeId","data-v-eab4f484"]]);export{b as default};
