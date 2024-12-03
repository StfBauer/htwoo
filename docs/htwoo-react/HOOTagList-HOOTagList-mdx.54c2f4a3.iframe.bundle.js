(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[378],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/HOOTagList/HOOTagList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HOOTagList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOTagList/HOOTagList.tsx"),_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/HOOTag/index.ts"),__webpack_require__("./src/HOOTagList/HOOTagList.stories.js"));function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"hootaglist",children:"HOOTagList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md",rel:"nofollow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://img.shields.io/badge/%F0%9F%92%A6%20Added%20Version-1.1-blue.svg?style=for-the-badge",alt:"Available in v1.1"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Predefined enum defined for the supported tag types and styles:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"export interface IHOOTag {\r\n  text: string;\r\n  linkUrl?: string;\r\n  linkTarget?: string;\r\n  onClick?: React.MouseEventHandler<HTMLButtonElement>;\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"See more information about the properties for the child components:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/atoms-meta-hootag--primary-button",children:"HOOTag"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.ov,{of:_HOOTagList__WEBPACK_IMPORTED_MODULE_2__.A}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary---button",children:"Primary - Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__.PrimaryButton}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary---link",children:"Primary - Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__.PrimaryLink}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"static-standard",children:"Static: Standard"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__.StaticStandard}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"extending",children:"Extending"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_HOOTagList_stories__WEBPACK_IMPORTED_MODULE_4__.Extending})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/HOOTagList/HOOTagList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Extending:()=>Extending,PrimaryButton:()=>PrimaryButton,PrimaryLink:()=>PrimaryLink,StaticStandard:()=>StaticStandard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOOTagList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOTagList/HOOTagList.tsx"),_HOOTag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOTag/index.ts");const DefaultParams={tags:[{text:"Tag A",linkUrl:"https://google.com",linkTarget:"_blank",onClick:()=>{alert("Clicked Tag A")}},{text:"Tag B",linkUrl:"https://google.com",linkTarget:"_blank",onClick:()=>{alert("Clicked Tag B")}},{text:"Tag C",linkUrl:"https://google.com",linkTarget:"_blank",onClick:()=>{alert("Clicked Tag C")}}]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOTagList__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Meta/HOOTagList",component:_HOOTagList__WEBPACK_IMPORTED_MODULE_1__.A},PrimaryButton={render:Template.bind({}),name:"Primary: Button",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Button,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.kB.Primary,tags:DefaultParams.tags}},PrimaryLink={render:Template.bind({}),name:"Primary: Link",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Link,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.kB.Primary,tags:DefaultParams.tags}},StaticStandard={render:Template.bind({}),name:"Static: Standard",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Static,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.kB.Standard,tags:DefaultParams.tags}},Extending={render:Template.bind({}),name:"Extending",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Button,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.kB.Primary,tags:DefaultParams.tags,rootElementAttributes:{style:{backgroundColor:"pink"}}}},__namedExportsOrder=["PrimaryButton","PrimaryLink","StaticStandard","Extending"];PrimaryButton.parameters={...PrimaryButton.parameters,docs:{...PrimaryButton.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Button",\n  args: function () {\n    return {\n      tagType: HOOTagType.Button,\n      tagStyle: HOOTagStyle.Primary,\n      tags: DefaultParams.tags\n    };\n  }()\n}',...PrimaryButton.parameters?.docs?.source}}},PrimaryLink.parameters={...PrimaryLink.parameters,docs:{...PrimaryLink.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Link",\n  args: function () {\n    return {\n      tagType: HOOTagType.Link,\n      tagStyle: HOOTagStyle.Primary,\n      tags: DefaultParams.tags\n    };\n  }()\n}',...PrimaryLink.parameters?.docs?.source}}},StaticStandard.parameters={...StaticStandard.parameters,docs:{...StaticStandard.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Static: Standard",\n  args: function () {\n    return {\n      tagType: HOOTagType.Static,\n      tagStyle: HOOTagStyle.Standard,\n      tags: DefaultParams.tags\n    };\n  }()\n}',...StaticStandard.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: function () {\n    return {\n      tagType: HOOTagType.Button,\n      tagStyle: HOOTagStyle.Primary,\n      tags: DefaultParams.tags,\n      rootElementAttributes: {\n        style: {\n          backgroundColor: "pink"\n        }\n      }\n    };\n  }()\n}',...Extending.parameters?.docs?.source}}}},"./src/HOOTagList/HOOTagList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOTagList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_HOOTag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOTag/index.ts");class HOOTagListState{constructor(){}}class HOOTagList extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOTagList";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-meta-list";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOTagList",this.state=new HOOTagListState}_getTag=tag=>{try{return this.props.tagType===_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Button?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOTag__WEBPACK_IMPORTED_MODULE_2__.Ay,{text:tag.text,tagType:this.props.tagType,tagStyle:this.props.tagStyle,onClick:tag.onClick}):this.props.tagType===_HOOTag__WEBPACK_IMPORTED_MODULE_2__.zm.Link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOTag__WEBPACK_IMPORTED_MODULE_2__.Ay,{text:tag.text,tagType:this.props.tagType,tagStyle:this.props.tagStyle,linkTarget:tag.linkTarget,linkUrl:tag.linkUrl}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOTag__WEBPACK_IMPORTED_MODULE_2__.Ay,{text:tag.text,tagType:this.props.tagType,tagStyle:this.props.tagStyle})}catch(err){return console.error(`${this.LOG_SOURCE} (_getTag) - ${err}`),null}};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...this._rootProps,role:"list",...this.props.rootElementAttributes,className,children:this.props.tags&&this.props.tags.map((tag=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:this._getTag(tag)},tag.text)))})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOTagList.displayName="HOOTagList",HOOTagList.__docgenInfo={description:"",displayName:"HOOTagList",props:{tags:{defaultValue:null,description:"Array of IHOOTags to render",name:"tags",required:!0,type:{name:"IHOOTag[]"}},tagType:{defaultValue:null,description:"Tag type (HOOTagType)",name:"tagType",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"static"'}]}},tagStyle:{defaultValue:null,description:"Tag style (HOOTagStyle)",name:"tagStyle",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"standard"'}]}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-meta-list {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOTagList/HOOTagList.tsx#HOOTagList"]={docgenInfo:HOOTagList.__docgenInfo,name:"HOOTagList",path:"src/HOOTagList/HOOTagList.tsx#HOOTagList"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOTag/HOOTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOTag,kB:()=>HOOTagStyle,zm:()=>HOOTagType});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),HOOTagType=function(HOOTagType){return HOOTagType.Button="button",HOOTagType.Link="link",HOOTagType.Static="static",HOOTagType}({}),HOOTagStyle=function(HOOTagStyle){return HOOTagStyle.Primary="primary",HOOTagStyle.Standard="standard",HOOTagStyle}({});class HOOTagState{constructor(){}}class HOOTag extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOTag";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-mtag";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOTag",this.state=new HOOTagState,this._componentClass+="primary"===props.tagStyle?"-primary":""}render(){try{let retVal=null;this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;switch(this.props.tagType){case"button":retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})});break;case"link":retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{...this._rootProps,...this.props.rootElementAttributes,className,href:this.props.linkUrl,target:this.props.linkTarget||"_self",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})});break;default:retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})})}return retVal}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOTag.displayName="HOOTag",HOOTag.__docgenInfo={description:"",displayName:"HOOTag",props:{text:{defaultValue:null,description:"Tag text",name:"text",required:!0,type:{name:"string"}},tagType:{defaultValue:null,description:"Tag type (HOOTagType)",name:"tagType",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"static"'}]}},tagStyle:{defaultValue:null,description:"Tag style (HOOTagStyle)",name:"tagStyle",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"standard"'}]}},linkUrl:{defaultValue:null,description:"(Optional - Used with HooTagType.Link) The url to link to.",name:"linkUrl",required:!1,type:{name:"string"}},linkTarget:{defaultValue:null,description:"(Optional - Used with HooTagType.Link) The target of the HTMLAnchorElement",name:"linkTarget",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:'(Optional - Used with HOOTagType.Button) Direct interface for buttons click event handler.\nDefaults to "_self"',name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-mtag {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOTag/HOOTag.tsx#HOOTag"]={docgenInfo:HOOTag.__docgenInfo,name:"HOOTag",path:"src/HOOTag/HOOTag.tsx#HOOTag"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOTag/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,kB:()=>_HOOTag__WEBPACK_IMPORTED_MODULE_0__.kB,zm:()=>_HOOTag__WEBPACK_IMPORTED_MODULE_0__.zm});var _HOOTag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOTag/HOOTag.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOTag__WEBPACK_IMPORTED_MODULE_0__.Ay}}]);