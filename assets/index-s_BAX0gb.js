import{_ as d,r as n,N as m,k as p,w as u,e as _,d as v,f as s,t as w,a as h,o as b}from"./index-BGi8GpGv.js";const f={class:"guid-wrapper"},y={class:"video-wrapper"},V={class:"title"},x=["src"],k={__name:"index",setup(T){const t=n(1),c=[{id:1,title:"서비스 소개"},{id:2,title:"회원가입"},{id:3,title:"광고 세팅"},{id:4,title:"결제 방법"}],o={1:{title:"(서비스명) 서비스 소개",src:"https://www.w3schools.com/html/mov_bbb.mp4"},2:{title:"회원가입 방법",src:"https://www.w3schools.com/html/mov_bbb.mp4"},3:{title:"광고 세팅 방법",src:"https://www.w3schools.com/html/mov_bbb.mp4"},4:{title:"결제 방법",src:new URL("/assets/test-D5ztL0Sv.mp4",import.meta.url).href}},e=m("videoPlayer"),a=()=>{e.value&&(e.value.muted=!0,e.value.play().catch(()=>{console.warn("자동 재생이 차단됨. 사용자가 직접 재생해야 합니다.")}))};return p(()=>{setTimeout(a,300)}),u(t,()=>{e.value&&(e.value.load(),a())}),(g,l)=>{const i=h("Tab");return b(),_("div",f,[v(i,{tabs:c,modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=r=>t.value=r)},null,8,["modelValue"]),s("div",y,[s("div",V,w(o[t.value].title),1),s("video",{ref_key:"videoPlayer",ref:e,width:"900",height:"420",controls:""},[s("source",{src:o[t.value].src,type:"video/mp4"},null,8,x)],512)])])}}},N=d(k,[["__scopeId","data-v-51e6c870"]]);export{N as default};
