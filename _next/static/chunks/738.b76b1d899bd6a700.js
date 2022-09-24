"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{4062:function(n,e,t){t.r(e),t.d(e,{Graph:function(){return V}});var r=t(6042),i=t(9396),o=t(828),a=t(7297),u=t(5893),c=t(7294),l=t(6126),s=t(8188),d=t(9189),f=t(1440),h=t(2125);function p(){var n=(0,a.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return p=function(){return n},n}function g(){var n=(0,a.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n    box-sizing: border-box;\n  }\n\n  .highlight {\n    border: 2px dashed #ff2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}function v(){var n=(0,a.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ","px;\n"]);return v=function(){return n},n}function x(){var n=(0,a.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return x=function(){return n},n}var m=(0,h.ZP)(f.Ld)(p()),y=h.ZP.foreignObject(g(),(function(n){return!n.isObject&&"center"}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.isObject&&"10px"}),(function(n){return n.theme.TEXT_POSITIVE}));var b=h.ZP.span(v(),(function(n){var e=n.theme,t=n.objectKey,r=void 0!==t&&t,i=n.parent;return function(n,e,t){return e?n.NODE_KEY:t?n.OBJECT_KEY:n.TEXT_POSITIVE}(e,void 0!==i&&i,r)}),(function(n){return n.parent&&"14px"}),(function(n){return!n.objectKey&&10})),w=h.ZP.span.attrs((function(n){return{style:{color:(e=n["data-key"],t=n.theme,Number.isNaN(+e)?"true"===e?t.TEXT_POSITIVE:"false"===e?t.TEXT_DANGER:void 0:"#FD0079")}};var e,t}))(x()),j=function(n){var e=n.node,t=n.x,r=n.y,i=e.text,o=e.width,a=e.height,l=e.data,s=c.useRef(null);(0,d.Z)((function(n){return n.performanceMode}));return l.isEmpty?null:(0,u.jsx)(y,{width:o,height:a,x:0,y:0,ref:s,isObject:!0,children:i.map((function(n,e){return(0,u.jsxs)(w,{"data-key":JSON.stringify(n[1]),"data-x":t,"data-y":r,children:[(0,u.jsxs)(b,{objectKey:!0,children:[JSON.stringify(n[0]).replaceAll('"',""),":"," "]}),(0,u.jsx)(m,{children:JSON.stringify(n[1])})]},e)}))})};function Z(n,e){return String(n.node.text)===String(e.node.text)&&n.node.width===e.node.width}var C=c.memo(j,Z),O=t(5434),N=t(3719),E=t(9577);function P(){var n=(0,a.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return P=function(){return n},n}function k(){var n=(0,a.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return k=function(){return n},n}var S=h.ZP.button(P(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),_=h.ZP.div(k(),(function(n){return n.hasCollapse?"space-between":"center"})),T=function(n){var e=n.node,t=n.x,r=n.y,i=n.hasCollapse,o=void 0!==i&&i,a=e.id,l=e.text,s=e.width,f=e.height,h=e.data,p=c.useRef(null),g=(0,E.Z)((function(n){return n.hideCollapse})),v=(0,N.Z)((function(n){return n.expandNodes})),x=(0,N.Z)((function(n){return n.collapseNodes})),w=(0,N.Z)((function(n){return n.collapsedParents.includes(a)}));(0,d.Z)((function(n){return n.performanceMode}));return(0,u.jsx)(y,{width:s,height:f,x:0,y:0,hideCollapse:g,hasCollapse:h.isParent&&o,ref:p,children:(0,u.jsxs)(_,{hasCollapse:h.isParent&&!g,children:[(0,u.jsx)(b,{"data-x":t,"data-y":r,"data-key":JSON.stringify(l),parent:h.isParent,children:(0,u.jsx)(m,{children:JSON.stringify(l).replaceAll('"',"")})}),h.isParent&&o&&!g&&(0,u.jsx)(S,{onClick:function(n){n.stopPropagation(),w?v(a):x(a)},children:w?(0,u.jsx)(O.Qw4,{size:18}):(0,u.jsx)(O.$l_,{size:18})})]})})};function A(n,e){return n.node.text===e.node.text&&n.node.width===e.node.width}var z=c.memo(T,A),R={width:40,height:40,rx:50,ry:50},D=function(n){var e=n.properties,t=e.text,o=e.data;return(0,u.jsx)(s.Node,(0,i.Z)((0,r.Z)({},n,o.isEmpty&&R),{label:(0,u.jsx)(c.Fragment,{}),children:function(n){var e=n.node,r=n.x,i=n.y;return Array.isArray(t)?(0,u.jsx)(C,{node:e,x:r,y:i}):(0,u.jsx)(z,{node:e,hasCollapse:o.hasChild,x:r,y:i})}}))},K=t(2628);function I(){var n=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  img {\n    filter: drop-shadow(2px 4px 6px black);\n  }\n"]);return I=function(){return n},n}function J(){var n=(0,a.Z)(["\n  color: ",";\n"]);return J=function(){return n},n}function G(){var n=(0,a.Z)(["\n  width: 60%;\n  text-align: center;\n  color: ",";\n"]);return G=function(){return n},n}var L=h.ZP.div(I()),M=h.ZP.h2(J(),(function(n){return n.theme.TEXT_DANGER})),X=h.ZP.p(G(),(function(n){return n.theme.TEXT_NORMAL})),B=function(){return(0,u.jsxs)(L,{children:[(0,u.jsx)("img",{src:"assets/undraw_qa_engineers_dg-5-p.svg",width:"200",height:"200",alt:"oops"}),(0,u.jsx)(M,{children:"JSON Crack unable to handle this file!"}),(0,u.jsx)(X,{children:"We apologize for the problem you encountered, we are doing our best as Open Source community to improve our service. JSON Crack is currently unable to handle such a huge file."})]})};function W(){var n=(0,a.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return W=function(){return n},n}var F=h.ZP.div(W(),(function(n){return n.isWidget?"100vh":"calc(100vh - 36px)"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){var e=n.theme;return"radial-gradient(#505050 0.5px, ".concat(e.BACKGROUND_SECONDARY," 0.5px)")}),(function(n){return n.theme.BACKGROUND_NODE})),U=function(n){var e=n.isWidget,t=n.openModal,a=n.setSelectedNode,f=(0,o.Z)(c.useState(.3),2),h=f[0],p=f[1],g=(0,N.Z)((function(n){return n.setGraphValue})),v=(0,d.Z)((function(n){return n.setConfig})),x=(0,N.Z)((function(n){return n.loading})),m=(0,d.Z)((function(n){return n.layout})),y=(0,N.Z)((function(n){return n.nodes})),b=(0,N.Z)((function(n){return n.edges})),w=(0,o.Z)(c.useState({width:2e3,height:2e3}),2),j=w[0],Z=w[1],C=c.useCallback((function(n,e){a(e.text),t()}),[t,a]),O=c.useCallback((function(n){v("zoomPanPinch",n)}),[v]),E=c.useCallback((function(n){if(n.width&&n.height){var e=n.width*n.height;p(5e5/e),Z({width:n.width+400,height:n.height+400}),requestAnimationFrame((function(){setTimeout((function(){g("loading",!1)}),0)}))}}),[g]),P=c.useCallback((function(){var n=document.querySelector("input:focus");n&&n.blur()}),[]);return y.length>8e3?(0,u.jsx)(B,{}):(0,u.jsxs)(F,{isWidget:e,children:[x&&(0,u.jsx)(K.g,{message:"Painting graph..."}),(0,u.jsx)(l.d$,{maxScale:2,minScale:h,initialScale:.4,wheel:{step:.08},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:O,onPanning:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.add("dragging")},onPanningStop:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.remove("dragging")},children:(0,u.jsx)(l.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden",display:x?"none":"block"},children:(0,u.jsx)(s.Canvas,{className:"jsoncrack-canvas",nodes:y,edges:b,maxWidth:j.width,maxHeight:j.height,direction:m,onLayoutChange:E,onCanvasClick:P,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(n){return(0,u.jsx)(D,(0,i.Z)((0,r.Z)({},n),{onClick:C}))},edge:function(n){return(0,u.jsx)(s.Edge,(0,i.Z)((0,r.Z)({},n),{containerClassName:"edge-".concat(n.id)}))}},m)})})]})},V=c.memo(U)},2628:function(n,e,t){t.d(e,{g:function(){return v}});var r=t(7297),i=t(5893),o=(t(7294),t(2125));function a(){var n=(0,r.Z)(["\n 99% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 36;\n  pointer-events: none;\n  animation: 0.2s ",";\n  animation-fill-mode: forwards;\n  visibility: hidden;\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return c=function(){return n},n}function l(){var n=(0,r.Z)(["\n  color: #faa81a;\n"]);return l=function(){return n},n}function s(){var n=(0,r.Z)(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return s=function(){return n},n}var d=(0,o.F4)(a()),f=o.ZP.div(u(),(function(n){return n.theme.BLACK_DARK}),d),h=o.ZP.h2(c()),p=o.ZP.span(l()),g=o.ZP.div(s()),v=function(n){var e=n.message;return(0,i.jsxs)(f,{children:[(0,i.jsxs)(h,{children:[(0,i.jsx)(p,{children:"JSON"})," Crack"]}),(0,i.jsx)(g,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})}},8357:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},a.apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),c(n.child))}))}function l(n){return function(e){return r.createElement(s,a({attr:a({},n.attr)},e),c(n.child))}}function s(n){var e=function(e){var t,i=n.attr,o=n.size,c=n.title,l=u(n,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}}}]);