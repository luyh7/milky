import{U as C,C as D}from"./index-B5mcbFh_.js";import{B as F,s as K,aO as V,m as a,R as H,W as R,o,c as u,a as O,Y as B,h,J as N,L as w,K as c,t as T,Z as I,j as y,n as v,A as M,q as U,y as Z,x as k,z as W,E as j,G as S,f as A,b as q,T as G,i as L,H as p,I as E,g as J}from"./index-BqWCojuL.js";import{O as Y}from"./index-CrEpKh5X.js";var Q=function(e){var n=e.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},X={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},_=F.extend({name:"menu",theme:Q,classes:X}),$={name:"BaseMenu",extends:K,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:_,provide:function(){return{$pcMenu:this,$parentInstance:this}}},z={name:"Menuitem",hostName:"Menu",extends:K,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?V(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:a({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:a({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:a({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:H}},ee=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],te=["href","target"];function ne(t,e,n,s,l,i){var b=R("ripple");return i.visible()?(o(),u("li",a({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[O("div",a({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(f){return i.onItemClick(f)}),onMousemove:e[1]||(e[1]=function(f){return i.onItemMouseMove(f)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(o(),h(w(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):c("",!0):B((o(),u("a",a({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(o(),h(w(n.templates.itemicon),{key:0,item:n.item,class:N(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(o(),u("span",a({key:1,class:[t.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):c("",!0),O("span",a({class:t.cx("itemLabel")},i.getPTOptions("itemLabel")),T(i.label()),17)],16,te)),[[b]])],16)],16,ee)):c("",!0)}z.render=ne;function P(t){return re(t)||oe(t)||se(t)||ie()}function ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(t,e){if(t){if(typeof t=="string")return x(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function oe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function re(t){if(Array.isArray(t))return x(t)}function x(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var ae={name:"Menu",extends:$,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||C()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||C(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&I.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(y(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)y(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=M(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&M(n,'a[data-pc-section="itemlink"]');this.popup&&y(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=P(n).findIndex(function(l){return l.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=P(n).findIndex(function(l){return l.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=v(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){U(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&I.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&y(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&I.clear(e)},alignOverlay:function(){Z(this.container,this.target);var e=k(this.target);e>k(this.container)&&(this.container.style.minWidth=k(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),l=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&l?e.hide():!e.popup&&s&&l&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new D(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!W()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){Y.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:z,Portal:j}},le=["id"],ue=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],de=["id"];function ce(t,e,n,s,l,i){var b=S("PVMenuitem"),f=S("Portal");return o(),h(f,{appendTo:t.appendTo,disabled:!t.popup},{default:A(function(){return[q(G,a({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:A(function(){return[!t.popup||l.overlayVisible?(o(),u("div",a({key:0,ref:i.containerRef,id:l.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(o(),u("div",a({key:0,class:t.cx("start")},t.ptm("start")),[L(t.$slots,"start")],16)):c("",!0),O("ul",a({ref:i.listRef,id:l.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(o(!0),u(p,null,E(t.model,function(r,d){return o(),u(p,{key:i.label(r)+d.toString()},[r.items&&i.visible(r)&&!r.separator?(o(),u(p,{key:0},[r.items?(o(),u("li",a({key:0,id:l.id+"_"+d,class:[t.cx("submenuLabel"),r.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[L(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:r},function(){return[J(T(i.label(r)),1)]})],16,de)):c("",!0),(o(!0),u(p,null,E(r.items,function(m,g){return o(),u(p,{key:m.label+d+"_"+g},[i.visible(m)&&!m.separator?(o(),h(b,{key:0,id:l.id+"_"+d+"_"+g,item:m,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(o(),u("li",a({key:"separator"+d+g,class:[t.cx("separator"),r.class],style:m.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):c("",!0)],64)}),128))],64)):i.visible(r)&&r.separator?(o(),u("li",a({key:"separator"+d.toString(),class:[t.cx("separator"),r.class],style:r.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(o(),h(b,{key:i.label(r)+d.toString(),id:l.id+"_"+d,item:r,index:d,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ue),t.$slots.end?(o(),u("div",a({key:1,class:t.cx("end")},t.ptm("end")),[L(t.$slots,"end")],16)):c("",!0)],16,le)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ae.render=ce;export{ae as s};
