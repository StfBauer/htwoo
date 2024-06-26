/*! For license information please see 1738.83a4d066.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[1738],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOButton,v:()=>HOOButtonType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case HOOButtonType.Icon:this._componentClass=`${this._componentClass}icon`;break;case HOOButtonType.Primary:this._componentClass=`${this._componentClass}-primary`;break;case HOOButtonType.HyperlinkPrimary:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case HOOButtonType.HyperlinkStandard:this._hyperlinkType=!0;break;case HOOButtonType.CompoundPrimary:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case HOOButtonType.CompoundStandard:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state={}}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconName,this.props.iconTitle||""):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconRight,this.props.iconRightTitle):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),this.props.type===HOOButtonType.Icon&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconSVG}),(!this.props.label||this.props.type===HOOButtonType.Icon&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}HOOButton.displayName="HOOButton";try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconTitle:{defaultValue:null,description:"(Optional) button icon title",name:"iconTitle",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},iconRightTitle:{defaultValue:null,description:"(Optional) button icon title for right side.",name:"iconRightTitle",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIconOverflow/HOOIconOverflow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOIconOverflow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOButton/HOOButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconOverflow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIconOverflow";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonicon-overflow";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIconOverflow",this.state={showMenu:!1}}_showMenu=()=>{try{this.setState({showMenu:!this.state.showMenu})}catch(err){console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`)}};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.overflow&&(className+=" is-active"),this.state.showMenu&&(className+=" show-flyout"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,"aria-haspopup":"true",className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__.A,{type:_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Icon,iconName:"hoo-icon-ellipses",onClick:this._showMenu,rootElementAttributes:{className:"hoo-buttonicon-flyout","aria-haspopup":"true"}}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOIconOverflow.displayName="HOOIconOverflow";try{HOOIconOverflow.displayName="HOOIconOverflow",HOOIconOverflow.__docgenInfo={description:"",displayName:"HOOIconOverflow",props:{overflow:{defaultValue:null,description:"Overflow is active; show's children which is normally instance of HOOFlyoutMenu",name:"overflow",required:!0,type:{name:"boolean"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonicon-overflow {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIconOverflow/HOOIconOverflow.tsx#HOOIconOverflow"]={docgenInfo:HOOIconOverflow.__docgenInfo,name:"HOOIconOverflow",path:"src/HOOIconOverflow/HOOIconOverflow.tsx#HOOIconOverflow"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIconOverflow/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOIconOverflow/HOOIconOverflow.tsx").A},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconName,this.props.title||"<span/>");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.0b81bab1.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){try{const iconSVG=this._symbolSetDictionary[iconName]?.replace("%title%",iconTitle);return iconSVG||"<svg />"}catch(err){return console.error(`${this.LOG_SOURCE} (Icon) - ${err}`),null}}IconBase64(iconName){try{const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}catch(err){return console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`),null}}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./src/common/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getRandomString(chars){try{const text=new Array(chars);for(let i=0;i<chars;i++)text[i]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return text.join("")}catch(err){console.error(`💦Common (getRandomString) - ${err}`)}}function isEqual(a,b,c=0){try{if("function"==typeof a||"function"==typeof b||c>3)return!0;if(a===b)return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;let keys1=Object.keys(a),keys2=Object.keys(b);if(keys1.length!==keys2.length)return!1;for(let key of keys1)if(!keys2.includes(key)||!isEqual(a[key],b[key],c++))return!1;return!0}catch(err){console.error(`💦Common (isEqual) - ${err}`)}}__webpack_require__.d(__webpack_exports__,{$:()=>getRandomString,n:()=>isEqual})},"./src/common/OverflowObserver.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>OverflowResizer});class OverflowResizer{LOG_SOURCE="💦OverflowResizer";_overflowItems=[];constructor(instanceId){this._instanceId=instanceId,this._resizeObserver=new ResizeObserver(this._resizeObserverHandler)}get InstanceId(){return this._instanceId}set ObserveElement(value){this._resizeContainer=value,this._resizeObserver.observe(value,{box:"border-box"})}set OverflowChangedEvent(value){this._overflowChangedEvent=value}_resizeObserverHandler=()=>{try{this._initOverflowElements(this._resizeContainer.children),this._entryHandler()}catch(err){console.error(`${this.LOG_SOURCE} (_resizeObserverHandler) - ${err}`)}};_initOverflowElements=children=>{try{if(this._overflowItems.length<children.length){this._overflowItems=[];let overallWidth=0;for(let i=0;i<children.length;i++)if(overallWidth+=children[i].clientWidth,!children[i].classList.contains("hoo-buttonicon-overflow")){let currentItem={child:children[i],ref:`ref-${this._instanceId}-${i}`,width:children[i].clientWidth,overallWidth};children[i].dataset.ref=currentItem.ref,this._overflowItems.push(currentItem)}}}catch(err){console.error(`${this.LOG_SOURCE} (_initOverflowElements) - ${err}`)}};_entryHandler=()=>{try{this._getOverflowItems()}catch(err){console.error(`${this.LOG_SOURCE} (_entryHandler) - ${err}`)}};_getOverflowItems=()=>{try{const defaultOffset=40,targetWidth=this._resizeContainer.parentElement.clientWidth;let curOverFlowItems=this._overflowItems.filter((item=>item.overallWidth>targetWidth-defaultOffset)),curItems=this._overflowItems.filter((item=>item.overallWidth<targetWidth-defaultOffset)),overflowControl=this._resizeContainer.querySelector(".hoo-buttonicon-overflow .hoo-buttonflyout");if(overflowControl&&overflowControl.children.length<curOverFlowItems.length)for(let i=0;i<curOverFlowItems.length;i++)if(null!==this._resizeContainer.querySelector(`[data-ref=${curOverFlowItems[i].ref}]`)){const listItem=document.createElement("li"),overflow=this._resizeContainer.querySelector(`[data-ref=${curOverFlowItems[i].ref}]`);listItem.appendChild(overflow),overflowControl.appendChild(listItem)}if(this._overflowChangedEvent(null!=overflowControl&&0!==overflowControl?.children.length),overflowControl&&overflowControl.children.length>curOverFlowItems.length)for(let i=0;i<curItems.length;i++)if(null!==overflowControl.querySelector(`[data-ref=${curItems[i].ref}]`)){let overflowElement=overflowControl.querySelector(`[data-ref=${curItems[i].ref}]`);this._resizeContainer.appendChild(overflowElement)}for(let i=0;i<overflowControl?.children.length;i++)0===overflowControl.children[i].children.length&&overflowControl.children[i].remove()}catch(err){console.error(`${this.LOG_SOURCE} (_getOverflowItems) - ${err}`)}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);