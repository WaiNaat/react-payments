/*! For license information please see stories-BottomModal-stories.cc2ebea4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_payment=self.webpackChunkreact_payment||[]).push([[863],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/stories/BottomModal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:function(){return Modal},__namedExportsOrder:function(){return __namedExportsOrder}});var _Modal$parameters,_Modal$parameters2,_Modal$parameters2$do,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_component_common_Modal_BottomModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/component/common/Modal/BottomModal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Bottom Modal",component:_component_common_Modal_BottomModal__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{setIsOpen:{action:"Closing modal",description:"This is for setting isOpen state to false."},children:{table:{disable:!0}}}};__webpack_exports__.default=meta;var Modal={args:{isOpen:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"모달 내용은 여기에 표시됩니다!!"})}};Modal.parameters=(0,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Modal.parameters),{},{docs:(0,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Modal$parameters=Modal.parameters)||void 0===_Modal$parameters?void 0:_Modal$parameters.docs),{},{source:(0,C_Users_Q_Documents_GitHub_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    isOpen: true,\n    children: <p>모달 내용은 여기에 표시됩니다!!</p>\n  }\n}"},null===(_Modal$parameters2=Modal.parameters)||void 0===_Modal$parameters2||null===(_Modal$parameters2$do=_Modal$parameters2.docs)||void 0===_Modal$parameters2$do?void 0:_Modal$parameters2$do.source)})});var __namedExportsOrder=["Modal"]},"./src/component/common/Modal/BottomModal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return BottomModal}});var react=__webpack_require__("./node_modules/react/index.js"),BottomModal_module={modal:"BottomModal_modal__wui3M",open:"BottomModal_open__gzpdl",backdrop:"BottomModal_backdrop__e8JdI",container:"BottomModal_container__pq+-i"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BottomModal(props){var children=props.children,isOpen=props.isOpen,setIsOpen=props.setIsOpen,escCloseHandler=function escCloseHandler(e){"Escape"===e.key&&setIsOpen(!1)};return(0,react.useEffect)((function(){if(isOpen)return window.addEventListener("keyup",escCloseHandler),function(){window.removeEventListener("keyup",escCloseHandler)}}),[isOpen]),(0,jsx_runtime.jsxs)("div",{className:"".concat(BottomModal_module.modal," ").concat(isOpen?BottomModal_module.open:""),"aria-modal":isOpen,children:[(0,jsx_runtime.jsx)("div",{className:BottomModal_module.backdrop,onClick:function onClick(){return setIsOpen(!1)}}),(0,jsx_runtime.jsx)("div",{className:BottomModal_module.container,children:children})]})}try{BottomModal.displayName="BottomModal",BottomModal.__docgenInfo={description:"",displayName:"BottomModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(value: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/common/Modal/BottomModal.tsx#BottomModal"]={docgenInfo:BottomModal.__docgenInfo,name:"BottomModal",path:"src/component/common/Modal/BottomModal.tsx#BottomModal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);