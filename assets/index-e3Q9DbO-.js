var L=Object.defineProperty;var z=(o,t,e)=>t in o?L(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var M=(o,t,e)=>z(o,typeof t!="symbol"?t+"":t,e);import{u as x}from"./useCustomRouter-CiU2rkZM.js";import{T as E,L as R}from"./index-Dm8pkpH6.js";import{_ as I,a as O,o as u,c as h,b as w,f as A,d as g,u as n,e as $,C as B,p as m,t as T,n as j,D as V,v as b,A as U,r as N,k as G,B as Y,w as H,G as Q,M as W}from"./index-BGi8GpGv.js";import{a as F}from"./index-CJtyaUy2.js";import{u as J,G as K}from"./index-DQhdp3Mo.js";import{P as X}from"./index-CBHngC_A.js";import{c as Z,D as ee}from"./metaHelper-B8_iLp7n.js";import{u as te,C as q,a as re}from"./Content-CKsiGma2.js";import"./useForm-D-1CqejB.js";const ne={class:"title-button-group"},le={__name:"Title",setup(o){const{addQuery:t}=x();return(e,r)=>{const l=O("Button");return u(),h(n(E),{title:"알림 관리"},{rightArea:w(()=>[A("div",ne,[g(l,{outlined:"",width:87,size:"x-small",title:"알림 보내기",onClick:r[0]||(r[0]=a=>n(t)({view:"add"}))})])]),_:1})}}},oe=I(le,[["__scopeId","data-v-36575e13"]]),se={class:"toolbar-wrapper"},ae={class:"right-area"},ie={__name:"Toolbar",setup(o){return(t,e)=>(u(),$("div",se,[e[0]||(e[0]=A("div",{class:"left-area"},null,-1)),A("div",ae,[g(n(X))])]))}},ue=I(ie,[["__scopeId","data-v-19fd6454"]]),ce={__name:"Alert",props:{modelValue:{},modelModifiers:{},type:{},typeModifiers:{}},emits:["update:modelValue","update:type"],setup(o){const t=B(o,"modelValue"),e=B(o,"type"),r=m(()=>e.value==="refresh"?"새로고침을 진행하시겠습니까?":e.value==="refresh_complete"?"DID 새로고침 완료":e.value==="restart"?"재시작을 진행하시겠습니까?":e.value==="restart_complete"?"DID 재시작 완료":e.value==="update"?"업데이트를 진행하시겠습니까?":e.value==="update_complete"?"DID 업데이트 완료":e.value==="on"?"기기 사용을 ON 하시겠습니까?":e.value==="on_complete"?"기기 사용 ON 완료":e.value==="off"?"기기 사용을 OFF 하시겠습니까?":e.value==="off_complete"?"기기 사용 OFF 완료":e.value==="finish"?"기기를 종료하시겠습니까?":e.value==="finish_complete"?"기기 종료 완료":""),l=m(()=>e.value==="refresh"?`새로고침을 할 경우,
단시간 기기가 멈출 수 있습니다.`:e.value==="refresh_complete"?"DID 새로고침이 완료됐습니다.":e.value==="restart"?`재시작을 할 경우,
기기에 콘텐츠 노출이 멈추게 됩니다.`:e.value==="restart_complete"?`DID 재시작이 완료됐습니다.
기기 상태를 주의깊게 확인해주세요.`:e.value==="update"?`업데이트를 진행할 경우,
단시간 기기가 멈출 수 있습니다.`:e.value==="update_complete"?`DID 업데이트가 완료됐습니다.
기기 상태를 주의깊게 확인해주세요.`:e.value==="on"?`기기 사용을 ON 하게 되면,
기기가 활성화됩니다.`:e.value==="on_complete"?`DID 업데이트가 완료됐습니다.
기기 상태를 주의깊게 확인해주세요.`:e.value==="off"?`기기 사용을 OFF 하게 되면,
기기 화면이 대기 상태로 전환되게 됩니다.`:e.value==="off_complete"?`DID 업데이트가 완료됐습니다.
기기 상태를 주의깊게 확인해주세요.`:e.value==="finish"?`기기 사용을 OFF 하게 되면,
기기가 꺼지게 됩니다.`:e.value==="finish_complete"?`DID 업데이트가 완료됐습니다.
기기 상태를 주의깊게 확인해주세요.`:""),a=m(()=>{var d;return!((d=e.value)!=null&&d.endsWith("_complete"))}),c=m(()=>{var d;return(d=e.value)==null?void 0:d.endsWith("_complete")});function C(){e.value=`${e.value}_complete`}return(d,p)=>{const D=O("Alert",!0);return u(),h(D,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=f=>t.value=f),title:r.value,message:l.value,showCancel:a.value,confirmClickClose:c.value,"onClick:confirm":C},null,8,["modelValue","title","message","showCancel","confirmClickClose"])}}},de={__name:"Status",props:{item:{type:Object,default:()=>({})},column:{type:Object,default:()=>({})}},setup(o){const t=o,e=m(()=>t.item[t.column.key]),r=m(()=>{var l;return((l=t.column.items.find(a=>a.value===t.item[t.column.key]))==null?void 0:l.title)||"-"});return(l,a)=>(u(),$("div",{class:j({"bu-body-13-link":e.value==="PENDING"})},T(r.value),3))}},me={idx:{column:{title:"NO",type:"text"}},title:{column:{title:"제목",type:"text"},form:{row:1,required:!0,autoFocus:!0,component:"input",label:"제목",placeholder:"제목을 입력해 주세요.",errorMessages:{error:"",require:""}}},content:{form:{row:2,required:!0,component:"editor",label:"본문 내용",placeholder:"내용을 입력해 주세요.",errorMessages:{error:"",require:""}}},sentCount:{column:{title:"전송 건수",type:"text"}},status:{column:{title:"처리 상태",type:"text"},form:{row:4,disabled:!0,component:"input",label:"처리 상태",class:"w-318",placeholder:"처리 상태는 등록 이후 변경됩니다.",errorMessages:{error:"",require:""}},common:{items:[{title:"Not Yet",value:"PENDING"},{title:"Finish",value:"COMPLETED"},{title:"Cancel",value:"CANCELLED"}]}},sentAt:{column:{title:"전송일시",type:"date"},form:{row:3,required:!0,component:"datePicker",label:"전송일시",class:"w-318",placeholder:"전송일시를 선택해 주세요.",errorMessages:{error:"",require:""}}},landingUrl:{form:{row:3,component:"input",label:"랜딩 페이지 URL 또는 화면 ID",class:"w-318",placeholder:"랜딩 페이지 URL 또는 화면 ID를 입력해 주세요.",errorMessages:{error:"",require:""}}},createdAt:{column:{title:"등록일",type:"date"}},detailView:{column:{title:"상세보기",type:"link"}}},pe=["idx","title","sentCount","status","sentAt","createdAt","detailView"],fe=["title","content","sentAt","landingUrl","status"],_e=Z(me,pe,fe);class k extends ee{constructor(t){super(t),this.detailView="상세보기"}toRequestBody(){return this.constructor.metaData.form.reduce((t,{key:e})=>["sentAt"].includes(e)?{...t,[e]:V(this[e]).valueOf()}:{...t,[e]:this[e]},{})}toPutRequestBody(){return this.constructor.metaData.form.reduce((t,{key:e})=>["sentAt"].includes(e)?{...t,[e]:V(this[e]).valueOf()}:{...t,[e]:this[e]},{})}}M(k,"metaData",_e);const ve={__name:"index",setup(o){const{page:t,size:e,totalPage:r,loading:l,items:a,addQuery:c}=J(d),C=k.toColumnHeaders();async function d(){var v;const f={page:t.value,size:e.value};l.value=!0,a.value.length=0;const _=await F("notification").getPage(f),{result:i,body:s}=_||{};i.httpStatus===200&&(l.value=!1,(v=s==null?void 0:s.data)==null||v.forEach(y=>a.value.push(new k(y))),r.value=(s==null?void 0:s.totalPage)||0)}async function p({item:f,column:_,newValue:i}){if(a.value.findIndex(v=>v.id===f.id)!==-1){if(_.type==="link")return c({view:"detail",id:f.idx});_.type}}function D(){console.log("=== ")}return(f,_)=>(u(),h(n(K),{page:n(t),items:n(a),loading:n(l),totalPage:n(r),columnHeaders:n(C),"onClick:cell":p,"onClick:page":_[0]||(_[0]=i=>n(c)({page:i}))},{toolbar:w(()=>[g(ue)]),alert:w(()=>[g(ce)]),status:w(({item:i,column:s})=>[g(de,{item:i,column:s,onClick:D},null,8,["item","column"])]),_:1},8,["page","items","loading","totalPage","columnHeaders"]))}},he=I(ve,[["__scopeId","data-v-fd42bd2b"]]),ge={__name:"index",setup(o){return(t,e)=>(u(),h(n(R),null,{title:w(()=>[g(oe)]),content:w(()=>[g(n(he))]),_:1}))}};function S(o){const t=k.toFormFields(),{values:e,errors:r,getFields:l,validateFields:a}=te(t);return{fields:l([],o),values:e,errors:r,validateFields:a}}const Ce={__name:"Create",setup(o){const{showAlert:t}=b("alert"),{routeList:e}=x(),{fields:r,values:l,errors:a,validateFields:c}=S(),C=b("methods");return C.cancel=()=>U(l)?t("cancel"):e(),C.submit=()=>{if(!c())return t("missing");t("regist",async()=>{var D;const d=new k({...l}),p=await F("notification").create(d.toRequestBody());t(((D=p==null?void 0:p.result)==null?void 0:D.httpStatus)===200?"regist_complete":"missing")})},(d,p)=>(u(),h(q,{fields:n(r),values:n(l),errors:n(a)},null,8,["fields","values","errors"]))}},De={__name:"Detail",setup(o){const{showAlert:t}=b("alert"),e=b("footer-props"),{getQuery:r,routeList:l}=x(),{fields:a,values:c,errors:C,validateFields:d}=S(!0),p=m(()=>a.map(i=>i.map(s=>s.key!=="status"?{...s}:{...s,disabled:!1,component:"dropdown"}))),D=N(!1),f=N({});G(async()=>{var P;D.value=!0,e.disabledSubmit=!0;const i=await F("notification").getDetail((P=r())==null?void 0:P.id),{result:s,body:v}=i||{};if(s.httpStatus!==200)return;const y=V(v.sentAt).format("YYYY-MM-DD");f.value=Y(c,{...v,sentAt:y}),D.value=!1}),H(c,()=>e.disabledSubmit=!Q(f.value,c));const _=b("methods");return _.cancel=()=>e.disabledSubmit?l():t("put_cancel"),_.delete=()=>t("delete",async()=>{var s,v;const i=await F("notification").delete((s=r())==null?void 0:s.id);((v=i==null?void 0:i.result)==null?void 0:v.httpStatus)===200&&t("delete_complete")}),_.submit=()=>{if(!d())return t("missing");t("put",async()=>{var v,y;const i=new k({...c}),s=await F("notification").update((v=r())==null?void 0:v.id,i.toPutRequestBody());((y=s==null?void 0:s.result)==null?void 0:y.httpStatus)===200&&t("put_complete")})},(i,s)=>(u(),h(q,{isDetail:"",fields:p.value,values:n(c),errors:n(C)},null,8,["fields","values","errors"]))}},we={class:"flex justify-between align-center"},be={class:"button-group"},ye={__name:"Footer",props:{isDetail:{type:Boolean,default:!1}},setup(o){const t=b("methods"),e=b("footer-props");return(r,l)=>{const a=O("Button");return u(),$("div",we,[l[0]||(l[0]=A("div",null,null,-1)),A("div",be,[g(a,{outlined:"",width:55,title:o.isDetail?"목록":"취소",size:"medium",color:"neutral",onClick:n(t).cancel},null,8,["title","onClick"]),o.isDetail?(u(),h(a,{key:0,size:"medium",title:"삭제",color:"red",width:55,onClick:n(t).delete},null,8,["onClick"])):W("",!0),g(a,{size:"medium",color:"primary",width:55,title:o.isDetail?"수정":"등록",disabled:n(e).disabledSubmit,onClick:n(t).submit},null,8,["title","disabled","onClick"])])])}}},ke=I(ye,[["__scopeId","data-v-429b2f29"]]),xe={__name:"Alert",setup(o){const{alertObj:t}=b("alert"),{routeList:e}=x(),r=m(()=>t.type),l=m(()=>r.value==="regist"?"알림을 등록하시겠습니까?":r.value==="regist_complete"?"알림 등록 완료":r.value==="cancel"?"알림 등록을 취소하시겠습니까?":r.value==="missing"?"잘못된 정보 또는 누락된 정보가 있습니다.":r.value==="put"?"알림을 수정하시겠습니까?":r.value==="put_complete"?"알림 수정 완료":r.value==="put_cancel"?"알림 수정을 취소하시겠습니까?":r.value==="delete"?"알림을 삭제하시겠습니까?":r.value==="delete_complete"?"알림 삭제 완료":""),a=m(()=>r.value==="regist_complete"?"알림 등록이 완료됐습니다.":r.value==="cancel"?`알림 등록을 취소할 경우,
입력한 정보가 삭제됩니다.`:r.value==="missing"?"입력한 정보를 다시 한번 확인해주세요.":r.value==="put"?"수정할 내용을 충분히 확인하셨나요?":r.value==="put_complete"?"알림 수정 완료됐습니다.":r.value==="put_cancel"?`수정을 취소하면,
입력한 정보가 삭제됩니다.`:r.value==="delete"?`알림을 삭제하면
사용자 화면에서 보이지 않습니다.`:r.value==="delete_complete"?"알림 삭제 완료했습니다.":""),c=m(()=>r.value==="missing"),C=m(()=>["regist","cancel","delete","put","put_cancel"].includes(r.value)),d=m(()=>!["regist","put","delete"].includes(r.value)),p=m(()=>({cancel:e,regist:t["click:confirm"],regist_complete:e,delete:t["click:confirm"],delete_complete:e,put:t["click:confirm"],put_complete:e,put_cancel:e}));return(D,f)=>{const _=O("Alert",!0);return u(),h(_,{modelValue:n(t).show,"onUpdate:modelValue":f[0]||(f[0]=i=>n(t).show=i),title:l.value,error:c.value,message:a.value,showCancel:C.value,confirmClickClose:d.value,"onClick:confirm":p.value[r.value]},null,8,["modelValue","title","error","message","showCancel","confirmClickClose","onClick:confirm"])}}},Fe={__name:"index",setup(o){const{isDetail:t}=x();return(e,r)=>(u(),h(n(re),{title:n(t)?"알림 보내기 상세 내용":"알림 보내기"},{content:w(()=>[n(t)?(u(),h(De,{key:0})):(u(),h(Ce,{key:1}))]),footer:w(()=>[g(ke,{isDetail:n(t)},null,8,["isDetail"])]),alert:w(()=>[g(xe)]),_:1},8,["title"]))}},Se={__name:"index",setup(o){const{getQuery:t}=x();return(e,r)=>{var l;return["add","detail"].includes((l=n(t)())==null?void 0:l.view)?(u(),h(n(Fe),{key:0})):(u(),h(n(ge),{key:1}))}}};export{Se as default};
