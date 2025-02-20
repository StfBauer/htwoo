/*! For license information please see HOOAvatarPres-HOOAvatarPres-stories.b59a6155.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[270,418,1254,3342,3694,3746,5142,5518,7470,8878,8910],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/HOOAvatar/HOOAvatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOAvatar,Dh:()=>HOOAvatarSize});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),HOOAvatarSize=function(HOOAvatarSize){return HOOAvatarSize.Px16="16",HOOAvatarSize.Px24="24",HOOAvatarSize.Px32="32",HOOAvatarSize.Px40="40",HOOAvatarSize.Px48="48",HOOAvatarSize.Px64="64",HOOAvatarSize.Px72="72",HOOAvatarSize.Px96="96",HOOAvatarSize}({});class HOOAvatarState{constructor(){}}class HOOAvatar extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOAvatar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatar",this.state=new HOOAvatarState,null!=props.size&&(this._componentClass+=` ${this._componentClass}-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:this.props.imageSource,alt:this.props.imageAlt,className:"hoo-avatar-img",height:this.props.size,width:this.props.size,loading:"lazy"}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOAvatar.displayName="HOOAvatar",HOOAvatar.__docgenInfo={description:"",displayName:"HOOAvatar",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"]={docgenInfo:HOOAvatar.__docgenInfo,name:"HOOAvatar",path:"src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOAvatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,D:()=>_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Dh});var _HOOAvatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOAvatar/HOOAvatar.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Ay},"./src/HOOAvatarPres/HOOAvatarPres.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Extending:()=>Extending,Larger:()=>Larger,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOOAvatarPres__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAvatarPres/HOOAvatarPres.tsx"),_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOAvatar/index.ts"),_HOOPresence__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOPresence/index.ts");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOAvatarPres__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Personas/HOOAvatarPres",component:_HOOAvatarPres__WEBPACK_IMPORTED_MODULE_1__.A},Basic={render:Template.bind({}),name:"Basic",args:{size:_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:_HOOPresence__WEBPACK_IMPORTED_MODULE_3__.C.Online}},Larger={render:Template.bind({}),name:"Larger",args:{size:_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__.D.Px64,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:_HOOPresence__WEBPACK_IMPORTED_MODULE_3__.C.Online}},Extending={render:Template.bind({}),name:"Extending",args:{size:_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:_HOOPresence__WEBPACK_IMPORTED_MODULE_3__.C.Online,rootElementAttributes:{style:{backgroundColor:"pink"}}}},__namedExportsOrder=["Basic","Larger","Extending"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Basic",\n  args: {\n    size: HOOAvatarSize.Px32,\n    imageSource: "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",\n    imageAlt: "Placeholder Image",\n    onClick: () => {},\n    status: HOOPresenceStatus.Online\n  }\n}',...Basic.parameters?.docs?.source}}},Larger.parameters={...Larger.parameters,docs:{...Larger.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Larger",\n  args: {\n    size: HOOAvatarSize.Px64,\n    imageSource: "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",\n    imageAlt: "Placeholder Image",\n    onClick: () => {},\n    status: HOOPresenceStatus.Online\n  }\n}',...Larger.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: {\n    size: HOOAvatarSize.Px32,\n    imageSource: "https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",\n    imageAlt: "Placeholder Image",\n    onClick: () => {},\n    status: HOOPresenceStatus.Online,\n    rootElementAttributes: {\n      style: {\n        backgroundColor: "pink"\n      }\n    }\n  }\n}',...Extending.parameters?.docs?.source}}}},"./src/HOOAvatarPres/HOOAvatarPres.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOAvatarPres});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOAvatar/index.ts"),_HOOPresence__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOPresence/index.ts");class HOOAvatarPresState{constructor(){}}class HOOAvatarPres extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOAvatarPres";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar-pres";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatarPres",this.state=new HOOAvatarPresState,null!=props.size&&(this._componentClass+=`-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOAvatar__WEBPACK_IMPORTED_MODULE_2__.A,{size:this.props.size,imageSource:this.props.imageSource,imageAlt:this.props.imageAlt,rootElementAttributes:this.props.avatarAttributes}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOPresence__WEBPACK_IMPORTED_MODULE_3__.A,{status:this.props.status,rootElementAttributes:this.props.presenceAttributes})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOAvatarPres.displayName="HOOAvatarPres",HOOAvatarPres.__docgenInfo={description:"",displayName:"HOOAvatarPres",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"Presence status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar-pres {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},avatarAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOAvatar element of the component.",name:"avatarAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},presenceAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOPresence element of the component.",name:"presenceAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"]={docgenInfo:HOOAvatarPres.__docgenInfo,name:"HOOAvatarPres",path:"src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOPresence/HOOPresence.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOPresence,C9:()=>HOOPresenceStatus});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),HOOPresenceStatus=function(HOOPresenceStatus){return HOOPresenceStatus.Away="away",HOOPresenceStatus.DoNotDisturb="dnd",HOOPresenceStatus.Online="online",HOOPresenceStatus.Invisible="invisible",HOOPresenceStatus.OutOfOffice="off",HOOPresenceStatus}({});class HOOPresenceState{constructor(){}}class HOOPresence extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOPresence";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-presence";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPresence",this.state=new HOOPresenceState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} is-${this.props.status}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...this._rootProps,title:this.props.status,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOPresence.displayName="HOOPresence",HOOPresence.__docgenInfo={description:"",displayName:"HOOPresence",props:{status:{defaultValue:null,description:"Presence Status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-presence {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPresence/HOOPresence.tsx#HOOPresence"]={docgenInfo:HOOPresence.__docgenInfo,name:"HOOPresence",path:"src/HOOPresence/HOOPresence.tsx#HOOPresence"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOPresence/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,C:()=>_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.C9});var _HOOPresence__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOPresence/HOOPresence.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.Ay}}]);