import{B as w,o as u,c as f,m as l,s as B,av as V,P as y,Q as $,a as i,i as x,Z as k,ab as W,G as D,h as S,f as h,J as T,L as U,K as C,T as G,t as N,b as r,r as O,e as j,aU as J,H as Z}from"./index-DWBHGuWC.js";import{s as Q}from"./index-BljEZuiK.js";import{s as _}from"./index-BeOVwGKe.js";import{U as A}from"./index-CjgBYRhX.js";import{s as ee}from"./index-C4CNgIxv.js";import{s as P}from"./index-DgIGz1C3.js";import{a as z}from"./index-Bqg3jkVM.js";import{s as te}from"./index-UKpxOVd4.js";var ne=function(e){var n=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},re={root:{position:"relative"}},ae={root:function(e){var n=e.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},se=w.extend({name:"skeleton",theme:ne,classes:ae,inlineStyles:re}),ie={name:"BaseSkeleton",extends:B,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:se,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},F={name:"Skeleton",extends:ie,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function oe(t,e,n,o,d,s){return u(),f("div",l({class:t.cx("root"),style:[t.sx("root"),s.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}F.render=oe;var le=function(e){var n=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(n("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(n("scrollpanel.bar.size"),`));
    padding-inline: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
    padding-block: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(n("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),", opacity ").concat(n("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(n("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(n("scrollpanel.barfocus.ring.width")," ").concat(n("scrollpanel.bar.focus.ring.style")," ").concat(n("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(n("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(n("scrollpanel.bar.size"),`;
    inset-block-start: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(n("scrollpanel.bar.size"),`;
    inset-block-end: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},ce={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ue=w.extend({name:"scrollpanel",theme:le,classes:ce}),de={name:"BaseScrollPanel",extends:B,props:{step:{type:Number,default:5}},style:ue,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},R={name:"ScrollPanel",extends:de,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||A()}},mounted:function(){this.id=this.id||A(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),o=V(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,d=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/n;var s=this.$refs.content.scrollHeight,a=this.$refs.content.clientHeight,b=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=a/s,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&$(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/n*100+"%;bottom:"+d+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&$(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/s*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+b+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=o/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=o/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},pe=["id"],me=["aria-controls","aria-valuenow"],fe=["aria-controls","aria-valuenow"];function ve(t,e,n,o,d,s){return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[i("div",l({class:t.cx("contentContainer")},t.ptm("contentContainer")),[i("div",l({ref:"content",id:s.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)}),onMouseenter:e[1]||(e[1]=function(){return s.moveBar&&s.moveBar.apply(s,arguments)})},t.ptm("content")),[x(t.$slots,"default")],16,pe)],16),i("div",l({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":s.contentId,"aria-valuenow":d.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return s.onXBarMouseDown&&s.onXBarMouseDown.apply(s,arguments)}),onKeydown:e[3]||(e[3]=function(a){return s.onKeyDown(a)}),onKeyup:e[4]||(e[4]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[5]||(e[5]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:e[6]||(e[6]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,me),i("div",l({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":s.contentId,"aria-valuenow":d.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return s.onYBarMouseDown&&s.onYBarMouseDown.apply(s,arguments)}),onKeydown:e[8]||(e[8]=function(a){return s.onKeyDown(a)}),onKeyup:e[9]||(e[9]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[10]||(e[10]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,fe)],16)}R.render=ve;var he=function(e){return e.dt,`
.p-scrolltop.p-button {
    position: fixed !important;
    inset-block-end: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky !important;
    display: flex;
    margin-inline-start: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`},ge={root:function(e){var n=e.props;return["p-scrolltop",{"p-scrolltop-sticky":n.target!=="window"}]},icon:"p-scrolltop-icon"},be=w.extend({name:"scrolltop",theme:he,classes:ge}),ye={name:"BaseScrollTop",extends:B,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:be,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},E={name:"ScrollTop",extends:ye,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(k.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(W())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){k.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){k.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:ee,Button:P}};function we(t,e,n,o,d,s){var a=D("Button");return u(),S(G,l({name:"p-scrolltop",appear:"",onEnter:s.onEnter,onAfterLeave:s.onAfterLeave},t.ptm("transition")),{default:h(function(){return[d.visible?(u(),S(a,l({key:0,ref:s.containerRef,class:t.cx("root"),onClick:s.onClick,"aria-label":s.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:t.pt}),{icon:h(function(b){return[x(t.$slots,"icon",{class:T(t.cx("icon"))},function(){return[(u(),S(U(t.icon?"span":"ChevronUpIcon"),l({class:[t.cx("icon"),t.icon,b.class]},t.ptm("icon")),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):C("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}E.render=we;var $e={root:"p-avatar-group p-component"},Be=w.extend({name:"avatargroup",classes:$e}),xe={name:"BaseAvatarGroup",extends:B,style:Be,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},X={name:"AvatarGroup",extends:xe,inheritAttrs:!1};function Le(t,e,n,o,d,s){return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}X.render=Le;var Se=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    color: `).concat(n("avatar.color"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.icon.size"),`;
    width: `).concat(n("avatar.icon.size"),`;
    height: `).concat(n("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.icon.size"),`;
    width: `).concat(n("avatar.lg.icon.size"),`;
    height: `).concat(n("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.icon.size"),`;
    width: `).concat(n("avatar.xl.icon.size"),`;
    height: `).concat(n("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(n("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(n("avatar.xl.group.offset"),`;
}
`)},ke={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ze=w.extend({name:"avatar",theme:Se,classes:ke}),Me={name:"BaseAvatar",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ze,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},I={name:"Avatar",extends:Me,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},Ae=["aria-labelledby","aria-label"],De=["src","alt"];function Te(t,e,n,o,d,s){return u(),f("div",l({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[x(t.$slots,"default",{},function(){return[t.label?(u(),f("span",l({key:0,class:t.cx("label")},t.ptm("label")),N(t.label),17)):t.$slots.icon?(u(),S(U(t.$slots.icon),{key:1,class:T(t.cx("icon"))},null,8,["class"])):t.icon?(u(),f("span",l({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(u(),f("img",l({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},t.ptm("image")),null,16,De)):C("",!0)]})],16,Ae)}I.render=Te;var Ue=function(e){var n=e.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(n("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(n("overlaybadge.outline.color"),`;
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`)},Ce={root:"p-overlaybadge"},Pe=w.extend({name:"overlaybadge",theme:Ue,classes:Ce}),Fe={name:"OverlayBadge",extends:z,style:Pe,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},Y={name:"OverlayBadge",extends:Fe,inheritAttrs:!1,components:{Badge:z}};function Re(t,e,n,o,d,s){var a=D("Badge");return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default"),r(a,l(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}Y.render=Re;const Ee={class:"card"},Xe={class:"flex flex-col md:flex-row gap-4"},Ie={class:"md:w-1/2"},Ye={class:"md:w-1/2"},qe={class:"flex flex-col md:flex-row gap-8"},He={class:"md:w-1/2"},Ke={class:"card"},Ve={class:"flex gap-2"},We={class:"flex gap-6"},Ge={class:"flex gap-2"},Ne={class:"flex items-start gap-2"},Oe={class:"card"},je={class:"card"},Je={class:"md:w-1/2"},Ze={class:"card"},Qe={class:"flex gap-2"},_e={class:"flex gap-2"},et={class:"flex gap-2"},tt={class:"card"},nt={class:"flex items-center flex-col sm:flex-row"},rt={class:"flex items-center flex-col sm:flex-row"},at={class:"flex items-center flex-col sm:flex-row"},st={class:"card"},it={class:"rounded-border border border-surface p-6"},ot={class:"flex mb-4"},lt={class:"flex justify-between mt-4"},gt={__name:"MiscDoc",setup(t){const e=O(0);let n=null;function o(){n=setInterval(()=>{let s=e.value+Math.floor(Math.random()*10)+1;s>=100&&(s=100),e.value=s},2e3)}function d(){clearInterval(n),n=null}return j(()=>{o()}),J(()=>{d()}),(s,a)=>{const b=te,v=z,L=Y,M=P,m=I,q=X,H=E,K=R,c=_,p=Q,g=F;return u(),f(Z,null,[i("div",Ee,[a[0]||(a[0]=i("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),i("div",Xe,[i("div",Ie,[r(b,{value:e.value},null,8,["value"])]),i("div",Ye,[r(b,{value:50,showValue:!1})])])]),i("div",qe,[i("div",He,[i("div",Ke,[a[4]||(a[4]=i("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),i("div",Ve,[r(v,{value:2}),r(v,{value:8,severity:"success"}),r(v,{value:4,severity:"info"}),r(v,{value:12,severity:"Warn"}),r(v,{value:3,severity:"danger"})]),a[5]||(a[5]=i("div",{class:"font-semibold my-4"},"Overlay",-1)),i("div",We,[r(L,{value:"2"},{default:h(()=>a[1]||(a[1]=[i("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])),_:1}),r(L,{value:"4",severity:"danger"},{default:h(()=>a[2]||(a[2]=[i("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])),_:1}),r(L,{severity:"danger"},{default:h(()=>a[3]||(a[3]=[i("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])),_:1})]),a[6]||(a[6]=i("div",{class:"font-semibold my-4"},"Button",-1)),i("div",Ge,[r(M,{label:"Emails",badge:"8",class:"mr-2"}),r(M,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),a[7]||(a[7]=i("div",{class:"font-semibold my-4"},"Sizes",-1)),i("div",Ne,[r(v,{value:2}),r(v,{value:4,size:"large",severity:"warn"}),r(v,{value:6,size:"xlarge",severity:"success"})])]),i("div",Oe,[a[8]||(a[8]=i("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),a[9]||(a[9]=i("div",{class:"font-semibold mb-4"},"Group",-1)),r(q,null,{default:h(()=>[r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),r(m,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),a[10]||(a[10]=i("div",{class:"font-semibold my-4"},"Label - Circle",-1)),r(m,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),r(m,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),r(m,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),a[11]||(a[11]=i("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),r(L,{value:"4",severity:"danger",class:"inline-flex"},{default:h(()=>[r(m,{label:"U",size:"xlarge"})]),_:1})]),i("div",je,[a[13]||(a[13]=i("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),r(K,{style:{width:"250px",height:"200px"}},{default:h(()=>[a[12]||(a[12]=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),r(H,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),i("div",Je,[i("div",Ze,[a[14]||(a[14]=i("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),a[15]||(a[15]=i("div",{class:"font-semibold mb-4"},"Default",-1)),i("div",Qe,[r(c,{value:"Primary"}),r(c,{severity:"success",value:"Success"}),r(c,{severity:"info",value:"Info"}),r(c,{severity:"warn",value:"Warn"}),r(c,{severity:"danger",value:"Danger"})]),a[16]||(a[16]=i("div",{class:"font-semibold my-4"},"Pills",-1)),i("div",_e,[r(c,{value:"Primary",rounded:!0}),r(c,{severity:"success",value:"Success",rounded:!0}),r(c,{severity:"info",value:"Info",rounded:!0}),r(c,{severity:"warn",value:"Warn",rounded:!0}),r(c,{severity:"danger",value:"Danger",rounded:!0})]),a[17]||(a[17]=i("div",{class:"font-semibold my-4"},"Icons",-1)),i("div",et,[r(c,{icon:"pi pi-user",value:"Primary"}),r(c,{icon:"pi pi-check",severity:"success",value:"Success"}),r(c,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),r(c,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),r(c,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),i("div",tt,[a[18]||(a[18]=i("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),a[19]||(a[19]=i("div",{class:"font-semibold mb-4"},"Basic",-1)),i("div",nt,[r(p,{label:"Action",class:"mr-2 mb-2"}),r(p,{label:"Comedy",class:"mr-2 mb-2"}),r(p,{label:"Mystery",class:"mr-2 mb-2"}),r(p,{label:"Thriller",removable:!0,class:"mb-2"})]),a[20]||(a[20]=i("div",{class:"font-semibold my-4"},"Icon",-1)),i("div",rt,[r(p,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),r(p,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),r(p,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),r(p,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),a[21]||(a[21]=i("div",{class:"font-semibold my-4"},"Image",-1)),i("div",at,[r(p,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),r(p,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),r(p,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),i("div",st,[a[22]||(a[22]=i("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),i("div",it,[i("div",ot,[r(g,{shape:"circle",size:"4rem",class:"mr-2"}),i("div",null,[r(g,{width:"10rem",class:"mb-2"}),r(g,{width:"5rem",class:"mb-2"}),r(g,{height:".5rem"})])]),r(g,{width:"100%",height:"150px"}),i("div",lt,[r(g,{width:"4rem",height:"2rem"}),r(g,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{gt as default};
