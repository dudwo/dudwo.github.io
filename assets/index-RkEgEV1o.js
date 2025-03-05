import{_ as c,r as C,w as k,a as f,o as i,c as u,b as y,d as r,u as _,e as d,f as e,g as w,h as m,i as A,F as M,j as F,t as h,k as I,n as P,l as L,m as H,p as B}from"./index-BGi8GpGv.js";import{T as S,L as T}from"./index-Dm8pkpH6.js";import{C as D,r as z}from"./chart-8SaNzrGi.js";const V={__name:"index",setup(l){const a=C(""),o=C("");return k(a,t=>console.log("startdate == ",t)),k(o,t=>console.log("endDate == ",t)),(t,s)=>{const p=f("DatePicker");return i(),u(_(S),{title:"대시보드"},{rightArea:y(()=>[r(p,{multiple:"",startDate:a.value,"onUpdate:startDate":s[0]||(s[0]=n=>a.value=n),endDate:o.value,"onUpdate:endDate":s[1]||(s[1]=n=>o.value=n)},null,8,["startDate","endDate"])]),_:1})}}},Z=c(V,[["__scopeId","data-v-04ea9f30"]]),E={},N={width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function R(l,a){return i(),d("svg",N,a[0]||(a[0]=[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9303 5C13.9621 4.92913 13.977 4.85189 13.9739 4.77432H14C13.8882 2.10591 11.6849 0 9.00494 0C6.325 0 4.12172 2.10591 4.00989 4.77432C3.9967 4.84898 3.9967 4.92535 4.00989 5H3.93171C2.65022 5 1.28034 5.84597 0.882639 8.12007L0.104905 14.3147C-0.531424 18.8629 1.81062 20 4.86853 20H13.1585C16.2075 20 18.4789 18.3535 17.9133 14.3147L17.1444 8.12007C16.676 5.90964 15.3503 5 14.0865 5H13.9303ZM12.4932 5C12.4654 4.92794 12.4506 4.85153 12.4497 4.77432C12.4497 2.85682 10.8899 1.30238 8.96575 1.30238C7.04164 1.30238 5.48184 2.85682 5.48184 4.77432C5.49502 4.84898 5.49502 4.92535 5.48184 5H12.4932ZM6.097 10.1486C5.60889 10.1486 5.21321 9.74131 5.21321 9.23893C5.21321 8.73655 5.60889 8.32929 6.097 8.32929C6.5851 8.32929 6.98079 8.73655 6.98079 9.23893C6.98079 9.74131 6.5851 10.1486 6.097 10.1486ZM11.002 9.23893C11.002 9.74131 11.3977 10.1486 11.8858 10.1486C12.3739 10.1486 12.7696 9.74131 12.7696 9.23893C12.7696 8.73655 12.3739 8.32929 11.8858 8.32929C11.3977 8.32929 11.002 8.73655 11.002 9.23893Z",fill:"#0080FF"},null,-1)]))}const j=c(E,[["render",R]]),G={},U={width:"12",height:"7",viewBox:"0 0 8 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function O(l,a){return i(),d("svg",U,a[0]||(a[0]=[e("path",{id:"Polygon 1",d:"M3.28926 1.21811C3.6806 0.822711 4.3194 0.822711 4.71074 1.21811L7.51017 4.04655C8.13513 4.67799 7.68785 5.75 6.79943 5.75L1.20057 5.75C0.312149 5.75 -0.135134 4.67799 0.489829 4.04655L3.28926 1.21811Z",fill:"#EA372A"},null,-1)]))}const Y=c(G,[["render",O]]),W={class:"panel-wrapper"},q={class:"flex flex-grow-1 justify-between align-center"},J={class:"left-area-wrapper"},K={class:"icon-wrapper"},Q={class:"summary-info"},X={class:"sales-summary"},tt={class:"comparison"},et={class:"change increase"},at={__name:"SalesPanel",setup(l){const a=w();return(o,t)=>{const s=f("Button");return i(),d("div",W,[e("div",q,[e("div",J,[e("div",K,[r(j)]),e("div",Q,[e("div",X,[t[4]||(t[4]=e("div",{class:"sales-amount"},"123,456,789",-1)),t[5]||(t[5]=e("div",{class:"currency"},"원",-1)),e("div",tt,[t[2]||(t[2]=m(" (기간 대비 ")),e("div",et,[t[1]||(t[1]=m("10% ")),r(Y,{class:"mb-1"})]),t[3]||(t[3]=m(" ) "))])]),t[6]||(t[6]=e("div",{class:"sales-description"},"매출",-1))])]),r(s,{outlined:"",size:"tiny",width:111,title:"매출 리포트 이동",onClick:t[0]||(t[0]=p=>_(a).push({name:"revenueReport"}))})])])}}},st=c(at,[["__scopeId","data-v-976d57d7"]]),nt={},it={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function ot(l,a){return i(),d("svg",it,a[0]||(a[0]=[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 14.25C10.4142 14.25 10.75 14.5858 10.75 15V18.5H13C13.4142 18.5 13.75 18.8358 13.75 19.25C13.75 19.6642 13.4142 20 13 20H7C6.58579 20 6.25 19.6642 6.25 19.25C6.25 18.8358 6.58579 18.5 7 18.5H9.25V15C9.25 14.5858 9.58579 14.25 10 14.25Z",fill:"#FFDE5B"},null,-1),e("path",{d:"M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H3C1.34315 16 0 14.6569 0 13V3Z",fill:"#FFDE5B"},null,-1),e("path",{d:"M3 16H17C18.6569 16 20 14.6569 20 13V12H0V13C0 14.6569 1.34315 16 3 16Z",fill:"#FFCF30"},null,-1)]))}const dt=c(nt,[["render",ot]]),rt={class:"panel-wrapper"},lt={class:"flex flex-grow-1 justify-between align-center"},ct={class:"left-area-wrapper"},pt={class:"icon-wrapper"},_t={__name:"AffiliatePanel",setup(l){const a=w();return(o,t)=>{const s=f("Button");return i(),d("div",rt,[e("div",lt,[e("div",ct,[e("div",pt,[r(dt)]),t[1]||(t[1]=A('<div class="summary-info" data-v-005613f8><div class="affiliate-summary" data-v-005613f8><div class="affiliate-count" data-v-005613f8><div class="bu-h-22" data-v-005613f8>100</div><div class="bu-body-14" data-v-005613f8>곳</div></div><div data-v-005613f8>/</div><div class="affiliate-count" data-v-005613f8><div class="bu-h-22" data-v-005613f8>100</div><div class="bu-body-14" data-v-005613f8>기기</div></div></div><div class="sales-description" data-v-005613f8>제휴처 수 / 기기 수</div></div>',1))]),r(s,{outlined:"",size:"tiny",width:101,title:"기기 관리 이동",onClick:t[0]||(t[0]=()=>_(a).push({name:"device"}))})])])}}},vt=c(_t,[["__scopeId","data-v-005613f8"]]),ut={class:"panel-wrapper"},ft={class:"title-wrapper"},gt={class:"content-box-wrapper"},mt={class:"content-box"},Ct={class:"title"},yt={class:"count"},ht={__name:"AdvertisePanel",setup(l){const a=w(),o=[{title:"광고 콘텐츠 수",count:"1,000,000"},{title:"비광고 콘텐츠 수",count:"1,000,000"},{title:"예상 노출",count:"1,000,000"},{title:"Live 노출",count:"1,000,000"},{title:"Live 도달",count:"1,000,000"},{title:"소진 예정 금액 (원)",count:"1,000,000"}];return(t,s)=>{const p=f("Button");return i(),d("div",ut,[e("div",ft,[s[1]||(s[1]=e("div",{class:"title"},"광고 현황",-1)),r(p,{outlined:"",size:"tiny",width:111,title:"캠페인 관리 이동",onClick:s[0]||(s[0]=n=>_(a).push({name:"campaign"}))})]),e("div",gt,[(i(),d(M,null,F(o,n=>e("div",mt,[e("div",Ct,h(n.title),1),e("div",yt,h(n.count),1)])),64))])])}}},wt=c(ht,[["__scopeId","data-v-cbf05c95"]]),xt={class:"panel-wrapper"},bt={class:"canvas-wrapper"},$t={class:"canvas-wrapper2"},kt={class:"right-test"},Bt={__name:"AnalyticsPanel",setup(l){D.register(...z);const a=C(null);return I(()=>{var o=document.getElementById("canvas").getContext("2d"),t=o.createLinearGradient(0,0,0,400);t.addColorStop(0,"#FFDD55"),t.addColorStop(1,"rgba(255, 221, 85, 0.8)");var s=o.createLinearGradient(0,0,0,400);s.addColorStop(0,"#0080FF"),s.addColorStop(1,"rgba(0, 128, 255, 0.8)");const p={id:"adjustLinePoint",afterDatasetsDraw(n){const g=n.getDatasetMeta(2),x=n.getDatasetMeta(0),b=n.getDatasetMeta(1);g.data.forEach(($,v)=>{v%2===0&&x.data[v]?$.x=x.data[v].x:v%2===1&&b.data[v]&&($.x=b.data[v].x)})}};new D(a.value,{type:"bar",data:{labels:["2024-12-13","2024-12-14","2024-12-15","2024-12-16","2024-12-17","2024-12-18","2024-12-19","2024-12-20","2024-12-21","2024-12-22","2024-12-23","2024-12-24","2024-12-25","2024-12-26"],datasets:[{type:"bar",label:"광고 콘텐츠 수",barThickness:22,maxBarThickness:12,borderRadius:100,backgroundColor:t,data:[200,220,210,230,240,250,260,270,280,290,300,310,320,330],yAxisID:"y-axis-bar"},{type:"bar",label:"기기 수",barThickness:22,maxBarThickness:12,borderRadius:100,backgroundColor:s,data:[400,420,430,440,450,460,470,480,490,500,510,520,530,540],yAxisID:"y-axis-bar"},{type:"line",label:"매출",borderColor:"#FF8F6B",borderWidth:2,data:[3e8,31e7,32e7,33e7,34e7,35e7,36e7,37e7,38e7,39e7,4e8,44e7,46e7,2e8],tension:0,pointBackgroundColor:"white",yAxisID:"y-axis-line",pointRadius:n=>{const g=n.dataset.data.length;return n.dataIndex===g-1?5:0}}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:0},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{align:"center",color:"#848484",font:{family:"Pretendard",size:12,weight:400}}},"y-axis-bar":{type:"linear",position:"left",border:{display:!1},grid:{drawTicks:!1},ticks:{display:!1,padding:0,color:"#848484",font:{family:"Pretendard",size:12,weight:400},stepSize:500,beginAtZero:!0,max:1e3,callback:n=>n===0||n===500||n===1e3?n:""},suggestedMin:0,suggestedMax:1e3},"y-axis-line":{type:"linear",position:"right",border:{display:!1},grid:{drawTicks:!1,drawOnChartArea:!1},ticks:{display:!1,padding:0,color:"#848484",font:{family:"Pretendard",size:12,weight:400},stepSize:1e8,beginAtZero:!0,max:5e8}}},plugins:{legend:{display:!1,position:"top",align:"end",labels:{}}}},plugins:[p]})}),(o,t)=>(i(),d("div",xt,[t[1]||(t[1]=A('<div class="title-wrapper" data-v-a09c0aa4><div class="title" data-v-a09c0aa4>기기 수 / 광고 콘텐츠 수 / 매출 (최근 14일)</div><div class="legend-container" data-v-a09c0aa4><div class="legend-wrapper" data-v-a09c0aa4><div class="legend-color device" data-v-a09c0aa4></div><div class="text" data-v-a09c0aa4>기기 수</div></div><div class="legend-wrapper" data-v-a09c0aa4><div class="legend-color" data-v-a09c0aa4></div><div class="text" data-v-a09c0aa4>광고 콘텐츠 수</div></div></div></div>',1)),e("div",bt,[e("div",$t,[t[0]||(t[0]=e("div",{class:"left-test"},[e("div",null,"1000"),e("div",null,"500"),e("div",null,"0")],-1)),e("canvas",{id:"canvas",ref_key:"chartCanvas",ref:a},null,512),e("div",kt,[(i(!0),d(M,null,F([...Array(6).keys()].reverse(),(s,p)=>(i(),d("div",{key:p,class:P(["right-ticks-wrapper",{"align-start":p<3,"align-end":p>=3}])},[e("div",{class:"right-ticks",style:L({paddingTop:s>=3?`${(5-s)*2}px`:void 0,paddingBottom:s<3?`${(s+1)*2+12}px`:void 0})},h(s?`${s}00,000,000`:`${s}`),5)],2))),128))])])])]))}},Dt=c(Bt,[["__scopeId","data-v-a09c0aa4"]]),At={class:"dashboard-content"},Mt={class:"flex",style:{gap:"0px 28px"}},Ft={__name:"index",setup(l){return(a,o)=>(i(),d("div",At,[e("div",Mt,[r(st),r(vt)]),r(wt),r(Dt)]))}},It=c(Ft,[["__scopeId","data-v-55c74810"]]),Pt={__name:"index",setup(l){return(a,o)=>(i(),u(_(T),null,{title:y(()=>[r(_(Z))]),content:y(()=>[r(_(It))]),_:1}))}},Lt={};function Ht(l,a){return i(),d("div",null,"대행사 / 랩사")}const St=c(Lt,[["render",Ht]]),Tt={};function zt(l,a){return i(),d("div",null,"일반회사")}const Vt=c(Tt,[["render",zt]]),Zt={class:"home-container"},Et={__name:"index",setup(l){const{userInfo:a}=H(),o=B(()=>["AGENCY","MEDIALAB"].includes(a.companyBusinessType)),t=B(()=>a.companyBusinessType==="COMPANY");return(s,p)=>(i(),d("div",Zt,[o.value?(i(),u(_(St),{key:0})):t.value?(i(),u(_(Vt),{key:1})):(i(),u(_(Pt),{key:2}))]))}},Gt=c(Et,[["__scopeId","data-v-2d3e743a"]]);export{Gt as default};
