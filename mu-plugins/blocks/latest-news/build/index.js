(()=>{"use strict";var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.blocks,r=window.React,t=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components,a=window.wp.serverSideRender;var s=e.n(a);const w=JSON.parse('{"UU":"wporg/latest-news"}');(0,o.registerBlockType)(w.UU,{edit:function({attributes:e,setAttributes:o,name:a}){const{blogId:w,perPage:p,showCategories:c}=e;return(0,r.createElement)("div",{...(0,n.useBlockProps)()},(0,r.createElement)(n.InspectorControls,null,(0,r.createElement)(l.PanelBody,{title:(0,t.__)("Settings","wporg")},(0,r.createElement)(l.__experimentalNumberControl,{label:(0,t.__)("Blog ID","wporg"),onChange:e=>o({blogId:Number(e)}),value:w,help:(0,t.__)("For example, 8 for wordpress.org/news, 719 for developer.wordpress.org/news","wporg")}),(0,r.createElement)(l.__experimentalNumberControl,{label:(0,t.__)("Items To Show","wporg"),onChange:e=>o({perPage:1*e}),value:p}),(0,r.createElement)(l.CheckboxControl,{label:(0,t.__)("Show Categories","wporg"),onChange:e=>o({showCategories:e}),checked:c}))),(0,r.createElement)(l.Disabled,null,(0,r.createElement)(s(),{block:a,attributes:e})))},save:()=>null})})();