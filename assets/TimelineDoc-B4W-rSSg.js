import{s as _}from"./index-DDTpXVQQ.js";import{s as y}from"./index-D8Lh5421.js";import{B as z,S as w,o as u,c as g,H as T,I as C,m as v,a as t,i as f,K as b,s as O,a1 as S,r as h,b as m,f as s,g as c,t as p,X as B,J as A}from"./index-CNLPOZFG.js";import"./index-BtocLIrz.js";var $=function(a){var e=a.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: `.concat(e("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(e("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(e("timeline.event.min.height"),`;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: `).concat(e("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("timeline.event.marker.border.color"),`;
    border-radius: `).concat(e("timeline.event.marker.border.radius"),`;
    width: `).concat(e("timeline.event.marker.size"),`;
    height: `).concat(e("timeline.event.marker.size"),`;
    background: `).concat(e("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(e("timeline.event.marker.content.border.radius"),`;
    width: `).concat(e("timeline.event.marker.content.size"),`;
    height:`).concat(e("timeline.event.marker.content.size"),`;
    background: `).concat(e("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(e("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(e("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(e("timeline.event.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: `).concat(e("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(e("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},q={root:function(a){var e=a.props;return["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},K=z.extend({name:"timeline",theme:$,classes:q}),D={name:"BaseTimeline",extends:O,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:K,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},x={name:"Timeline",extends:D,inheritAttrs:!1,methods:{getKey:function(a,e){return this.dataKey?w(a,this.dataKey):e},getPTOptions:function(a,e){return this.ptm(a,{context:{index:e,count:this.value.length}})}}};function P(l,a,e,k,i,o){return u(),g("div",v({class:l.cx("root")},l.ptmi("root")),[(u(!0),g(T,null,C(l.value,function(d,r){return u(),g("div",v({key:o.getKey(d,r),class:l.cx("event"),ref_for:!0},o.getPTOptions("event",r)),[t("div",v({class:l.cx("eventOpposite",{index:r}),ref_for:!0},o.getPTOptions("eventOpposite",r)),[f(l.$slots,"opposite",{item:d,index:r})],16),t("div",v({class:l.cx("eventSeparator"),ref_for:!0},o.getPTOptions("eventSeparator",r)),[f(l.$slots,"marker",{item:d,index:r},function(){return[t("div",v({class:l.cx("eventMarker"),ref_for:!0},o.getPTOptions("eventMarker",r)),null,16)]}),r!==l.value.length-1?f(l.$slots,"connector",{key:0,item:d,index:r},function(){return[t("div",v({class:l.cx("eventConnector"),ref_for:!0},o.getPTOptions("eventConnector",r)),null,16)]}):b("",!0)],16),t("div",v({class:l.cx("eventContent"),ref_for:!0},o.getPTOptions("eventContent",r)),[f(l.$slots,"content",{item:d,index:r})],16)],16)}),128))],16)}x.render=P;const F={class:"grid grid-cols-12 gap-8"},I={class:"col-span-6"},N={class:"card"},V={class:"col-span-6"},j={class:"card"},L={class:"col-span-6"},M={class:"card"},E={class:"col-span-6"},H={class:"card"},R={class:"text-muted-color"},J={class:"col-span-full"},X={class:"card"},G=["src","alt"],Q={class:"col-span-full"},U={class:"card"},W={__name:"TimelineDoc",setup(l){const a=h([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),e=h(["2020","2021","2022","2023"]);return(k,i)=>{const o=x,d=y,r=_;return u(),g("div",F,[t("div",I,[t("div",N,[i[0]||(i[0]=t("div",{class:"font-semibold text-xl mb-4"},"Left Align",-1)),m(o,{value:a.value},{content:s(n=>[c(p(n.item.status),1)]),_:1},8,["value"])])]),t("div",V,[t("div",j,[i[1]||(i[1]=t("div",{class:"font-semibold text-xl mb-4"},"Right Align",-1)),m(o,{value:a.value,align:"right"},{content:s(n=>[c(p(n.item.status),1)]),_:1},8,["value"])])]),t("div",L,[t("div",M,[i[2]||(i[2]=t("div",{class:"font-semibold text-xl mb-4"},"Alternate Align",-1)),m(o,{value:a.value,align:"alternate"},{content:s(n=>[c(p(n.item.status),1)]),_:1},8,["value"])])]),t("div",E,[t("div",H,[i[3]||(i[3]=t("div",{class:"font-semibold text-xl mb-4"},"Opposite Content",-1)),m(o,{value:a.value},{opposite:s(n=>[t("small",R,p(n.item.date),1)]),content:s(n=>[c(p(n.item.status),1)]),_:1},8,["value"])])]),t("div",J,[t("div",X,[i[5]||(i[5]=t("div",{class:"font-semibold text-xl mb-4"},"Templating",-1)),m(o,{value:a.value,align:"alternate",class:"customized-timeline"},{marker:s(n=>[t("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:B({backgroundColor:n.item.color})},[t("i",{class:A(n.item.icon)},null,2)],4)]),content:s(n=>[m(r,{class:"mt-4"},{title:s(()=>[c(p(n.item.status),1)]),subtitle:s(()=>[c(p(n.item.date),1)]),content:s(()=>[n.item.image?(u(),g("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${n.item.image}`,alt:n.item.name,width:"200",class:"shadow-sm"},null,8,G)):b("",!0),i[4]||(i[4]=t("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),m(d,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])])]),t("div",Q,[t("div",U,[i[7]||(i[7]=t("div",{class:"font-semibold text-xl mb-4"},"Horizontal",-1)),i[8]||(i[8]=t("div",{class:"font-semibold mb-2"},"Top Align",-1)),m(o,{value:e.value,layout:"horizontal",align:"top"},{content:s(n=>[c(p(n.item),1)]),_:1},8,["value"]),i[9]||(i[9]=t("div",{class:"font-semibold mt-4 mb-2"},"Bottom Align",-1)),m(o,{value:e.value,layout:"horizontal",align:"bottom"},{content:s(n=>[c(p(n.item),1)]),_:1},8,["value"]),i[10]||(i[10]=t("div",{class:"font-semibold mt-4 mb-2"},"Alternate Align",-1)),m(o,{value:e.value,layout:"horizontal",align:"alternate"},{opposite:s(()=>i[6]||(i[6]=[c("   ")])),content:s(n=>[c(p(n.item),1)]),_:1},8,["value"])])])])}}},ne=S(W,[["__scopeId","data-v-6669d0cb"]]);export{ne as default};
