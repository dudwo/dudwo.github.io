import{_ as i,$ as p,g as _,a as v,o,e as l,f as t,F as d,j as m,n as f,u as s,t as g,d as k}from"./index-BGi8GpGv.js";const b={class:"appbar"},B={class:"appbar-menu"},C=["onClick"],h={__name:"Appbar",setup(I){const r=p(),a=_(),u=[{title:"Logo",value:"info_default"},{title:"서비스명 소개",value:"serviceIntro"},{title:"운영 안내",value:"guide"},{title:"서비스 문의",value:"contact"}];return(x,n)=>{const c=v("Button");return o(),l("div",b,[t("div",B,[(o(),l(d,null,m(u,e=>t("div",{key:e.value,class:f(["menu-item",{active:s(r).name===e.value}]),onClick:y=>s(a).push({name:e.value})},g(e.title),11,C)),64))]),t("div",null,[k(c,{title:"로그인",size:"tiny",onClick:n[0]||(n[0]=e=>s(a).push({name:"signIn_default"}))})])])}}},$=i(h,[["__scopeId","data-v-5535eb25"]]);export{$ as A};
