"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[6275],{"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOButton,v:()=>HOOButtonType});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButton extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case 0:this._componentClass=`${this._componentClass}icon`;break;case 1:this._componentClass=`${this._componentClass}-primary`;break;case 3:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case 4:this._hyperlinkType=!0;break;case 5:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case 6:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state={}}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey),this.props.iconTitle&&(this._rootProps.title=this.props.iconTitle);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconName,this.props.iconTitle||""):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconRight,this.props.iconRightTitle):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__.A,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),0===this.props.type&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__.A,{iconSVG}),(!this.props.label||0===this.props.type&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconTitle:{defaultValue:null,description:"(Optional) button icon title",name:"iconTitle",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},iconRightTitle:{defaultValue:null,description:"(Optional) button icon title for right side.",name:"iconRightTitle",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,v:()=>_HOOButton__WEBPACK_IMPORTED_MODULE_0__.v});var _HOOButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOButton/HOOButton.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOButton__WEBPACK_IMPORTED_MODULE_0__.A},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconName,this.props.title||"<span/>");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx").A},"./src/HOOQuickLink/HOOQuickLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$f:()=>HOOQuickLinkStyle,Ay:()=>HOOQuickLink,Zi:()=>HOOQuickLinkAlignment,b0:()=>HOOQuickLinkButtonLines,kf:()=>HOOQuickLinkImageSize,qs:()=>HOOQuickLinkType});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_HOOButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOButton/index.ts"),_HOOIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOIcon/index.ts"),HOOQuickLinkType=function(HOOQuickLinkType){return HOOQuickLinkType[HOOQuickLinkType.Link=0]="Link",HOOQuickLinkType[HOOQuickLinkType.Compact=1]="Compact",HOOQuickLinkType[HOOQuickLinkType.Grid=2]="Grid",HOOQuickLinkType[HOOQuickLinkType.Button=3]="Button",HOOQuickLinkType[HOOQuickLinkType.Tile=4]="Tile",HOOQuickLinkType}({}),HOOQuickLinkStyle=function(HOOQuickLinkStyle){return HOOQuickLinkStyle.Outline="",HOOQuickLinkStyle.Filled="filled",HOOQuickLinkStyle.None="no-outline",HOOQuickLinkStyle}({}),HOOQuickLinkAlignment=function(HOOQuickLinkAlignment){return HOOQuickLinkAlignment.Left="",HOOQuickLinkAlignment.Center="center",HOOQuickLinkAlignment}({}),HOOQuickLinkButtonLines=function(HOOQuickLinkButtonLines){return HOOQuickLinkButtonLines.Normal="",HOOQuickLinkButtonLines.One="one-line",HOOQuickLinkButtonLines}({}),HOOQuickLinkImageSize=function(HOOQuickLinkImageSize){return HOOQuickLinkImageSize.Small="",HOOQuickLinkImageSize.Medium="img-m",HOOQuickLinkImageSize.Large="img-l",HOOQuickLinkImageSize.XLarge="img-xl",HOOQuickLinkImageSize.Fill="img-fill",HOOQuickLinkImageSize}({});class HOOQuickLink extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOQuickLink";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-qllink";_linkClass="hoo-qllist";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOQuickLink",this.state={}}_getLinkClass=()=>{let linkClass=this._linkClass;try{1===this.props.type?linkClass="hoo-qlcompact":3===this.props.type?linkClass="hoo-qlbtn":4===this.props.type?linkClass="hoo-qltiles":2===this.props.type&&(linkClass="hoo-qlgrid"),linkClass+=` ${this.props.style||""} ${this.props.alignment||""} ${this.props.buttonLines||""} ${this.props.imageSize||""} ${this.props.editMode||""}`,linkClass=linkClass.trim()}catch(err){console.error(`${this.LOG_SOURCE} (_getLinkClass) - ${err}`)}return linkClass};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,linkClassValue=this._getLinkClass();let rea=this.props.rootElementAttributes;return null!=this.props.columnSpan&&(null==rea&&(rea={style:{}}),rea.style.gridColumn=this.props.columnSpan),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{"data-component":this.LOG_SOURCE,...rea,className,href:this.props.url||"",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article",{className:linkClassValue,children:[this.props.iconSrc&&this.props.iconSrc.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure",{className:"hoo-ql-media",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:this.props.iconSrc,className:"hoo-ql-img",alt:"",loading:"lazy"})}),this.props.iconName&&this.props.iconName.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure",{className:"hoo-ql-media",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon__WEBPACK_IMPORTED_MODULE_3__.A,{iconName:this.props.iconName,rootElementAttributes:{className:"hoo-media-svg"}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hoo-qlinfo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hoo-qltitle",children:this.props.title}),(3==this.props.type||0==this.props.type)&&this.props.description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hoo-qldesc",children:this.props.description})]}),!0===this.props.editMode&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("menu",{className:"hoo-qlmenu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:_HOOButton__WEBPACK_IMPORTED_MODULE_2__.v.Icon,iconName:"hoo-icon-close",onClick:this.props.onClickMenuClose})}),!0===this.props.enableDragDrop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:_HOOButton__WEBPACK_IMPORTED_MODULE_2__.v.Icon,iconName:"hoo-icon-move",rootElementAttributes:this.props.moveElementAttributes})})]})]})})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOQuickLink.displayName="HOOQuickLink",HOOQuickLink.__docgenInfo={description:"",displayName:"HOOQuickLink",props:{type:{defaultValue:null,description:"Quick link item's style",name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},title:{defaultValue:null,description:"Quick link item's title",name:"title",required:!0,type:{name:"string"}},style:{defaultValue:null,description:'(Optional) HOOQuickLinkType="Button" style, Outline, Fill, None; default to Outline',name:"style",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"filled"'},{value:'"no-outline"'}]}},alignment:{defaultValue:null,description:'(Optional) HOOQuickLinkType="Button" alignment, Center, Left; default to Left',name:"alignment",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"center"'}]}},buttonLines:{defaultValue:null,description:'(Optional) HOOQuickLinkType="Button" lines, Normal, One; default to Normal',name:"buttonLines",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"one-line"'}]}},imageSize:{defaultValue:null,description:'(Optional) HOOQuickLinkType="Tile" image size, Small, Medium, Large, XLarge, Fill; default Small',name:"imageSize",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"img-m"'},{value:'"img-l"'},{value:'"img-xl"'},{value:'"img-fill"'}]}},url:{defaultValue:null,description:"(Optional) Quick link item's link url",name:"url",required:!1,type:{name:"string"}},description:{defaultValue:null,description:'(Optional) HOOQuickLinkType="Link" or HOOQuickLinkType="Button" item\'s description;',name:"description",required:!1,type:{name:"string"}},iconSrc:{defaultValue:null,description:"(Optional) Quick link item's icon, specified by source url",name:"iconSrc",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) Quick link item's icon, specified by svg",name:"iconName",required:!1,type:{name:"string"}},editMode:{defaultValue:null,description:"(Optional) Enable quick links menu controls - default False",name:"editMode",required:!1,type:{name:"boolean"}},enableDragDrop:{defaultValue:null,description:"(Optional) Enable Drag/Drop menu option - default False",name:"enableDragDrop",required:!1,type:{name:"boolean"}},onClickMenuClose:{defaultValue:null,description:"(Optional) The click event handler for the menu close button. Only use if editMode is true.",name:"onClickMenuClose",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},columnSpan:{defaultValue:null,description:"(Optional) Grid column span style override when element not hosted in SharePoint page.",name:"columnSpan",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLAnchorElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-qllink {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLAnchorElement>"}},moveElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the edit menu's move button.\nUse this property to specify drag/drop behavior",name:"moveElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & HTMLAttributes<HTMLButtonElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOQuickLink/HOOQuickLink.tsx#HOOQuickLink"]={docgenInfo:HOOQuickLink.__docgenInfo,name:"HOOQuickLink",path:"src/HOOQuickLink/HOOQuickLink.tsx#HOOQuickLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOQuickLink/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,qs:()=>_HOOQuickLink__WEBPACK_IMPORTED_MODULE_0__.qs});var _HOOQuickLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOQuickLink/HOOQuickLink.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOQuickLink__WEBPACK_IMPORTED_MODULE_0__.Ay},"./src/HOOQuickLinkGrid/HOOQuickLinkGrid.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Extending:()=>Extending,QuickLinkGridGrid:()=>QuickLinkGridGrid,QuickLinkGridLinks:()=>QuickLinkGridLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),_HOOQuickLinkGrid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOQuickLinkGrid/HOOQuickLinkGrid.tsx"),_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOQuickLink/index.ts");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HOOQuickLinkGrid__WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Link,iconName:"hoo-icon-ninjacat",title:"Quick Link Item 1",description:"Details about my quick link item",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Link,iconName:"hoo-icon-ninjacat",title:"Quick Link Item 2",description:"Details about my quick link item",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Link,iconName:"hoo-icon-ninjacat",title:"Quick Link Item 3",description:"Details about my quick link item",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Link,iconName:"hoo-icon-ninjacat",title:"Quick Link Item 4",description:"Details about my quick link item",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Link,iconName:"hoo-icon-ninjacat",title:"Quick Link Item 5",description:"Details about my quick link item",columnSpan:"auto / span 4",rootElementAttributes:{style:{backgroundColor:"lemonchiffon"}}})]}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Quick Link/HOOQuickLinkGrid",component:_HOOQuickLinkGrid__WEBPACK_IMPORTED_MODULE_2__.A},QuickLinkGridLinks={render:Template.bind({}),name:"Quick Link Grid - Links",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.initSymbols(),{})},QuickLinkGridGrid={render:(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HOOQuickLinkGrid__WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Grid,iconSrc:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",title:"Quick Link Item 1",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Grid,iconSrc:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",title:"Quick Link Item 2",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Grid,iconSrc:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",title:"Quick Link Item 3",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Grid,iconSrc:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",title:"Quick Link Item 4",columnSpan:"auto / span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.Ay,{type:_HOOQuickLink__WEBPACK_IMPORTED_MODULE_3__.qs.Grid,iconSrc:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",title:"Quick Link Item 5",columnSpan:"auto / span 4",rootElementAttributes:{style:{backgroundColor:"lemonchiffon"}}})]})).bind({}),name:"Quick Link Grid - Grid",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.initSymbols(),{})},Extending={render:Template.bind({}),name:"Extending",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.initSymbols(),{columnSpan:"auto / span 4",rootElementAttributes:{style:{backgroundColor:"pink"}}})},__namedExportsOrder=["QuickLinkGridLinks","QuickLinkGridGrid","Extending"];QuickLinkGridLinks.parameters={...QuickLinkGridLinks.parameters,docs:{...QuickLinkGridLinks.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Quick Link Grid - Links",\n  args: function () {\n    symset.initSymbols();\n    return {};\n  }()\n}',...QuickLinkGridLinks.parameters?.docs?.source}}},QuickLinkGridGrid.parameters={...QuickLinkGridGrid.parameters,docs:{...QuickLinkGridGrid.parameters?.docs,source:{originalSource:'{\n  render: Template2.bind({}),\n  name: "Quick Link Grid - Grid",\n  args: function () {\n    symset.initSymbols();\n    return {};\n  }()\n}',...QuickLinkGridGrid.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: function () {\n    symset.initSymbols();\n    return {\n      columnSpan: "auto / span 4",\n      rootElementAttributes: {\n        style: {\n          backgroundColor: "pink"\n        }\n      }\n    };\n  }()\n}',...Extending.parameters?.docs?.source}}}},"./src/HOOQuickLinkGrid/HOOQuickLinkGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOQuickLinkGrid});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");class HOOQuickLinkGrid extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOQuickLinkGrid";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-ql-grid";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOQuickLinkGrid",this.state={}}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-component":this.LOG_SOURCE,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOQuickLinkGrid.displayName="HOOQuickLinkGrid",HOOQuickLinkGrid.__docgenInfo={description:"",displayName:"HOOQuickLinkGrid",props:{rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-ql-grid {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOQuickLinkGrid/HOOQuickLinkGrid.tsx#HOOQuickLinkGrid"]={docgenInfo:HOOQuickLinkGrid.__docgenInfo,name:"HOOQuickLinkGrid",path:"src/HOOQuickLinkGrid/HOOQuickLinkGrid.tsx#HOOQuickLinkGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.113b9996.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){try{const iconSVG=this._symbolSetDictionary[iconName]?.replace("%title%",iconTitle);return iconSVG||"<svg />"}catch(err){return console.error(`${this.LOG_SOURCE} (Icon) - ${err}`),null}}IconBase64(iconName){try{const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}catch(err){return console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`),null}}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}}}]);