/*! For license information please see HOODialogContent-HOODialogContent-stories.ea3e3e90.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[270,418,3342,3694,3746,5142,5518,7470,8878,8894,8910],{"./src/HOODialogContent/HOODialogContent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Extending:()=>Extending,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOODialogContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOODialogContent/HOODialogContent.tsx"),_HOOLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOLabel/index.ts");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOODialogContent__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOLabel__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Contents of Dialog"})}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Dialogs/HOODialogContent",component:_HOODialogContent__WEBPACK_IMPORTED_MODULE_1__.A},Basic={render:Template.bind({}),name:"Basic",args:{}},Extending={render:Template.bind({}),name:"Extending",args:{rootElementAttributes:{style:{backgroundColor:"pink"}}}},__namedExportsOrder=["Basic","Extending"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Basic",\n  args: {}\n}',...Basic.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: {\n    rootElementAttributes: {\n      style: {\n        backgroundColor: "pink"\n      }\n    }\n  }\n}',...Extending.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/HOODialogContent/HOODialogContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOODialogContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");class HOODialogContentState{constructor(){}}class HOODialogContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{LOG_SOURCE="💦HOODialogContent";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-dlgcontent";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOODialogContent",this.state=new HOODialogContentState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOODialogContent.displayName="HOODialogContent",HOODialogContent.__docgenInfo={description:"",displayName:"HOODialogContent",props:{rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-dlgcontent {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOODialogContent/HOODialogContent.tsx#HOODialogContent"]={docgenInfo:HOODialogContent.__docgenInfo,name:"HOODialogContent",path:"src/HOODialogContent/HOODialogContent.tsx#HOODialogContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/HOOLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");class HOOLabelState{constructor(){}}class HOOLabel extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOLabel";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOLabel",this.state=new HOOLabelState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const isRequired=this.props.required?"is-required":"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}`:`${this._componentClass} ${isRequired}`;return this.props.label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{...this._rootProps,...this.props.rootElementAttributes,htmlFor:this.props.for,className,children:this.props.label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{...this._rootProps,...this.props.rootElementAttributes,htmlFor:this.props.for,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOLabel.displayName="HOOLabel",HOOLabel.__docgenInfo={description:"",displayName:"HOOLabel",props:{label:{defaultValue:null,description:"(Optional) The label string; if omitted will use children",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"(Optional) Styles label to indicated the associated input is required",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"(Optional) Specifies the id of the form element the label should be bound to",name:"for",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLLabelElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOLabel/HOOLabel.tsx#HOOLabel"]={docgenInfo:HOOLabel.__docgenInfo,name:"HOOLabel",path:"src/HOOLabel/HOOLabel.tsx#HOOLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOLabel/HOOLabel.tsx").A}}]);