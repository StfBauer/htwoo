/*! For license information please see HOOPersona-HOOPersona-stories-mdx.13f5b4a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[4286],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOPersona/HOOPersona.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOPersona_stories,extending:()=>extending,fullSize:()=>fullSize,larger:()=>larger});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOPersonaState{constructor(){}}class HOOPersona extends react.PureComponent{LOG_SOURCE="💦HOOPersona";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-persona-";_showData=!0;constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPersona",this.state=new HOOPersonaState,this._componentClass+=props.avatarSize,props.personaName||props.personaFunction||props.personaStatusText||props.personaAvailable||(this._showData=!1)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,jsx_runtime.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[this.props.children,this._showData&&(0,jsx_runtime.jsxs)("div",{className:"hoo-persona-data",children:[(0,jsx_runtime.jsx)("div",{className:"hoo-persona-name",children:this.props.personaName}),(0,jsx_runtime.jsx)("div",{className:"hoo-persona-function",children:(0,jsx_runtime.jsx)("span",{children:this.props.personaFunction})}),(0,jsx_runtime.jsx)("div",{className:"hoo-persona-statustext",children:(0,jsx_runtime.jsx)("span",{children:this.props.personaStatusText})}),(0,jsx_runtime.jsx)("div",{className:"hoo-persona-available",children:(0,jsx_runtime.jsx)("span",{children:this.props.personaAvailable})})]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOPersona.displayName="HOOPersona";try{HOOPersona.displayName="HOOPersona",HOOPersona.__docgenInfo={description:"",displayName:"HOOPersona",props:{avatarSize:{defaultValue:null,description:"Include the avatarSize by repeating the HOOAvatarSize property from the Avatar child",name:"avatarSize",required:!0,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},personaName:{defaultValue:null,description:"(Optional) The persona name (line 1)",name:"personaName",required:!1,type:{name:"string"}},personaFunction:{defaultValue:null,description:"(Optional) The persona function (line 2)",name:"personaFunction",required:!1,type:{name:"string"}},personaStatusText:{defaultValue:null,description:"(Optional) The persona status text (line 3)",name:"personaStatusText",required:!1,type:{name:"string"}},personaAvailable:{defaultValue:null,description:"(Optional) The persona availability (line 4)",name:"personaAvailable",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"(Optional) Click event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-persona {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPersona/HOOPersona.tsx#HOOPersona"]={docgenInfo:HOOPersona.__docgenInfo,name:"HOOPersona",path:"src/HOOPersona/HOOPersona.tsx#HOOPersona"})}catch(__react_docgen_typescript_loader_error){}var HOOAvatarPres=__webpack_require__("./src/HOOAvatarPres/index.ts"),HOOAvatar=__webpack_require__("./src/HOOAvatar/index.ts"),HOOPresence=__webpack_require__("./src/HOOPresence/index.ts");const Template=args=>(0,jsx_runtime.jsx)(HOOPersona,{...args.root,children:(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{imageSource:args.imageUrl,imageAlt:"Placeholder Image",status:HOOPresence.C.Online})});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",img:"img",ul:"ul",li:"li",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/Personas/HOOPersona",component:HOOPersona}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoopersona",children:"HOOPersona"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.img,{src:"https://img.shields.io/badge/%F0%9F%92%A6%20Added%20Version-1.1-blue.svg?style=for-the-badge",alt:"Available in v1.1"})})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"See more information about the properties for the child components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-persona-hooavatarpres--basic",children:"HOOAvatarPres"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:HOOPersona}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic---32px",children:"Basic - 32px"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Basic",args:{root:{avatarSize:HOOAvatar.D.Px32,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"larger---48px",children:"Larger - 48px"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Larger",args:{root:{avatarSize:HOOAvatar.D.Px48,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"full-size---96px",children:"Full Size - 96px"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Full Size",args:{root:{avatarSize:HOOAvatar.D.Px96,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Extending",args:{root:{avatarSize:HOOAvatar.D.Px32,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday",rootElementAttributes:{style:{backgroundColor:"pink"}}},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args={root:{avatarSize:HOOAvatar.D.Px32,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},basic.parameters={storySource:{source:'args => <HOOPersona {...args.root}>\n    <HOOAvatarPres imageSource={args.imageUrl} imageAlt="Placeholder Image" status={HOOPresenceStatus.Online} />\n  </HOOPersona>'}};const larger=Template.bind({});larger.storyName="Larger",larger.args={root:{avatarSize:HOOAvatar.D.Px48,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},larger.parameters={storySource:{source:'args => <HOOPersona {...args.root}>\n    <HOOAvatarPres imageSource={args.imageUrl} imageAlt="Placeholder Image" status={HOOPresenceStatus.Online} />\n  </HOOPersona>'}};const fullSize=Template.bind({});fullSize.storyName="Full Size",fullSize.args={root:{avatarSize:HOOAvatar.D.Px96,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday"},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},fullSize.parameters={storySource:{source:'args => <HOOPersona {...args.root}>\n    <HOOAvatarPres imageSource={args.imageUrl} imageAlt="Placeholder Image" status={HOOPresenceStatus.Online} />\n  </HOOPersona>'}};const extending=Template.bind({});extending.storyName="Extending",extending.args={root:{avatarSize:HOOAvatar.D.Px32,personaName:"Jane Doeminica",personaFunction:"Lead Fluent Designer",personaStatusText:"In a meeting",personaAvailable:"Call me yesterday",rootElementAttributes:{style:{backgroundColor:"pink"}}},imageUrl:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg"},extending.parameters={storySource:{source:'args => <HOOPersona {...args.root}>\n    <HOOAvatarPres imageSource={args.imageUrl} imageAlt="Placeholder Image" status={HOOPresenceStatus.Online} />\n  </HOOPersona>'}};const componentMeta={title:"Components/Personas/HOOPersona",component:HOOPersona,tags:["stories-mdx"],includeStories:["basic","larger","fullSize","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOPersona_stories=componentMeta,__namedExportsOrder=["Template","basic","larger","fullSize","extending"]},"./src/HOOAvatarPres/HOOAvatarPres.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOAvatarPres});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAvatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAvatar/index.ts"),_HOOPresence__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOPresence/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOAvatarPresState{constructor(){}}class HOOAvatarPres extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAvatarPres";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar-pres";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatarPres",this.state=new HOOAvatarPresState,null!=props.size&&(this._componentClass+=`-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOAvatar__WEBPACK_IMPORTED_MODULE_1__.A,{size:this.props.size,imageSource:this.props.imageSource,imageAlt:this.props.imageAlt,rootElementAttributes:this.props.avatarAttributes}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOPresence__WEBPACK_IMPORTED_MODULE_2__.A,{status:this.props.status,rootElementAttributes:this.props.presenceAttributes})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAvatarPres.displayName="HOOAvatarPres";try{HOOAvatarPres.displayName="HOOAvatarPres",HOOAvatarPres.__docgenInfo={description:"",displayName:"HOOAvatarPres",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"Presence status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar-pres {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},avatarAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOAvatar element of the component.",name:"avatarAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},presenceAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOPresence element of the component.",name:"presenceAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"]={docgenInfo:HOOAvatarPres.__docgenInfo,name:"HOOAvatarPres",path:"src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOAvatarPres/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _HOOAvatarPres__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOAvatarPres/HOOAvatarPres.tsx");__webpack_require__("./src/HOOAvatar/index.ts"),__webpack_require__("./src/HOOPresence/index.ts");const __WEBPACK_DEFAULT_EXPORT__=_HOOAvatarPres__WEBPACK_IMPORTED_MODULE_0__.A},"./src/HOOAvatar/HOOAvatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOAvatar,Dh:()=>HOOAvatarSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOAvatarSize=function(HOOAvatarSize){return HOOAvatarSize.Px16="16",HOOAvatarSize.Px24="24",HOOAvatarSize.Px32="32",HOOAvatarSize.Px40="40",HOOAvatarSize.Px48="48",HOOAvatarSize.Px64="64",HOOAvatarSize.Px72="72",HOOAvatarSize.Px96="96",HOOAvatarSize}({});class HOOAvatarState{constructor(){}}class HOOAvatar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAvatar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatar",this.state=new HOOAvatarState,null!=props.size&&(this._componentClass+=` ${this._componentClass}-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:this.props.imageSource,alt:this.props.imageAlt,className:"hoo-avatar-img",height:this.props.size,width:this.props.size,loading:"lazy"}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAvatar.displayName="HOOAvatar";try{HOOAvatar.displayName="HOOAvatar",HOOAvatar.__docgenInfo={description:"",displayName:"HOOAvatar",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"]={docgenInfo:HOOAvatar.__docgenInfo,name:"HOOAvatar",path:"src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOAvatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,D:()=>_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Dh});var _HOOAvatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOAvatar/HOOAvatar.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Ay},"./src/HOOPresence/HOOPresence.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOPresence,C9:()=>HOOPresenceStatus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOPresenceStatus=function(HOOPresenceStatus){return HOOPresenceStatus.Away="away",HOOPresenceStatus.DoNotDisturb="dnd",HOOPresenceStatus.Online="online",HOOPresenceStatus.Invisible="invisible",HOOPresenceStatus.OutOfOffice="off",HOOPresenceStatus}({});class HOOPresenceState{constructor(){}}class HOOPresence extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOPresence";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-presence";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPresence",this.state=new HOOPresenceState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} is-${this.props.status}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...this._rootProps,title:this.props.status,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOPresence.displayName="HOOPresence";try{HOOPresence.displayName="HOOPresence",HOOPresence.__docgenInfo={description:"",displayName:"HOOPresence",props:{status:{defaultValue:null,description:"Presence Status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-presence {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPresence/HOOPresence.tsx#HOOPresence"]={docgenInfo:HOOPresence.__docgenInfo,name:"HOOPresence",path:"src/HOOPresence/HOOPresence.tsx#HOOPresence"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOPresence/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,C:()=>_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.C9});var _HOOPresence__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOPresence/HOOPresence.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.Ay},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);