"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[7656],{85489:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(87462),l=a(63366),r=a(75900),o=a.n(r),s=a(15007),i=a(25513),c=a(44731),d=a(99541),u=a(563),f=s.default.forwardRef((function(e,t){var a=e.label,r=e.onClick,i=e.className,c=(0,l.Z)(e,["label","onClick","className"]);return s.default.createElement("button",(0,n.Z)({ref:t,type:"button",className:o()("close",i),onClick:r},c),s.default.createElement("span",{"aria-hidden":"true"},"×"),s.default.createElement("span",{className:"sr-only"},a))}));f.displayName="CloseButton",f.defaultProps={label:"Close"};var m=f,Z=a(16132),p=a(38870),b=a(36306),v=(0,Z.Z)("h4");v.displayName="DivStyledAsH4";var h=(0,p.Z)("alert-heading",{Component:v}),y=(0,p.Z)("alert-link",{Component:b.Z}),g={show:!0,transition:u.Z,closeLabel:"Close alert"},N=s.default.forwardRef((function(e,t){var a=(0,i.Ch)(e,{show:"onClose"}),r=a.bsPrefix,f=a.show,Z=a.closeLabel,p=a.className,b=a.children,v=a.variant,h=a.onClose,y=a.dismissible,g=a.transition,N=(0,l.Z)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),C=(0,d.vE)(r,"alert"),_=(0,c.Z)((function(e){h&&h(!1,e)})),E=!0===g?u.Z:g,P=s.default.createElement("div",(0,n.Z)({role:"alert"},E?void 0:N,{ref:t,className:o()(p,C,v&&C+"-"+v,y&&C+"-dismissible")}),y&&s.default.createElement(m,{onClick:_,label:Z}),b);return E?s.default.createElement(E,(0,n.Z)({unmountOnExit:!0},N,{ref:void 0,in:f}),P):f?P:null}));N.displayName="Alert",N.defaultProps=g,N.Link=y,N.Heading=h;var C=N},17502:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(87462),l=a(63366),r=a(75900),o=a.n(r),s=a(15007),i=a(99541),c=a(38870),d=a(16132),u=a(29503),f=s.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.variant,d=e.as,u=void 0===d?"img":d,f=(0,l.Z)(e,["bsPrefix","className","variant","as"]),m=(0,i.vE)(a,"card-img");return s.default.createElement(u,(0,n.Z)({ref:t,className:o()(c?m+"-"+c:m,r)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};var m=f,Z=(0,d.Z)("h5"),p=(0,d.Z)("h6"),b=(0,c.Z)("card-body"),v=(0,c.Z)("card-title",{Component:Z}),h=(0,c.Z)("card-subtitle",{Component:p}),y=(0,c.Z)("card-link",{Component:"a"}),g=(0,c.Z)("card-text",{Component:"p"}),N=(0,c.Z)("card-header"),C=(0,c.Z)("card-footer"),_=(0,c.Z)("card-img-overlay"),E=s.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.bg,d=e.text,f=e.border,m=e.body,Z=e.children,p=e.as,v=void 0===p?"div":p,h=(0,l.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,i.vE)(a,"card"),g=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.default.createElement(u.Z.Provider,{value:g},s.default.createElement(v,(0,n.Z)({ref:t},h,{className:o()(r,y,c&&"bg-"+c,d&&"text-"+d,f&&"border-"+f)}),m?s.default.createElement(b,null,Z):Z))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=m,E.Title=v,E.Subtitle=h,E.Body=b,E.Link=y,E.Text=g,E.Header=N,E.Footer=C,E.ImgOverlay=_;var P=E},563:function(e,t,a){var n,l=a(87462),r=a(63366),o=a(75900),s=a.n(o),i=a(15007),c=a(5160),d=a(61831),u=a(49059),f=((n={})[c.d0]="show",n[c.cn]="show",n),m=i.default.forwardRef((function(e,t){var a=e.className,n=e.children,o=(0,r.Z)(e,["className","children"]),m=(0,i.useCallback)((function(e){(0,u.Z)(e),o.onEnter&&o.onEnter(e)}),[o]);return i.default.createElement(c.ZP,(0,l.Z)({ref:t,addEndListener:d.Z},o,{onEnter:m}),(function(e,t){return i.default.cloneElement(n,(0,l.Z)({},t,{className:s()("fade",a,n.props.className,f[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.Z=m},16132:function(e,t,a){var n=a(87462),l=a(15007),r=a(75900),o=a.n(r);t.Z=function(e){return l.default.forwardRef((function(t,a){return l.default.createElement("div",(0,n.Z)({},t,{ref:a,className:o()(t.className,e)}))}))}},82207:function(e,t,a){a(15007);var n=a(17502),l=a(8156),r=function(e){var t=e.title?e.title:"",a=e.mainBody?e.mainBody:[],r=e.footerBody?e.footerBody:[],o=e.className?e.className:"";return(0,l.tZ)(n.Z,{className:"thirdCard "+o,bg:"light"},(0,l.tZ)(n.Z.Header,{as:"h3"},t),(0,l.tZ)(n.Z.Body,null,(0,l.tZ)(n.Z.Text,null,a)),!!r.length&&(0,l.tZ)(n.Z.Footer,null,r))};t.Z=r,r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"ThirdCard",filename:"src/components/cards/ThirdCard.jsx"}})},41561:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(15007),l=a(85489),r=a(17502),o=a(46594),s=a(35903),i=a(68270),c=a(30775),d=a(81277),u=a(8156),f=function(e){var t=e.title?e.title:"",a=e.mainBody?e.mainBody:[],n=e.footerBody?e.footerBody:[],l=e.className?e.className:"";return(0,u.tZ)(r.Z,{className:"primaryCard "+l,bg:"light"},(0,u.tZ)(r.Z.Header,{as:"h1"},t),(0,u.tZ)(r.Z.Body,null,(0,u.tZ)(r.Z.Text,null,a)),!!n.length&&(0,u.tZ)(r.Z.Footer,null,n))},m=f;f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"PrimaryCard",filename:"src/components/cards/PrimaryCard.jsx"}});var Z=a(82207),p=(0,a(80235).Z)((function(){var e=n.useState("Loading..."),t=e[0],a=e[1],f=(0,i.$)(),p=f.t,b=(f.i18n,[]);b.push((0,u.tZ)("p",{dangerouslySetInnerHTML:{__html:p("install.mainPart1")}})),b.push((0,u.tZ)("p",{dangerouslySetInnerHTML:{__html:p("install.mainPart2")}}));var v=[(0,u.tZ)(l.Z,{variant:"warning",dangerouslySetInnerHTML:{__html:p("install.cppAlert")}}),(0,u.tZ)("p",null,p("install.cppPart1")),(0,u.tZ)("p",null,p("install.cppPart2")),(0,u.tZ)("p",null,p("install.cppPart3"))],h=[(0,u.tZ)(r.Z.Link,{as:s.Link,to:"/docs/cpp/installation/installing-the-utbot-server",href:"/docs/cpp/installation/installing-the-utbot-server"},p("install.cppGuide"))],y=(0,s.useStaticQuery)("3911298725"),g=y.site.siteMetadata.utbot_cpp_releases_link,N=y.site.siteMetadata.utbot_cpp_releases_info;return("undefined"!=typeof window?navigator.onLine:null)?fetch(N).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(e);e.ok?(console.log("HELLO!!!"),console.log("Obj: "+t),console.log("Obj[0]: "+t[0]),console.log("Obj[0]: "+t[0].tag_name),a(t[0].tag_name)):e.status?(a("An error occurred"),console.log(e.status)):a("An error occurred")})).catch((function(e){console.log("Catch err: "+e),a(e)})):a("Version was not loaded"),(0,u.tZ)(c.Z,null,(0,u.tZ)("div",{className:"pageFlexContainer"},(0,u.tZ)(d.Z,{title:"Install"}),(0,u.tZ)(m,{title:"Install UnitTestBot",mainBody:b}),(0,u.tZ)(Z.Z,{title:p("install.cpp"),mainBody:v,footerBody:h}),(0,u.tZ)("div",{className:"innerFlexContainer"},(0,u.tZ)(r.Z,{className:"releaseCard",bg:"info",text:"white"},(0,u.tZ)(r.Z.Header,{as:"h5"},p("install.release")),(0,u.tZ)(r.Z.Body,null,(0,u.tZ)(r.Z.Subtitle,null,t),(0,u.tZ)(r.Z.Text,null),(0,u.tZ)("div",{className:"buttonsContainerCpp"},(0,u.tZ)(o.Z,{variant:"primary",className:"getButton",href:g,as:"a",target:"_blank"},p("install.get"))))))))})),b=p;void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"src/pages/install.jsx"}})}}]);
//# sourceMappingURL=component---src-pages-install-jsx-9f79b31e106c6bb1d5f2.js.map