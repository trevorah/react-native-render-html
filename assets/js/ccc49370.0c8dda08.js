(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103,2075],{3488:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(7560),l=n(2784),r=n(6277),c=n(6540),o=n(7719),i=n(4501),s=n.n(i),m=n(2894),u=n(7921),d="codeBlockTitle_1HP_",p="codeBlockContainer_1dyT",g="codeBlockContent_3uNE",f="codeBlock_3AS9",v="codeBlockWithTitle_2H7o",h="copyButton_1oOY",E="codeBlockLines_2sa4",b=n(3241),k=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function Z(e){var t=e.children,n=e.className,i=e.metastring,Z=e.title,y=(0,b.LU)().prism,N=(0,l.useState)(!1),C=N[0],B=N[1],j=(0,l.useState)(!1),x=j[0],L=j[1];(0,l.useEffect)((function(){L(!0)}),[]);var w=(0,b.bc)(i)||Z,T=(0,l.useRef)(null),I=[],P=(0,m.Z)(),A=Array.isArray(t)?t.join(""):t;if(i&&k.test(i)){var R=i.match(k)[1];I=s()(R).filter((function(e){return e>0}))}var M=n&&n.replace(/language-/,"");!M&&y.defaultLanguage&&(M=y.defaultLanguage);var S=A.replace(/\n$/,"");if(0===I.length&&void 0!==M){for(var H,O="",U=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(M),$=A.replace(/\n$/,"").split("\n"),z=0;z<$.length;){var Q=z+1,F=$[z].match(U);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=Q+",";break;case"highlight-start":H=Q;break;case"highlight-end":O+=H+"-"+(Q-1)+","}$.splice(z,1)}else z+=1}I=s()(O),S=$.join("\n")}var G=function(){(0,o.Z)(S),B(!0),setTimeout((function(){return B(!1)}),2e3)};return l.createElement(c.ZP,(0,a.Z)({},c.lG,{key:String(x),theme:P,code:S,language:M}),(function(e){var t,n=e.className,c=e.tokens,o=e.getLineProps,i=e.getTokenProps;return l.createElement("div",{className:p},w&&l.createElement("div",{className:d},w),l.createElement("div",{className:(0,r.Z)(g,M)},l.createElement("div",{tabIndex:0,className:(0,r.Z)(n,f,"thin-scrollbar",(t={},t[v]=w,t))},l.createElement("div",{className:E},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return I.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),l.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return l.createElement("span",(0,a.Z)({key:t},i({token:e,key:t})))})))})))),l.createElement("button",{ref:T,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(h),onClick:G},C?l.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},9684:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(7560),l=n(2784),r=n(6566),c=n(7614),o=n(77),i=n(7513),s=n(759),m=n(3241),u=n(4517);function d(){var e=(0,c.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,m.l5)();return l.createElement(r.Z,null,n.map((function(e){return l.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),l.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function p(e){var t=e.permalink,n=(0,c.Z)().siteConfig.url,a=function(){var e=(0,c.Z)().siteConfig.url,t=(0,u.TH)().pathname;return e+(0,o.Z)(t)}(),i=t?""+n+t:a;return l.createElement(r.Z,null,l.createElement("meta",{property:"og:url",content:i}),l.createElement("link",{rel:"canonical",href:i}))}function g(e){var t=(0,c.Z)(),n=t.siteConfig.themeConfig.metadatas,o=t.i18n,u=o.currentLocale,g=o.localeConfigs,f=e.title,v=e.description,h=e.image,E=e.keywords,b=e.searchMetadatas,k=(0,m.pe)(f),_=u,Z=g[u].direction;return l.createElement(l.Fragment,null,l.createElement(r.Z,null,l.createElement("html",{lang:_,dir:Z}),l.createElement("title",null,k),l.createElement("meta",{property:"og:title",content:k})),l.createElement(s.Z,{description:v,keywords:E,image:h}),l.createElement(p,null),l.createElement(d,null),l.createElement(i.Z,(0,a.Z)({tag:m.HX,locale:u},b)),l.createElement(r.Z,null,n.map((function(e,t){return l.createElement("meta",(0,a.Z)({key:"metadata_"+t},e))}))))}},8146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(2784),l=n(8451),r=n(4281),c=n(7921),o=n(1510);var i=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(o.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=n(7684),m=n(3561),u=n(3241);var d=function(e){var t=e.content,n=e.sidebar,c=t.frontMatter,o=t.metadata,d=o.title,p=o.description,g=o.nextItem,f=o.prevItem,v=c.hide_table_of_contents;return a.createElement(l.Z,{title:d,description:p,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage},t&&a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("aside",{className:"col col--3"},a.createElement(s.Z,{sidebar:n})),a.createElement("main",{className:"col col--7"},a.createElement(r.Z,{frontMatter:c,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(g||f)&&a.createElement(i,{nextItem:g,prevItem:f})),!v&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(m.Z,{toc:t.toc})))))}},3561:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2784),l=n(6277);var r=function(e,t,n){var l=(0,a.useState)(void 0),r=l[0],c=l[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var l=0,o=!1,i=document.getElementsByClassName(e);l<i.length&&!o;){var s=i[l],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(r&&r.classList.remove(t),s.classList.add(t),c(s),o=!0),l+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c="tableOfContents_2Tf-",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return r(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar")},a.createElement(i,{toc:t}))}}}]);