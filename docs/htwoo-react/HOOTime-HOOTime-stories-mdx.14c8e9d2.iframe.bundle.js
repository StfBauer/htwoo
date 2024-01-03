/*! For license information please see HOOTime-HOOTime-stories-mdx.14c8e9d2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[8047],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOTime/HOOTime.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOTime_stories,disabled:()=>disabled,extending:()=>extending,minMaxValues:()=>minMaxValues});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Common=__webpack_require__("./src/common/Common.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOTimeState{constructor(){}}class HOOTime extends react.PureComponent{LOG_SOURCE="💦HOOTime";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-input-time";_minValue="00:00:00";_maxValue="23:59:59";_timeId="hoo-time-";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOTime",this._timeId=props.forId||`${this._timeId}${(0,Common.z)(10)}`,this.state=new HOOTimeState}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const maxValue=this.props.maxValue||this._maxValue,minValue=this.props.minValue||this._minValue;try{const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,jsx_runtime.jsx)("input",{...this._rootProps,id:this._timeId,...this.props.rootElementAttributes,type:"time",value:this.props.value,className,min:minValue,max:maxValue,disabled:this.props.disabled||!1,onChange:this.props.onChange})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOTime.displayName="HOOTime";try{HOOTime.displayName="HOOTime",HOOTime.__docgenInfo={description:"",displayName:"HOOTime",props:{value:{defaultValue:null,description:'Current date value. Must be in format "hh:mm:ss.ms".',name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"(Optional) Is checkbox disabled - default false.",name:"disabled",required:!1,type:{name:"boolean"}},minValue:{defaultValue:null,description:'(Optional) Minimum value of time selector. Must be in format "hh:mm:ss.ms".',name:"minValue",required:!1,type:{name:"string"}},maxValue:{defaultValue:null,description:'(Optional) Maximum value of time selector. Must be in format "hh:mm:ss.ms".',name:"maxValue",required:!1,type:{name:"string"}},forId:{defaultValue:null,description:"(Optional) Id attribute for the input element; only valid if set in original component properties.",name:"forId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change event handler",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-input-time {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOTime/HOOTime.tsx#HOOTime"]={docgenInfo:HOOTime.__docgenInfo,name:"HOOTime",path:"src/HOOTime/HOOTime.tsx#HOOTime"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(HOOTime,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.h_,{title:"Components/Inputs/HOOTime",component:HOOTime}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hootime",children:"HOOTime"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:HOOTime}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Basic",args:{value:(new Date).toLocaleDateString()},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"with-minmax-values-set",children:"With Min/Max values set"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Min/Max Values",args:{value:(new Date).toLocaleDateString(),minValue:"00:00:00",maxValue:"23:59:59"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Disabled",args:{value:(new Date).toLocaleDateString(),disabled:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Extending",args:{value:(new Date).toLocaleDateString(),rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args={value:(new Date).toLocaleDateString()},basic.parameters={storySource:{source:"args => <HOOTime {...args} />"}};const minMaxValues=Template.bind({});minMaxValues.storyName="Min/Max Values",minMaxValues.args={value:(new Date).toLocaleDateString(),minValue:"00:00:00",maxValue:"23:59:59"},minMaxValues.parameters={storySource:{source:"args => <HOOTime {...args} />"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={value:(new Date).toLocaleDateString(),disabled:!0},disabled.parameters={storySource:{source:"args => <HOOTime {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={value:(new Date).toLocaleDateString(),rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:"args => <HOOTime {...args} />"}};const componentMeta={title:"Components/Inputs/HOOTime",component:HOOTime,tags:["stories-mdx"],includeStories:["basic","minMaxValues","disabled","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOTime_stories=componentMeta,__namedExportsOrder=["Template","basic","minMaxValues","disabled","extending"]},"./src/common/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getRandomString(chars){try{const text=new Array(chars);for(let i=0;i<chars;i++)text[i]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return text.join("")}catch(err){console.error(`💦Common (getRandomString) - ${err}`)}}function isEqual(a,b){try{if(a===b)return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;let keys1=Object.keys(a),keys2=Object.keys(b);if(keys1.length!==keys2.length)return!1;for(let key of keys1)if(!keys2.includes(key)||!isEqual(a[key],b[key]))return!1;return!0}catch(err){console.error(`💦Common (isEqual) - ${err}`)}}__webpack_require__.d(__webpack_exports__,{X:()=>isEqual,z:()=>getRandomString})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);