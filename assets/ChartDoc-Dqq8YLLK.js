import{s as P}from"./index-B7VpTwKM.js";import{s as V}from"./index-BTj_EDJg.js";import{u as _,r as a,e as k,w as B,h,f as D,o as M,a as l,b as s}from"./index-DJZqXJCD.js";const S={class:"col-span-12 xl:col-span-6"},w={class:"card"},O={class:"col-span-12 xl:col-span-6"},F={class:"card"},J={class:"col-span-12 xl:col-span-6"},A={class:"card flex flex-col items-center"},H={class:"col-span-12 xl:col-span-6"},E={class:"card flex flex-col items-center"},L={class:"col-span-12 xl:col-span-6"},N={class:"card flex flex-col items-center"},R={class:"col-span-12 xl:col-span-6"},T={class:"card flex flex-col items-center"},z={__name:"ChartDoc",setup(I){const{getPrimary:f,getSurface:x,isDarkTheme:C}=_(),i=a(null),n=a(null),d=a(null),u=a(null),c=a(null),g=a(null),p=a(null),y=a(null),b=a(null),v=a(null);k(()=>{m()});function m(){const e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),t=e.getPropertyValue("--text-color-secondary"),r=e.getPropertyValue("--surface-border");u.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--p-primary-500"),borderColor:e.getPropertyValue("--p-primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--p-primary-200"),borderColor:e.getPropertyValue("--p-primary-200"),data:[28,48,40,19,86,27,90]}]},b.value={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:t,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:t},grid:{color:r,drawBorder:!1}}}},n.value={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--p-indigo-500"),e.getPropertyValue("--p-purple-500"),e.getPropertyValue("--p-teal-500")],hoverBackgroundColor:[e.getPropertyValue("--p-indigo-400"),e.getPropertyValue("--p-purple-400"),e.getPropertyValue("--p-teal-400")]}]},p.value={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}},i.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--p-primary-500"),borderColor:e.getPropertyValue("--p-primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--p-primary-200"),borderColor:e.getPropertyValue("--p-primary-200"),tension:.4}]},g.value={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:t},grid:{color:r,drawBorder:!1}},y:{ticks:{color:t},grid:{color:r,drawBorder:!1}}}},d.value={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--p-indigo-500"),e.getPropertyValue("--p-purple-500"),e.getPropertyValue("--p-teal-500"),e.getPropertyValue("--p-orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},y.value={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:r}}}},c.value={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--p-indigo-400"),pointBackgroundColor:e.getPropertyValue("--p-indigo-400"),pointBorderColor:e.getPropertyValue("--p-indigo-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--p-indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--p-purple-400"),pointBackgroundColor:e.getPropertyValue("--p-purple-400"),pointBorderColor:e.getPropertyValue("--p-purple-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--p-purple-400"),data:[28,48,40,19,96,27,100]}]},v.value={plugins:{legend:{labels:{fontColor:o}}},scales:{r:{grid:{color:t}}}}}return B([f,x,C],()=>{m()},{immediate:!0}),(e,o)=>{const t=V,r=P;return M(),h(r,{class:"grid grid-cols-12 gap-8"},{default:D(()=>[l("div",S,[l("div",w,[o[0]||(o[0]=l("div",{class:"font-semibold text-xl mb-4"},"Linear",-1)),s(t,{type:"line",data:i.value,options:g.value},null,8,["data","options"])])]),l("div",O,[l("div",F,[o[1]||(o[1]=l("div",{class:"font-semibold text-xl mb-4"},"Bar",-1)),s(t,{type:"bar",data:u.value,options:b.value},null,8,["data","options"])])]),l("div",J,[l("div",A,[o[2]||(o[2]=l("div",{class:"font-semibold text-xl mb-4"},"Pie",-1)),s(t,{type:"pie",data:n.value,options:p.value},null,8,["data","options"])])]),l("div",H,[l("div",E,[o[3]||(o[3]=l("div",{class:"font-semibold text-xl mb-4"},"Doughnut",-1)),s(t,{type:"doughnut",data:n.value,options:p.value},null,8,["data","options"])])]),l("div",L,[l("div",N,[o[4]||(o[4]=l("div",{class:"font-semibold text-xl mb-4"},"Polar Area",-1)),s(t,{type:"polarArea",data:d.value,options:y.value},null,8,["data","options"])])]),l("div",R,[l("div",T,[o[5]||(o[5]=l("div",{class:"font-semibold text-xl mb-4"},"Radar",-1)),s(t,{type:"radar",data:c.value,options:v.value},null,8,["data","options"])])])]),_:1})}}};export{z as default};
