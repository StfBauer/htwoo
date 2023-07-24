/*! For license information please see HOOFlyoutMenu-HOOFlyoutMenu-stories-mdx.094d1895.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[1993],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOFlyoutMenu/HOOFlyoutMenu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,standard:()=>standard});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Menus/HOOFlyoutMenu",component:_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"hooflyoutmenu",children:"HOOFlyoutMenu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"flyout-menu-items",children:"Flyout Menu Items"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Context items can be passed to the component with as an array for IFlyoutMenuItems as defined:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-ts",children:"export interface IHOOFlyoutMenuItem {\r\n  iconName: string;\r\n  label: string;\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Ed,{of:_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Standard",args:{contextItems:[{iconName:"Plus",label:"First Element"},{iconName:"Plus",label:"Second Element"}],contextItemClicked:(ev,contextItem)=>{alert(JSON.stringify(contextItem))}},children:Template.bind({})})})]})}const standard=Template.bind({});standard.storyName="Standard",standard.args={contextItems:[{iconName:"Plus",label:"First Element"},{iconName:"Plus",label:"Second Element"}],contextItemClicked:(ev,contextItem)=>{alert(JSON.stringify(contextItem))}},standard.parameters={storySource:{source:"args => <HOOFlyoutMenu {...args} />"}};const componentMeta={title:"Components/Menus/HOOFlyoutMenu",component:_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["stories-mdx"],includeStories:["standard"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/HOOAction/HOOAction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>HOOActionType,Z:()=>HOOAction});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOActionType=function(HOOActionType){return HOOActionType[HOOActionType.Action=0]="Action",HOOActionType}({});class HOOAction extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAction";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonaction";_labelClass="hoo-button-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAction",this.state={}}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,labelClass=this.props.labelElementAttributes?.className?`${this._labelClass} ${this.props.labelElementAttributes?.className}`:this._labelClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:this.props.iconName})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{...this.props.labelElementAttributes,className:labelClass,children:this.props.label}),this.props.type!==HOOActionType.Action&&this.props.flyoutContextItems?.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon hoo-buttonchevron",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:"hoo-icon-arrow-down"})})]}),!this.props.label&&this.props.children]}),this.props.flyoutContextItems&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z,{contextItems:this.props.flyoutContextItems,contextItemClicked:this.props.onClick})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAction.displayName="HOOAction";try{HOOAction.displayName="HOOAction",HOOAction.__docgenInfo={description:"",displayName:"HOOAction",props:{onClick:{defaultValue:null,description:"Direct interface for button click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"(Deprecated) Type of Action.",name:"type",required:!1,type:{name:"HOOActionType"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},flyoutContextItems:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"flyoutContextItems",required:!1,type:{name:"IHOOFlyoutMenuItem[]"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLSpanElement attributes that will be applied to the label element of the component.\nClass names will be appended to the end of the default class string - hoo-button-label {rootElementAttributes.class}",name:"labelElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAction/HOOAction.tsx#HOOAction"]={docgenInfo:HOOAction.__docgenInfo,name:"HOOAction",path:"src/HOOAction/HOOAction.tsx#HOOAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOOFlyoutMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAction/HOOAction.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOFlyoutMenuState{constructor(){}}class HOOFlyoutMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOFlyoutMenu";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonflyout";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFlyoutMenu",this.state=new HOOFlyoutMenuState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("menu",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.contextItems&&this.props.contextItems.map((ci=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"hoo-buttonflyout-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.Z,{label:ci.label,iconName:ci.iconName,type:_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.N.Action,onClick:event=>{this.props.contextItemClicked(event,ci)}})},ci.label)))})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOFlyoutMenu.displayName="HOOFlyoutMenu";try{HOOFlyoutMenu.displayName="HOOFlyoutMenu",HOOFlyoutMenu.__docgenInfo={description:"",displayName:"HOOFlyoutMenu",props:{contextItems:{defaultValue:null,description:"Context Items",name:"contextItems",required:!0,type:{name:"IHOOFlyoutMenuItem[]"}},contextItemClicked:{defaultValue:null,description:"Context Items clicked event, returns mouse event and HOOFlyoutMenuItem",name:"contextItemClicked",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) MenuHTMLAttributes attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & MenuHTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"]={docgenInfo:HOOFlyoutMenu.__docgenInfo,name:"HOOFlyoutMenu",path:"src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.5b86091c.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName){return this._symbolSetDictionary[iconName]}IconBase64(iconName){const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);