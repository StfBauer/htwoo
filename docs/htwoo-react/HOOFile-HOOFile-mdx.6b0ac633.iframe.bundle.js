(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[4636],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/HOOFile/HOOFile.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HOOFile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFile/HOOFile.tsx"),_HOOFile_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOFile/HOOFile.stories.js");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_HOOFile_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"hoofile",children:"HOOFile"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ov,{of:_HOOFile__WEBPACK_IMPORTED_MODULE_2__.A}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_HOOFile_stories__WEBPACK_IMPORTED_MODULE_3__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_HOOFile_stories__WEBPACK_IMPORTED_MODULE_3__.Extending})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/HOOFile/HOOFile.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Extending:()=>Extending,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOOFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOFile/HOOFile.tsx"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOFile__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Inputs/HOOFile",component:_HOOFile__WEBPACK_IMPORTED_MODULE_1__.A},Basic={render:Template.bind({}),name:"Basic",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{uploadLabel:"Click or drag and drop files here to upload filed",uploadDescription:"Max file size: 10MB, Types: jpg, png, pdf",onChanged:files=>{const fileNames=[];if(null!=files&&files.length>0)for(let i=0;i<files.length;i++)fileNames.push(files[i].name);alert(`Files: ${fileNames.join(", ")}`)}})},Extending={render:Template.bind({}),name:"Extending",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{uploadLabel:"Click or drag and drop files here to upload filed",uploadDescription:"Max file size: 10MB, Types: jpg, png, pdf",onChanged:files=>{alert(`Files ${files.join(",")}`)},rootElementAttributes:{style:{backgroundColor:"pink"}}})},__namedExportsOrder=["Basic","Extending"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Basic",\n  args: function () {\n    symset.initSymbols();\n    return {\n      uploadLabel: "Click or drag and drop files here to upload filed",\n      uploadDescription: "Max file size: 10MB, Types: jpg, png, pdf",\n      onChanged: files => {\n        const fileNames = [];\n        if (files != null && files.length > 0) {\n          for (let i = 0; i < files.length; i++) {\n            fileNames.push(files[i].name);\n          }\n        }\n        alert(`Files: ${fileNames.join(", ")}`);\n      }\n    };\n  }()\n}',...Basic.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: function () {\n    symset.initSymbols();\n    return {\n      uploadLabel: "Click or drag and drop files here to upload filed",\n      uploadDescription: "Max file size: 10MB, Types: jpg, png, pdf",\n      onChanged: files => {\n        alert(`Files ${files.join(",")}`);\n      },\n      rootElementAttributes: {\n        style: {\n          backgroundColor: "pink"\n        }\n      }\n    };\n  }()\n}',...Extending.parameters?.docs?.source}}}},"./src/HOOFile/HOOFile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOFile});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_common_Common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/Common.ts"),_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/index.ts");class HOOFileState{files;constructor(files=[]){this.files=files}}class HOOFile extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOFile";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-input-file";_fileId="hoo-file-";_fileLabel;constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFile",this._fileId=`${this._fileId}${(0,_common_Common__WEBPACK_IMPORTED_MODULE_3__.$)(10)}`,this.state=new HOOFileState,this._fileLabel=react__WEBPACK_IMPORTED_MODULE_1__.createRef()}_dragOver=event=>{event.preventDefault(),this._fileLabel?.current?.classList.add("drag-over")};_dragLeave=event=>{event.preventDefault(),this._fileLabel?.current?.classList.remove("drag-over")};_dragDrop=event=>{event.preventDefault(),this._fileLabel?.current?.classList.remove("drag-over");const files=event.dataTransfer.files;files.length>0&&(console.log("Files dropped:",files),this._fileChangedEvent({target:{files}}))};_fileChangedEvent=event=>{try{const files=event.target.files;this.setState({files},(()=>{this.props.onChanged(files)}))}catch(err){console.error(`${this.LOG_SOURCE} (_fileChangedEvent) - ${err}`)}};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,inputClassName=this.props.inputElementAttributes?.className?`hoo-infile-context ${this.props.inputElementAttributes?.className}`:"hoo-infile-context",fileIcon=null==this.props.fileIcon?"hoo-icon-arrow-upload-filled":this.props.fileIcon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"data-component":this.LOG_SOURCE,...this.props.rootElementAttributes,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{ref:this._fileLabel,className:"hoo-infile-label",tabIndex:-1,htmlFor:this._fileId,draggable:"true",onDragOver:this._dragOver,onDragLeave:this._dragLeave,onDrop:this._dragDrop,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hoo-infile-icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconName:fileIcon,title:"Upload"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[this.props.uploadLabel,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"hoo-infile-description",children:this.props.uploadDescription})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"file",id:this._fileId,...this.props.inputElementAttributes,className:inputClassName,multiple:!0,"aria-describedby":`${this._fileId}-content`,onChange:this._fileChangedEvent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("output",{className:"hoo-infile-output",id:`${this._fileId}-content`,"aria-live":"polite",title:"Current selection",children:this.state.files&&this.state.files.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hoo-infile-selection",children:"Files Selected"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"hoo-infile-list",children:this.state.files.map((file=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:file.name})))})]})})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOFile.displayName="HOOFile",HOOFile.__docgenInfo={description:"",displayName:"HOOFile",props:{uploadLabel:{defaultValue:null,description:"The label for the file upload area.",name:"uploadLabel",required:!0,type:{name:"string"}},uploadDescription:{defaultValue:null,description:"The description for the file upload area.",name:"uploadDescription",required:!0,type:{name:"string"}},onChanged:{defaultValue:null,description:"Fired when the selected list of files changes.",name:"onChanged",required:!0,type:{name:"(files: File[]) => void"}},fileIcon:{defaultValue:null,description:"Icon used for file upload; default to `hoo-icon-arrow-upload-filled`",name:"fileIcon",required:!1,type:{name:"string"}},inputElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the file upload input element of the component.\nNote: Class names will be appended to the end of the default class string.",name:"inputElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLInputElement> & HTMLAttributes<HTMLInputElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-input-file {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFile/HOOFile.tsx#HOOFile"]={docgenInfo:HOOFile.__docgenInfo,name:"HOOFile",path:"src/HOOFile/HOOFile.tsx#HOOFile"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconName,this.props.title||"<span/>");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx").A},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.113b9996.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){try{const iconSVG=this._symbolSetDictionary[iconName]?.replace("%title%",iconTitle);return iconSVG||"<svg />"}catch(err){return console.error(`${this.LOG_SOURCE} (Icon) - ${err}`),null}}IconBase64(iconName){try{const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}catch(err){return console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`),null}}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./src/common/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getRandomString(chars){try{const text=new Array(chars);for(let i=0;i<chars;i++)text[i]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return text.join("")}catch(err){console.error(`💦Common (getRandomString) - ${err}`)}}function isEqual(a,b,c=0){try{if("function"==typeof a||"function"==typeof b||c>3)return!0;if(a===b)return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;let keys1=Object.keys(a),keys2=Object.keys(b);if(keys1.length!==keys2.length)return!1;for(let key of keys1)if(!keys2.includes(key)||!isEqual(a[key],b[key],c++))return!1;return!0}catch(err){console.error(`💦Common (isEqual) - ${err}`)}}__webpack_require__.d(__webpack_exports__,{$:()=>getRandomString,n:()=>isEqual})}}]);