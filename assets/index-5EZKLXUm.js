import{B,D as w,G as f,o as b,c as v,b as r,N as m,f as s,i,J as p,a as $,m as d,h as S,L as C,s as D}from"./index-CzCdaggI.js";import{U as y}from"./index-Cx8qvVHa.js";import{s as k}from"./index-BWrb7uU3.js";import{s as I}from"./index-DxkV-j_F.js";import{s as g}from"./index-CyntnBro.js";var z=function(t){var o=t.dt;return`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: `.concat(o("splitbutton.border.radius"),`;
}

.p-splitbutton-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-inline-end: 0 none;
}

.p-splitbutton-dropdown {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-start-end-radius: `).concat(o("splitbutton.rounded.border.radius"),`;
    border-end-end-radius: `).concat(o("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-start-start-radius: `).concat(o("splitbutton.rounded.border.radius"),`;
    border-end-start-radius: `).concat(o("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-raised {
    box-shadow: `).concat(o("splitbutton.raised.shadow"),`;
}
`)},V={root:function(t){var o=t.instance,a=t.props;return["p-splitbutton p-component",{"p-splitbutton-raised":a.raised,"p-splitbutton-rounded":a.rounded,"p-splitbutton-fluid":o.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},Z=B.extend({name:"splitbutton",theme:z,classes:V}),E={name:"BaseSplitButton",extends:D,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:Z,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},T={name:"SplitButton",extends:E,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,isExpanded:!1}},watch:{"$attrs.id":function(t){this.id=t||y()}},mounted:function(){var t=this;this.id=this.id||y(),this.$watch("$refs.menu.visible",function(o){t.isExpanded=o})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return w(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:I,PVSMenu:g,ChevronDownIcon:k}},F=["data-p-severity"];function K(n,t,o,a,u,l){var c=f("PVSButton"),h=f("PVSMenu");return b(),v("div",d({class:l.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[r(c,d({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:l.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),m({default:s(function(){return[i(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:s(function(e){return[i(n.$slots,"icon",{class:p(e.class)},function(){return[$("span",d({class:[n.icon,e.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),r(c,d({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":u.isExpanded,"aria-controls":u.id+"_overlay",onClick:l.onDropdownButtonClick,onKeydown:l.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:s(function(e){return[i(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:p(e.class)},function(){return[(b(),S(C(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),d({class:[n.dropdownIcon||n.menuButtonIcon,e.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),r(h,{ref:"menu",id:u.id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},m({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:s(function(e){return[i(n.$slots,"menuitemicon",{item:e.item,class:p(e.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:s(function(e){return[i(n.$slots,"item",{item:e.item,hasSubmenu:e.hasSubmenu,label:e.label,props:e.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,F)}T.render=K;export{T as s};
