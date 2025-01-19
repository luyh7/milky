import{B as o,o as c,c as s,i as a,m as r,s as l}from"./index-BX6hgWS2.js";var f=function(t){var n=t.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(n("icon.size"),` / 2));
    color: `).concat(n("iconfield.icon.color"),`;
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
    margin-top: calc(-1 * (`).concat(n("form.field.sm.font.size"),` / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
    margin-top: calc(-1 * (`).concat(n("form.field.lg.font.size"),` / 2));
}
`)},m={root:"p-iconfield"},u=o.extend({name:"iconfield",theme:f,classes:m}),h={name:"BaseIconField",extends:l,style:u,provide:function(){return{$pcIconField:this,$parentInstance:this}}},$={name:"IconField",extends:h,inheritAttrs:!1};function g(i,t,n,p,d,e){return c(),s("div",r({class:i.cx("root")},i.ptmi("root")),[a(i.$slots,"default")],16)}$.render=g;var v={root:"p-inputicon"},I=o.extend({name:"inputicon",classes:v}),z={name:"BaseInputIcon",extends:l,style:I,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},x={name:"InputIcon",extends:z,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function B(i,t,n,p,d,e){return c(),s("span",r({class:e.containerClass},i.ptmi("root")),[a(i.$slots,"default")],16)}x.render=B;export{$ as a,x as s};
