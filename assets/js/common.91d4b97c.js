(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8592],{3758:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return a}})},9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return Ce},kt:function(){return Me}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){var t={exports:{}};return e(t,t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof a&&a)||function(){return this}()||Function("return this")(),u=function(e){try{return!!e()}catch(e){return!0}},c=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,f={f:m&&!s.call({1:2},1)?function(e){var t=m(this,e);return!!t&&t.enumerable}:s},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,g="".split,h=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,E=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return h(E(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,F=function(e,t){return w.call(e,t)},k=o.document,P=y(k)&&y(k.createElement),S=!c&&!u((function(){return 7!=Object.defineProperty(P?k.createElement("div"):{},"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,T={f:c?x:function(e,t){if(e=v(e),t=b(t,!0),S)try{return x(e,t)}catch(e){}if(F(e,t))return d(!f.f.call(e,t),e[t])}},O=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},Z=Object.defineProperty,L={f:c?Z:function(e,t,n){if(O(e),t=b(t,!0),O(n),S)try{return Z(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},C=c?function(e,t,n){return L.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},_=function(e,t){try{C(o,e,t)}catch(l){o[e]=t}return t},j=o["__core-js_shared__"]||_("__core-js_shared__",{}),M=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return M.call(e)});var A,N,I,W=j.inspectSource,B=o.WeakMap,R="function"==typeof B&&/native code/.test(W(B)),U=l((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),D=0,V=Math.random(),q=U("keys"),G={};if(R){var z=j.state||(j.state=new(0,o.WeakMap)),Y=z.get,J=z.has,$=z.set;A=function(e,t){return t.facade=e,$.call(z,e,t),t},N=function(e){return Y.call(z,e)||{}},I=function(e){return J.call(z,e)}}else{var H=q.state||(q.state="Symbol("+String("state")+")_"+(++D+V).toString(36));G[H]=!0,A=function(e,t){return t.facade=e,C(e,H,t),t},N=function(e){return F(e,H)?e[H]:{}},I=function(e){return F(e,H)}}var K={set:A,get:N,has:I,enforce:function(e){return I(e)?N(e):A(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=N(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Q=l((function(e){var t=K.get,n=K.enforce,r=String(String).split("String");(e.exports=function(e,t,a,l){var i,u=!!l&&!!l.unsafe,c=!!l&&!!l.enumerable,s=!!l&&!!l.noTargetGet;"function"==typeof a&&("string"!=typeof t||F(a,"name")||C(a,"name",t),(i=n(a)).source||(i.source=r.join("string"==typeof t?t:""))),e!==o?(u?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=a:C(e,t,a)):c?e[t]=a:_(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||W(this)}))})),X=o,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,le=Math.max,ie=Math.min,oe=function(e){return function(t,n,r){var a,l,i=v(t),o=(a=i.length)>0?ae(re(a),9007199254740991):0,u=function(e,t){var n=re(e);return n<0?le(n+t,0):ie(n,t)}(r,o);if(e&&n!=n){for(;o>u;)if((l=i[u++])!=l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===n)return e||u||0;return!e&&-1}},ue=(oe(!0),oe(!1)),ce=function(e,t){var n,r=v(e),a=0,l=[];for(n in r)!F(G,n)&&F(r,n)&&l.push(n);for(;t.length>a;)F(r,n=t[a++])&&(~ue(l,n)||l.push(n));return l},se=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=se.concat("length","prototype"),fe={f:Object.getOwnPropertyNames||function(e){return ce(e,me)}},de={f:Object.getOwnPropertySymbols},pe=function(e,t){return arguments.length<2?ee(X[e])||ee(o[e]):X[e]&&X[e][t]||o[e]&&o[e][t]}("Reflect","ownKeys")||function(e){var t=fe.f(O(e)),n=de.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=pe(t),r=L.f,a=T.f,l=0;l<n.length;l++){var i=n[l];F(e,i)||r(e,i,a(t,i))}},he=/#|\.prototype\./,Ee=function(e,t){var n=ye[ve(e)];return n==we||n!=be&&("function"==typeof t?u(t):!!t)},ve=Ee.normalize=function(e){return String(e).replace(he,".").toLowerCase()},ye=Ee.data={},be=Ee.NATIVE="N",we=Ee.POLYFILL="P",Fe=Ee,ke=T.f,Pe=Object.keys||function(e){return ce(e,se)},Se=function(e){return Object(E(e))},xe=Object.assign,Te=Object.defineProperty,Oe=!xe||u((function(){if(c&&1!==xe({b:1},xe(Te({},"a",{enumerable:!0,get:function(){Te(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=xe({},e)[n]||Pe(xe({},t)).join("")!=r}))?function(e,t){for(var n=Se(e),r=arguments.length,a=1,l=de.f,i=f.f;r>a;)for(var o,u=h(arguments[a++]),s=l?Pe(u).concat(l(u)):Pe(u),m=s.length,d=0;m>d;)o=s[d++],c&&!i.call(u,o)||(n[o]=u[o]);return n}:xe;!function(e,t){var n,r,a,l,i,u=e.target,c=e.global,s=e.stat;if(n=c?o:s?o[u]||_(u,{}):(o[u]||{}).prototype)for(r in t){if(l=t[r],a=e.noTargetGet?(i=ke(n,r))&&i.value:n[r],!Fe(c?r:u+(s?".":"#")+r,e.forced)&&void 0!==a){if(typeof l==typeof a)continue;ge(l,a)}(e.sham||a&&a.sham)&&C(l,"sham",!0),Q(n,r,l,e)}}({target:"Object",stat:!0,forced:Object.assign!==Oe},{assign:Oe});const Ze=r.createContext({}),Le=e=>{const t=r.useContext(Ze);return"function"==typeof e?e(t):Object.assign({},t,e)},Ce=({components:e,children:t,disableParentContext:n})=>{let a=Le(e);return n&&(a=e),r.createElement(Ze.Provider,{value:a},t)},_e={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},je=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:l,parentName:i}=e,o=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=Le(n);return r.createElement(u[`${i}.${a}`]||u[a]||_e[a]||l,n?Object.assign({ref:t},o,{components:n}):Object.assign({ref:t},o))}));function Me(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const l=n.length,i=new Array(l);i[0]=je;const o={};for(let e in t)hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(let e=2;e<l;e++)i[e]=n[e];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}je.displayName="MDXCreateElement",Me.Fragment=r.Fragment},254:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2784),a=n(5759);function l(){return r.createElement("a",{className:a.Z.logo,href:"https://www.typescriptlang.org/",target:"_blank"},r.createElement("svg",{fill:"none",version:"1.1",viewBox:"0 0 512 512"},r.createElement("rect",{fill:"var(--logo-color-bg)",width:"512",height:"512",rx:"0",id:"rect2",x:"0",y:"0",ry:"0"}),r.createElement("path",{d:"m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z",clipRule:"evenodd",fill:"var(--logo-color-fill)",fillRule:"evenodd",id:"path4"})))}var i=n(6277);function o(e){var t=e.definitions,n=e.children;return r.createElement("div",{className:a.Z.badges},t.filter((function(e){return!!e})).map((function(e){var t=e.label,n=e.title;return r.createElement("div",{key:t,title:n||t,className:(0,i.Z)(a.Z.flagBox,a.Z["flagBox--"+t])},t)})),n,r.createElement("div",{style:{flex:1}}),r.createElement(l,null))}},2123:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2784),a=n(8828),l=n(6277),i=n(5759),o=n(4160),u=n(1484),c=n(254),s=n(9634);function m(e){var t=e.reflection,n=(0,s.Z)(),m=JSON.parse(decodeURIComponent(t)),f=m.kind===a.WF.Property||m.kind===a.WF.Method||m.kind===a.WF.Parameter,d=m.flags.isOptional||void 0!==m.defaultValue;return r.createElement(r.Fragment,null,r.createElement(c.Z,{definitions:[m.flags.isStatic&&{label:"static"},f&&d&&{label:"optional"},f&&!d&&{label:"required"}]}),r.createElement("div",{className:(0,l.Z)(i.Z.container,"margin-bottom--md")},r.createElement("div",{className:(0,l.Z)("padding--sm",i.Z.typeContainer)},(0,o.Z)(m,new u.Z((function(e){return n[e]}))))))}},1473:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2784),a=n(6277),l=n(5759),i=n(4160),o=n(1484),u=n(9634),c=n(254),s={"@native-html/transient-render-engine":"https://github.com/native-html/core/tree/master/packages/transient-render-engine","@native-html/css-processor":"https://github.com/native-html/core/tree/master/packages/css-processor",domhandler:"https://github.com/fb55/domhandler"};function m(e){var t=function(e){var t=e.split("/");try{return t.splice(0,1),t[0].startsWith("@")?t[0]+"/"+t[1]:t[0]}catch(n){console.error(n)}return""}(e.source.fileName);if(!(t in s))throw new Error(t+" is not registered as third party");return r.createElement("a",{className:l.Z.sourceBox,href:s[t]},r.createElement("code",null,t))}function f(e){var t,n=e.reflectionId,s=e.version,f=(0,u.Z)(),d=f[n],p=d.flags.isExternal,g=null==(t=d.sources)?void 0:t[0];return r.createElement(r.Fragment,null,r.createElement(c.Z,{definitions:[p&&{label:"reexport",title:"This definition is reexported from a third party library."},!p&&{label:"export",title:"This definition is an export from react-native-render-html v"+s+"."}]},!p&&g&&r.createElement("a",{className:l.Z.sourceBox,href:"https://github.com/meliorence/react-native-render-html/tree/v"+s+"/"+g.fileName+"#L"+g.line},r.createElement("code",null,"react-native-render-html/\u2026/"+g.fileName.split("/").pop()+"#L"+g.line)),p&&g&&r.createElement(m,{source:g})),r.createElement("div",{className:(0,a.Z)(l.Z.container,"margin-bottom--md")},r.createElement("div",{className:(0,a.Z)("padding--sm",l.Z.typeContainer)},(0,i.Z)(d,new o.Z((function(e){return f[e]}))))))}},1484:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(){function e(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=0),this.resolveReflection=e,this.resolveMembersLinks=t,this.resolveTypeParamsLinks=n,this.indent=r}var t=e.prototype;return t.withIndent=function(){return new e(this.resolveReflection,this.resolveMembersLinks,this.resolveTypeParamsLinks,this.indent+2)},t.withMemberLinks=function(){return new e(this.resolveReflection,!0,this.resolveTypeParamsLinks,this.indent)},t.withoutMemberLinks=function(){return new e(this.resolveReflection,!1,this.resolveTypeParamsLinks,this.indent)},t.withTypeParamsLinks=function(){return new e(this.resolveReflection,this.resolveMembersLinks,!0,this.indent)},e}()},4160:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(3758),a=n(2784),l=n(8828),i=n(5759),o=n(6277);function u(e){var t=e.children,n=e.title;return a.createElement("code",{title:n,className:(0,o.Z)(i.Z["token--punctuation"],i.Z.token)},t)}function c(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--plain"],i.Z.token)},t)}function s(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--type"],i.Z.token)},t)}function m(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--primitive"],i.Z.token)},t)}function f(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--literal"],i.Z.token)},t)}function d(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--attr-name"],i.Z.token)},t)}function p(e){var t=e.children;return a.createElement("code",{className:(0,o.Z)(i.Z["token--keyword"],i.Z.token)},t)}function g(e){for(var t=e.indent,n=[],r=0;r<t;r++)n.push(a.createElement(a.Fragment,null,"\xa0"));return a.createElement("code",null,n)}var h=n(1510);function E(e,t){var n=!1,r=t;switch(e.type){case"reference":var l=e,i=l.name,o="id"in l&&!!t.resolveReflection(l.id);o&&(i=t.resolveReflection(l.id).name);var v=a.createElement(s,null,i);return a.createElement(a.Fragment,null,o?a.createElement(h.Z,{href:"/api/"+i.toLowerCase()},v):v,function(e,t){return e?a.createElement(a.Fragment,null,a.createElement(u,null,"<"),e.reduce((function(e,n){return a.createElement(a.Fragment,null,e,e&&a.createElement(u,null,", "),E(n,t))}),null),a.createElement(u,null,">")):null}(l.typeArguments,t));case"intrinsic":return a.createElement(m,null,e.name);case"union":var y=e;return n=y.types.length>2,y.types.map((function(e){return E(e,t)})).reduce((function(e,r){return a.createElement(a.Fragment,null,e,n&&a.createElement("br",null),n&&a.createElement(g,{indent:t.indent+2}),a.createElement(u,{title:"or"},!n&&" ","| "),r)}));case"intersection":var b=e;return n=b.types.length>2,r=n?t.withIndent():t,b.types.map((function(e){return E(e,r)})).reduce((function(e,t){return a.createElement(a.Fragment,null,e,n&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(g,{indent:r.indent})),a.createElement(u,{title:"and"},!n&&" ","& "),t)}));case"conditional":var w=e;return"intrinsic"===w.falseType.type&&"never"===w.falseType.name?E(w.trueType,t):a.createElement(a.Fragment,null,E(w.trueType,t),a.createElement(u,{title:"or"}," | "),E(w.falseType,t));case"mapped":var F=e;return r=t.withIndent(),a.createElement(a.Fragment,null,a.createElement(u,null,"{"),a.createElement("br",null),a.createElement(g,{indent:r.indent}),a.createElement(u,null,"["),a.createElement(d,null,F.parameter),a.createElement(u,null,": "),E(F.parameterType,r),a.createElement(u,null,"]"),a.createElement(u,null,": "),E(F.templateType,r),a.createElement(g,{indent:t.indent}),a.createElement("br",null),a.createElement(g,{indent:t.indent}),a.createElement(u,null,"}"));case"literal":var k=e;switch(typeof k.value){case"bigint":case"boolean":case"number":return a.createElement(f,null,String(k.value));case"undefined":return a.createElement(p,null,String(k.value));case"object":if(null===k.value)return a.createElement(p,null,String(k.value));break;case"string":return a.createElement(f,null,JSON.stringify(k.value))}throw console.warn("Unhandled literal type",k),new Error("Unhandled literal "+k.value);case"array":var P=e;return a.createElement(a.Fragment,null,a.createElement(c,null,"Array"),a.createElement(u,null,"<"),E(P.elementType,t),a.createElement(u,null,">"));case"reflection":return Z(e.declaration,t.withoutMemberLinks());case"typeOperator":var S=e;return a.createElement(a.Fragment,null,a.createElement(p,null,S.operator),a.createElement("code",null," "),E(S.target,t));case"indexedAccess":var x=e;return a.createElement(a.Fragment,null,E(x.objectType,t),a.createElement(u,null,"["),E(x.indexType,t),a.createElement(u,null,"]"));case"query":var T=e;return a.createElement(a.Fragment,null,a.createElement(p,null,"typeof"),a.createElement("code",null," "),E(T.queryType,t));case"predicate":var O=e;return a.createElement(a.Fragment,null,O.asserts&&a.createElement(p,null,"asserts "),a.createElement(d,null,O.name),a.createElement(p,null," is "),O.targetType&&E(O.targetType,t));default:throw console.warn("Unhandled type",e),new Error("Unhandled type "+e.type)}}function v(e,t,n){var r;return null==(r=e.parameters)?void 0:r.reduce((function(e,r){var l="__namedParameters"===r.name?"props":r.name,i=a.createElement(d,null,"__namedParameters"===r.name?"props":r.name),o=r.flags.isOptional;return a.createElement(a.Fragment,null,e,e&&a.createElement(u,null,","),e&&t?a.createElement("br",null):null,t&&a.createElement(g,{indent:n.indent}),e&&(t?null:a.createElement("code",null," ")),n.resolveMembersLinks?a.createElement("a",{href:"#"+l},i):i,o&&a.createElement(u,null,"?"),a.createElement(u,null,": "),E(r.type,n),"string"==typeof r.defaultValue&&a.createElement(a.Fragment,null,a.createElement(u,null," = "),a.createElement(f,null,r.defaultValue)))}),null)}function y(e,t,n,r){return function(l,i){return a.createElement(a.Fragment,null,l,l&&e&&a.createElement(u,null,e),r&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(g,{indent:t.indent})),n(i,t))}}function b(e,t){var n=a.createElement(s,null,e.name);return a.createElement(a.Fragment,null,a.createElement(g,{indent:2}),t.resolveTypeParamsLinks?a.createElement("a",{href:"#"+e.name.toLowerCase()},n):n,e.type&&a.createElement(a.Fragment,null,a.createElement("code",null," "),a.createElement(p,null,"extends"),a.createElement("code",null," "),E(e.type,t)))}function w(e,t){return e?a.createElement(a.Fragment,null,a.createElement(u,null,"<"),e.reduce(y(",",t,b,!0),null),a.createElement("br",null),a.createElement(g,{indent:t.indent}),a.createElement(u,null,">")):null}function F(e,t){var n;e.type||console.warn("Did not render signature",e);var r=(null==(n=e.parameters)?void 0:n.length)>2;return a.createElement(a.Fragment,null,e.typeParameter&&w(e.typeParameter,t),a.createElement(u,null,"("),r&&a.createElement("br",null),v(e,r,t.withIndent()),r&&a.createElement("br",null),r&&a.createElement(g,{indent:t.indent}),a.createElement(u,null,")")," ",a.createElement(u,null,"=>")," ",e.type?E(e.type,t):a.createElement(m,null,"void"))}function k(e,t){return a.createElement(a.Fragment,null,e.map((function(e){return F(e,t)})))}function P(e,t){return a.createElement(a.Fragment,null,e.map((function(e){return function(e,t){var n;e.type||console.warn("Did not render signature",e);var r=(null==(n=e.parameters)?void 0:n.length)>0;return a.createElement(a.Fragment,null,e.typeParameter&&w(e.typeParameter,t),a.createElement(u,null,"("),r&&a.createElement("br",null),v(e,r,t.withIndent()),r&&a.createElement("br",null),r&&a.createElement(g,{indent:t.indent}),a.createElement(u,null,")")," ",a.createElement(u,null,": ")," ",e.type?E(e.type,t):a.createElement(m,null,"void"))}(e,t)})))}function S(e){return a.createElement(a.Fragment,null,a.createElement(p,null,"const"),a.createElement("code",null," "),a.createElement(c,null,e),a.createElement(u,null,":"),a.createElement("code",null," "))}function x(e,t,n,r){var l=a.createElement(d,null,e);return a.createElement(a.Fragment,null,a.createElement(g,{indent:r.indent}),n.isStatic&&a.createElement(p,null,"static "),r.resolveMembersLinks?a.createElement("a",{href:"#"+e.toLowerCase()},l):l,n.isOptional&&a.createElement(u,null,"?"),a.createElement(u,null,": "),t,a.createElement(u,null,";"),a.createElement("br",null))}function T(e,t){var n,r,i=null==(n=e.children)?void 0:n.filter((function(e){return e.kind===l.WF.Property})),o=null==(r=e.children)?void 0:r.filter((function(e){return e.kind===l.WF.Method}));return a.createElement(a.Fragment,null,null==i?void 0:i.reduce(y(null,t,Z),null),null==o?void 0:o.reduce(y(null,t,Z),null))}function O(e,t){return a.createElement(a.Fragment,null,a.createElement(p,null,"function"),a.createElement("code",null," "),a.createElement(c,null,e.name),P(e.signatures,t))}function Z(e,t){switch(e.kind){case l.WF.Function:return O(e,t.withMemberLinks().withTypeParamsLinks());case l.WF.TypeAlias:return a.createElement(a.Fragment,null,a.createElement(p,null,"type"),a.createElement("code",null," "),a.createElement(c,null,e.name),w(e.typeParameter,t.withTypeParamsLinks()),a.createElement(u,null," = "),E(e.type,t));case l.WF.Enum:return a.createElement(a.Fragment,null,a.createElement(p,null,"enum"),a.createElement("code",null," "),a.createElement(c,null,e.name),a.createElement("code",null," "),a.createElement(u,null,"{"),a.createElement("br",null),e.children.reduce(y(null,t.withIndent(),Z),null),a.createElement(u,null,"}"));case l.WF.Class:return a.createElement(a.Fragment,null,a.createElement(p,null,"class"),a.createElement("code",null," "),a.createElement(c,null,e.name),w(e.typeParameter,t.withTypeParamsLinks()),a.createElement("code",null," "),a.createElement(u,null,"{"),a.createElement("br",null),T(e,t.withMemberLinks().withIndent()),a.createElement(u,null,"}"));case l.WF.Interface:var n=t.withIndent().withMemberLinks();return a.createElement(a.Fragment,null,a.createElement(p,null,"interface"),a.createElement("code",null," "),a.createElement(c,null,e.name),w(e.typeParameter,t.withTypeParamsLinks()),a.createElement("code",null," "),a.createElement(u,null,"{"),a.createElement("br",null),e.signatures&&a.createElement(a.Fragment,null,a.createElement(g,{indent:n.indent}),P(e.signatures,n),a.createElement(u,null,";"),a.createElement("br",null)),T(e,n.withMemberLinks()),a.createElement(u,null,"}"));case l.WF.Parameter:case l.WF.Property:return x(e.name,E(e.type,t),e.flags,t);case l.WF.TypeLiteral:if(e.signatures)return k(e.signatures,t);if(!e.groups)return console.warn("Unhandled Type Literal with no group",e),a.createElement(p,null,"any");for(var i,o=null,s=function(){var n=i.value;if(n.kind!==l.WF.Property)throw new Error("Unhandled group of type "+n.title);var r=e.children.filter((function(e){return n.children.includes(e.id)}));o=a.createElement(a.Fragment,null,a.createElement(u,null,"{"),a.createElement("br",null),r.map((function(e){return Z(e,t.withIndent())})),a.createElement(g,{indent:t.indent}),a.createElement(u,null,"}"))},m=(0,r.Z)(e.groups);!(i=m()).done;)s();return o;case l.WF.Method:return x(e.name,k(e.signatures,t),e.flags,t);case l.WF.Function:return k(e.signatures,t);case l.WF.CallSignature:return a.createElement(a.Fragment,null,S(e.name),F(e,t));case l.WF.Variable:return e.signatures?O(e,t.withMemberLinks()):a.createElement(a.Fragment,null,S(e.name),E(e.type,t));case l.WF.EnumMember:return function(e,t,n){var r=a.createElement(d,null,e);return a.createElement(a.Fragment,null,a.createElement(g,{indent:n.indent}),n.resolveMembersLinks?a.createElement("a",{href:"#"+e.toLowerCase()},r):r,a.createElement(u,null," = "),t,a.createElement(u,null,";"),a.createElement("br",null))}(e.name,a.createElement(f,null,e.defaultValue),t);default:throw console.warn("Unhandled Declaration Reflection of kind",e.kindString,e),new Error("Unhandled Declaration Reflection of kind "+e.kindString)}}},9634:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2408);function a(){return(0,r.usePluginData)("doc-docusaurus-typedoc-plugin")}},1510:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8283),a=n(2784),l=n(7933),i=n(1344),o=n(1263),u=(0,a.createContext)({collectLink:function(){}}),c=n(77);var s=function(e){var t,n,s,m=e.isNavLink,f=e.to,d=e.href,p=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,v=void 0===E||E,y=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),b=(0,c.C)().withBaseUrl,w=(0,a.useContext)(u),F=f||d,k=(0,i.Z)(F),P=null==F?void 0:F.replace("pathname://",""),S=void 0!==P?(n=P,v&&function(e){return e.startsWith("/")}(n)?b(n):n):void 0,x=(0,a.useRef)(!1),T=m?l.OL:l.rU,O=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!O&&k&&null!=S&&window.docusaurus.prefetch(S),function(){O&&s&&s.disconnect()}}),[S,O,k]);var Z=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,L=!S||!k||Z;return S&&k&&!Z&&!h&&w.collectLink(S),L?a.createElement("a",Object.assign({href:S},F&&!k&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(T,Object.assign({},y,{onMouseEnter:function(){x.current||null==S||(window.docusaurus.preload(S),x.current=!0)},innerRef:function(e){var t,n;O&&e&&k&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:S||""},m&&{isActive:g,activeClassName:p}))}},1344:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},77:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return i}});var r=n(7614),a=n(1344);function l(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,o=void 0!==i&&i,u=l.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(l,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},2408:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},useAllPluginInstancesData:function(){return l},usePluginData:function(){return i}});var r=n(7614);function a(){var e=(0,r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function l(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=l(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},6277:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},5759:function(e,t){"use strict";t.Z={figure:"figure_wnls",figure__caption:"figure__caption_VGUt",figure__title:"figure__title_4REv",reference:"reference_1T5W",container:"container_1v8-",token:"token_3-lG","token--punctuation":"token--punctuation_2OMH","token--attr-name":"token--attr-name_OlPx","token--plain":"token--plain_3yoV","token--keyword":"token--keyword_2uwA","token--literal":"token--literal_6GhS","token--type":"token--type_1b8O","token--primitive":"token--primitive_1QCY",typeContainer:"typeContainer_3pC1",flagBox:"flagBox_3L2m","flagBox--optional":"flagBox--optional_1uEY","flagBox--required":"flagBox--required_1aYv","flagBox--static":"flagBox--static_1KJS","flagBox--reexport":"flagBox--reexport_OqVv","flagBox--export":"flagBox--export_1fep",logo:"logo_7s87",badges:"badges_1MA0",versionBox:"versionBox_2Ha5",sourceBox:"sourceBox_3qOj",headerTypeBox:"headerTypeBox_nesS"}},8828:function(e,t,n){"use strict";t.AT=t.u=t.WF=void 0;const r=n(3404);let a=0;var l,i;(function(e){e[e.Project=0]="Project",e[e.Module=1]="Module",e[e.Namespace=2]="Namespace",e[e.Enum=4]="Enum",e[e.EnumMember=16]="EnumMember",e[e.Variable=32]="Variable",e[e.Function=64]="Function",e[e.Class=128]="Class",e[e.Interface=256]="Interface",e[e.Constructor=512]="Constructor",e[e.Property=1024]="Property",e[e.Method=2048]="Method",e[e.CallSignature=4096]="CallSignature",e[e.IndexSignature=8192]="IndexSignature",e[e.ConstructorSignature=16384]="ConstructorSignature",e[e.Parameter=32768]="Parameter",e[e.TypeLiteral=65536]="TypeLiteral",e[e.TypeParameter=131072]="TypeParameter",e[e.Accessor=262144]="Accessor",e[e.GetSignature=524288]="GetSignature",e[e.SetSignature=1048576]="SetSignature",e[e.ObjectLiteral=2097152]="ObjectLiteral",e[e.TypeAlias=4194304]="TypeAlias",e[e.Event=8388608]="Event",e[e.Reference=16777216]="Reference"})(t.WF||(t.WF={})),function(e){e.All=2*e.Reference-1,e.ClassOrInterface=e.Class|e.Interface,e.VariableOrProperty=e.Variable|e.Property,e.FunctionOrMethod=e.Function|e.Method,e.ClassMember=e.Accessor|e.Constructor|e.Method|e.Property|e.Event,e.SomeSignature=e.CallSignature|e.IndexSignature|e.ConstructorSignature|e.GetSignature|e.SetSignature,e.SomeModule=e.Namespace|e.Module,e.SomeType=e.Interface|e.TypeLiteral|e.TypeParameter|e.TypeAlias,e.SomeValue=e.Variable|e.Function|e.ObjectLiteral,e.Inheritable=e.Property|e.Method|e.Constructor}(l=t.WF||(t.WF={})),function(e){e[e.None=0]="None",e[e.Private=1]="Private",e[e.Protected=2]="Protected",e[e.Public=4]="Public",e[e.Static=8]="Static",e[e.ExportAssignment=16]="ExportAssignment",e[e.External=32]="External",e[e.Optional=64]="Optional",e[e.DefaultValue=128]="DefaultValue",e[e.Rest=256]="Rest",e[e.Abstract=512]="Abstract",e[e.Const=1024]="Const",e[e.Let=2048]="Let",e[e.Readonly=4096]="Readonly"}(i=t.u||(t.u={}));const o=[i.Private,i.Protected,i.Static,i.ExportAssignment,i.Optional,i.DefaultValue,i.Rest,i.Abstract,i.Let,i.Const,i.Readonly];class u extends Array{constructor(){super(...arguments),this.flags=i.None}hasFlag(e){return 0!=(e&this.flags)}get isPrivate(){return this.hasFlag(i.Private)}get isProtected(){return this.hasFlag(i.Protected)}get isPublic(){return this.hasFlag(i.Public)}get isStatic(){return this.hasFlag(i.Static)}get isExternal(){return this.hasFlag(i.External)}get isOptional(){return this.hasFlag(i.Optional)}get isRest(){return this.hasFlag(i.Rest)}get hasExportAssignment(){return this.hasFlag(i.ExportAssignment)}get isAbstract(){return this.hasFlag(i.Abstract)}get isConst(){return this.hasFlag(i.Const)}get isLet(){return this.hasFlag(i.Let)}get isReadonly(){return this.hasFlag(i.Readonly)}setFlag(e,t){switch(e){case i.Private:this.setSingleFlag(i.Private,t),t&&(this.setFlag(i.Protected,!1),this.setFlag(i.Public,!1));break;case i.Protected:this.setSingleFlag(i.Protected,t),t&&(this.setFlag(i.Private,!1),this.setFlag(i.Public,!1));break;case i.Public:this.setSingleFlag(i.Public,t),t&&(this.setFlag(i.Private,!1),this.setFlag(i.Protected,!1));break;case i.Const:case i.Let:this.setSingleFlag(e,t),this.setSingleFlag((i.Let|i.Const)^e,!t);break;default:this.setSingleFlag(e,t)}}setSingleFlag(e,t){const n=i[e].replace(/(.)([A-Z])/g,((e,t,n)=>t+" "+n.toLowerCase()));!t&&this.hasFlag(e)?(o.includes(e)&&this.splice(this.indexOf(n),1),this.flags^=e):t&&!this.hasFlag(e)&&(o.includes(e)&&this.push(n),this.flags|=e)}}(function(e){e[e.Children=0]="Children",e[e.Parameters=1]="Parameters",e[e.TypeLiteral=2]="TypeLiteral",e[e.TypeParameter=3]="TypeParameter",e[e.Signatures=4]="Signatures",e[e.IndexSignature=5]="IndexSignature",e[e.GetSignature=6]="GetSignature",e[e.SetSignature=7]="SetSignature"})(t.AT||(t.AT={}))},3404:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.splitUnquotedString=void 0,t.splitUnquotedString=function e(t,n){if(t.startsWith(n))return e(t.substring(n.length),n);if(t.startsWith('"')){const r=t.indexOf('"',1);if(-1===r)return t.split(n);if(r===t.length-1)return[t];{const a=t.substring(r+1),l=[t.substring(0,r+1)];return l.push(...e(a,n)),l}}return t.split(n)}}}]);