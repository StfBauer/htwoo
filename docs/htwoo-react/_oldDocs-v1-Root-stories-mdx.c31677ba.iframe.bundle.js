/*! For license information please see _oldDocs-v1-Root-stories-mdx.c31677ba.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[5021],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/_oldDocs/v1/Root.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",em:"em",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li",h4:"h4",blockquote:"blockquote"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Legacy Docs/V1/Introduction/Getting Started"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"getting-started-with-htwoo-react",children:"Getting Started with HTWOO-REACT"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["This documentation will walk you through getting started with this library. In addition you can review the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://julieturner.net/post/intro-htwoo-react/",target:"_blank",rel:"nofollow noopener noreferrer",children:"video version"})," of this solution to see a walk through of the process."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.em,{children:["To get all the details on what has been released when check out our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"REACT_CHANGELOG"}),"."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"getting-helpgiving-feedback",children:"Getting Help/Giving Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Please feel free to submit your questions, enhancement ideas, and feedback to the GitHub ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/issues",target:"_blank",rel:"nofollow noopener noreferrer",children:"issues list"})," so that we can try to address them."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"initialize-library-in-microsoft-sharepoint-framework-spfx",children:"Initialize library in Microsoft SharePoint Framework (SPFx)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"1-install-package-in-your-solution",children:"1. Install package in your solution."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.em,{children:"This package has a peer dependency on the correspoinding version of @n8d/htwoo-core so that will be added automatically for you."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-cmd",children:"npm i @n8d/htwoo-react\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"2-import-htwoo-core-styles",children:"2. Import htwoo-core styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Add a reference to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"style.prod.scss"})," file in your solutions root .scss file. Put the reference inside of the webparts base class so that the styles are scoped to the instance of this webpart:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.em,{children:"Note: The import is wrapped in :global so that the class names will not be modified with a namespace."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:".myWebPartRoot{\r\n  :global {\r\n    @import 'node_modules/@n8d/htwoo-core/lib/sass/style.prod';\r\n  }\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"then in your root component's top level HTML element add a reference to that base class. This will make sure that when your project builds, the styles will be included. For example:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"public render(): React.ReactElement<IHtwooReactDemoProps> {\r\n  try {\r\n    return (\r\n      <div className={styles.myWebPartRoot}>\r\n        Hello World\r\n      </div>\r\n    );\r\n  } catch (err) {\r\n    console.error(`${this.LOG_SOURCE} (render) - ${err}`);\r\n    return null;\r\n  }\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"and finally (starting in SharePoint Framework version 1.16.0) modify your projects config/sass.json file to include the property quietDeps:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-json",children:'{\r\n  "quietDeps": true\r\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"3-initialze-basic-svg-icons",children:"3. Initialze Basic SVG Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"To initilize the basic SVG icons used by some of the more complex components by adding the following line to your components main ts file's onInit method."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.em,{children:["For more detailed information on using the SymbolSet see the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://lab.n8d.studio/htwoo/htwoo-react/?path=/story/advanced-symbolset-class--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"Advanced/SymbolSet Class"})," documentation."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"import { symset } from '@n8d/htwoo-react/SymbolSet';\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Initialize Icons Symbol Set\r\n  await symset.initSymbols();\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Alternatively if you have icons in your own symbolset file**, you can add them by passing the path into the initSymbols method:\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.em,{children:"Note: This will load both the basic SVG icons referenced above as well as whatever icons are in your referenced file, so you only need to do one call."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["**New in hTWOo is the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"https://my.n8d.at/htwoo-icons",target:"blank",children:"Icon Tool"})," to create your own symbolset file. This tool allows you to select icons from hoo-icons in regular/filled styles and then download the resulting file to use in your solution."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Add a typing for svg files to be read as a module (images.d.ts):"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"file: images.d.ts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"declare module '*.svg' {\r\n  const content: any;\r\n  export default content;\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Then import the svg file and pass it to initSymbols method:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"import { symset } from '@n8d/htwoo-react/SymbolSet';\r\nimport symbolSetFile from './images/icons.svg';\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Initialize Icons Symbol Set with Custom Symbol File\r\n  await symset.initSymbols(symbolSetFile);\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"A SVG symbol file will look similar to the following:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-html",children:"<svg aria-hidden='true' style='position: absolute; width: 0; height: 0; overflow: hidden;' version='1.1'\r\n  xmlns='http://www.w3.org/2000/svg'\r\n  xmlns:xlink='http://www.w3.org/1999/xlink'>\r\n  <defs>\r\n      <symbol id='icon-arrow-left' viewBox='0 0 32 32'>\r\n          <path d='M22.547 31.953l-15.969-15.953 15.969-15.953 1.406 1.406-14.531 14.547 14.531 14.547-1.406 1.406z'></path>\r\n      </symbol>\r\n  </defs>\r\n</svg>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["If you are looking to load icons from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@n8d\\htwoo-icons"})," library you can install the package and then import them by referencing the svg file in the node_modules folder.\r\nTo register multiple svg files, make additional calls to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"symset.initSymbols"})," passing in additional svg file references."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Add a typing for svg files to be read as a module (images.d.ts):"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"file: images.d.ts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"declare module '*.svg' {\r\n  const content: any;\r\n  export default content;\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Then import the svg file and pass it to initSymbols method:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"import { symset } from '@n8d/htwoo-react/SymbolSet';\r\nimport fuireg from '@n8d/htwoo-icons/fluent-ui-regular/fluent-ui-regular.svg';\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Initialize Icons Symbol Set with HTWOO-Icons\r\n  await symset.initSymbols(fuireg);\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To use the icons in this file, you will reference them by the individual icon's id value, which in the SVG file sample above is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"icon-arrow-left"}),". Here's an example of using an icon in the HOOAction component"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-jsx",children:"<HOOAction iconName='icon-arrow-left' label='Action Button' type={HOOActionType.Action}/>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"4-optional-add-theme-support-to-your-spfx-project",children:"4. (Optional) Add theme support to your SPFx project"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Modify your components manifest and add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"supportsThemeVariants"})," which allows any of the hTWOo components to render properly in colored SharePoint section."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-json",children:"{ \r\n  //...\r\n  'supportsThemeVariants': true,\r\n  // ...\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ol,{start:"2",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Add the following helper code to your components main ts file's onInit method which initializes the CSS Variables to support themes. Make sure to add the import and the private _spfxThemes variable:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.em,{children:["For more detailed information on using the SPFxThemes see the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://lab.n8d.studio/htwoo/htwoo-react/?path=/story/advanced-spfxthemes-class--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"Advanced/SPFxThemes Class"})," documentation."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"import { ThemeProvider } from '@microsoft/sp-component-base';\r\nimport { SPFxThemes, ISPFxThemes } from '@n8d/htwoo-react/SPFxThemes';\r\n\r\nprivate _spfxThemes: ISPFxThemes = new SPFxThemes();\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Consume the new ThemeProvider service\r\n  const microsoftTeams = this.context.sdks?.microsoftTeams;\r\n  const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);\r\n  this._spfxThemes.initThemeHandler(this.domElement, themeProvider, microsoftTeams);\r\n\r\n  // If no ThemeProvider service, do not include property which will use page context\r\n  this._spfxThemes.initThemeHandler(document.body);\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"5-start-using-the-components",children:"5. Start using the components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Import the HTWOO component that you want to use into your own projects components. All components are selectively importable from the root library."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Please see the table of contents on the left side of the page or the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Find component"})," function to find the specific components you would like to use and examples of how to use them."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"example-of-using-the-hoolabel-atom-component",children:"Example of using the HOOLabel atom component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Note the use of rootElementAttributes (Acknowledged that this is NOT a real world use) which is a typed interface for all the HTML Attributes of the root dom element for the component. Use this object as a way to overriding and/or adding additoinal accissibility properties to the element."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-ts",children:"import HOOLabel from '@n8d/htwoo-react/HOOLabel';\r\n\r\npublic render(): React.ReactElement<IMyComponentProps> {\r\n  try {\r\n    const labelREA = {\"aria-hidden\": true};\r\n    return (\r\n      <div data-component={this.LOG_SOURCE}>\r\n        <HOOLabel label='My Label' rootElementAttributes={labelREA} />\r\n      </div>\r\n    );\r\n  } catch (err) {\r\n    console.error(`${this.LOG_SOURCE} (render) - ${err}`);\r\n    return null;\r\n  }\r\n}\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Legacy Docs/V1/Introduction/Getting Started",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);