var C=Object.defineProperty;var b=(o,t,e)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var I=(o,t,e)=>b(o,typeof t!="symbol"?t+"":t,e);import{u as R,C as S,L as $}from"./Content-mgkzddHy.js";import{_ as h,v as i,p as F,o as c,c as m,r as q,a5 as w,u as s,e as g,d as l,a as B,f as N,M as D,n as T,F as M,b as v,h as E,t as V}from"./index-BGi8GpGv.js";import{c as z,D as L}from"./metaHelper-B8_iLp7n.js";import{E as O}from"./ErrorNoti-CwBLMl3f.js";import j from"./Input-Dlro03g1.js";import{u as A}from"./useAuthRouter-Ba-Q8nO5.js";import{F as P}from"./FooterLink-CPhSwjZC.js";import"./useForm-D-1CqejB.js";const G={companyName:{form:{required:!0,autoFocus:!0,component:"input",label:"회사명",placeholder:"회사명을 입력해 주세요.",errorMessages:{error:"회사명을 확인해 주세요.",require:"회사명은 필수 값 입니다."}}},name:{form:{required:!0,component:"input",label:"이름",placeholder:"이름을 입력해 주세요.",errorMessages:{error:"이름을 확인해 주세요.",require:"이름은 필수 값 입니다."}}},phone:{form:{required:!0,component:"input",label:"휴대폰 번호",placeholder:"휴대폰 번호를 입력해 주세요.",errorMessages:{error:"휴대폰 번호를 확인해 주세요.",require:"휴대폰 번호는 필수 값 입니다."}}}},H=[],J=["companyName","name","phone"],K=z(G,H,J);class k extends L{constructor(t){super(t)}toRequestBody(){return this.constructor.metaData.form.reduce((t,{key:e})=>({...t,[e]:this[e]}),{})}}I(k,"metaData",K);function Q(){return R(k.toFormFields())}const U={__name:"SuccessResult",setup(o){const t=i("footer-props"),e=F(()=>t==null?void 0:t.recoveryId);return(r,a)=>(c(),m(j,{readonly:"",class:"success","model-value":`귀하의 아이디는 ${e.value}입니다.`},null,8,["model-value"]))}},W=h(U,[["__scopeId","data-v-1a919a54"]]),X={key:1,class:"content-wrapper"},Y={__name:"Content",setup(o){const t=i("methods"),e=i("footer-props"),{fields:r,values:a,errors:_,preventRules:x,setInputError:u,validateFields:p}=Q(),d=q(0);return t.submit=async()=>{var f,y;if(!p())return;x.value=!0,e.loading=!0;const n=await w({...a});if(((f=n==null?void 0:n.result)==null?void 0:f.httpStatus)!==200)return d.value+=1,u();e.loading=!1,e.isIdRecoverySuccess=!0,e.recoveryId=(y=n==null?void 0:n.body)==null?void 0:y.email},(n,f)=>s(e).isIdRecoverySuccess?(c(),m(W,{key:0})):(c(),g("div",X,[l(S,{fields:s(r),values:s(a),errors:s(_)},null,8,["fields","values","errors"]),l(O,{show:d.value>=5},null,8,["show"])]))}},Z=h(Y,[["__scopeId","data-v-d7bc1893"]]),ee={class:"footer-wrapper"},te={__name:"Footer",setup(o){const t=i("methods"),e=i("footer-props"),r=F(()=>e.isIdRecoverySuccess),{routeSignIn:a,routeFindPassword:_}=A();return(x,u)=>{const p=B("Button");return c(),g(M,null,[N("div",ee,[r.value?(c(),m(p,{key:0,outlined:"",size:"x-large",title:"비밀번호 찾기",onClick:s(_)},null,8,["onClick"])):D("",!0),l(p,{size:"x-large",title:r.value?"로그인":"아이디 찾기",loading:s(e).loading,onClick:u[0]||(u[0]=d=>r.value?s(a)():s(t).submit())},null,8,["title","loading"])]),l(P,{class:T({success:r.value}),promptText:r.value?"이메일이 기억나지 않는다면":"아이디가 기억났다면?",linkText:r.value?"run@did.io로 문의해 주세요.":"로그인 하기","onClick:link":u[1]||(u[1]=d=>r.value?void 0:s(a)())},null,8,["class","promptText","linkText"])],64)}}},oe=h(te,[["__scopeId","data-v-f8ca6696"]]),de={__name:"index",setup(o){return(t,e)=>(c(),m(s($),null,{title:v(()=>e[0]||(e[0]=[E(V("아이디 찾기"))])),content:v(()=>[l(Z)]),footer:v(()=>[l(oe)]),_:1}))}};export{de as default};
