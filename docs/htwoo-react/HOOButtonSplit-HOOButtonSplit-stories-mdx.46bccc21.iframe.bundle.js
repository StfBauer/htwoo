/*! For license information please see HOOButtonSplit-HOOButtonSplit-stories-mdx.46bccc21.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[7930],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOButtonSplit/HOOButtonSplit.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultParams:()=>DefaultParams,Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HOOButtonSplit_stories,extending:()=>extending,primary:()=>primary,standard:()=>standard});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),SymbolSet=__webpack_require__("./src/SymbolSet.ts"),HOOFlyoutMenu=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),HOOIcon=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOButtonSplitType=function(HOOButtonSplitType){return HOOButtonSplitType[HOOButtonSplitType.Standard=0]="Standard",HOOButtonSplitType[HOOButtonSplitType.Primary=1]="Primary",HOOButtonSplitType}({});class HOOButtonSplit extends react.PureComponent{LOG_SOURCE="💦HOOButtonSplit";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButtonSplit",props.type){case HOOButtonSplitType.Primary:this._componentClass=`${this._componentClass}split-primary`;break;case HOOButtonSplitType.Standard:this._componentClass=`${this._componentClass}split`}this.state={showFlyout:!1}}_buttonClicked=()=>{this.props.flyoutContextItems&&this.props.flyoutContextItems.length>0&&this.setState({showFlyout:!this.state.showFlyout})};_flyoutItemClicked=(event,item)=>{this.setState({showFlyout:!1}),"function"==typeof this.props.flyoutContextItemsClicked&&this.props.flyoutContextItemsClicked(event,item)};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const buttonDisabled=!(this.props.flyoutContextItems&&this.props.flyoutContextItems.length>0),showFlyoutClass=this.state.showFlyout?"show-flyout ":"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${showFlyoutClass}${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${showFlyoutClass}`,iconName=`${this.props.rightIconName||"hoo-icon-arrow-down"}`,iconSVG=SymbolSet.G.Icon(iconName,this.props.rightIconTitle||"");return(0,jsx_runtime.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,"aria-haspopup":"true",className,children:[(0,jsx_runtime.jsx)("button",{className:"hoo-buttonsplit-standard","aria-haspopup":"true",children:(0,jsx_runtime.jsx)("span",{className:"hoo-button-label",children:this.props.label||this.props.children})}),(0,jsx_runtime.jsx)("button",{className:"hoo-buttonsplit-carret",onClick:this._buttonClicked,"aria-pressed":this.state.showFlyout,disabled:buttonDisabled,"aria-disabled":buttonDisabled,children:(0,jsx_runtime.jsx)(HOOIcon.A,{iconSVG,rootElementAttributes:{className:"hoo-button-label"}})}),this.props.flyoutContextItems&&(0,jsx_runtime.jsx)(HOOFlyoutMenu.A,{contextItems:this.props.flyoutContextItems,contextItemClicked:this._flyoutItemClicked})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOButtonSplit.displayName="HOOButtonSplit";try{HOOButtonSplit.displayName="HOOButtonSplit",HOOButtonSplit.__docgenInfo={description:"",displayName:"HOOButtonSplit",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flyoutContextItems:{defaultValue:null,description:"(Optional) Flyout menu items, if omitted, no flyout will be rendered.",name:"flyoutContextItems",required:!0,type:{name:"IHOOFlyoutMenuItem[]"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},rightIconName:{defaultValue:null,description:"(Optional) icon name, if omitted, icon-arrow-down will be used.",name:"rightIconName",required:!1,type:{name:"string"}},rightIconTitle:{defaultValue:null,description:"(Optional) icon title",name:"rightIconTitle",required:!1,type:{name:"string"}},flyoutContextItemsClicked:{defaultValue:null,description:"(Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem",name:"flyoutContextItemsClicked",required:!1,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButtonSplit/HOOButtonSplit.tsx#HOOButtonSplit"]={docgenInfo:HOOButtonSplit.__docgenInfo,name:"HOOButtonSplit",path:"src/HOOButtonSplit/HOOButtonSplit.tsx#HOOButtonSplit"})}catch(__react_docgen_typescript_loader_error){}const DefaultParams={label:"Button",flyoutContextItems:[{iconName:"hoo-icon-plus",label:"First Element"},{iconName:"hoo-icon-plus",label:"Second Element"}],flyoutContextItemsClicked:(event,item)=>{console.alert(item.label)}},Template=args=>(0,jsx_runtime.jsx)(HOOButtonSplit,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/Buttons/HOOButtonSplit",component:HOOButtonSplit}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoobuttonsplit",children:"HOOButtonSplit"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Predefined enum defined for the supported split button types:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'export enum HOOButtonSplitType {\r\n  "Standard",\r\n  "Primary"\r\n}\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:HOOButtonSplit}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"standard",children:"Standard"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Standard",args:function(){SymbolSet.G.initSymbols();const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Standard,mergedArgs}(),children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"primary",children:"Primary"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Primary",args:function(){const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Primary,mergedArgs}(),children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Extending",args:function(){const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Primary,mergedArgs.rootElementAttributes={style:{backgroundColor:"pink"}},mergedArgs}(),children:Template.bind({})})})]})}const standard=Template.bind({});standard.storyName="Standard",standard.args=function(){SymbolSet.G.initSymbols();const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Standard,mergedArgs}(),standard.parameters={storySource:{source:"args => <HOOButtonSplit {...args} />"}};const primary=Template.bind({});primary.storyName="Primary",primary.args=function(){const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Primary,mergedArgs}(),primary.parameters={storySource:{source:"args => <HOOButtonSplit {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args=function(){const mergedArgs=JSON.parse(JSON.stringify(DefaultParams));return mergedArgs.type=HOOButtonSplitType.Primary,mergedArgs.rootElementAttributes={style:{backgroundColor:"pink"}},mergedArgs}(),extending.parameters={storySource:{source:"args => <HOOButtonSplit {...args} />"}};const componentMeta={title:"Components/Buttons/HOOButtonSplit",component:HOOButtonSplit,tags:["stories-mdx"],includeStories:["standard","primary","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOButtonSplit_stories=componentMeta,__namedExportsOrder=["DefaultParams","Template","standard","primary","extending"]},"./src/HOOAction/HOOAction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOAction,p:()=>HOOActionType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOActionType=function(HOOActionType){return HOOActionType[HOOActionType.Action=0]="Action",HOOActionType}({});class HOOAction extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAction";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonaction";_labelClass="hoo-button-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAction",this.state={}}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,labelClass=this.props.labelElementAttributes?.className?`${this._labelClass} ${this.props.labelElementAttributes?.className}`:this._labelClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.A,{iconName:this.props.iconName})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{...this.props.labelElementAttributes,className:labelClass,children:this.props.label}),this.props.type!==HOOActionType.Action&&this.props.flyoutContextItems?.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon hoo-buttonchevron",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.A,{iconName:"hoo-icon-arrow-down"})})]}),!this.props.label&&this.props.children]}),this.props.flyoutContextItems&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.A,{contextItems:this.props.flyoutContextItems,contextItemClicked:this.props.onClick})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAction.displayName="HOOAction";try{HOOAction.displayName="HOOAction",HOOAction.__docgenInfo={description:"",displayName:"HOOAction",props:{onClick:{defaultValue:null,description:"Direct interface for button click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"(Deprecated) Type of Action.",name:"type",required:!1,type:{name:"HOOActionType"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},flyoutContextItems:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"flyoutContextItems",required:!1,type:{name:"IHOOFlyoutMenuItem[]"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLSpanElement attributes that will be applied to the label element of the component.\nClass names will be appended to the end of the default class string - hoo-button-label {rootElementAttributes.class}",name:"labelElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAction/HOOAction.tsx#HOOAction"]={docgenInfo:HOOAction.__docgenInfo,name:"HOOAction",path:"src/HOOAction/HOOAction.tsx#HOOAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOFlyoutMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAction/HOOAction.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOFlyoutMenuState{constructor(){}}class HOOFlyoutMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOFlyoutMenu";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonflyout";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFlyoutMenu",this.state=new HOOFlyoutMenuState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("menu",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.contextItems&&this.props.contextItems.map((ci=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"hoo-buttonflyout-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.A,{label:ci.label,iconName:ci.iconName,type:_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.p.Action,onClick:event=>{this.props.contextItemClicked(event,ci)}})},ci.label)))})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOFlyoutMenu.displayName="HOOFlyoutMenu";try{HOOFlyoutMenu.displayName="HOOFlyoutMenu",HOOFlyoutMenu.__docgenInfo={description:"",displayName:"HOOFlyoutMenu",props:{contextItems:{defaultValue:null,description:"Context Items",name:"contextItems",required:!0,type:{name:"IHOOFlyoutMenuItem[]"}},contextItemClicked:{defaultValue:null,description:"Context Items clicked event, returns mouse event and HOOFlyoutMenuItem",name:"contextItemClicked",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) MenuHTMLAttributes attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & MenuHTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"]={docgenInfo:HOOFlyoutMenu.__docgenInfo,name:"HOOFlyoutMenu",path:"src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconName,this.props.title||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.0b81bab1.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){return this._symbolSetDictionary[iconName].replace("%title%",iconTitle)}IconBase64(iconName){const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);