import{o as e,c as n,w as t,T as i,r as a,a as c,b as s,d as r,e as d,f as o,g as l,h as u,p,i as m,j as v,F as f,k as h,l as R,m as g,n as y,t as I,q as k,s as x,u as C,v as w,x as V}from"./vendor.d8831591.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const i=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,c)=>{const s=new URL(e,i);if(self[n].moduleMap[s])return t(self[n].moduleMap[s]);const r=new Blob([`import * as m from '${s}';`,`${n}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){c(new Error(`Failed to import: ${e}`)),a(d)},onload(){t(self[n].moduleMap[s]),a(d)}});document.head.appendChild(d)})),self[n].moduleMap={}}}("/vue-recipe-box/assets/");const L={};L.render=function(c,s){return e(),n(i,{tag:"ul",name:"list"},{default:t((()=>[a(c.$slots,"default")])),_:3})};const _=c([{name:"RecipeName1",ingredients:["ingredient11"],directions:["directions11"]},{name:"RecipeName2",ingredients:["ingredient21","ingredient22"],directions:["directions21","directions22"]},{name:"RecipeName3",ingredients:["ingredient31","ingredient32","ingredient33"],directions:["directions31","directions32","directions33"]}]),T=s({}),N=r((()=>0===_.length));function q(){_.push({name:"Recipe",ingredients:[],directions:[]}),U("Recipe")}function D(e,n,t){const i=_.filter((e=>e.name===T.value.name))[0];"name"===e?i.name=t:i[e][n]=t}function b(){T.value.ingredients.push("")}function S(){T.value.directions.push("")}function j(e){const n=e.target;n&&D("name",0,n.value)}function E(e,n){const t=n.target;t&&D("ingredients",e,t.value)}function P(e,n){const t=n.target;t&&D("directions",e,t.value)}function U(e){T.value=_.filter((n=>n.name===e))[0]}function $(e){const n=_.indexOf(e||T.value);_.splice(n,1),T.value={}}function F(e){T.value.ingredients.splice(e,1)}function M(e){T.value.directions.splice(e,1)}function O(){return{recipes:_,selectedRecipe:T,isRecipeListEmpty:N,addRecipe:q,addIngredient:b,addDirection:S,updateName:j,updateRecipe:D,updateIngredients:E,updateDirection:P,updateSelectedRecipe:U,trashRecipe:$,trashIngredient:F,trashDirection:M}}var A=d({components:{TrashIcon:o},props:{recipe:Object},setup(e){const{trashRecipe:n}=O();return{trash:()=>n(e.recipe)}}});A.render=function(t,i,a,c,s,r){const d=l("TrashIcon");return e(),n(d,{class:"icon",onClick:t.trash},null,8,["onClick"])};var B=d({components:{ListTransition:L,PlusCircleIcon:u,TrashRecipe:A},setup(){const{recipes:e,isRecipeListEmpty:n,addRecipe:t,updateSelectedRecipe:i}=O();return{recipes:e||[],isEmpty:n,addRecipe:t,updateSelectedRecipe:i}}});const z=R();p("data-v-48d9dcf5");const G={class:"default-container"};m();const H=z(((t,i,a,c,s,r)=>{const d=l("PlusCircleIcon"),o=l("TrashRecipe"),u=l("ListTransition");return e(),n("div",G,[v(d,{class:"icon plus-circle-icon",onClick:t.addRecipe},null,8,["onClick"]),v(u,null,{default:z((()=>[(e(!0),n(f,null,h(t.recipes,(i=>(e(),n("li",{class:"list-item",key:i.name,onClick:g((e=>t.updateSelectedRecipe(i.name)),["self"])},[y(I(i.name)+" ",1),v(o,{recipe:i},null,8,["recipe"])],8,["onClick"])))),128))])),_:1})])}));B.render=H,B.__scopeId="data-v-48d9dcf5";var J=d({components:{TrashIcon:o},props:{type:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){const{type:n,index:t}=k(e),{trashIngredient:i,trashDirection:a}=O();return{trash:function(){"ingredient"===n.value?i(t.value):"direction"===n.value&&a(t.value)}}}});J.render=function(t,i,a,c,s,r){const d=l("TrashIcon");return e(),n(d,{class:"icon",onClick:t.trash},null,8,["onClick"])};var K=d({components:{PlusCircleIcon:u,TrashValue:J,ListTransition:L},props:{type:{type:String,required:!0},header:{type:String,required:!0},items:{type:Array,required:!0},mode:{type:Boolean,required:!1},addValue:{type:Function,required:!0},updateValue:{type:Function,required:!0}},setup(e){const{type:n,header:t,items:i,mode:a,addValue:c,updateValue:s}=k(e);return{type:n,header:t,items:i||[],mode:a,addValue:c,updateValue:s}}});const Q=R();p("data-v-7d084022");const W={class:"header"};m();const X=Q(((t,i,a,c,s,r)=>{const d=l("TrashValue"),o=l("list-transition"),u=l("PlusCircleIcon");return e(),n("div",null,[v("h3",W,I(t.header),1),v(o,null,{default:Q((()=>[(e(!0),n(f,null,h(t.items,((i,a)=>(e(),n("li",{key:a,class:"list-item"},[t.mode?(e(),n("input",{key:0,type:"text",value:i,onInput:g((e=>t.updateValue(a,e)),["self"])},null,40,["value","onInput"])):x("",!0),t.mode?(e(),n(d,{key:1,type:t.type,index:a},null,8,["type","index"])):(e(),n(f,{key:2},[y(I(i),1)],64))])))),128))])),_:1}),t.mode?(e(),n(u,{key:0,class:"icon plus-circle-icon",onClick:i[1]||(i[1]=()=>t.addValue())})):x("",!0)])}));K.render=X,K.__scopeId="data-v-7d084022";var Y=d({props:{name:{type:String,required:!0},mode:{type:Boolean,required:!1}},emits:["update:name"],setup(e){const{name:n,mode:t}=k(e),{updateName:i}=O();return{name:n,mode:t,updateName:i}}});const Z={class:"flex space-x-3"},ee=v("label",{for:"recipeName"},"Recipe:",-1),ne={key:1,class:"text-3xl"};Y.render=function(t,i,c,s,r,d){return e(),n("div",Z,[t.mode?(e(),n(f,{key:0},[ee,v("input",{type:"text",name:"recipeName",value:t.name,onChange:i[1]||(i[1]=g((e=>t.updateName(e)),["self"]))},null,40,["value"])],64)):(e(),n("h2",ne,"Recipe: "+I(t.name),1)),a(t.$slots,"default")])};var te=d({components:{PencilAltIcon:C,RecipeViewList:K,RecipeViewName:Y,TrashRecipe:A},emits:["delete","updateRecipe"],setup(){const{selectedRecipe:e,addIngredient:n,addDirection:t,updateIngredients:i,updateDirection:a}=O(),c=s(!1);return{recipe:e,mode:c,switchEdit:function(){c.value=!c.value},addIngredient:n,addDirection:t,updateIngredients:i,updateDirection:a}}});const ie={key:0,class:"default-container recipe-view"},ae={key:1,class:"default-container"},ce=v("h2",{class:"italic text-3xl"},"No recipe selected",-1);te.render=function(i,a,c,s,r,d){const o=l("PencilAltIcon"),u=l("TrashRecipe"),p=l("RecipeViewName"),m=l("RecipeViewList");return e(),n(w,{name:"fade",mode:"out-in"},{default:t((()=>[i.recipe&&i.recipe.name?(e(),n("div",ie,[v(p,{name:i.recipe.name,"onUpdate:name":a[1]||(a[1]=e=>i.recipe.name=e),mode:i.mode,class:"md:col-span-2"},{default:t((()=>[v(o,{class:"icon",onClick:i.switchEdit},null,8,["onClick"]),v(u,{recipe:i.recipe},null,8,["recipe"])])),_:1},8,["name","mode"]),v(m,{header:"Ingredients",type:"ingredient",items:i.recipe.ingredients,mode:i.mode,"add-value":i.addIngredient,"update-value":i.updateIngredients},null,8,["items","mode","add-value","update-value"]),v(m,{header:"Directions",type:"direction",items:i.recipe.directions,mode:i.mode,"add-value":i.addDirection,"update-value":i.updateDirection},null,8,["items","mode","add-value","update-value"])])):(e(),n("div",ae,[ce]))])),_:1})};var se=d({name:"App",components:{RecipeList:B,RecipeView:te}});const re=R();p("data-v-0c8e8a9e");const de={class:"app"},oe=v("h1",{class:"header"},"Recipe box",-1);m();const le=re(((t,i,a,c,s,r)=>{const d=l("RecipeList"),o=l("RecipeView");return e(),n("div",de,[oe,v(d),v(o)])}));se.render=le,se.__scopeId="data-v-0c8e8a9e";V(se).mount("#app");