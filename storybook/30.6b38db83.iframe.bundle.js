"use strict";(self.webpackChunkreact_payment=self.webpackChunkreact_payment||[]).push([[30],{"./src/component/CardInputPage/CardCompany/CardCompanyButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CardCompany_CardCompanyButton}});var CardCompany=__webpack_require__("./src/type/CardCompany.ts"),CardCompanyButton_module_button="CardCompanyButton_button__Y2eLg",CardCompanyButton_module_image="CardCompanyButton_image__i9HNO",CardCompanyButton_module_company="CardCompanyButton_company__wGiVP";__webpack_require__("./node_modules/react/index.js");var bc=__webpack_require__.p+"static/media/bc.89713c873be4a243a3b130cba981f97c.svg";var shinhan=__webpack_require__.p+"static/media/shinhan.f6a900289802d7dc2cd3c31dfe1a2e62.svg";var kakao=__webpack_require__.p+"static/media/kakao.68708857191e519d54df8ba23b649eab.svg";var hyundai=__webpack_require__.p+"static/media/hyundai.f65eebd5e1446b2dc28370fc5d6b3e17.svg";var woori=__webpack_require__.p+"static/media/woori.d00716bf6aa5a98925211e3d0ee40174.svg";var lotte=__webpack_require__.p+"static/media/lotte.28d1f6377751ddc6d9c685909423c6de.svg";var hana=__webpack_require__.p+"static/media/hana.a6c2ae1f8e68d334ac04e660debd23f4.svg";var kb=__webpack_require__.p+"static/media/kb.b4e41428608b44656b624a438bd9f3e4.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cardImage={bc:bc,shinhan:shinhan,kakao:kakao,hyundai:hyundai,woori:woori,lotte:lotte,hana:hana,kb:kb},CardCompanyButton=function CardCompanyButton(props){var companyName=props.companyName,clickHandler=props.clickHandler;return(0,jsx_runtime.jsxs)("button",{className:CardCompanyButton_module_button,type:"button",onClick:function onClick(){return clickHandler(companyName)},children:[(0,jsx_runtime.jsx)("img",{className:CardCompanyButton_module_image,src:cardImage[companyName],alt:""}),(0,jsx_runtime.jsx)("p",{className:CardCompanyButton_module_company,children:(0,CardCompany.mN)(companyName)})]})},CardCompany_CardCompanyButton=CardCompanyButton;try{CardCompanyButton.displayName="CardCompanyButton",CardCompanyButton.__docgenInfo={description:"",displayName:"CardCompanyButton",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"enum",value:[{value:'"bc"'},{value:'"shinhan"'},{value:'"kakao"'},{value:'"hyundai"'},{value:'"woori"'},{value:'"lotte"'},{value:'"hana"'},{value:'"kb"'}]}},clickHandler:{defaultValue:null,description:"",name:"clickHandler",required:!0,type:{name:'(value: "bc" | "shinhan" | "kakao" | "hyundai" | "woori" | "lotte" | "hana" | "kb") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/CardInputPage/CardCompany/CardCompanyButton.tsx#CardCompanyButton"]={docgenInfo:CardCompanyButton.__docgenInfo,name:"CardCompanyButton",path:"src/component/CardInputPage/CardCompany/CardCompanyButton.tsx#CardCompanyButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/type/CardCompany.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{dN:function(){return CARD_COMPANIES_ENGLISH},mN:function(){return cardCompanyEnglishToKorean}});var CARD_COMPANIES_ENGLISH=["bc","shinhan","kakao","hyundai","woori","lotte","hana","kb"],CARD_COMPANIES={bc:"BC카드",shinhan:"신한카드",kakao:"카카오뱅크",hyundai:"현대카드",woori:"우리카드",lotte:"롯데카드",hana:"하나카드",kb:"국민카드"},cardCompanyEnglishToKorean=function cardCompanyEnglishToKorean(company){return CARD_COMPANIES[company]}}}]);