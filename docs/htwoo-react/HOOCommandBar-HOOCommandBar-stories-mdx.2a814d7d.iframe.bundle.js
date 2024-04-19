"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[4404],{"./src/HOOCommandBar/HOOCommandBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOCommandBar_stories,extending:()=>extending,flyoutMenuItems:()=>flyoutMenuItems,options:()=>options,overflow:()=>overflow});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),HOOIconOverflow=__webpack_require__("./src/HOOIconOverflow/index.ts"),OverflowObserver=__webpack_require__("./src/common/OverflowObserver.ts"),Common=__webpack_require__("./src/common/Common.ts");const src_HOOButtonCommand=__webpack_require__("./src/HOOButtonCommand/HOOButtonCommand.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOCommandBar extends react.PureComponent{LOG_SOURCE="💦HOOCommandBar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-cmdbar";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOCommandBar",this.state={showOverflow:!1},this._overflowResizer=new OverflowObserver.T(`HOOCommandBarOR_${(0,Common.$)(10)}`),this._overflowResizer.OverflowChangedEvent=this._toggleOverflow,this._overflowContainer=react.createRef()}_toggleOverflow=overflow=>{this.setState({showOverflow:overflow})};componentDidMount(){try{this.props.hasOverflow&&null!=this._overflowResizer&&null!=this._overflowContainer.current&&(this._overflowResizer.ObserveElement=this._overflowContainer.current)}catch(err){console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`)}}_renderCommandItems(){let retVal=null;try{this.props.commandItems&&(retVal=this.props.commandItems.map(((pi,index)=>(0,jsx_runtime.jsx)(src_HOOButtonCommand,{label:pi.text,onClick:ev=>{this.props.onClick(ev,pi.key,null)},flyoutMenuItems:pi.flyoutMenuItems,flyoutMenuItemClicked:(ev,fmi)=>{this.props.onClick(ev,pi.key,fmi)},rootElementAttributes:this.props.commandButtonAttributes},pi.key))))}catch(err){console.error(`${this.LOG_SOURCE} (_renderCommandItems) - ${err}`)}return retVal}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.hasOverflow&&(className+=" has-overflow"),(0,jsx_runtime.jsxs)("menu",{...this._rootProps,...this.props.rootElementAttributes,className,children:[!this.props.hasOverflow&&this._renderCommandItems(),this.props.hasOverflow&&(0,jsx_runtime.jsxs)("div",{ref:this._overflowContainer,className:""+(this.props.hasOverflow?"hoo-overflow":""),children:[this._renderCommandItems(),(0,jsx_runtime.jsx)(HOOIconOverflow.A,{overflow:this.state.showOverflow,children:(0,jsx_runtime.jsx)("menu",{className:"hoo-buttonflyout"})})]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOCommandBar.displayName="HOOCommandBar";try{HOOCommandBar.displayName="HOOCommandBar",HOOCommandBar.__docgenInfo={description:"",displayName:"HOOCommandBar",props:{commandItems:{defaultValue:null,description:"Menu items to render in Command Bar",name:"commandItems",required:!0,type:{name:"IHOOCommandItem[]"}},onClick:{defaultValue:null,description:"Command Item click event handler.",name:"onClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>, commandKey: string | number, flyoutItem: IHOOFlyoutMenuItem) => void"}},hasOverflow:{defaultValue:null,description:"(Optional) Overflow enabled - default false",name:"hasOverflow",required:!1,type:{name:"boolean"}},commandButtonAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to all Command Buttons.\nClass names will be appended to the end of the default class string - hoo-button-command {rootElementAttributes.class}",name:"commandButtonAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLMenuElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-cmdbar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLMenuElement> & HTMLAttributes<HTMLMenuElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOCommandBar/HOOCommandBar.tsx#HOOCommandBar"]={docgenInfo:HOOCommandBar.__docgenInfo,name:"HOOCommandBar",path:"src/HOOCommandBar/HOOCommandBar.tsx#HOOCommandBar"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/HOOLabel/index.ts");const flyoutMenuItems=[{iconName:"hoo-icon-plus",label:"First Element"},{iconName:"hoo-icon-plus",label:"Second Element"}],options=[{key:1,text:"Menu 1",flyoutMenuItems},{key:2,text:"Menu 2",flyoutMenuItems},{key:3,text:"Menu 3",flyoutMenuItems},{key:4,text:"Menu 4"},{key:5,text:"Menu 5",flyoutMenuItems:[]}],Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(HOOCommandBar,{...args,onClick:(ev,key,flyoutItem)=>{alert(`Selected menu option ${key} -> flyout item: ${JSON.stringify(flyoutItem)}`),updateArgs({...args})}})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/Menus/HOOCommandBar",component:HOOCommandBar}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoocommandbar",children:"HOOCommandBar"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"options"})," property requires an array of items of type ",(0,jsx_runtime.jsx)(_components.code,{children:"IHOOCommandItem"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"export interface IHOOCommandItem {\r\n  key: number | string;\r\n  text: string;\r\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:HOOCommandBar}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Basic",args:(symset.initSymbols(),{commandItems:options,hasOverflow:!1}),children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overflow",children:"Overflow"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Overflow",args:(symset.initSymbols(),{commandItems:options,hasOverflow:!0}),children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Extending",args:(symset.initSymbols(),{commandItems:options,hasOverflow:!0,rootElementAttributes:{style:{backgroundColor:"mintcream"}}}),children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args=(symset.initSymbols(),{commandItems:options,hasOverflow:!1}),basic.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key, flyoutItem) => {\n    alert(`Selected menu option ${key} -> flyout item: ${JSON.stringify(flyoutItem)}`);\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOCommandBar {...args} onClick={handle} />;\n}"}};const overflow=Template.bind({});overflow.storyName="Overflow",overflow.args=(symset.initSymbols(),{commandItems:options,hasOverflow:!0}),overflow.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key, flyoutItem) => {\n    alert(`Selected menu option ${key} -> flyout item: ${JSON.stringify(flyoutItem)}`);\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOCommandBar {...args} onClick={handle} />;\n}"}};const extending=Template.bind({});extending.storyName="Extending",extending.args=(symset.initSymbols(),{commandItems:options,hasOverflow:!0,rootElementAttributes:{style:{backgroundColor:"mintcream"}}}),extending.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key, flyoutItem) => {\n    alert(`Selected menu option ${key} -> flyout item: ${JSON.stringify(flyoutItem)}`);\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOCommandBar {...args} onClick={handle} />;\n}"}};const componentMeta={title:"Components/Menus/HOOCommandBar",component:HOOCommandBar,tags:["stories-mdx"],includeStories:["basic","overflow","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOCommandBar_stories=componentMeta,__namedExportsOrder=["flyoutMenuItems","options","Template","basic","overflow","extending"]},"./src/HOOAction/HOOAction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOAction,p:()=>HOOActionType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOActionType=function(HOOActionType){return HOOActionType[HOOActionType.Action=0]="Action",HOOActionType}({});class HOOAction extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAction";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonaction";_labelClass="hoo-button-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAction",this.state={}}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,labelClass=this.props.labelElementAttributes?.className?`${this._labelClass} ${this.props.labelElementAttributes?.className}`:this._labelClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.A,{iconName:this.props.iconName})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{...this.props.labelElementAttributes,className:labelClass,children:this.props.label}),this.props.type!==HOOActionType.Action&&this.props.flyoutContextItems?.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon hoo-buttonchevron",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.A,{iconName:"hoo-icon-arrow-down"})})]}),!this.props.label&&this.props.children]}),this.props.flyoutContextItems&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.A,{contextItems:this.props.flyoutContextItems,contextItemClicked:this.props.onClick})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAction.displayName="HOOAction";try{HOOAction.displayName="HOOAction",HOOAction.__docgenInfo={description:"",displayName:"HOOAction",props:{onClick:{defaultValue:null,description:"Direct interface for button click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"(Deprecated) Type of Action.",name:"type",required:!1,type:{name:"HOOActionType"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},flyoutContextItems:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"flyoutContextItems",required:!1,type:{name:"IHOOFlyoutMenuItem[]"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLSpanElement attributes that will be applied to the label element of the component.\nClass names will be appended to the end of the default class string - hoo-button-label {rootElementAttributes.class}",name:"labelElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAction/HOOAction.tsx#HOOAction"]={docgenInfo:HOOAction.__docgenInfo,name:"HOOAction",path:"src/HOOAction/HOOAction.tsx#HOOAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOButtonCommand/HOOButtonCommand.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOButtonCommand});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOButtonCommand extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOButtonCommand";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttoncmd";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButtonCommand",this.state={showFlyout:!1}}_flyoutItemClicked=(event,item)=>{event.stopPropagation(),this.setState({showFlyout:!1}),"function"==typeof this.props.flyoutMenuItemClicked&&this.props.flyoutMenuItemClicked(event,item)};_onClick=ev=>{try{this.props.flyoutMenuItems&&this.props.flyoutMenuItems.length>0?this.setState({showFlyout:!this.state.showFlyout}):this.props.onClick(ev)}catch(err){}};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;this.state.showFlyout&&(className+=" show-flyout");const leftIcon=`${this.props.leftIconName||"hoo-icon-plus"}`,rightIcon=`${this.props.rightIconName||"hoo-icon-arrow-down"}`,ariaHaspopup=null!=this.props.flyoutMenuItems&&this.props.flyoutMenuItems.length>0?{"aria-haspopup":!0}:null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,...ariaHaspopup,className,onClick:this._onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{className:"hoo-buttoncmd","aria-haspopup":"true",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconName:leftIcon})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-label",children:this.props.label||this.props.children}),null!=this.props.flyoutMenuItems&&this.props.flyoutMenuItems.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon hoo-buttonchevron",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconName:rightIcon})})]}),this.props.flyoutMenuItems&&this.props.flyoutMenuItems.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_1__.A,{contextItems:this.props.flyoutMenuItems,contextItemClicked:this._flyoutItemClicked})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOButtonCommand.displayName="HOOButtonCommand";try{HOOButtonCommand.displayName="HOOButtonCommand",HOOButtonCommand.__docgenInfo={description:"",displayName:"HOOButtonCommand",props:{label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},flyoutMenuItems:{defaultValue:null,description:"(Optional) Flyout menu items, if omitted, no flyout will be rendered.",name:"flyoutMenuItems",required:!1,type:{name:"IHOOFlyoutMenuItem[]"}},leftIconName:{defaultValue:null,description:"(Optional) icon name, if omitted, hoo-icon-plus will be used.",name:"leftIconName",required:!1,type:{name:"string"}},rightIconName:{defaultValue:null,description:"(Optional) icon name, if omitted, hoo-icon-arrow-down will be used.",name:"rightIconName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"(Optional) When no flyout menu items available, returns mouse event for button click",name:"onClick",required:!1,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},flyoutMenuItemClicked:{defaultValue:null,description:"(Optional) Flyout menu items click event, returns mouse event and HOOFlyoutMenuItem",name:"flyoutMenuItemClicked",required:!1,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttoncmd {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButtonCommand/HOOButtonCommand.tsx#HOOButtonCommand"]={docgenInfo:HOOButtonCommand.__docgenInfo,name:"HOOButtonCommand",path:"src/HOOButtonCommand/HOOButtonCommand.tsx#HOOButtonCommand"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOFlyoutMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAction/HOOAction.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOFlyoutMenuState{constructor(){}}class HOOFlyoutMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOFlyoutMenu";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonflyout";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFlyoutMenu",this.state=new HOOFlyoutMenuState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("menu",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.contextItems&&this.props.contextItems.map((ci=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"hoo-buttonflyout-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.A,{label:ci.label,iconName:ci.iconName,type:_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.p.Action,onClick:event=>{this.props.contextItemClicked(event,ci)}})},ci.label)))})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOFlyoutMenu.displayName="HOOFlyoutMenu";try{HOOFlyoutMenu.displayName="HOOFlyoutMenu",HOOFlyoutMenu.__docgenInfo={description:"",displayName:"HOOFlyoutMenu",props:{contextItems:{defaultValue:null,description:"Context Items",name:"contextItems",required:!0,type:{name:"IHOOFlyoutMenuItem[]"}},contextItemClicked:{defaultValue:null,description:"Context Items clicked event, returns mouse event and HOOFlyoutMenuItem",name:"contextItemClicked",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) MenuHTMLAttributes attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & MenuHTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"]={docgenInfo:HOOFlyoutMenu.__docgenInfo,name:"HOOFlyoutMenu",path:"src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/HOOLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOLabelState{constructor(){}}class HOOLabel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOLabel";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOLabel",this.state=new HOOLabelState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const isRequired=this.props.required?"is-required":"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}`:`${this._componentClass} ${isRequired}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{...this._rootProps,...this.props.rootElementAttributes,htmlFor:this.props.for,className,children:this.props.label})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOLabel.displayName="HOOLabel";try{HOOLabel.displayName="HOOLabel",HOOLabel.__docgenInfo={description:"",displayName:"HOOLabel",props:{label:{defaultValue:null,description:"The label string",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"(Optional) Styles label to indicated the associated input is required",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"(Optional) Specifies the id of the form element the label should be bound to",name:"for",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLLabelElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOLabel/HOOLabel.tsx#HOOLabel"]={docgenInfo:HOOLabel.__docgenInfo,name:"HOOLabel",path:"src/HOOLabel/HOOLabel.tsx#HOOLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOLabel/HOOLabel.tsx").A}}]);