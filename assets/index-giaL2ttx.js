var z=Object.defineProperty;var Y=(i,t,e)=>t in i?z(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>Y(i,typeof t!="symbol"?t+"":t,e);import{u as I}from"./useCustomRouter-CiU2rkZM.js";import{T as G,L as H}from"./index-Dm8pkpH6.js";import{_ as L,a as y,o as v,c as b,b as M,f as g,d as l,u as o,r as N,w as P,k as O,e as $,s as T,p as D,C as B,D as V,E as Q,v as x,A as j,B as W,G as K}from"./index-BGi8GpGv.js";import{a as k}from"./index-CJtyaUy2.js";import{u as J,G as X}from"./index-DQhdp3Mo.js";import{S as Z}from"./SearchIcon-C8b4b_FZ.js";import{P as ee}from"./index-CBHngC_A.js";import{c as te,D as re}from"./metaHelper-B8_iLp7n.js";import{u as ae,C as R,a as oe}from"./Content-CKsiGma2.js";import"./useForm-D-1CqejB.js";const ne={class:"title-button-group"},se={__name:"Title",setup(i){const{addQuery:t}=I();return(e,r)=>{const n=y("Button");return v(),b(o(G),{title:"제휴처 관리"},{rightArea:M(()=>[g("div",ne,[l(n,{outlined:"",width:77,size:"x-small",color:"green",title:"액셀 등록"}),l(n,{outlined:"",width:87,size:"x-small",title:"제휴처 등록",onClick:r[0]||(r[0]=d=>o(t)({view:"add"}))})])]),_:1})}}},le=L(se,[["__scopeId","data-v-497f255c"]]),ue={class:"grid-header-wrapper"},ie={class:"left-area"},ce={class:"item-wrapper"},de={class:"search-field"},pe={class:"item-wrapper"},me={class:"item-wrapper"},fe={__name:"Header",setup(i){const{getQuery:t,changeQuery:e}=I(),r=N({}),n=(u,a)=>D({get:()=>r.value[u]||a,set:s=>r.value[u]=s&&s!=="ALL"?String(s).toUpperCase():void 0}),d=n("p_status","ALL"),m=n("i_status","ALL"),_=N("");P(_,u=>r.value.companyName=u||void 0),O(f),P(t,f);function f(){var u;_.value=((u=t())==null?void 0:u.companyName)||void 0,["p_status","i_status","pageSize"].forEach(a=>{const s=t()[a];r.value[a]=s&&s!=="ALL"?s.toUpperCase():void 0})}return(u,a)=>{const s=y("Input"),p=y("Radio"),h=y("RadioGroup"),w=y("Button");return v(),$("div",ue,[g("div",ie,[g("div",ce,[a[5]||(a[5]=g("div",null,"제휴처",-1)),g("div",de,[l(s,{placeholder:"제휴처 명을 검색해 주세요.",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=c=>_.value=c),"onKeydown:enter":a[1]||(a[1]=c=>o(e)(r.value))},{"prepend-icon":M(()=>[l(Z,{class:"mr-2"})]),_:1},8,["modelValue"])])]),g("div",pe,[a[6]||(a[6]=g("div",null,"계약 상태",-1)),l(h,{modelValue:o(d),"onUpdate:modelValue":a[2]||(a[2]=c=>T(d)?d.value=c:null)},{default:M(()=>[l(p,{label:"전체",value:"ALL"}),l(p,{label:"계약 완료",value:"ACTIVE"}),l(p,{label:"진행중",value:"PENDING"}),l(p,{label:"해지",value:"TERMINATED"})]),_:1},8,["modelValue"])]),g("div",me,[a[7]||(a[7]=g("div",null,"설치 여부",-1)),l(h,{modelValue:o(m),"onUpdate:modelValue":a[3]||(a[3]=c=>T(m)?m.value=c:null)},{default:M(()=>[l(p,{label:"전체",value:"ALL"}),l(p,{label:"설치",value:"INSTALLED"}),l(p,{label:"예정",value:"SCHEDULED"}),l(p,{label:"미설치",value:"NOT_INSTALLED"})]),_:1},8,["modelValue"])])]),g("div",null,[l(w,{size:"tiny",title:"적용",onClick:a[4]||(a[4]=c=>o(e)(r.value))})])])}}},_e=L(fe,[["__scopeId","data-v-4dba7169"]]),ve={class:"toolbar-wrapper"},ge={class:"right-area"},he={__name:"Toolbar",setup(i){return(t,e)=>{const r=y("Button");return v(),$("div",ve,[e[0]||(e[0]=g("div",{class:"left-area"},null,-1)),g("div",ge,[l(r,{color:"green",size:"x-small",title:"다운로드"}),l(o(ee))])])}}},we=L(he,[["__scopeId","data-v-d4645d7f"]]),De={__name:"Alert",props:{modelValue:{},modelModifiers:{},type:{},typeModifiers:{}},emits:["update:modelValue","update:type"],setup(i){const t=B(i,"modelValue"),e=B(i,"type"),r=D(()=>e.value==="refresh"?"새로고침을 진행하시겠습니까?":e.value==="refresh_complete"?"DID 새로고침 완료":e.value==="restart"?"재시작을 진행하시겠습니까?":e.value==="restart_complete"?"DID 재시작 완료":e.value==="update"?"업데이트를 진행하시겠습니까?":e.value==="update_complete"?"DID 업데이트 완료":e.value==="on"?"기기 사용을 ON 하시겠습니까?":e.value==="on_complete"?"기기 사용 ON 완료":e.value==="off"?"기기 사용을 OFF 하시겠습니까?":e.value==="off_complete"?"기기 사용 OFF 완료":e.value==="finish"?"기기를 종료하시겠습니까?":e.value==="finish_complete"?"기기 종료 완료":""),n=D(()=>e.value==="refresh"?`새로고침을 할 경우,
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
기기 상태를 주의깊게 확인해주세요.`:""),d=D(()=>{var f;return!((f=e.value)!=null&&f.endsWith("_complete"))}),m=D(()=>{var f;return(f=e.value)==null?void 0:f.endsWith("_complete")});function _(){e.value=`${e.value}_complete`}return(f,u)=>{const a=y("Alert",!0);return v(),b(a,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=s=>t.value=s),title:r.value,message:n.value,showCancel:d.value,confirmClickClose:m.value,"onClick:confirm":_},null,8,["modelValue","title","message","showCancel","confirmClickClose"])}}},Ce={idx:{column:{title:"NO",type:"text"}},name:{column:{title:"제휴처 명",type:"link"},form:{row:1,required:!0,autoFocus:!0,component:"input",class:"w-318",label:"제휴처 명",placeholder:"제휴처 명을 입력해 주세요.",errorMessages:{error:"",require:""}}},address:{form:{row:2,required:!0,component:"address",group:"addressInfo",label:"제휴처 주소 (최신 사업자 등록증 주소)",placeholder:"예) 판교역로 166, 분당 주공, 백현동 532",errorMessages:{error:"",require:""}}},addressDetail:{form:{row:2,required:!0,group:"addressInfo",label:"상세 주소",placeholder:"상세 주소를 입력해 주세요.",errorMessages:{error:"",require:""}}},bcode:{form:{group:"addressInfo",required:!0,errorMessages:{error:"",require:""}}},x:{form:{group:"addressInfo",required:!0,errorMessages:{error:"",require:""}}},y:{form:{group:"addressInfo",required:!0,errorMessages:{error:"",require:""}}},partnershipStatus:{column:{title:"계약 상태",type:"dropdown"},form:{row:3,required:!0,component:"dropdown",class:"w-318",label:"계약 상태",placeholder:"-",errorMessages:{error:"",require:""}},common:{items:[{title:"계약 완료",value:"ACTIVE"},{title:"진행중",value:"PENDING"},{title:"해지",value:"TERMINATED"}]}},installationStatus:{column:{title:"설치 여부",type:"dropdown"},form:{row:5,required:!0,class:"w-318",component:"dropdown",label:"설치 여부",placeholder:"-",errorMessages:{error:"",require:""}},common:{items:[{title:"설치",value:"INSTALLED"},{title:"설치예정",value:"SCHEDULED"},{title:"미설치",value:"NOT_INSTALLED"}]}},deviceCount:{column:{title:"설치 수",type:"text"},form:{row:5,required:!0,class:"w-318",component:"input",label:"DID 설치 수",placeholder:"DID 설치 수를 입력해 주세요.",errorMessages:{error:"",require:""}}},partnerManagerName:{column:{title:"제휴처 담당자",type:"text"},form:{row:6,required:!0,class:"w-318",component:"input",label:"제휴처 담당자 명",placeholder:"제휴처 담당자 명을 입력해 주세요.",errorMessages:{error:"",require:""}}},partnerManagerPhone:{column:{title:"담당자 연락처",type:"text"},form:{row:7,required:!0,class:"w-318",type:"number",component:"input",label:"제휴처 담당자 연락처",placeholder:"숫자만 입력해 주세요.",errorMessages:{error:"",require:""}}},partnerManagerEmail:{column:{title:"담당자 이메일",type:"text"},form:{row:7,required:!0,class:"w-318",component:"input",label:"제휴처 담당자 이메일",placeholder:"제휴처 담당자 이메일을 입력해 주세요.",errorMessages:{error:"",require:""}}},operationManagerName:{column:{title:"운영 담당자",type:"text"},form:{row:8,required:!0,class:"w-318",component:"input",label:"운영 담당자 명",placeholder:"운영 담당자 명을 입력해 주세요.",errorMessages:{error:"",require:""}}},operationManagerPhone:{form:{row:9,required:!0,class:"w-318",type:"number",component:"input",label:"운영 담당자 연락처",placeholder:"숫자만 입력해 주세요.",errorMessages:{error:"",require:""}}},operationManagerEmail:{form:{row:9,required:!0,class:"w-318",component:"input",label:"운영 담당자 이메일",placeholder:"운영 담당자 이메일을 입력해 주세요.",errorMessages:{error:"",require:""}}},contractStartedAt:{column:{title:"계약일",type:"date"},form:{row:4,required:!0,class:"w-318",component:"datePicker",label:"계약일",placeholder:"계약일을 선택해 주세요.",errorMessages:{error:"",require:""}}},contractEndedAt:{column:{title:"종료일",type:"date"},form:{row:4,required:!0,class:"w-318",component:"datePicker",label:"계약 종료일",placeholder:"종료일을 선택해 주세요.",errorMessages:{error:"",require:""}}},renewalStatus:{column:{title:"계약연장 여부",type:"dropdown",items:[{title:"Y",value:"1"},{title:"N",value:"2"}]}}},be=["idx","name","partnershipStatus","installationStatus","deviceCount","partnerManagerName","partnerManagerPhone","partnerManagerEmail","operationManagerName","contractStartedAt","contractEndedAt","renewalStatus"],Me=["name","address","addressDetail","bcode","x","y","partnershipStatus","contractStartedAt","contractEndedAt","installationStatus","deviceCount","partnerManagerName","partnerManagerPhone","partnerManagerEmail","operationManagerName","operationManagerPhone","operationManagerEmail"],ye=te(Ce,be,Me);class q extends re{constructor(t){super(t)}toRequestBody(){return this.constructor.metaData.form.reduce((t,{key:e})=>["contractStartedAt","contractEndedAt"].includes(e)?{...t,[e]:V(this[e]).valueOf()}:{...t,[e]:this[e]},{})}toPutRequestBody(){return this.constructor.metaData.form.reduce((t,{key:e})=>["contractStartedAt","contractEndedAt"].includes(e)?{...t,[e]:V(this[e]).valueOf()}:{...t,[e]:this[e]},{})}}F(q,"metaData",ye);const Ae={__name:"index",setup(i){const{page:t,size:e,totalPage:r,loading:n,items:d,addQuery:m}=J(f),_=q.toColumnHeaders();async function f({companyName:a,p_status:s,i_status:p}){var A;const h={page:t.value,size:e.value};a&&(h.name=a),s&&(h.partnershipStatus=s),p&&(h.installationStatus=p),n.value=!0,d.value.length=0;const w=await k("partner").getPage(h),{result:c,body:C}=w||{};c.httpStatus===200&&(n.value=!1,(A=C==null?void 0:C.data)==null||A.forEach(S=>d.value.push(new q(S))),r.value=(C==null?void 0:C.totalPage)||0)}async function u({item:a,column:s,newValue:p}){var w;if(d.value.findIndex(c=>c.id===a.id)!==-1){if(s.type==="link")return m({view:"detail",id:a.idx});if(s.type==="dropdown"){const c=await k("partner").partialUpdate(a.idx,{[s.key]:p});((w=c==null?void 0:c.result)==null?void 0:w.httpStatus)===200&&(a[s.key]=p)}}}return(a,s)=>(v(),b(o(X),{page:o(t),items:o(d),loading:o(n),totalPage:o(r),columnHeaders:o(_),"onClick:cell":u,"onClick:page":s[0]||(s[0]=p=>o(m)({page:p}))},{header:M(()=>[l(_e)]),toolbar:M(()=>[l(we)]),alert:M(()=>[l(De)]),_:1},8,["page","items","loading","totalPage","columnHeaders"]))}},xe=L(Ae,[["__scopeId","data-v-9e28a6a0"]]),Ie={__name:"index",setup(i){return(t,e)=>(v(),b(o(H),null,{title:M(()=>[l(le)]),content:M(()=>[l(o(xe))]),_:1}))}};function U(i){const t=q.toFormFields(),{values:e,errors:r,changeRule:n,getFields:d,validateFields:m}=ae(t),_=u=>!u||Q(u)?"":"올바른 이메일 형식이 아닙니다.";return n("partnerManagerEmail",_),n("operationManagerEmail",_),{fields:d([],i),values:e,errors:r,validateFields:m}}const Se={__name:"Create",setup(i){const{showAlert:t}=x("alert"),{routeList:e}=I(),{fields:r,values:n,errors:d,validateFields:m}=U(),_=x("methods");return _.cancel=()=>j(n)?t("cancel"):e(),_.submit=()=>{if(!m())return t("missing");t("regist",async()=>{var a;const f=new q({...n,...n.addressInfo}),u=await k("partner").create(f.toRequestBody());t(((a=u==null?void 0:u.result)==null?void 0:a.httpStatus)===200?"regist_complete":"missing")})},(f,u)=>(v(),b(R,{fields:o(r),values:o(n),errors:o(d)},null,8,["fields","values","errors"]))}},qe={__name:"Detail",setup(i){const{showAlert:t}=x("alert"),e=x("footer-props"),{getQuery:r,routeList:n}=I(),{fields:d,values:m,errors:_,validateFields:f}=U(!0),u=["name","contractStartedAt"],a=D(()=>d.map(w=>w.map(c=>({...c,disabled:u.includes(c.key)})))),s=N(!1),p=N({});O(async()=>{var E;s.value=!0,e.disabledSubmit=!0;const w=await k("partner").getDetail((E=r())==null?void 0:E.id),{result:c,body:C}=w||{};if(c.httpStatus!==200)return;const A=V(C.contractStartedAt).format("YYYY-MM-DD"),S=V(C.contractEndedAt).format("YYYY-MM-DD");p.value=W(m,{...C,contractStartedAt:A,contractEndedAt:S}),s.value=!1}),P(m,()=>e.disabledSubmit=!K(p.value,m));const h=x("methods");return h.cancel=()=>e.disabledSubmit?n():t("put_cancel"),h.submit=()=>{if(!f())return t("missing");t("put",async()=>{var S,E;const{name:w,contractStartedAt:c}=p.value,C=new q({...m,...m.addressInfo,name:w,contractStartedAt:c}),A=await k("partner").update((S=r())==null?void 0:S.id,C.toPutRequestBody());((E=A==null?void 0:A.result)==null?void 0:E.httpStatus)===200&&t("put_complete")})},(w,c)=>(v(),b(R,{isDetail:"",fields:a.value,values:o(m),errors:o(_)},null,8,["fields","values","errors"]))}},Ee={class:"flex justify-between align-center"},ke={class:"button-group"},Le={__name:"Footer",props:{isDetail:{type:Boolean,default:!1}},setup(i){const t=x("methods"),e=x("footer-props");return(r,n)=>{const d=y("Button");return v(),$("div",Ee,[n[0]||(n[0]=g("div",null,null,-1)),g("div",ke,[l(d,{outlined:"",width:55,title:"취소",size:"medium",color:"neutral",onClick:o(t).cancel},null,8,["onClick"]),l(d,{size:"medium",color:"primary",width:55,title:i.isDetail?"수정":"등록",disabled:o(e).disabledSubmit,onClick:o(t).submit},null,8,["title","disabled","onClick"])])])}}},Ne=L(Le,[["__scopeId","data-v-3c0a400b"]]),Ve={__name:"Alert",setup(i){const{alertObj:t}=x("alert"),{routeList:e}=I(),r=D(()=>t.type),n=D(()=>r.value==="regist"?"제휴처를 등록하시겠습니까?":r.value==="regist_complete"?"제휴처 등록 완료":r.value==="cancel"?"제휴처 등록을 취소하시겠습니까?":r.value==="missing"?"잘못된 정보 또는 누락된 정보가 있습니다.":r.value==="put"?"제휴처 정보를 수정하시겠습니까?":r.value==="put_complete"?"제휴처 정보 수정 완료":r.value==="put_cancel"?"제휴처 수정을 취소하시겠습니까?":""),d=D(()=>r.value==="regist_complete"?"제휴처 등록이 완료됐습니다.":r.value==="cancel"?`제휴처 등록을 취소할 경우,
입력한 정보가 삭제됩니다.`:r.value==="missing"?"입력한 정보를 다시 한번 확인해주세요.":r.value==="put"?"정확한 정보로 입력했는지 확인하셨나요?":r.value==="put_complete"?"제휴처 정보 수정이 완료됐습니다.":r.value==="put_cancel"?`수정을 취소하면,
입력한 정보가 삭제됩니다.`:""),m=D(()=>r.value==="missing"),_=D(()=>["regist","cancel","put","put_cancel"].includes(r.value)),f=D(()=>r.value!=="regist"),u=D(()=>({cancel:e,regist:t["click:confirm"],regist_complete:e,delete:t["click:confirm"],delete_complete:e,put:t["click:confirm"],put_complete:e,put_cancel:e}));return(a,s)=>{const p=y("Alert",!0);return v(),b(p,{modelValue:o(t).show,"onUpdate:modelValue":s[0]||(s[0]=h=>o(t).show=h),title:n.value,error:m.value,message:d.value,showCancel:_.value,confirmClickClose:f.value,"onClick:confirm":u.value[r.value]},null,8,["modelValue","title","error","message","showCancel","confirmClickClose","onClick:confirm"])}}},Pe={__name:"index",setup(i){const{isDetail:t}=I();return(e,r)=>(v(),b(o(oe),{title:o(t)?"제휴처 상세 정보":"제휴처 등록"},{content:M(()=>[o(t)?(v(),b(qe,{key:0})):(v(),b(Se,{key:1}))]),footer:M(()=>[l(Ne,{isDetail:o(t)},null,8,["isDetail"])]),alert:M(()=>[l(Ve)]),_:1},8,["title"]))}},Qe={__name:"index",setup(i){const{getQuery:t}=I();return(e,r)=>{var n;return["add","detail"].includes((n=o(t)())==null?void 0:n.view)?(v(),b(o(Pe),{key:0})):(v(),b(o(Ie),{key:1}))}}};export{Qe as default};
