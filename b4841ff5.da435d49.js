(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(95)),o={id:"sending",title:"Web Monetization Providers (Sending Payments)",sidebar_label:"Sending payments"},s={unversionedId:"sending",id:"sending",isDocsHomePage:!1,title:"Web Monetization Providers (Sending Payments)",description:"This page is a proposal for how browsers can implement Web Monetization. All",source:"@site/docs/sending.md",slug:"/sending",permalink:"/docs/sending",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/sending.md",version:"current",sidebar_label:"Sending payments",sidebar:"docs",previous:{title:"Web Monetization Receivers",permalink:"/docs/receiving"},next:{title:"Digital Wallet and Payment Pointers",permalink:"/docs/ilp-wallets"}},b=[{value:"Payment Handler API",id:"payment-handler-api",children:[{value:"<code>monetization</code> - payment method",id:"monetization---payment-method",children:[]},{value:"<code>PaymentRequestEvent</code> - event",id:"paymentrequestevent---event",children:[]},{value:"<code>MonetizationRequest</code> - dictionary",id:"monetizationrequest---dictionary",children:[]},{value:"<code>MonetizationResponse</code> - dictionary",id:"monetizationresponse---dictionary",children:[]}]},{value:"Open authorization issues",id:"open-authorization-issues",children:[]},{value:"Supporting payment streams",id:"supporting-payment-streams",children:[]}],c={rightToc:b};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This page is a proposal for how browsers can implement Web Monetization. All\ninformation is considered experimental and conversations are ongoing. If you\nare a content creator you can skip this page.")),Object(r.b)("p",null,"This page describes the functions of the Web Monetization provider and\nhow the provider could manifest as a payment handler. Web Monetization providers\nare also known as Web Monetization senders."),Object(r.b)("p",null,"A Web Monetization sender is a digital entity that makes payments on behalf of\na user and is capable of sending micropayments to Web Monetization receivers."),Object(r.b)("p",null,"The Web Monetization sender interfaces with a browser so the Web Monetization\nagent (e.g. extension) can send payment instructions, such as who to pay, when,\nand how much."),Object(r.b)("h2",{id:"payment-handler-api"},"Payment Handler API"),Object(r.b)("p",null,"Our expectation is the Web Monetization (WM) sender will manifest as a payment\nhandler as follows."),Object(r.b)("p",null,"The WM sender interface leverages the Payment Handler API. The API contains\ncapabilities that enable web applications to handle requests for payments. You\ncan read the working draft of the spec on the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-handler/"}),"W3C website"),"."),Object(r.b)("p",null,"The Payment Handler API aligns well with the model anticipated for WM senders:\nA WM sender could manifest as a specialized payment handler capable of returning\nnot just a ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentResponse")," but also a handle to a stream of micropayments."),Object(r.b)("h3",{id:"monetization---payment-method"},Object(r.b)("inlineCode",{parentName:"h3"},"monetization")," - payment method"),Object(r.b)("p",null,"Payment handlers able to act as WM senders ",Object(r.b)("strong",{parentName:"p"},"MUST")," register themselves with the\nplatform as supportive of the ",Object(r.b)("inlineCode",{parentName:"p"},"monetization")," payment method."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"monetization")," payment method identifier will be registered as a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-method-id/#standardized-payment-method-identifiers"}),"standardized payment method"),"\nthrough the Web Payments WG at W3C."),Object(r.b)("h3",{id:"paymentrequestevent---event"},Object(r.b)("inlineCode",{parentName:"h3"},"PaymentRequestEvent")," - event"),Object(r.b)("p",null,"When the user's browser sends a payment via the WM sender, the browser emits a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-handler/#the-paymentrequestevent"}),Object(r.b)("inlineCode",{parentName:"a"},"PaymentRequestEvent")),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent")," contains a single\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-request/#paymentmethoddata-dictionary"}),Object(r.b)("inlineCode",{parentName:"a"},"PaymentMethodData")),"\ndictionary in the ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent.methodData")," property."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentMethodData")," dictionary contains the value ",Object(r.b)("inlineCode",{parentName:"p"},"monetization")," in the\n",Object(r.b)("inlineCode",{parentName:"p"},"supportedMethods")," property. ",Object(r.b)("inlineCode",{parentName:"p"},"data")," is an instance of a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#monetizationrequest---dictionary"}),Object(r.b)("inlineCode",{parentName:"a"},"MonetizationRequest"))," containing the\ndestination (WM receiver) address to send to, the condition, and expiry values\nto use. The payment handler uses this data to send a single Interledger payment\nto the destination address. The amount sent by the payment handler is the amount\nspecified in ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent.total"),". ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent.total")," is an\ninstance of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-request/#paymentcurrencyamount-dictionary"}),Object(r.b)("inlineCode",{parentName:"a"},"PaymentCurrencyAmount")),"\nspecifying both an amount (",Object(r.b)("inlineCode",{parentName:"p"},"value"),") and a ",Object(r.b)("inlineCode",{parentName:"p"},"currency"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-webidl"}),"dictionary PaymentCurrencyAmount {\n  required DOMString currency;\n  required DOMstring value;\n};\n")),Object(r.b)("p",null,"The payment handler then invokes ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent.respondWith()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"paymentRequestEvent.respondWith(\n    // Promise that resolves with a PaymentResponse.\n  )\n")),Object(r.b)("p",null,"And responds with either a pass or a fail:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Pass - passes in a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to an instance of\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#monetizationresponse---dictionary"}),Object(r.b)("inlineCode",{parentName:"a"},"MonetizationResponse"))," containing the\nfulfillment and data from the response."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/15"}),"Issue 15 - Should Web Monetization senders know origin of the monetized website?"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent")," currently includes the origin of the calling website. Should this be removed for monetization to preserve the user's privacy?")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fail - provides a rejected ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," indicating that the payment failed\nbecause the handler was unable to send in the specified currency."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/18"}),"Issue 18 - Indicate Failure Reasons from Web Monetization Sender"))))),Object(r.b)("p",null,"For more information about the JavaScript ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," object, see the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"MDN Web docs"),"."),Object(r.b)("h3",{id:"monetizationrequest---dictionary"},Object(r.b)("inlineCode",{parentName:"h3"},"MonetizationRequest")," - dictionary"),Object(r.b)("p",null,"The data in the ",Object(r.b)("inlineCode",{parentName:"p"},"MonetizationRequest")," emitted to the payment handler contains\nthe destination (WM receiver) address for the payment, the condition, expiry,\nand data to use in the Interledger packet."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-webidl"}),"  dictionary MonetizationRequest {\n    required DOMString destination;\n    required DOMString condition;\n    required DOMString expiry;\n    DOMString data;\n  };\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"destination"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ILP address of the WM receiver for this session.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"condition"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"32 bytes, base64-encoded condition to use for the ILP packet. The WM receiver must be able to fulfill this condition.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"expiry"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Expiration date and time for when the ILP packet expires.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Base64-encoded additional data to send in the ILP packet.")))),Object(r.b)("h3",{id:"monetizationresponse---dictionary"},Object(r.b)("inlineCode",{parentName:"h3"},"MonetizationResponse")," - dictionary"),Object(r.b)("p",null,"The data in the ",Object(r.b)("inlineCode",{parentName:"p"},"MonetizationResponse")," that is sent by the payment handler\ncontains the fulfillment from the successful payment and the data from the\nfulfill packet."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-webidl"}),"  dictionary MonetizationRequest {\n    required DOMString fulfillment;\n    DOMString data;\n  };\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fulfillment"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"32 bytes, base64-encoded fulfillment from the ILP packet (returned by the payee).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Base64-encoded additional data received from the ILP packet.")))),Object(r.b)("h2",{id:"open-authorization-issues"},"Open authorization issues"),Object(r.b)("p",null,"When the payment handler is invoked (handling a new ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent"),") it's\nexpected to send a payment on behalf of the user."),Object(r.b)("p",null,"If the payment handler is not authorized to send payments it can either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Invoke ",Object(r.b)("inlineCode",{parentName:"li"},"PaymentRequestEvent.openWindow()")," to provide a UI to the user to log\nin and authorize the payment"),Object(r.b)("li",{parentName:"ul"},"Reject the request by passing a rejected ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," to\n",Object(r.b)("inlineCode",{parentName:"li"},"PaymentRequestEvent.respondWith()")," and let the browser handle the case")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Invoke")," is quite intrusive on the user experience unless it's throttled by the\nbrowser in some way. ",Object(r.b)("em",{parentName:"p"},"Reject")," is likely to result in a lot of failures that go\nundetected."),Object(r.b)("h2",{id:"supporting-payment-streams"},"Supporting payment streams"),Object(r.b)("p",null,"As detailed in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/explainer"}),"explainer"),", the user's browser receives a\nunique destination address and shared secret for each monetization session (e.g.\npage refresh, navigation). This specification assumes that the browser will\nhandle the generation of a new condition using the shared secret for each\npayment it wants to send."),Object(r.b)("p",null,"Note that the browser will then emit multiple ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequestEvent")," events (one\nfor each payment). This is in contrast to how the event is expected to be\nemitted. The expectation is that a website creates a single ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentRequest"),"\nevent. The single event is emitted as a result of the website calling ",Object(r.b)("inlineCode",{parentName:"p"},"show()"),"\nand the user selecting a payment instrument. In this case (with a single\nevent), the calling website waits for the ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," returned by ",Object(r.b)("inlineCode",{parentName:"p"},"show()"),",\nthen resolves the value passed by the payment handler to ",Object(r.b)("inlineCode",{parentName:"p"},"respondWith()"),"."),Object(r.b)("p",null,"While this proposal requires minimal changes to the Payment Handler API\nspecification it does imply some changes to the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-handler/#handling-a-payment-request"}),"Handling a Payment Request"),"\nand ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-handler/#dfn-methoddata-population-algorithm"}),"MethodData Population"),"\nalgorithms."))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(h,s(s({ref:t},c),{},{components:n})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);