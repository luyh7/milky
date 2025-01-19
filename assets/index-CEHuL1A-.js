import{B as p,U as k,b5 as x,a8 as f,G as h,o as r,c as m,a as l,m as a,i as g,J as v,h as s,K as y}from"./index-BX6hgWS2.js";import{s as C}from"./index-DcEHmTxB.js";import{a as w}from"./index-C3_eooRL.js";var B=function(n){var e=n.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(e("checkbox.sm.width"),`;
    height: `).concat(e("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.sm.size"),`;
    width: `).concat(e("checkbox.icon.sm.size"),`;
    height: `).concat(e("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(e("checkbox.lg.width"),`;
    height: `).concat(e("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.lg.size"),`;
    width: `).concat(e("checkbox.icon.lg.size"),`;
    height: `).concat(e("checkbox.icon.lg.size"),`;
}
`)},z={root:function(n){var e=n.instance,t=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":t.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":t.size==="small","p-checkbox-lg p-inputfield-lg":t.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},S=p.extend({name:"checkbox",theme:B,classes:z}),I={name:"BaseCheckbox",extends:w,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function A(c){return $(c)||_(c)||T(c)||G()}function G(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(c,n){if(c){if(typeof c=="string")return d(c,n);var e={}.toString.call(c).slice(8,-1);return e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set"?Array.from(c):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(c,n):void 0}}function _(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function $(c){if(Array.isArray(c))return d(c)}function d(c,n){(n==null||n>c.length)&&(n=c.length);for(var e=0,t=Array(n);e<n;e++)t[e]=c[e];return t}var O={name:"Checkbox",extends:I,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var t=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,i;this.binary?i=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?i=t.filter(function(o){return!k(o,e.value)}):i=t?[].concat(A(t),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(i,n):this.writeValue(i,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,t;this.$emit("blur",n),(e=(t=this.formField).onBlur)===null||e===void 0||e.call(t,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:x(this.value,n)}},components:{CheckIcon:f,MinusIcon:C}},F=["data-p-checked","data-p-indeterminate","data-p-disabled"],N=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function P(c,n,e,t,i,o){var b=h("CheckIcon"),u=h("MinusIcon");return r(),m("div",a({class:c.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":i.d_indeterminate||void 0,"data-p-disabled":c.disabled}),[l("input",a({id:c.inputId,type:"checkbox",class:[c.cx("input"),c.inputClass],style:c.inputStyle,value:c.value,name:o.groupName,checked:o.checked,tabindex:c.tabindex,disabled:c.disabled,readonly:c.readonly,required:c.required,"aria-labelledby":c.ariaLabelledby,"aria-label":c.ariaLabel,"aria-invalid":c.invalid||void 0,"aria-checked":i.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:n[2]||(n[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,N),l("div",a({class:c.cx("box")},o.getPTOptions("box")),[g(c.$slots,"icon",{checked:o.checked,indeterminate:i.d_indeterminate,class:v(c.cx("icon"))},function(){return[o.checked?(r(),s(b,a({key:0,class:c.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):i.d_indeterminate?(r(),s(u,a({key:1,class:c.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):y("",!0)]})],16)],16,F)}O.render=P;export{O as s};
