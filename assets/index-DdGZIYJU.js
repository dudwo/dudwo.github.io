import{u as y}from"./useAddress-BjUllzne.js";import{_ as g,I as u,C as i,r as B,a as m,o as f,e as k,f as c,d as v,u as p,c as I,M as w}from"./index-BGi8GpGv.js";const x={class:"address-container"},D={class:"address-wrapper"},M={__name:"index",props:u({loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:String,default:"주소 (최신 사업자 등록증 주소)"},rules:{type:Object,default:()=>({})}},{modelValue:{},modelModifiers:{},error:{},errorModifiers:{}}),emits:u(["setRef","keydown:enter"],["update:modelValue","update:error"]),setup(d,{emit:b}){const a=i(d,"modelValue"),s=i(d,"error"),r=b,o=B(null),{openAPI:t}=y(o);return(R,e)=>{const n=m("Input"),V=m("Button");return f(),k("div",x,[c("div",D,[v(n,{required:"",label:d.label,loading:d.loading,disabled:d.disabled,useAppendIcon:!1,class:"address-input",placeholder:"예) 판교역로 166, 분당 주공, 백현동 532",rules:d.rules.address,modelValue:a.value.address,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.address=l),error:s.value.address,"onUpdate:error":e[1]||(e[1]=l=>s.value.address=l),onSetRef:e[2]||(e[2]=l=>r("setRef",l)),"onKeydown:enter":e[3]||(e[3]=l=>p(t)(a.value))},null,8,["label","loading","disabled","rules","modelValue","error"]),d.disabled?w("",!0):(f(),I(V,{key:0,size:"medium",class:"address-search-btn",outlined:"",title:"검색",color:s.value.address?"red":"primary",onClick:e[4]||(e[4]=l=>p(t)(a.value))},null,8,["color"]))]),v(n,{required:"",loading:d.loading,disabled:d.disabled,label:"상세 주소",class:"detail-input",placeholder:"상세 주소를 입력해 주세요.",rules:d.rules.addressDetail,modelValue:a.value.addressDetail,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.addressDetail=l),error:s.value.addressDetail,"onUpdate:error":e[6]||(e[6]=l=>s.value.addressDetail=l),onSetRef:e[7]||(e[7]=l=>o.value=l),"onKeydown:enter":e[8]||(e[8]=l=>r("keydown:enter"))},null,8,["loading","disabled","rules","modelValue","error"])])}}},A=g(M,[["__scopeId","data-v-5ed2e969"]]);export{A as default};
