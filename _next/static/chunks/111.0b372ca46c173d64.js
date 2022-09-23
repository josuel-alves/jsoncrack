"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{4062:function(n,e,t){t.r(e),t.d(e,{Graph:function(){return q}});var r=t(6042),i=t(9396),o=t(828),u=t(7297),c=t(5893),a=t(7294),l=t(6126),s=t(8188),d=t(9189),f=t(1440),h=t(2125);function p(){var n=(0,u.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return p=function(){return n},n}function x(){var n=(0,u.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n    box-sizing: border-box;\n  }\n\n  .highlight {\n    border: 2px dashed #ff2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return x=function(){return n},n}function g(){var n=(0,u.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ","px;\n"]);return g=function(){return n},n}function v(){var n=(0,u.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return v=function(){return n},n}var b=(0,h.ZP)(f.Ld)(p()),m=h.ZP.foreignObject(x(),(function(n){return!n.isObject&&"center"}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.isObject&&"10px"}),(function(n){return n.theme.TEXT_POSITIVE}));var j=h.ZP.span(g(),(function(n){var e=n.theme,t=n.objectKey,r=void 0!==t&&t,i=n.parent;return function(n,e,t){return e?n.NODE_KEY:t?n.OBJECT_KEY:n.TEXT_POSITIVE}(e,void 0!==i&&i,r)}),(function(n){return n.parent&&"14px"}),(function(n){return!n.objectKey&&10})),Z=h.ZP.span.attrs((function(n){return{style:{color:(e=n["data-key"],t=n.theme,Number.isNaN(+e)?"true"===e?t.TEXT_POSITIVE:"false"===e?t.TEXT_DANGER:void 0:"#FD0079")}};var e,t}))(v()),y=function(n){var e=n.node,t=n.x,r=n.y,i=e.text,o=e.width,u=e.height,l=e.data,s=a.useRef(null);(0,d.Z)((function(n){return n.performanceMode}));return l.isEmpty?null:(0,c.jsx)(m,{width:o,height:u,x:0,y:0,ref:s,isObject:!0,children:i.map((function(n,e){return(0,c.jsxs)(Z,{"data-key":JSON.stringify(n[1]),"data-x":t,"data-y":r,children:[(0,c.jsxs)(j,{objectKey:!0,children:[JSON.stringify(n[0]).replaceAll('"',""),":"," "]}),(0,c.jsx)(b,{children:JSON.stringify(n[1])})]},e)}))})};function C(n,e){return String(n.node.text)===String(e.node.text)&&n.node.width===e.node.width}var w=a.memo(y,C),E=t(5434),k=t(3719),N=t(9577);function T(){var n=(0,u.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return T=function(){return n},n}function A(){var n=(0,u.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return A=function(){return n},n}var O=h.ZP.button(T(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),R=h.ZP.div(A(),(function(n){return n.hasCollapse?"space-between":"center"})),S=function(n){var e=n.node,t=n.x,r=n.y,i=n.hasCollapse,o=void 0!==i&&i,u=e.id,l=e.text,s=e.width,f=e.height,h=e.data,p=a.useRef(null),x=(0,N.Z)((function(n){return n.hideCollapse})),g=(0,k.Z)((function(n){return n.expandNodes})),v=(0,k.Z)((function(n){return n.collapseNodes})),Z=(0,k.Z)((function(n){return n.collapsedParents.includes(u)}));(0,d.Z)((function(n){return n.performanceMode}));return(0,c.jsx)(m,{width:s,height:f,x:0,y:0,hideCollapse:x,hasCollapse:h.isParent&&o,ref:p,children:(0,c.jsxs)(R,{hasCollapse:h.isParent&&!x,children:[(0,c.jsx)(j,{"data-x":t,"data-y":r,"data-key":JSON.stringify(l),parent:h.isParent,children:(0,c.jsx)(b,{children:JSON.stringify(l).replaceAll('"',"")})}),h.isParent&&o&&!x&&(0,c.jsx)(O,{onClick:function(n){n.stopPropagation(),Z?g(u):v(u)},children:Z?(0,c.jsx)(E.Qw4,{size:18}):(0,c.jsx)(E.$l_,{size:18})})]})})};function P(n,e){return n.node.text===e.node.text&&n.node.width===e.node.width}var _=a.memo(S,P),L={width:40,height:40,rx:50,ry:50},I=function(n){var e=n.properties,t=e.text,o=e.data;return(0,c.jsx)(s.Node,(0,i.Z)((0,r.Z)({},n,o.isEmpty&&L),{label:(0,c.jsx)(a.Fragment,{}),children:function(n){var e=n.node,r=n.x,i=n.y;return Array.isArray(t)?(0,c.jsx)(w,{node:e,x:r,y:i}):(0,c.jsx)(_,{node:e,hasCollapse:o.hasChild,x:r,y:i})}}))},z=t(2628);function V(){var n=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  img {\n    filter: drop-shadow(2px 4px 6px black);\n  }\n"]);return V=function(){return n},n}function D(){var n=(0,u.Z)(["\n  color: ",";\n"]);return D=function(){return n},n}function M(){var n=(0,u.Z)(["\n  width: 60%;\n  text-align: center;\n  color: ",";\n"]);return M=function(){return n},n}var G=h.ZP.div(V()),K=h.ZP.h2(D(),(function(n){return n.theme.TEXT_DANGER})),B=h.ZP.p(M(),(function(n){return n.theme.TEXT_NORMAL})),J=function(){return(0,c.jsxs)(G,{children:[(0,c.jsx)("img",{src:"assets/undraw_qa_engineers_dg-5-p.svg",width:"200",height:"200",alt:"oops"}),(0,c.jsx)(K,{children:"JSON Crack unable to handle this file!"}),(0,c.jsx)(B,{children:"We apologize for the problem you encountered, we are doing our best as Open Source community to improve our service. JSON Crack is currently unable to handle such a huge file."})]})};function X(){var n=(0,u.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return X=function(){return n},n}var U=h.ZP.div(X(),(function(n){return n.isWidget?"100vh":"calc(100vh - 36px)"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){var e=n.theme;return"radial-gradient(#505050 0.5px, ".concat(e.BACKGROUND_SECONDARY," 0.5px)")}),(function(n){return n.theme.BACKGROUND_NODE})),Y=function(n){var e=n.isWidget,t=n.openModal,u=n.setSelectedNode,f=(0,d.Z)((function(n){return n.setConfig})),h=(0,d.Z)((function(n){return n.maxZoom})),p=(0,k.Z)((function(n){return n.setGraphValue})),x=(0,k.Z)((function(n){return n.loading})),g=(0,d.Z)((function(n){return n.layout})),v=(0,k.Z)((function(n){return n.nodes})),b=(0,k.Z)((function(n){return n.edges})),m=(0,o.Z)(a.useState({width:2e3,height:2e3}),2),j=m[0],Z=m[1],y=a.useCallback((function(n,e){u(e.text),t()}),[t,u]),C=a.useCallback((function(n){f("zoomPanPinch",n)}),[f]),w=a.useCallback((function(n){if(n.width&&n.height){var e,t=0,r=0;null===n||void 0===n||null===(e=n.children)||void 0===e||e.forEach((function(n){n.y+n.height>t&&(t=n.y+n.height),n.x+n.width>r&&(r=n.x+n.width)})),f("maxZoom","LEFT"===n||"RIGHT"===n?828/t:828/r),Z({width:n.width+400,height:n.height+400}),requestAnimationFrame((function(){setTimeout((function(){p("loading",!1)}),0)}))}}),[f,p]),E=a.useCallback((function(){var n=document.querySelector("input:focus");n&&n.blur()}),[]);return v.length>8e3?(0,c.jsx)(J,{}):(0,c.jsxs)(U,{isWidget:e,children:[x&&(0,c.jsx)(z.g,{message:"Painting graph..."}),(0,c.jsx)(l.d$,{maxScale:2,minScale:h,initialScale:.7,wheel:{step:.05},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:C,onPanning:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.add("dragging")},onPanningStop:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.remove("dragging")},children:(0,c.jsx)(l.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden",display:x?"none":"block"},children:(0,c.jsx)(s.Canvas,{nodes:v,edges:b,maxWidth:j.width,maxHeight:j.height,direction:g,onLayoutChange:w,onCanvasClick:E,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(n){return(0,c.jsx)(I,(0,i.Z)((0,r.Z)({},n),{onClick:y}))},edge:function(n){return(0,c.jsx)(s.Edge,(0,i.Z)((0,r.Z)({},n),{containerClassName:"edge-".concat(n.id)}))}},g)})})]})},q=a.memo(Y)},1111:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r=t(7297),i=t(5893),o=t(7294),u=t(828),c=t(4062),a=t(6501),l=t(9647),s=t(3565),d=t(1342),f=t(2125);function h(){var n=(0,r.Z)(["\n  resize: none;\n  width: 100%;\n  min-height: 200px;\n\n  padding: 10px;\n  background: ",";\n  color: ",";\n  outline: none;\n  border-radius: 4px;\n  line-height: 20px;\n  border: none;\n"]);return h=function(){return n},n}var p=f.ZP.textarea(h(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),x=function(n){var e=n.selectedNode,t=n.visible,r=n.closeModal,o=Array.isArray(e)?Object.fromEntries(e):e;return(0,i.jsxs)(d.u,{visible:t,setVisible:r,children:[(0,i.jsx)(d.u.Header,{children:"Node Content"}),(0,i.jsx)(d.u.Content,{children:(0,i.jsx)(p,{defaultValue:JSON.stringify(o,(function(n,e){return"string"===typeof e?e.replaceAll('"',""):e}),2),readOnly:!0})}),(0,i.jsx)(d.u.Controls,{setVisible:r,children:(0,i.jsxs)(s.z,{status:"SECONDARY",onClick:function(){a.ZP.success("Content copied to clipboard!"),navigator.clipboard.writeText(JSON.stringify(o)),r()},children:[(0,i.jsx)(l.C3L,{size:18})," Clipboard"]})})]})},g=t(3719),v=function(n){var e=n.isWidget,t=void 0!==e&&e,r=(0,u.Z)(o.useState(!1),2),a=r[0],l=r[1],s=(0,u.Z)(o.useState([]),2),d=s[0],f=s[1],h=o.useCallback((function(){return l(!0)}),[]),p=(0,g.Z)((function(n){return n.collapsedNodes})),v=(0,g.Z)((function(n){return n.collapsedEdges}));return o.useEffect((function(){var n=p.map((function(n){return'[id$="node-'.concat(n,'"]')})),e=v.map((function(n){return'[class$="edge-'.concat(n,'"]')}));if(document.querySelectorAll(".hide").forEach((function(n){return n.classList.remove("hide")})),n.length){var t=document.querySelectorAll(n.join(",")),r=document.querySelectorAll(e.join(","));t.forEach((function(n){return n.classList.add("hide")})),r.forEach((function(n){return n.classList.add("hide")}))}}),[p,v]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Graph,{openModal:h,setSelectedNode:f,isWidget:t}),!t&&(0,i.jsx)(x,{selectedNode:d,visible:a,closeModal:function(){return l(!1)}})]})},b=t(8193),m=t(5434),j=t(7106),Z=t(6042),y=t(9396),C=t(155),w=t(9189),E=function(){var n=(0,w.Z)((function(n){return n.setConfig})),e=(0,w.Z)((function(n){return n.zoomPanPinch})),t=(0,u.Z)(o.useState(0),2),r=t[0],i=t[1],c=(0,u.Z)(o.useState({value:"",debounced:""}),2),a=c[0],l=c[1];return o.useEffect((function(){n("performanceMode",!a.value.length);var e=setTimeout((function(){l((function(n){return(0,y.Z)((0,Z.Z)({},n),{debounced:a.value})}))}),800);return function(){return clearTimeout(e)}}),[a.value,n]),o.useEffect((function(){if(e){var n,t=e.instance.wrapperComponent,o=(n="span[data-key*='".concat(a.debounced,"' i]"),document.querySelectorAll("".concat(n))),u=o[r]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),t&&u&&u.parentElement){var c=Number(u.getAttribute("data-x")),l=Number(u.getAttribute("data-y")),s=1*(t.offsetLeft-c)+t.clientWidth/2-u.getBoundingClientRect().width/2,d=1*(t.offsetLeft-l)+t.clientHeight/2-u.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t;null===(t=null===(e=n.parentElement)||void 0===e?void 0:e.closest("foreignObject"))||void 0===t||t.classList.add("searched")})),n[e].classList.add("highlight")}(o,r),null===e||void 0===e||e.setTransform(s,d,1)}else i(0);return function(){a.value||i(0)}}}),[a.debounced,a.value,r,e]),[a,l,function(){return i((function(n){return n+1}))}]};function k(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  height: 25px;\n"]);return k=function(){return n},n}function N(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n"]);return N=function(){return n},n}function T(){var n=(0,r.Z)(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return T=function(){return n},n}function A(){var n=(0,r.Z)(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return A=function(){return n},n}var O=f.ZP.div(k(),(function(n){return n.theme.BACKGROUND_TERTIARY})),R=f.ZP.form(N()),S=f.ZP.input(T(),(function(n){return n.theme.TEXT_NORMAL})),P=f.ZP.button(A(),(function(n){return n.theme.INTERACTIVE_NORMAL})),_=function(){var n=(0,u.Z)(E(),3),e=n[0],t=n[1],r=n[2];return(0,i.jsx)(O,{children:(0,i.jsxs)(R,{onSubmit:function(n){n.preventDefault(),r()},children:[(0,i.jsx)(S,{type:"text",value:e.value,onChange:function(n){return t((function(e){return(0,y.Z)((0,Z.Z)({},e),{value:n.target.value})}))},placeholder:"Search Node"}),(0,i.jsx)(P,{type:"reset","aria-label":"search",onClick:function(n){n.preventDefault(),t({value:"",debounced:""})},children:e.value?(0,i.jsx)(C.Lp2,{size:18}):(0,i.jsx)(b.RB5,{size:18})})]})})},L=t(1649);function I(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  width: 100%;\n  gap: 6px;\n"]);return I=function(){return n},n}function z(){var n=(0,r.Z)(["\n  color: ",";\n  font-weight: 500;\n  cursor: pointer;\n"]);return z=function(){return n},n}function V(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  width: 40px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 14px;\n  background: ",";\n  cursor: pointer;\n\n  input {\n    display: none;\n  }\n"]);return V=function(){return n},n}var D=f.ZP.div(I()),M=f.ZP.label(z(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),G=f.ZP.div(V(),(function(n){return n.active?"right":"left"}),(function(n){return n.active?"#3AA55D":"#72767c"})),K=function(n){var e=n.children,t=n.checked,r=void 0!==t&&t,c=n.onChange,a=(0,u.Z)(o.useState(r),2),l=a[0],s=a[1],d=function(){s(!l),c&&c(!l)};return(0,i.jsxs)(D,{children:[(0,i.jsxs)(G,{active:l,onClick:d,children:[l?(0,i.jsx)(L.be3,{size:22,color:"white"}):(0,i.jsx)(L.mpJ,{size:22,color:"white"}),(0,i.jsx)("input",{type:"checkbox",checked:l,onChange:d})]}),(0,i.jsx)(M,{onClick:d,children:e})]})},B=t(9577),J=t(374);function X(){var n=(0,r.Z)(["\n  flex-flow: row-reverse;\n  background: black;\n"]);return X=function(){return n},n}function U(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]);return U=function(){return n},n}var Y=(0,f.ZP)(K)(X()),q=f.ZP.div(U()),H=function(n){var e=n.visible,t=n.setVisible,r=(0,B.Z)((function(n){return n.lightmode})),o=(0,B.Z)((function(n){return n.setLightTheme})),c=(0,u.Z)((0,B.Z)((function(n){return[n.toggleHideCollapse,n.hideCollapse]}),J.Z),2),a=c[0],l=c[1];return(0,i.jsxs)(d.u,{visible:e,setVisible:t,children:[(0,i.jsx)(d.u.Header,{children:"Settings"}),(0,i.jsx)(d.u.Content,{children:(0,i.jsxs)(q,{children:[(0,i.jsx)(Y,{onChange:a,checked:l,children:"Hide Collapse/Expand Button"}),(0,i.jsx)(Y,{onChange:function(){return o(!r)},checked:r,children:"Enable Light Theme"})]})}),(0,i.jsx)(d.u.Controls,{setVisible:t})]})},W=t(7471);function F(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n  box-shadow: 0 1px 0px ",";\n  z-index: 1;\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return F=function(){return n},n}function $(){var n=(0,r.Z)(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n  padding: 6px;\n  border-radius: 3px;\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return $=function(){return n},n}var Q=f.ZP.div(F(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),nn=f.ZP.button($(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),en=function(){var n=(0,u.Z)(o.useState(!1),2),e=n[0],t=n[1],r=(0,u.Z)(o.useState(!1),2),c=r[0],a=r[1],s=(0,w.Z)((function(n){return n.hideEditor})),d=(0,w.Z)((function(n){return n.setConfig})),f=(0,w.Z)((function(n){return n.zoomIn})),h=(0,w.Z)((function(n){return n.zoomOut})),p=(0,w.Z)((function(n){return n.centerView}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(nn,{"aria-label":"fullscreen",onClick:function(){return d("hideEditor",!s)},children:(0,i.jsx)(b.vju,{})}),(0,i.jsx)(nn,{"aria-label":"settings",onClick:function(){return t(!0)},children:(0,i.jsx)(j.sDK,{})}),(0,i.jsx)(_,{}),(0,i.jsx)(nn,{"aria-label":"save",onClick:function(){return a(!0)},children:(0,i.jsx)(l._hL,{})}),(0,i.jsx)(nn,{"aria-label":"center canvas",onClick:p,children:(0,i.jsx)(m.XIv,{})}),(0,i.jsx)(nn,{"aria-label":"zoom out",onClick:h,children:(0,i.jsx)(b.ywL,{})}),(0,i.jsx)(nn,{"aria-label":"zoom in",onClick:f,children:(0,i.jsx)(b.Lfi,{})})]}),(0,i.jsx)(W._,{visible:c,setVisible:a}),(0,i.jsx)(H,{visible:e,setVisible:t})]})};function tn(){var n=(0,r.Z)(["\n  position: relative;\n  height: 100%;\n"]);return tn=function(){return n},n}var rn=f.ZP.div(tn()),on=function(){return(0,i.jsxs)(rn,{children:[(0,i.jsx)(en,{}),(0,i.jsx)(v,{})]})}}}]);